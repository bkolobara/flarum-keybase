<?php

namespace Bkolobara\Keybase\Console;

use Flarum\Console\AbstractCommand;
use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;
use Bkolobara\Keybase\Proof;

class ValidateProofsCommand extends AbstractCommand
{
    const KEYBASE_LIVE_API = 'https://keybase.io/_/api/1.0/sig/proof_live.json?';

    protected $app;
    protected $settings;
    private $httpClient;

    public function __construct(Application $app, SettingsRepositoryInterface $settings)
    {
        parent::__construct();
        $this->app = $app;
        $this->settings = $settings;
        $this->httpClient = new \GuzzleHttp\Client();
    }

    protected function configure()
    {
        $this
            ->setName('keybase:validate-proofs')
            ->setDescription('Validate all active Keybase proofs and delete invalid ones');
    }

    protected function fire()
    {
        $this->info('Starting Keybase proof validation...');

        $proofs = Proof::where('active', true)->get();
        $totalProofs = $proofs->count();
        $deletedCount = 0;
        $validCount = 0;

        if ($totalProofs === 0) {
            $this->info('No active proofs to validate.');
            return 0;
        }

        $this->info("Found {$totalProofs} active proof(s) to validate.");

        $url = $this->app->url();
        $prefix = '/^https?:\/\//';
        $domain = preg_replace($prefix, '', $url);

        foreach ($proofs as $proof) {
            try {
                $proofLiveCheckURL = self::KEYBASE_LIVE_API .
                    'domain=' . urlencode($domain) .
                    '&kb_username=' . urlencode($proof->kb_username) .
                    '&username=' . urlencode($proof->user->username) .
                    '&sig_hash=' . urlencode($proof->sig_hash);

                $this->info("Validating proof for user: {$proof->user->username} (KB: {$proof->kb_username})");

                $result = $this->httpClient->request('GET', $proofLiveCheckURL);
                $result = json_decode($result->getBody(), true);

                $isValid = array_key_exists("proof_valid", $result) &&
                    $result['proof_valid'] &&
                    array_key_exists("proof_live", $result) &&
                    $result['proof_live'];

                if (!$isValid) {
                    $this->info("  → Invalid or expired proof. Deleting...");

                    // Remove from auto-group if configured
                    $autoGroup = $this->settings->get('keybase_auto_group');
                    if ($autoGroup) {
                        // Check if user has other active proofs
                        $otherActiveProofs = Proof::where('user_id', $proof->user_id)
                            ->where('active', true)
                            ->where('id', '!=', $proof->id)
                            ->count();

                        if ($otherActiveProofs === 0 && $proof->user->groups->contains($autoGroup)) {
                            $proof->user->groups()->detach($autoGroup);
                            $this->info("  → Removed user from auto-group");
                        }
                    }

                    $proof->delete();
                    $deletedCount++;
                } else {
                    $this->info("  → Valid");
                    $validCount++;
                }
            } catch (\Exception $e) {
                $this->error("  → Error validating proof: " . $e->getMessage());
            }
        }

        $this->info("\nValidation complete!");
        $this->info("Valid proofs: {$validCount}");
        $this->info("Deleted proofs: {$deletedCount}");

        return 0;
    }
}

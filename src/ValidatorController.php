<?php

namespace Bkolobara\Keybase;

use Flarum\Foundation\Application;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Bkolobara\Keybase\Proof;

class ValidatorController implements RequestHandlerInterface
{
    const KEYBASE_VALIDATION_API =
    'https://keybase.io/_/api/1.0/sig/proof_valid.json?';

    protected $app;
    private $httpClient;

    public function __construct(Application $app)
    {
        $this->httpClient = new \GuzzleHttp\Client();
        $this->app = $app;
    }

    /**
     * Makes a call to Keybase's API to check if signature is valid and saves it in the DB.
     */
    public function handle(Request $request): Response
    {
        // Only logged in users are allowed to perform this check.
        $actor = $request->getAttribute('actor');
        if ($actor->isGuest()) {
            return new JsonResponse(array(
                'data' => array(
                    'type' => 'keybaseValidator',
                    'attributes' => array(
                        'proof_valid' => false,
                        'error' => 'You must be logged in to perform this check.'
                    )
                )
            ));
        }

        // You can only link your own account to Keybase.
        $requestParams = $request->getQueryParams();
        $username = array_get($requestParams, 'username');
        if (strtolower($actor->username) != $username) {
            return new JsonResponse(array(
                'data' => array(
                    'type' => 'keybaseValidator',
                    'attributes' => array(
                        'proof_valid' => false,
                        'error' => 'You are logged in as ' . $actor->username .
                            '. Log out to prove another user.'
                    )
                )
            ));
        }

        $kbUsername = array_get($requestParams, 'kb_username');
        $kbUa = array_get($requestParams, 'kb_ua');
        $sigHash = array_get($requestParams, 'sig_hash');

        $url = $this->app->url();
        $prefix = '/^https?:\/\//';
        $domain = preg_replace($prefix, '', $url);

        $proofValidationURL = self::KEYBASE_VALIDATION_API .
            'domain=' . $domain .
            '&kb_username=' . $kbUsername .
            '&username=' . $username .
            '&sig_hash= ' . $sigHash;

        $result = $this->httpClient->request('GET', $proofValidationURL);
        $result = json_decode($result->getBody(), true);

        if (array_key_exists("proof_valid", $result) && $result['proof_valid']) {
            // Check if we already saved this signature hash.
            $proof = Proof::where('user_id', $actor->id)->where('sig_hash', $sigHash)->first();
            if ($proof) {
                $result['proof_id'] = $proof->id;
            } else {
                $new_proof = Proof::create($actor, $kbUsername, $sigHash, $kbUa);
                $new_proof->save();
                $result['proof_id'] = $new_proof->id;
            }
        }

        return new JsonResponse(array(
            'data' => array(
                'type' => 'keybaseValidator',
                'attributes' => $result
            )
        ));
    }
}

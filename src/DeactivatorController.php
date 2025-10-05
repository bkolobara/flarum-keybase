<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Support\Arr;

use Bkolobara\Keybase\Proof;

class DeactivatorController implements RequestHandlerInterface
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Request $request): Response
    {
        $id = Arr::get($request->getQueryParams(), 'id');
        $proof = Proof::find($id);
        $actor = $request->getAttribute('actor');

        if ($proof && $proof->user->id == $actor->id) {
            $autoGroup = $this->settings->get('keybase_auto_group');
            $userId = $proof->user_id;

            // Delete the proof instead of deactivating
            $proof->delete();

            // If this was the last active proof, remove user from group
            if ($autoGroup) {
                $remainingProofs = Proof::where('user_id', $userId)->where('active', true)->count();
                if ($remainingProofs === 0) {
                    $user = User::find($userId);
                    if ($user && $user->groups->contains($autoGroup)) {
                        $user->groups()->detach($autoGroup);
                    }
                }
            }

            return new JsonResponse(true, 200);
        } else {
            return new JsonResponse(false, 403);
        }
    }
}

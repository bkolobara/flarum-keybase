<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\Settings\SettingsRepositoryInterface;
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
            $proof->deactivate();
            $autoGroup = $this->settings->get('keybase_auto_group');
            // If this is the last active proof, remove user from group.
            if ($autoGroup && !$proof->user->proofs->contains('active', true)) {
                $proof->user->groups()->detach($autoGroup);
            }
            return new JsonResponse(true, 200);
        } else {
            return new JsonResponse(false, 403);
        }
    }
}

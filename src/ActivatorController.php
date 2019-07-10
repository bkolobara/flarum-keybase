<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Flarum\Settings\SettingsRepositoryInterface;

use Bkolobara\Keybase\Proof;

class ActivatorController implements RequestHandlerInterface
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Request $request): Response
    {
        $id = array_get($request->getQueryParams(), 'id');
        $proof = Proof::find($id);
        $actor = $request->getAttribute('actor');

        if ($proof && $actor && $proof->user->id == $actor->id) {
            $proof->activate();
            $autoGroup = $this->settings->get('keybase_auto_group');
            // Add user to group if he is already not part of it.
            if ($autoGroup && !$proof->user->proofs->contains($autoGroup)) {
                $proof->user->groups()->attach($autoGroup);
            }
            return new JsonResponse(true, 200);
        } else {
            return new JsonResponse(false, 403);
        }
    }
}

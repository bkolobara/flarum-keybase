<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

use Bkolobara\Keybase\Proof;

class DeactivatorController implements RequestHandlerInterface
{
    public function handle(Request $request): Response
    {
        $id = array_get($request->getQueryParams(), 'id');
        $proof = Proof::find($id);
        $actor = $request->getAttribute('actor');
        if ($proof->user->id == $actor->id) {
            $proof->deactivate();
            return new JsonResponse(true, 200);
        } else {
            return new JsonResponse(false, 101);
        }
    }
}

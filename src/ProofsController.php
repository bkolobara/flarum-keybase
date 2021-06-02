<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Illuminate\Support\Arr;

use Flarum\User\User;

use Bkolobara\Keybase\Proof;

class ProofsController implements RequestHandlerInterface
{
    public function handle(Request $request): Response
    {
        $username = Arr::get($request->getQueryParams(), 'username');
        $user = User::where('username', $username)->first();
        if ($user) {
            $proofs = Proof::where('user_id', $user->id)->where('active', true)->get();
            $signatures = array();
            foreach ($proofs as $proof) {
                array_push($signatures, array(
                    'kb_username' => $proof->kb_username,
                    'sig_hash' => $proof->sig_hash
                ));
            }
            if ($user->avatar_url) {
                return new JsonResponse(array(
                    'signatures' => $signatures,
                    'avatar' => $user->avatar_url
                ), 200);
            } else {
                return new JsonResponse(array(
                    'signatures' => $signatures
                ), 200);
            }
        } else {
            return new JsonResponse(array('signatures' => array()), 404);
        }
    }
}

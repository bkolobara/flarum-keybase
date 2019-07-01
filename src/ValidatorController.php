<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

use Zend\Diactoros\Response\JsonResponse;

use Bkolobara\Keybase\Proof;

class ValidatorController implements RequestHandlerInterface
{
    private static $proofValidationAPI =
        'https://keybase.io/_/api/1.0/sig/proof_valid.json?';
    private static $userDataAPI =
        'https://keybase.io/_/api/1.0/user/lookup.json?';
    
    private $httpClient;

    public function __construct()
    {
        $this->httpClient = new \GuzzleHttp\Client();;
    }

    public function handle(Request $request): Response
    {
        // Check if user is logged in
        $actor = $request->getAttribute('actor');
        if ($actor->isGuest()) {
            return new JsonResponse(array(
                'data' => array(
                    'type' => 'keybaseValidator',
                    'attributes' => array(
                        'proof_valid' => false,
                        'error' => 'You must be logged in to perform this check'
                    )
                )
            ));
        }

        // Check if username belongs to user
        $request_params = $request->getQueryParams();
        $username = array_get($request_params, 'username');
        if ($actor->username != $username) {
            return new JsonResponse(array(
                'data' => array(
                    'type' => 'keybaseValidator',
                    'attributes' => array(
                        'proof_valid' => false,
                        'error' => 'You are logged in as ' . $actor->username .
                        '. Unable to create link for username ' . $username
                    )
                )
            ));
        }

        $kb_username = array_get($request_params, 'kb_username');
        $kb_ua = array_get($request_params, 'kb_ua');
        $sig_hash = array_get($request_params, 'token');

        $proofValidationURL = self::$proofValidationAPI .
                              'domain=galactictalk.org' .
                              '&kb_username=' . $kb_username .
                              '&username=' . $username .
                              '&sig_hash= ' . $sig_hash;
        
        $result = $this->httpClient->request('GET', $proofValidationURL);
        $result = json_decode($result->getBody(), true);

        if ($result['proof_valid']) {
            // Check if we already saved this signature hash
            $proof = Proof::where('user_id', $actor->id)->where('sig_hash', $sig_hash)->first();
            if($proof) {
               $result['proof_id'] = $proof->id;
            } else {
                $new_proof = Proof::create($actor, $kb_username, $sig_hash, $kb_ua);
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
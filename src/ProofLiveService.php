<?php

namespace Bkolobara\Keybase;

// Illuminate\Console is not compatible with latest Flarum release.
// We will need to find another way of scheduling this checks.

// use Illuminate\Support\ServiceProvider;
// use Illuminate\Console\Scheduling\Schedule;
// use Flarum\Foundation\Application;

// use Bkolobara\Keybase\Proof;

// class ProofLiveService extends ServiceProvider
// {
//     const KEYBASE_LIVE_API =
//     'https://keybase.io/_/api/1.0/sig/proof_live.json?';

//     public function register()
//     { }

//     public function boot(Schedule $schedule, Application $app)
//     {
//         $schedule->call(function () use ($app) {
//             $proofs = Proof::where('active', true)->get();
//             foreach ($proofs as $proof) {
//                 $url = $app->url();
//                 $prefix = '/^https?:\/\//';
//                 $domain = preg_replace($prefix, '', $url);

//                 $proofLiveCheckURL = self::KEYBASE_LIVE_API .
//                     'domain=' . $domain .
//                     '&kb_username=' . $proof->kb_username .
//                     '&username=' . $proof->user->username .
//                     '&sig_hash=' . $proof->sig_hash;

//                 $httpClient = new \GuzzleHttp\Client();
//                 $result = $httpClient->request('GET', $proofLiveCheckURL);
//                 $result = json_decode($result->getBody(), true);

//                 if (!(array_key_exists("proof_valid", $result) &&
//                     $result['proof_valid'] &&
//                     array_key_exists("proof_live", $result) &&
//                     $result['proof_live'])) {

//                     $proof->deactivate();
//                 }
//             }
//         })->twiceDaily(4, 16)
//             ->name('keybase_proof_live')
//             ->withoutOverlapping();
//     }
// }

<?php

use Flarum\Extend;
use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\GetModelRelationship;
use Flarum\Api\Event\Serializing;
use Flarum\User\User;
use Flarum\Api\Serializer\UserSerializer;

use Bkolobara\Keybase\ConfigController;
use Bkolobara\Keybase\ValidatorController;
use Bkolobara\Keybase\ActivatorController;
use Bkolobara\Keybase\DeactivatorController;
use Bkolobara\Keybase\ProofsController;
use Bkolobara\Keybase\Proof;
use Bkolobara\Keybase\UploadSvgBlackController;
use Bkolobara\Keybase\DeleteSvgBlackController;
use Bkolobara\Keybase\UploadSvgFullController;
use Bkolobara\Keybase\DeleteSvgFullController;
use Bkolobara\Keybase\ProofLiveService;

return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js')
    ->css(__DIR__ . '/css/forum.css')
    ->route('/new-keybase-profile-proof', 'keybase.proof'),
  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js')
    ->css(__DIR__ . '/css/admin.less'),

  (new Extend\Routes('api'))
    ->get('/keybase-config', 'keybase.config', ConfigController::class)
    ->get('/keybase-validate', 'keybase.validate', ValidatorController::class)
    ->get('/keybase-activate/{id}', 'keybase.activate', ActivatorController::class)
    ->get('/keybase-deactivate/{id}', 'keybase.deactivate', DeactivatorController::class)
    ->get('/keybase-proofs/{username}', 'keybase.proofs', ProofsController::class)
    ->post('/keybase_svg_black', 'keybase.svg.black', UploadSvgBlackController::class)
    ->delete('/keybase_svg_black', 'keybase.svg.black', DeleteSvgBlackController::class)
    ->post('/keybase_svg_full', 'keybase.svg.full', UploadSvgFullController::class)
    ->delete('/keybase_svg_full', 'keybase.svg.full', DeleteSvgFullController::class),

  function (Dispatcher $events, Application $app) {
    $app->register(ProofLiveService::class);

    $events->listen(GetModelRelationship::class, function (GetModelRelationship $event) {
      if ($event->isRelationship(User::class, 'proofs')) {
        return $event->model->hasMany(Proof::class);
      }
    });

    $events->listen(Serializing::class, function (Serializing $event) {
      if ($event->isSerializer(UserSerializer::class)) {
        $event->attributes['proofs'] = $event->model->proofs;
      }
    });
  },
];

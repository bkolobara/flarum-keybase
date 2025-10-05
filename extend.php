<?php

use Flarum\Extend;
use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\GetModelRelationship;
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
use Bkolobara\Keybase\Console\ValidateProofsCommand;
// use Bkolobara\Keybase\ProofLiveService;

return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js')
    ->css(__DIR__ . '/css/forum.less')
    ->route('/new-keybase-profile-proof', 'keybase.proof'),
  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js')
    ->css(__DIR__ . '/css/admin.less'),

  (new Extend\Console())
    ->command(ValidateProofsCommand::class),

  (new Extend\Routes('api'))
    ->get('/keybase-config', 'keybase.config', ConfigController::class)
    ->get('/keybase-validate', 'keybase.validate', ValidatorController::class)
    ->get('/keybase-activate/{id}', 'keybase.activate', ActivatorController::class)
    ->get('/keybase-deactivate/{id}', 'keybase.deactivate', DeactivatorController::class)
    ->get('/keybase-proofs/{username}', 'keybase.proofs', ProofsController::class)
    ->post('/keybase_svg_black', 'keybase.svg.black', UploadSvgBlackController::class)
    ->delete('/keybase_svg_black', 'keybase.svg.black.delete', DeleteSvgBlackController::class)
    ->post('/keybase_svg_full', 'keybase.svg.full', UploadSvgFullController::class)
    ->delete('/keybase_svg_full', 'keybase.svg.full.delete', DeleteSvgFullController::class),

  (new Extend\Model(User::class))
    ->hasMany('proofs', 'Bkolobara\Keybase\Proof', 'user_id'),

  (new Extend\ApiSerializer(UserSerializer::class))
    ->attribute('proofs', function ($serializer, $user, $attributes) {
      return $user->proofs->where('active', true)->values();
    }),
];

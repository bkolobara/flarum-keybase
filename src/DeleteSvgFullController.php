<?php

namespace Bkolobara\Keybase;

use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AssertPermissionTrait;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\Diactoros\Response\EmptyResponse;
use Flarum\Api\Controller\AbstractDeleteController;

class DeleteSvgFullController extends AbstractDeleteController
{
    use AssertPermissionTrait;

    protected $settings;
    protected $app;

    public function __construct(SettingsRepositoryInterface $settings, Application $app)
    {
        $this->settings = $settings;
        $this->app = $app;
    }

    protected function delete(ServerRequestInterface $request)
    {
        $this->assertAdmin($request->getAttribute('actor'));
        $path = $this->settings->get('keybase_svg_full_path');
        $this->settings->set('keybase_svg_full_path', null);
        $uploadDir = new Filesystem(new Local($this->app->publicPath() . '/assets'));
        if ($uploadDir->has($path)) {
            $uploadDir->delete($path);
        }
        return new EmptyResponse(204);
    }
}

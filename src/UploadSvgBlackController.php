<?php

namespace Bkolobara\Keybase;

use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Str;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\MountManager;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Controller\ShowForumController;
use Illuminate\Support\Arr;

class UploadSvgBlackController extends ShowForumController
{
    use AssertPermissionTrait;

    protected $settings;
    protected $app;

    public function __construct(SettingsRepositoryInterface $settings, Application $app)
    {
        $this->settings = $settings;
        $this->app = $app;
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        $this->assertAdmin($request->getAttribute('actor'));
        $file = Arr::get($request->getUploadedFiles(), 'keybase_svg_black');
        $tmpFile = tempnam($this->app->storagePath() . '/tmp', 'keybase-image');
        $file->moveTo($tmpFile);
        $mount = new MountManager([
            'source' => new Filesystem(new Local(pathinfo($tmpFile, PATHINFO_DIRNAME))),
            'target' => new Filesystem(new Local($this->app->publicPath() . '/assets')),
        ]);

        if (($path = $this->settings->get('keybase_svg_black_path')) && $mount->has($file = "target://$path")) {
            $mount->delete($file);
        }

        $uploadName = 'keybase-image-' . Str::lower(Str::random(8)) . '.svg';
        $mount->move('source://' . pathinfo($tmpFile, PATHINFO_BASENAME), "target://$uploadName");
        $this->settings->set('keybase_svg_black_path', $uploadName);

        // Bump config version
        $version = $this->settings->get('keybase_config_version');
        if (!$version) {
            $this->settings->set('keybase_config_version', 1);
        } else {
            $this->settings->set('keybase_config_version', $version + 1);
        }

        return parent::data($request, $document);
    }
}

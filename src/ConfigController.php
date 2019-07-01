<?php

namespace Bkolobara\Keybase;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;

class ConfigController implements RequestHandlerInterface
{
    protected $settings;
    protected $app;

    public function __construct(SettingsRepositoryInterface $settings, Application $app)
    {
        $this->settings = $settings;
        $this->app = $app;
    } 

    public function handle(Request $request): Response
    {
        // Check required configuration settings.
        if (!$this->settings->get('keybase_svg_black_path') ||
            !$this->settings->get('keybase_svg_full_path') ||
            !$this->settings->get('keybase_contact_email') ||
            !$this->settings->get('keybase_contact')) {
                return new JsonResponse(array(
                    "error" => "Contact information or SVG logos not configured.")
                    , 200, [], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }

        $config = array(
            "username" => array(
                "re" => "^[a-zA-Z0-9_]{3,30}$",
                "min" => "3",
                "max" => "30"
            ),

            "check_path" => ["signatures"],
            "avatar_path" => ["avatar"],
            "contact" => ["support@galactictalk.org", "bkolobara@keybase"]
        );

        $url = $this->app->url();

        $config["version"] = intval($this->settings->get('keybase_config_version'));

        $prefix = '/^https?:\/\//';
        $domain = preg_replace($prefix, '', $url);
        $config["domain"] = $domain;

        $config["display_name"] = $this->settings->get('forum_title');
        $config["description"] = $this->settings->get('forum_description');
        $config["brand_color"] = $this->settings->get('theme_primary_color');

        $config["logo"] = array(
            "svg_black" => $url . '/assets/' . $this->settings->get('keybase_svg_black_path'),
            "svg_full" => $url . '/assets/' . $this->settings->get('keybase_svg_full_path')
        );

        $config["prefill_url"] = $url . '/new-keybase-profile-proof?kb_username=%{kb_username}&username=%{username}&token=%{sig_hash}&kb_ua=%{kb_ua}';
        $config["profile_url"] = $url . '/u/%{username}';
        $config["check_url"] = $url . '/api/keybase-proofs/%{username}';

        $config["contact"] = array(
            $this->settings->get('keybase_contact_email'), $this->settings->get('keybase_contact')
        );

        return new JsonResponse($config, 200, [], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
}
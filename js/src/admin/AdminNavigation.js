import app from "flarum/app";
import { extend } from "flarum/extend";
import AdminNav from "flarum/components/AdminNav";
import AdminLinkButton from "flarum/components/AdminLinkButton";
import SettingsPage from "./SettingsPage";

export default function() {
  app.routes.keybaseSettings = {
    path: "/seo/settings",
    component: SettingsPage.component()
  };

  extend(AdminNav.prototype, "items", items => {
    items.add(
      "keybase",
      AdminLinkButton.component({
        href: app.route("keybaseSettings"),
        icon: "fab fa-keybase",
        children: "Keybase",
        description: "Configure your Keybase integration settings."
      })
    );
  });
}

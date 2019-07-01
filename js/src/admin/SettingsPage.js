import Page from "flarum/components/Page";
import Settings from "./components/Settings";
import Header from "./components/Header";

export default class SettingsPage extends Page {
  view() {
    return (
      <div className="Keybase">
        {Header.component()}

        <div className="container">{Settings.component()}</div>
      </div>
    );
  }
}

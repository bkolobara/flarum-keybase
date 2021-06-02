import ExtensionPage from 'flarum/components/ExtensionPage';

import Settings from "./components/Settings";

export default class SettingsPage extends ExtensionPage {
  content() {
    return <div className="">
        <div className="container">
          <Settings />
        </div>
      </div>;
  }
}

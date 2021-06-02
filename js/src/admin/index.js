import app from "flarum/app";
import SettingsPage from './SettingsPage';

app.initializers.add('bkolobara-keybase', () => {
  app.extensionData.for('bkolobara-keybase').registerPage(SettingsPage);
});
import Component from "flarum/Component";
import Stream from "flarum/utils/Stream";
import FieldSet from "flarum/components/FieldSet";
import Button from "flarum/components/Button";
import saveSettings from "flarum/utils/saveSettings";
import Alert from "flarum/components/Alert";
import Select from 'flarum/components/Select';
import Group from "flarum/models/Group";
import UploadImageButton from "flarum/components/UploadImageButton";
import withAttr from "flarum/utils/withAttr";

export default class Settings extends Component {
  oninit(vnode) {
    this.saving = false;

    this.fields = [
      "forum_title",
      "forum_description",
      "keybase_config_version",
      "keybase_contact_email",
      "keybase_contact",
      "keybase_auto_group"
    ];
    this.values = {};

    const settings = app.data.settings;
    this.fields.forEach(key => (this.values[key] = Stream(settings[key])));

    // Todo: Find a better way for image upload
    app.forum.data.attributes.keybase_svg_blackUrl =
      app.forum.attribute("baseUrl") +
      "/assets/" +
      app.data.settings.keybase_svg_black_path;

    app.forum.data.attributes.keybase_svg_fullUrl =
      app.forum.attribute("baseUrl") +
      "/assets/" +
      app.data.settings.keybase_svg_full_path;
  }

  view() {
    let keybase_auto_group = this.values.keybase_auto_group;

    let defaultGroup = null;
    let keybaseAutoGroups = {};
    // If a group is selected add a Remove option to the list
    if (keybase_auto_group()) {
      defaultGroup = keybase_auto_group();
      keybaseAutoGroups[null] = "Remove Auto Tag";
    } else {
      keybaseAutoGroups[null] = "Choose a tag";
      defaultGroup = null;
    }

    app.store
      .all("groups")
      .filter(
        group =>
          [Group.ADMINISTRATOR_ID, Group.GUEST_ID, Group.MEMBER_ID].indexOf(
            group.id()
          ) === -1
      )
      .forEach(group => {
        keybaseAutoGroups[group.id()] = group.namePlural();
      })

    return (
      <div>
        <div>
          <p>
            This page contains some other settings from around the admin area
            that will be served as part of the{" "}
            <a href="https://keybase.io/docs/proof_integration_guide#1-config">
              Keybase configuration file
            </a>
            . It's a good idea to keep an eye on them.
          </p>
        </div>

        <form onsubmit={this.onsubmit.bind(this)} className="BasicsPage">
          {FieldSet.component({
            label: app.translator.trans(
              "core.admin.basics.forum_title_heading"
            ),
          },[
            <input
              className="FormControl"
              value={this.values.forum_title()}
              oninput={withAttr("value", this.values.forum_title)}
            />
          ])}

          {FieldSet.component({
            label: app.translator.trans(
              "core.admin.basics.forum_description_heading"
            ),
          },[
            <div className="helpText">
              {app.translator.trans(
                "core.admin.basics.forum_description_text"
              )}
            </div>,
            <textarea
              className="FormControl"
              value={this.values.forum_description()}
              oninput={withAttr("value", this.values.forum_description)}
            />
          ])}

          {FieldSet.component({
            label: "Autotag",
          },[
            <div className="helpText">
              Here you can choose a group that will be automatically added to
              a users that links their account with Keybase.
            </div>,
            Select.component({
              options: keybaseAutoGroups,
              value: defaultGroup,
              onchange: (val) => {
                keybase_auto_group(val);
                this.hasChanges = true;
              }
            })
          ])}

          {FieldSet.component({
            label: "Contact information",
          },[
            <div className="helpText">
              A contact for Keybase in case of issues.
            </div>,
            <div className="helpText">Email</div>,
            <input
              className="FormControl"
              value={this.values.keybase_contact_email()}
              oninput={withAttr("value", this.values.keybase_contact_email)}
            />,
            <div className="helpText">Keybase (e.g. user@keybase)</div>,
            <input
              className="FormControl"
              value={this.values.keybase_contact()}
              oninput={withAttr("value", this.values.keybase_contact)}
            />
          ])}

          {FieldSet.component({
            label: "Logo",
          },[
            <div className="helpText">
              Your brand logo will appear in various places around the Keybase
              app. Assets will be rehosted by Keybase, so let them know about
              updates.
              <h3>SVG Black</h3>
              <p>
                A full-black monochrome SVG. Should look good at 16px square.
                Expand all texts and strokes to shapes.
              </p>
            </div>,
            UploadImageButton.component({
              name: "keybase_svg_black"
            }),
            <div className="helpText">
              <h3>SVG Full</h3>
              <p>
                A full color SVG. Should look good at 32px square. Expand all
                texts and strokes to shapes.
              </p>
            </div>,
            UploadImageButton.component({
              name: "keybase_svg_full"
            })
          ])}

          {Button.component({
            type: "submit",
            className: "Button Button--primary",
            loading: this.saving,
            disabled: !this.changed()
          }, app.translator.trans("core.admin.settings.submit_button"))}
        </form>
      </div>
    );
  }

  // Settings changed
  changed() {
    return this.fields.some(
      key => this.values[key]() !== app.data.settings[key]
    );
  }

  // Save settings!
  onsubmit(e) {
    e.preventDefault();

    if (this.saving) return;

    this.saving = true;
    app.alerts.dismiss(this.successAlert);

    const settings = {};

    // Bump config version on change
    let version = this.values.keybase_config_version();
    if (version === undefined) {
      this.values.keybase_config_version(1);
    } else {
      this.values.keybase_config_version(parseInt(version) + 1);
    }

    this.fields.forEach(key => (settings[key] = this.values[key]()));

    saveSettings(settings)
      .then(() => {
        app.alerts.show(
          (this.successAlert = new Alert({
            type: "success",
          }, app.translator.trans("core.admin.basics.saved_message")))
        );
      })
      .catch(() => {})
      .then(() => {
        this.saving = false;
        m.redraw();
      });
  }
}

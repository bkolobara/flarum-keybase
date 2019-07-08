import SelectDropdown from "flarum/components/SelectDropdown";
import Button from "flarum/components/Button";
import Group from "flarum/models/Group";
import GroupBadge from "flarum/components/GroupBadge";

function badgeForId(id) {
  const group = app.store.getById("groups", id);
  return group ? GroupBadge.component({ group, label: null }) : "";
}

export default class AutoGroupDropdown extends SelectDropdown {
  static initProps(props) {
    super.initProps(props);

    props.className = "SettingDropdown";
    props.buttonClassName = "Button Button--text";
    props.caretIcon = "fas fa-caret-down";

    props.children = [];

    // If a group is selected add a Remove option to the list
    if (props.setting()) {
      const group = app.store.getById("groups", props.setting());
      props.defaultLabel = group.namePlural();
      props.children.push(
        Button.component({
          children: ["Remove Auto Tag"],
          icon: true,
          onclick: e => props.setting(null)
        })
      );
    } else {
      props.defaultLabel = "Choose a tag";
    }

    props.children = props.children.concat(
      app.store
        .all("groups")
        .filter(
          group =>
            [Group.ADMINISTRATOR_ID, Group.GUEST_ID, Group.MEMBER_ID].indexOf(
              group.id()
            ) === -1
        )
        .map(group =>
          Button.component({
            children: [badgeForId(group.id()), " ", group.namePlural()],
            icon: group.id() == props.setting() ? "fas fa-check" : true,
            onclick: e => props.setting(group.id())
          })
        )
    );
  }
}

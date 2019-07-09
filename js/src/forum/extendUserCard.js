import { extend } from "flarum/extend";
import app from "flarum/app";
import UserCard from "flarum/components/UserCard";
import SelectDropdown from "flarum/components/SelectDropdown";
import Button from "flarum/components/Button";

class KeybaseBadgeDropdown extends SelectDropdown {
  static initProps(props) {
    super.initProps(props);

    props.className = "keybase-badge";
    props.buttonClassName = "Button Button--text";
    props.caretIcon = "fas fa-caret-down";
    props.defaultLabel = `${props.kbUsername} on keybase`;

    props.children = [
      Button.component({
        children: ["Show proof on Keybase"],
        icon: "far fa-eye",
        onclick: e => window.open(props.proofUrl, "_blank")
      })
    ];
    if (props.canRevoke) {
      props.children.push(
        Button.component({
          children: ["Revoke proof"],
          icon: "fas fa-trash-alt",
          onclick: e => deactivate(props.id)
        })
      );
    }
  }
}

async function deactivate(id) {
  let success = await m.request({
    method: "GET",
    url: `/api/keybase-deactivate/${id}`
  });
  if (success) {
    // Delete the model instead
    window.location.reload();
  }
}

export default function extendUserCard() {
  extend(UserCard.prototype, "infoItems", function(items) {
    // TODO: Write a model for the access
    const proofs = this.props.user.data.attributes.proofs;
    const canRevoke =
      app.session.user && app.session.user.id() == this.props.user.id();
    for (let proof of proofs) {
      const proofUrl = `https://keybase.io/${proof.kb_username}/sigs/${
        proof.sig_hash
      }`;

      if (!proof.active) {
        continue;
      }

      items.add(
        `keybase-${proof.id}`,
        <KeybaseBadgeDropdown
          id={proof.id}
          kbUsername={proof.kb_username}
          canRevoke={canRevoke}
          proofUrl={proofUrl}
        />
      );
    }
  });
}

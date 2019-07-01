import { extend } from "flarum/extend";
import app from "flarum/app";
import UserCard from "flarum/components/UserCard";
import icon from "flarum/helpers/icon";

async function deactivate(id) {
  let url = `/api/keybase-deactivate/${id}`;
  let success = await (await fetch(url)).json();
  if (success) {
    // Delete the model instead
    window.location.reload();
  }
}

export default function extendUserCard() {
  extend(UserCard.prototype, "infoItems", function(items) {
    // TODO: Write a model for the access
    const proofs = this.props.user.data.attributes.proofs;
    // TODO: Change language from deactivate to delink?
    const canDeactivate =
      app.session.user && app.session.user.id() == this.props.user.id();
    for (let proof of proofs) {
      const profileUrl = `https://keybase.io/${proof.kb_username}/sigs/${
        proof.sig_hash
      }`;

      if (!proof.active) {
        continue;
      }

      // TODO: Add only one element and sort them nicely inside of it.
      items.add(
        `keybase-${proof.id}`,
        <div className="keybase-badge-container">
          <a href={profileUrl}>
            <div className="keybase-badge">@{proof.kb_username} on keybase</div>
          </a>
          {canDeactivate ? (
            <a onclick={e => deactivate(proof.id)} className="keybase-badge">
              {icon("fas fa-trash-alt")}
            </a>
          ) : (
            ""
          )}
        </div>
      );
    }
  });
}

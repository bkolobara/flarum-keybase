import { extend } from "flarum/extend";
import app from "flarum/app";
import UserCard from "flarum/components/UserCard";
import Component from 'flarum/Component';

class KeybaseBadge extends Component {
  view() {
    return <li>
      <a target="_blank" href={this.attrs.proofUrl}>{this.attrs.kbUsername}</a>
      { this.attrs.canRevoke ?
        <a class="deactivate" onclick={ () => deactivate(this.attrs.id)}><i class="icon far fa-times-circle"></i></a>
        : null
      }
    </li>;
  }
}

async function deactivate(id) {
  let success = await m.request({
    method: "GET",
    url: `/api/keybase-deactivate/${id}`,
  });
  if (success) {
    // Delete the model instead
    window.location.reload();
  }
}

export default function extendUserCard() {
  extend(UserCard.prototype, "infoItems", function (items) {
    // TODO: Write a model for the access
    const proofs = this.attrs.user.data.attributes.proofs;
    const canRevoke = app.session.user && app.session.user.id() == this.attrs.user.id();

    // Only show Keybase badge if there are active proofs
    const activeProofs = proofs.filter(proof => proof.active);
    if (activeProofs.length === 0) {
      return;
    }

    items.add(
      "keybase",
      <div class="keybase-row ">
          <span class="Badge" title="" style="background-color: #37bd9a; margin-right: 3px;">
            <i class="icon fab fa-keybase Badge-icon"></i>
          </span>
          <ul>
            {activeProofs.map((proof) => {
              const proofUrl = `https://keybase.io/${proof.kb_username}/sigs/${proof.sig_hash}`;

              return (
                <KeybaseBadge
                  id={proof.id}
                  kbUsername={proof.kb_username}
                  canRevoke={canRevoke}
                  proofUrl={proofUrl}
                />
              );
            })}
          </ul>
      </div>
    );
  });
}

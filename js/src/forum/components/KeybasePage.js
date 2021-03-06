import app from "flarum/app";
import Page from "flarum/components/Page";
import LogInModal from "flarum/components/LogInModal";
import keybaseLogo from "../../../img/keybase_logo.svg";

export default class LoginPage extends Page {
  async oninit(vnode) {
    super.oninit(vnode);

    this.loggedIn = true;
    if (!app.session.user) {
      this.loggedIn = false;
      app.modal.show(LogInModal);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      this.kbUsername = urlParams.get("kbUsername");
      this.username = urlParams.get("username");
      this.kbUa = urlParams.get("kbUa");
      this.sigHash = urlParams.get("sigHash");

      const keybaseValidator = await app.store.find("keybase-validate", {
        kb_username: this.kbUsername,
        username: this.username,
        kb_ua: this.kbUa,
        sig_hash: this.sigHash
      });
      this.proofValid = keybaseValidator.proofValid();
      if (this.proofValid) {
        this.proofId = keybaseValidator.proofId();
      } else {
        this.error = keybaseValidator.error();
      }
      m.redraw();
    }
  }

  async authorise(e) {
    const result = await m.request({
      method: "GET",
      url: `/api/keybase-activate/${this.proofId}`
    });
    if (result) {
      window.location.replace(
        `https://keybase.io/_/proof_creation_success?domain=galactictalk.org` +
          `&kb_username=${this.kbUsername}&username=${this.username}` +
          `&sig_hash=${this.sigHash}&kb_ua=${this.kbUa}`
      );
    }
  }

  view() {
    if (!this.loggedIn) {
      return (
        <div class="keybase">
          <div class="authorize-window">
            <h3>
              You must be logged in to prove your identity.
              <a onclick={e => app.modal.show(LogInModal)}>
                {" "}
                Click here to log in.
              </a>
            </h3>
          </div>
        </div>
      );
    }
    if (this.error) {
      return (
        <div class="keybase">
          <div class="authorize-window">
            <h3>{this.error}</h3>
          </div>
        </div>
      );
    }
    if (this.proofValid === undefined) {
      return (
        <div class="keybase">
          <div class="authorize-window">
            <h3>Checking signature.</h3>
          </div>
        </div>
      );
    }
    if (!this.proofValid) {
      return (
        <div class="keybase">
          <div class="authorize-window">
            <h3>Invalid signature check.</h3>
          </div>
        </div>
      );
    }

    const localAvatarUrl = app.session.user.avatarUrl();
    return (
      <div class="keybase">
        <div class="authorize-window">
          <h3>Authorize this cryptographic connection?</h3>
          <div class="accounts">
            <div class="forum">
              {!localAvatarUrl ? (
                <span class="Avatar no-avatar" style="background: #aaa;">
                  {" "}
                </span>
              ) : (
                <img src={localAvatarUrl} />
              )}
              <p>
                I am <b>{this.username}</b> on Galactictalk.
              </p>
            </div>
            <div>
              <img class="keybase" src={keybaseLogo} />
              <p>
                I am <b>{this.kbUsername}</b> on Keybase.
              </p>
            </div>
          </div>
          <button class="yes" onclick={this.authorise.bind(this)}>
            Yes, authorize
          </button>
          <button onclick={e => m.route("/")}>No</button>
        </div>
      </div>
    );
  }
}

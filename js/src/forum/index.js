import app from "flarum/app";
import KeybasePage from "./components/KeybasePage";
import Model from "flarum/Model";

import extendUserCard from "./extendUserCard";

export default class KeybaseValidator extends Model {
  proofValid = Model.attribute("proof_valid");
  proofId = Model.attribute("proof_id");
  status = Model.attribute("status");
  error = Model.attribute("error");
}

app.initializers.add("keybase-link-page", () => {
  app.store.models.keybaseValidator = KeybaseValidator;

  app.routes.keybaseProfileProof = {
    path: "/new-keybase-profile-proof",
    component: KeybasePage
  };

  extendUserCard();
});

import app from "flarum/app";
import AdminNavigation from "./AdminNavigation";

app.initializers.add("keybase-admin", () => {
  AdminNavigation();
});

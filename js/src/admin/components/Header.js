import Component from "flarum/Component";
import Button from "flarum/components/Button";
import Dropdown from "flarum/components/Dropdown";

export default class Header extends Component {
  view() {
    return (
      <div className="header container">
        <div className="pull-right">
          {Dropdown.component({
            label: "Tools",
            icon: "fas fa-cog",
            buttonClassName: "Button",
            menuClassName: "Dropdown-menu--right",
            children: [
              Button.component({
                className: "Button",
                onclick: () => m.route(app.route("keybaseSettings")),
                icon: "fas fa-cogs",
                children: "Settings"
              })
            ]
          })}
        </div>

        <h2>Keybase</h2>

        <div className="clear" />
      </div>
    );
  }
}

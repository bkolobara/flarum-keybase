module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/AdminNavigation.js":
/*!**************************************!*\
  !*** ./src/admin/AdminNavigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsPage */ "./src/admin/SettingsPage.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.keybaseSettings = {
    path: "/seo/settings",
    component: _SettingsPage__WEBPACK_IMPORTED_MODULE_4__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "items", function (items) {
    items.add("keybase", flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route("keybaseSettings"),
      icon: "fab fa-keybase",
      children: "Keybase",
      description: "Configure your Keybase integration settings."
    }));
  });
});

/***/ }),

/***/ "./src/admin/SettingsPage.js":
/*!***********************************!*\
  !*** ./src/admin/SettingsPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Settings */ "./src/admin/components/Settings.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/admin/components/Header.js");





var SettingsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsPage, _Page);

  function SettingsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = SettingsPage.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "Keybase"
    }, _components_Header__WEBPACK_IMPORTED_MODULE_3__["default"].component(), m("div", {
      className: "container"
    }, _components_Settings__WEBPACK_IMPORTED_MODULE_2__["default"].component()));
  };

  return SettingsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/Header.js":
/*!****************************************!*\
  !*** ./src/admin/components/Header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);





var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Header, _Component);

  function Header() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Header.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "header container"
    }, m("div", {
      className: "pull-right"
    }, flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      label: "Tools",
      icon: "fas fa-cog",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right",
      children: [flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        className: "Button",
        onclick: function onclick() {
          return m.route(app.route("keybaseSettings"));
        },
        icon: "fas fa-cogs",
        children: "Settings"
      })]
    })), m("h2", null, "Keybase"), m("div", {
      className: "clear"
    }));
  };

  return Header;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/Settings.js":
/*!******************************************!*\
  !*** ./src/admin/components/Settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/UploadImageButton */ "flarum/components/UploadImageButton");
/* harmony import */ var flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_6__);








var Settings =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _Component);

  function Settings() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Settings.prototype;

  _proto.init = function init() {
    var _this = this;

    this.saving = false;
    this.fields = ["forum_title", "forum_description", "keybase_config_version", "keybase_contact_email", "keybase_contact"];
    this.values = {};
    var settings = app.data.settings;
    this.fields.forEach(function (key) {
      return _this.values[key] = m.prop(settings[key]);
    }); // Todo: Find a better way for image upload

    app.forum.data.attributes.keybase_svg_blackUrl = app.forum.attribute("baseUrl") + "/assets/" + app.data.settings.keybase_svg_black_path;
    app.forum.data.attributes.keybase_svg_fullUrl = app.forum.attribute("baseUrl") + "/assets/" + app.data.settings.keybase_svg_full_path;
  };

  _proto.view = function view() {
    return m("div", null, m("div", null, m("p", null, "This page contains some other settings from around the admin area that will be served as part of the", " ", m("a", {
      href: "https://keybase.io/docs/proof_integration_guide#1-config"
    }, "Keybase configuration file"), ". It's a good idea to keep an eye on them.")), m("form", {
      onsubmit: this.onsubmit.bind(this),
      className: "BasicsPage"
    }, flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      label: app.translator.trans("core.admin.basics.forum_title_heading"),
      children: [m("input", {
        className: "FormControl",
        value: this.values.forum_title(),
        oninput: m.withAttr("value", this.values.forum_title)
      })]
    }), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      label: app.translator.trans("core.admin.basics.forum_description_heading"),
      children: [m("div", {
        className: "helpText"
      }, app.translator.trans("core.admin.basics.forum_description_text")), m("textarea", {
        className: "FormControl",
        value: this.values.forum_description(),
        oninput: m.withAttr("value", this.values.forum_description)
      })]
    }), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      label: "Contact information",
      children: [m("div", {
        className: "helpText"
      }, "A contact for Keybase in case of issues."), m("div", {
        className: "helpText"
      }, "Email"), m("input", {
        className: "FormControl",
        value: this.values.keybase_contact_email(),
        oninput: m.withAttr("value", this.values.keybase_contact_email)
      }), m("div", {
        className: "helpText"
      }, "Keybase (e.g. user@keybase)"), m("input", {
        className: "FormControl",
        value: this.values.keybase_contact(),
        oninput: m.withAttr("value", this.values.keybase_contact)
      })]
    }), flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      label: "Logo",
      children: [m("div", {
        className: "helpText"
      }, "Your brand logo will appear in various places around the Keybase app. Assets will be rehosted by Keybase, so let them know about updates.", m("h3", null, "SVG Black"), m("p", null, "A full-black monochrome SVG. Should look good at 16px square. Expand all texts and strokes to shapes.")), flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        name: "keybase_svg_black"
      }), m("div", {
        className: "helpText"
      }, m("h3", null, "SVG Full"), m("p", null, "A full color SVG. Should look good at 32px square. Expand all texts and strokes to shapes.")), flarum_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        name: "keybase_svg_full"
      })]
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: "submit",
      className: "Button Button--primary",
      children: app.translator.trans("core.admin.basics.submit_button"),
      loading: this.saving,
      disabled: !this.changed()
    })));
  } // Settings changed
  ;

  _proto.changed = function changed() {
    var _this2 = this;

    return this.fields.some(function (key) {
      return _this2.values[key]() !== app.data.settings[key];
    });
  } // Save settings!
  ;

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    if (this.saving) return;
    this.saving = true;
    app.alerts.dismiss(this.successAlert);
    var settings = {}; // Bump config version on change

    var version = this.values.keybase_config_version();

    if (version === undefined) {
      this.values.keybase_config_version(1);
    } else {
      this.values.keybase_config_version(parseInt(version) + 1);
    }

    this.fields.forEach(function (key) {
      return settings[key] = _this3.values[key]();
    });
    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()(settings).then(function () {
      app.alerts.show(_this3.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_5___default.a({
        type: "success",
        children: app.translator.trans("core.admin.basics.saved_message")
      }));
    })["catch"](function () {}).then(function () {
      _this3.saving = false;
      console.log(_this3.saving);
      m.redraw();
    });
  };

  return Settings;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdminNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNavigation */ "./src/admin/AdminNavigation.js");


flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add("keybase-admin", function () {
  Object(_AdminNavigation__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/UploadImageButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['components/UploadImageButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UploadImageButton'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},,,function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["models/Group"]},,function(t,e){t.exports=flarum.core.compat["components/UploadImageButton"]},,,function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/GroupBadge"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},,,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(7),r=n(15),i=n.n(r),c=n(16),u=n.n(c),l=n(1),p=n(6),f=n.n(p),d=n(9),h=n.n(d),b=n(5),v=n.n(b),g=n(2),y=n.n(g),_=n(17),k=n.n(_),x=n(18),N=n.n(x),w=n(12),S=n.n(w),A=n(8),B=n.n(A),O=n(10),T=n.n(O),j=n(19),C=n.n(j);function I(t){var e=app.store.getById("groups",t);return e?C.a.component({group:e,label:null}):""}var P=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.initProps=function(e){if(t.initProps.call(this,e),e.className="SettingDropdown",e.buttonClassName="Button Button--text",e.caretIcon="fas fa-caret-down",e.children=[],e.setting()){var n=app.store.getById("groups",e.setting());e.defaultLabel=n.namePlural(),e.children.push(y.a.component({children:["Remove Auto Tag"],icon:!0,onclick:function(t){return e.setting(null)}}))}else e.defaultLabel="Choose a tag";e.children=e.children.concat(app.store.all("groups").filter((function(t){return-1===[T.a.ADMINISTRATOR_ID,T.a.GUEST_ID,T.a.MEMBER_ID].indexOf(t.id())})).map((function(t){return y.a.component({children:[I(t.id())," ",t.namePlural()],icon:t.id()!=e.setting()||"fas fa-check",onclick:function(n){return e.setting(t.id())}})})))},e}(B.a),K=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var n=e.prototype;return n.init=function(){var t=this;this.saving=!1,this.fields=["forum_title","forum_description","keybase_config_version","keybase_contact_email","keybase_contact","keybase_auto_group"],this.values={};var e=app.data.settings;this.fields.forEach((function(n){return t.values[n]=m.prop(e[n])})),app.forum.data.attributes.keybase_svg_blackUrl=app.forum.attribute("baseUrl")+"/assets/"+app.data.settings.keybase_svg_black_path,app.forum.data.attributes.keybase_svg_fullUrl=app.forum.attribute("baseUrl")+"/assets/"+app.data.settings.keybase_svg_full_path},n.view=function(){return m("div",null,m("div",null,m("p",null,"This page contains some other settings from around the admin area that will be served as part of the"," ",m("a",{href:"https://keybase.io/docs/proof_integration_guide#1-config"},"Keybase configuration file"),". It's a good idea to keep an eye on them.")),m("form",{onsubmit:this.onsubmit.bind(this),className:"BasicsPage"},v.a.component({label:app.translator.trans("core.admin.basics.forum_title_heading"),children:[m("input",{className:"FormControl",value:this.values.forum_title(),oninput:m.withAttr("value",this.values.forum_title)})]}),v.a.component({label:app.translator.trans("core.admin.basics.forum_description_heading"),children:[m("div",{className:"helpText"},app.translator.trans("core.admin.basics.forum_description_text")),m("textarea",{className:"FormControl",value:this.values.forum_description(),oninput:m.withAttr("value",this.values.forum_description)})]}),v.a.component({label:"Autotag",children:[m("div",{className:"helpText"},"Here you can choose a group that will be automatically added to a users that links their account with Keybase."),m(P,{setting:this.values.keybase_auto_group})]}),v.a.component({label:"Contact information",children:[m("div",{className:"helpText"},"A contact for Keybase in case of issues."),m("div",{className:"helpText"},"Email"),m("input",{className:"FormControl",value:this.values.keybase_contact_email(),oninput:m.withAttr("value",this.values.keybase_contact_email)}),m("div",{className:"helpText"},"Keybase (e.g. user@keybase)"),m("input",{className:"FormControl",value:this.values.keybase_contact(),oninput:m.withAttr("value",this.values.keybase_contact)})]}),v.a.component({label:"Logo",children:[m("div",{className:"helpText"},"Your brand logo will appear in various places around the Keybase app. Assets will be rehosted by Keybase, so let them know about updates.",m("h3",null,"SVG Black"),m("p",null,"A full-black monochrome SVG. Should look good at 16px square. Expand all texts and strokes to shapes.")),S.a.component({name:"keybase_svg_black"}),m("div",{className:"helpText"},m("h3",null,"SVG Full"),m("p",null,"A full color SVG. Should look good at 32px square. Expand all texts and strokes to shapes.")),S.a.component({name:"keybase_svg_full"})]}),y.a.component({type:"submit",className:"Button Button--primary",children:app.translator.trans("core.admin.basics.submit_button"),loading:this.saving,disabled:!this.changed()})))},n.changed=function(){var t=this;return this.fields.some((function(e){return t.values[e]()!==app.data.settings[e]}))},n.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.saving){this.saving=!0,app.alerts.dismiss(this.successAlert);var n={},a=this.values.keybase_config_version();void 0===a?this.values.keybase_config_version(1):this.values.keybase_config_version(parseInt(a)+1),this.fields.forEach((function(t){return n[t]=e.values[t]()})),k()(n).then((function(){app.alerts.show(e.successAlert=new N.a({type:"success",children:app.translator.trans("core.admin.basics.saved_message")}))})).catch((function(){})).then((function(){e.saving=!1,console.log(e.saving),m.redraw()}))}},e}(h.a),D=n(20),E=n.n(D),G=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){return m("div",{className:"header container"},m("div",{className:"pull-right"},E.a.component({label:"Tools",icon:"fas fa-cog",buttonClassName:"Button",menuClassName:"Dropdown-menu--right",children:[y.a.component({className:"Button",onclick:function(){return m.route(app.route("keybaseSettings"))},icon:"fas fa-cogs",children:"Settings"})]})),m("h2",null,"Keybase"),m("div",{className:"clear"}))},e}(h.a),M=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){return m("div",{className:"Keybase"},G.component(),m("div",{className:"container"},K.component()))},e}(f.a);o.a.initializers.add("keybase-admin",(function(){o.a.routes.keybaseSettings={path:"/keybase/settings",component:M.component()},Object(s.extend)(i.a.prototype,"items",(function(t){t.add("keybase",u.a.component({href:o.a.route("keybaseSettings"),icon:"fab fa-keybase",children:"Keybase",description:"Configure your Keybase integration settings."}))}))}))}]);
//# sourceMappingURL=admin.js.map
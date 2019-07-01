module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return a})},,,function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat.Component},function(e,t){e.exports=flarum.core.compat["components/Button"]},,function(e,t){e.exports=flarum.core.compat["components/UploadImageButton"]},,,,function(e,t){e.exports=flarum.core.compat["components/AdminNav"]},function(e,t){e.exports=flarum.core.compat["components/AdminLinkButton"]},function(e,t){e.exports=flarum.core.compat["utils/saveSettings"]},function(e,t){e.exports=flarum.core.compat["components/Alert"]},function(e,t){e.exports=flarum.core.compat["components/Dropdown"]},,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(5),r=n(14),i=n.n(r),c=n(15),u=n.n(c),l=n(1),p=n(4),f=n.n(p),d=n(7),h=n.n(d),b=n(6),v=n.n(b),g=n(8),y=n.n(g),_=n(16),k=n.n(_),x=n(17),N=n.n(x),w=n(10),S=n.n(w),A=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var n=t.prototype;return n.init=function(){var e=this;this.saving=!1,this.fields=["forum_title","forum_description","keybase_config_version","keybase_contact_email","keybase_contact"],this.values={};var t=app.data.settings;this.fields.forEach(function(n){return e.values[n]=m.prop(t[n])}),app.forum.data.attributes.keybase_svg_blackUrl=app.forum.attribute("baseUrl")+"/assets/"+app.data.settings.keybase_svg_black_path,app.forum.data.attributes.keybase_svg_fullUrl=app.forum.attribute("baseUrl")+"/assets/"+app.data.settings.keybase_svg_full_path},n.view=function(){return m("div",null,m("div",null,m("p",null,"This page contains some other settings from around the admin area that will be served as part of the"," ",m("a",{href:"https://keybase.io/docs/proof_integration_guide#1-config"},"Keybase configuration file"),". It's a good idea to keep an eye on them.")),m("form",{onsubmit:this.onsubmit.bind(this),className:"BasicsPage"},v.a.component({label:app.translator.trans("core.admin.basics.forum_title_heading"),children:[m("input",{className:"FormControl",value:this.values.forum_title(),oninput:m.withAttr("value",this.values.forum_title)})]}),v.a.component({label:app.translator.trans("core.admin.basics.forum_description_heading"),children:[m("div",{className:"helpText"},app.translator.trans("core.admin.basics.forum_description_text")),m("textarea",{className:"FormControl",value:this.values.forum_description(),oninput:m.withAttr("value",this.values.forum_description)})]}),v.a.component({label:"Contact information",children:[m("div",{className:"helpText"},"A contact for Keybase in case of issues."),m("div",{className:"helpText"},"Email"),m("input",{className:"FormControl",value:this.values.keybase_contact_email(),oninput:m.withAttr("value",this.values.keybase_contact_email)}),m("div",{className:"helpText"},"Keybase (e.g. user@keybase)"),m("input",{className:"FormControl",value:this.values.keybase_contact(),oninput:m.withAttr("value",this.values.keybase_contact)})]}),v.a.component({label:"Logo",children:[m("div",{className:"helpText"},"Your brand logo will appear in various places around the Keybase app. Assets will be rehosted by Keybase, so let them know about updates.",m("h3",null,"SVG Black"),m("p",null,"A full-black monochrome SVG. Should look good at 16px square. Expand all texts and strokes to shapes.")),S.a.component({name:"keybase_svg_black"}),m("div",{className:"helpText"},m("h3",null,"SVG Full"),m("p",null,"A full color SVG. Should look good at 32px square. Expand all texts and strokes to shapes.")),S.a.component({name:"keybase_svg_full"})]}),y.a.component({type:"submit",className:"Button Button--primary",children:app.translator.trans("core.admin.basics.submit_button"),loading:this.saving,disabled:!this.changed()})))},n.changed=function(){var e=this;return this.fields.some(function(t){return e.values[t]()!==app.data.settings[t]})},n.onsubmit=function(e){var t=this;if(e.preventDefault(),!this.saving){this.saving=!0,app.alerts.dismiss(this.successAlert);var n={},a=this.values.keybase_config_version();void 0===a?this.values.keybase_config_version(1):this.values.keybase_config_version(parseInt(a)+1),this.fields.forEach(function(e){return n[e]=t.values[e]()}),k()(n).then(function(){app.alerts.show(t.successAlert=new N.a({type:"success",children:app.translator.trans("core.admin.basics.saved_message")}))}).catch(function(){}).then(function(){t.saving=!1,console.log(t.saving),m.redraw()})}},t}(h.a),j=n(18),O=n.n(j),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.view=function(){return m("div",{className:"header container"},m("div",{className:"pull-right"},O.a.component({label:"Tools",icon:"fas fa-cog",buttonClassName:"Button",menuClassName:"Dropdown-menu--right",children:[y.a.component({className:"Button",onclick:function(){return m.route(app.route("keybaseSettings"))},icon:"fas fa-cogs",children:"Settings"})]})),m("h2",null,"Keybase"),m("div",{className:"clear"}))},t}(h.a),B=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.view=function(){return m("div",{className:"Keybase"},T.component(),m("div",{className:"container"},A.component()))},t}(f.a);o.a.initializers.add("keybase-admin",function(){o.a.routes.keybaseSettings={path:"/seo/settings",component:B.component()},Object(s.extend)(i.a.prototype,"items",function(e){e.add("keybase",u.a.component({href:o.a.route("keybaseSettings"),icon:"fab fa-keybase",children:"Keybase",description:"Configure your Keybase integration settings."}))})})}]);
//# sourceMappingURL=admin.js.map
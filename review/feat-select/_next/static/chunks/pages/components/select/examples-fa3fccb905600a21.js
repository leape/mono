(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2175],{83876:function(e,n,l){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!l.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],a=n[0];return l.e(n[1]).then(function(){return l(a)})}a.keys=function(){return Object.keys(o)},a.id=83876,e.exports=a},72779:function(e,n){var l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var c=typeof l;if("string"===c||"number"===c)e.push(l);else if(Array.isArray(l)){if(l.length){var i=a.apply(null,l);i&&e.push(i)}}else if("object"===c){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var t in l)o.call(l,t)&&l[t]&&e.push(t)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(l=(function(){return a}).apply(n,[]))&&(e.exports=l)}()},82042:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select/examples",function(){return l(32154)}])},70969:function(e,n,l){"use strict";l.d(n,{Z:function(){return g}});var o=l(52322),a=l(77900),c=l(2784);let i=()=>{let e=(0,c.useRef)(null),[n,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let o=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";o&&l(!0)},[]),[n,e]},t=e=>{let{children:n,element:l="div",...o}=e,[a,t]=i();return a?(0,c.createElement)(l,{...o,children:n}):(0,c.createElement)(l,{...o,ref:t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],s=e=>({...e,link:"".concat("/mono/review/feat-select").concat(e.link)});l(60586);var d=l(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>s(e)):[],h=e=>{let{children:n}=e,[l,i]=(0,c.useState)(!1),[s,h]=(0,c.useState)(!1),[g,v]=(0,c.useState)(!1),j=(0,d.useRouter)();return(0,c.useEffect)(()=>{j.query&&(i("true"===j.query.fullscreen),h("true"===j.query.noh1),v("true"===j.query.properties))},[j]),(0,o.jsxs)(t,{children:[j.isReady&&l&&(0,o.jsx)("div",{className:"".concat(s?"noh1":""," ").concat(g?"is-properties":""),children:n}),j.isReady&&!l&&(0,o.jsxs)(a.rG,{children:[(0,o.jsxs)(a.ff,{slot:"header",children:[(0,o.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(a.Pm,{data:JSON.stringify(u(r,j.pathname))}),(0,o.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:n}),(0,o.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var g=h},648:function(e,n,l){"use strict";var o=l(52322),a=l(2784),c=l(72779),i=l.n(c);let t=(0,a.forwardRef)(function(e,n){let[l,c]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,o.jsxs)("span",{"aria-hidden":"true",ref:n,className:function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];return i()(n)}("db-icon",e.className,{"is-icon-text-replace":e.withText}),"data-icon":e.icon,children:[l?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});n.Z=t},16510:function(e,n,l){"use strict";l.d(n,{P:function(){return o.Z}});var o=l(648)},42492:function(e,n,l){"use strict";var o=l(52322),a=l(2784),c=l(72779),i=l.n(c),t=l(8490),r=l(7070),s=l(16510),d=l(87233);let u={label:t.SU},h=(0,a.forwardRef)(function(e,n){var l,c,h;let[g,v]=(0,a.useState)(()=>t.IY),[j,b]=(0,a.useState)(()=>void 0),[x,m]=(0,a.useState)(()=>void 0),[f,p]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{v(e.id?e.id:"select-"+(0,r.V)()),e.value&&m(e.value),e.stylePath&&p(e.stylePath)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];return i()(n)}("db-select",e.className),"data-variant":e.variant,"data-icon":e.icon,children:[f?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:f})}):null,(0,o.jsxs)("select",{required:!0,"data-value":x,ref:n,"aria-invalid":e.invalid,"aria-required":e.required,disabled:e.disabled,id:g,name:e.name,value:x,onClick:n=>{e.onClick&&e.onClick(n)},onChange:n=>{var l,o,a,c,i,t;e.onChange&&e.onChange(n),e.change&&e.change(n),m(n.target.value),(null===(l=n.target)||void 0===l?void 0:null===(o=l.validity)||void 0===o?void 0:o.valid)!=j&&(b(null===(a=n.target)||void 0===a?void 0:null===(c=a.validity)||void 0===c?void 0:c.valid),e.validityChange&&e.validityChange(!!(null===(i=n.target)||void 0===i?void 0:null===(t=i.validity)||void 0===t?void 0:t.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},children:[(0,o.jsx)("option",{hidden:!0}),e.options?(0,o.jsx)(o.Fragment,{children:null===(l=e.options)||void 0===l?void 0:l.map(e=>{var n;return(0,o.jsxs)(o.Fragment,{children:[e.options?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("optgroup",{label:e.label||e.value,children:null===(n=e.options)||void 0===n?void 0:n.map(e=>(0,o.jsx)("option",{value:e.value,disabled:e.disabled,children:e.label||e.value},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("option",{value:e.value,disabled:e.disabled,children:e.label||e.value},"option-"+e.value)})]})})}):null,e.children]}),(0,o.jsx)("label",{htmlFor:g,children:null!==(c=e.label)&&void 0!==c?c:u.label}),e.variant?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.P,{className:"icon-state",icon:(h=e.variant)?d.I[h]:""})}):null]}),e.description?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("p",{className:"description",children:e.description})}):null]})});n.Z=h},8490:function(e,n,l){"use strict";var o,a,c,i,t,r;l.d(n,{$f:function(){return u},DM:function(){return h},IY:function(){return s},SU:function(){return d},iw:function(){return o},r$:function(){return a}});let s="OVERWRITE_DEFAULT_ID",d="LABEL SHOULD BE SET";(i=o||(o={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let u=Object.entries(o).map(e=>{let[,n]=e;return n});(t=a||(a={})).NEUTRAL_0="neutral-0",t.NEUTRAL_1="neutral-1",t.NEUTRAL_2="neutral-2",t.NEUTRAL_3="neutral-3",t.NEUTRAL_4="neutral-4",t.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",t.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",t.PRIMARY="primary",t.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",t.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",t.SECONDARY="secondary",t.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",t.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",t.SUCCESSFUL="successful",t.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",t.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",t.CRITICAL="critical",t.CRITICAL_TRANSPARENT_Full="critical-transparent-full",t.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",t.WARNING="warning",t.WARNING_TRANSPARENT_FULL="warning-transparent-full",t.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",t.INFORMATIONAL="informational",t.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",t.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let h=Object.entries(a).map(e=>{let[,n]=e;return n});(r=c||(c={})).CRITICAL="critical",r.INFORMATIONAL="informational",r.WARNING="warning",r.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,n]=e;return n})},87233:function(e,n,l){"use strict";l.d(n,{I:function(){return o}});let o={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},7070:function(e,n,l){"use strict";l.d(n,{V:function(){return o}});let o=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},32154:function(e,n,l){"use strict";l.r(n);var o=l(52322),a=l(70969),c=l(42492);n.default=()=>(0,o.jsxs)(a.Z,{children:[(0,o.jsx)("h1",{children:" DBSelect Examples "}),(0,o.jsxs)("dl",{className:"example-list",children:[(0,o.jsx)("dt",{children:"Default:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{children:"Test"})}),(0,o.jsx)("dt",{children:"description:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{description:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, description, disabled, focus, icon, id, invalid, key, label, name, onBlur, onChange, onClick, onFocus, options, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),description:"account",disabled:!0,focus:e=>console.log(e),icon:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),options:[{value:"Test1"},{value:"Test2"}],required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, id, invalid, key, label, name, onBlur, onChange, onClick, onFocus, options, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),options:[{value:"Test1"},{value:"Test2"}],required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, id, key, label, name, onBlur, onChange, onClick, onFocus, options, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",id:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),options:[{value:"Test1"},{value:"Test2"}],required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, id, key, label, name, onBlur, onChange, onClick, onFocus, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",id:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, id, label, name, onBlur, onChange, onClick, onFocus, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",id:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, label, name, onBlur, onChange, onClick, onFocus, required, title, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, label, name, onBlur, onChange, onClick, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onClick:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, icon, label, name, onBlur, onChange, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, disabled, focus, icon, label, name, onBlur, onChange, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, disabled, focus, icon, label, name, onBlur, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, focus, icon, label, name, onBlur, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, focus, icon, label, name, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,focus:e=>console.log(e),icon:"account",label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, icon, label, name, onFocus, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,icon:"account",label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, icon, label, name, required, validityChange, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,icon:"account",label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, icon, label, name, required, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,icon:"account",label:"account",name:"account",required:!0,value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon, label, name, required, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",label:"account",name:"account",required:!0,value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon, name, required, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",name:"account",required:!0,value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon, required, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",required:!0,value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon, value, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",value:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon, variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",variant:"critical",children:"Test"})}),(0,o.jsx)("dt",{children:"icon:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{icon:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"invalid:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{invalid:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"options:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{options:[{value:"Test1"},{value:"Test2"}],children:"Test"})}),(0,o.jsx)("dt",{children:"key:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{children:"Test"},"account")}),(0,o.jsx)("dt",{children:"id:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{id:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"onClick:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"change:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{change:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onChange:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onChange:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"blur:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onBlur:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onBlur:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"focus:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{focus:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onFocus:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onFocus:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"validityChange:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{validityChange:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"disabled:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"label:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{label:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"name:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{name:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"required:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{required:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"variant:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{variant:"critical",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=82042)}),_N_E=e.O()}]);
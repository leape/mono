(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8029],{83876:function(e,n,l){var c={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function o(e){if(!l.o(c,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=c[e],o=n[0];return l.e(n[1]).then(function(){return l(o)})}o.keys=function(){return Object.keys(c)},o.id=83876,e.exports=o},72779:function(e,n){var l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var c={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var d=typeof l;if("string"===d||"number"===d)e.push(l);else if(Array.isArray(l)){if(l.length){var i=o.apply(null,l);i&&e.push(i)}}else if("object"===d){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var a in l)c.call(l,a)&&l[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(l=(function(){return o}).apply(n,[]))&&(e.exports=l)}()},36797:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/examples",function(){return l(71832)}])},70969:function(e,n,l){"use strict";l.d(n,{Z:function(){return g}});var c=l(52322),o=l(77900),d=l(2784);let i=()=>{let e=(0,d.useRef)(null),[n,l]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{var n;let c=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";c&&l(!0)},[]),[n,e]},a=e=>{let{children:n,element:l="div",...c}=e,[o,a]=i();return o?(0,d.createElement)(l,{...c,children:n}):(0,d.createElement)(l,{...c,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],r=e=>({...e,link:"".concat("/mono/review/362-featcomponent-checkbox").concat(e.link)});l(60586);var s=l(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>r(e)):[],h=e=>{let{children:n}=e,[l,i]=(0,d.useState)(!1),[r,h]=(0,d.useState)(!1),[g,b]=(0,d.useState)(!1),j=(0,s.useRouter)();return(0,d.useEffect)(()=>{j.query&&(i("true"===j.query.fullscreen),h("true"===j.query.noh1),b("true"===j.query.properties))},[j]),(0,c.jsxs)(a,{children:[j.isReady&&l&&(0,c.jsx)("div",{className:"".concat(r?"noh1":""," ").concat(g?"is-properties":""),children:n}),j.isReady&&!l&&(0,c.jsxs)(o.rG,{children:[(0,c.jsxs)(o.ff,{slot:"header",children:[(0,c.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,c.jsx)(o.Pm,{data:JSON.stringify(u(t,j.pathname))}),(0,c.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,c.jsx)("div",{children:n}),(0,c.jsx)(o.fw,{slot:"footer",copyright:!0})]})]})};var g=h},27818:function(e,n,l){"use strict";var c=l(52322),o=l(2784),d=l(7070),i=l(8490),a=l(72779),t=l.n(a);i.SU;let r=(0,o.forwardRef)(function(e,n){let[l,a]=(0,o.useState)(()=>!1),[r,s]=(0,o.useState)(()=>i.IY),[u,h]=(0,o.useState)(()=>void 0),[g,b]=(0,o.useState)(()=>""),[j,x]=(0,o.useState)(()=>!1),[m,v]=(0,o.useState)(()=>!1),[p,y]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{a(!0),s(e.id?e.id:"checkbox-"+(0,d.V)()),e.value&&b(e.value),e.stylePath&&y(e.stylePath)},[]),(0,o.useEffect)(()=>{if((e.checked||e.indeterminate)&&l&&document&&r){let n=null==document?void 0:document.getElementById(r);n&&(e.checked&&(n.checked=!0),e.indeterminate&&(n.indeterminate=e.indeterminate),a(!1))}},[l]),(0,c.jsxs)(c.Fragment,{children:[p?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:p})}):null,(0,c.jsx)("input",{type:"checkbox",ref:n,className:function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];return t()(n)}("db-checkbox",e.className),id:r,name:e.name,defaultChecked:e.checked,disabled:e.disabled,value:g,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,required:e.required,onChange:n=>{var l,c,o,d,i,a,t,r;e.onChange&&e.onChange(n),e.change&&e.change(n),x(null===(l=n.target)||void 0===l?void 0:l.checked),v(null===(c=n.target)||void 0===c?void 0:c.indeterminate),(null===(o=n.target)||void 0===o?void 0:null===(d=o.validity)||void 0===d?void 0:d.valid)!=u&&(h(null===(i=n.target)||void 0===i?void 0:null===(a=i.validity)||void 0===a?void 0:a.valid),e.validityChange&&e.validityChange(!!(null===(t=n.target)||void 0===t?void 0:null===(r=t.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,c.jsxs)("label",{htmlFor:r,children:[e.label,e.children]})]})});n.Z=r},8490:function(e,n,l){"use strict";var c,o,d,i,a,t;l.d(n,{$f:function(){return u},DM:function(){return h},IY:function(){return r},SU:function(){return s},iw:function(){return c},r$:function(){return o}});let r="OVERWRITE_DEFAULT_ID",s="LABEL SHOULD BE SET";(i=c||(c={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let u=Object.entries(c).map(e=>{let[,n]=e;return n});(a=o||(o={})).NEUTRAL_0="neutral-0",a.NEUTRAL_1="neutral-1",a.NEUTRAL_2="neutral-2",a.NEUTRAL_3="neutral-3",a.NEUTRAL_4="neutral-4",a.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",a.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",a.PRIMARY="primary",a.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",a.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",a.SECONDARY="secondary",a.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",a.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",a.SUCCESSFUL="successful",a.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",a.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",a.CRITICAL="critical",a.CRITICAL_TRANSPARENT_Full="critical-transparent-full",a.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",a.WARNING="warning",a.WARNING_TRANSPARENT_FULL="warning-transparent-full",a.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",a.INFORMATIONAL="informational",a.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",a.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let h=Object.entries(o).map(e=>{let[,n]=e;return n});(t=d||(d={})).CRITICAL="critical",t.INFORMATIONAL="informational",t.WARNING="warning",t.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,n]=e;return n})},7070:function(e,n,l){"use strict";l.d(n,{V:function(){return c}});let c=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},71832:function(e,n,l){"use strict";l.r(n);var c=l(52322),o=l(70969),d=l(27818);n.default=()=>(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("h1",{children:" DBCheckbox Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"Default:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{children:"Test"})}),(0,c.jsx)("dt",{children:"size:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{size:"small",children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, indeterminate, invalid, key, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, title, validityChange, value:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",indeterminate:!0,invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, indeterminate, invalid, key, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange, value:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",indeterminate:!0,invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, indeterminate, invalid, key, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",indeterminate:!0,invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),children:"Test"},"account")}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, invalid, key, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),children:"Test"},"account")}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, pattern, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, change, checked, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, checked, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur, checked, disabled, focus, invalid, label, name, onBlur, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"checked, disabled, focus, invalid, label, name, onBlur, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"checked, disabled, focus, invalid, label, name, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"checked, disabled, invalid, label, name, onFocus, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,disabled:!0,invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"checked, disabled, invalid, label, name, required, validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,disabled:!0,invalid:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"checked, disabled, invalid, label, name, required:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,disabled:!0,invalid:!0,label:"account",name:"account",required:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"checked, invalid, label, name, required:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,invalid:!0,label:"account",name:"account",required:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"checked, invalid, name, required:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,invalid:!0,name:"account",required:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"checked, invalid, required:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,invalid:!0,required:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"checked, invalid:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,invalid:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{checked:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{value:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"indeterminate:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{indeterminate:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{children:"Test"},"account")}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{id:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{describedbyid:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{title:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"placeholder:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{placeholder:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"maxLength:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{maxLength:100,children:"Test"})}),(0,c.jsx)("dt",{children:"minLength:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{minLength:100,children:"Test"})}),(0,c.jsx)("dt",{children:"pattern:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{pattern:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{change:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{onChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"blur:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{blur:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"onBlur:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{onBlur:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"focus:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{focus:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"onFocus:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{onFocus:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"validityChange:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{validityChange:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{disabled:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{label:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{name:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{required:!0,children:"Test"})}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(d.Z,{invalid:!0,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=36797)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5558],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,6148],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function r(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(l)},r.id=3876,e.exports=r},2779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)l.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(n,[]))&&(e.exports=t)}()},8275:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return t(5256)}])},969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),r=t(7900),s=t(2784);let i=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},o=e=>{let{children:n,element:t="div",...l}=e,[r,o]=i();return r?(0,s.createElement)(t,{...l,children:n}):(0,s.createElement)(t,{...l,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Properties",link:"/components/card/properties"},{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Properties",link:"/components/divider/properties"},{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Properties",link:"/components/header/properties"},{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Properties",link:"/components/page/properties"},{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Properties",link:"/components/section/properties"},{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Properties",link:"/components/button/properties"},{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Properties",link:"/components/link/properties"},{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Properties",link:"/components/input/properties"},{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Properties",link:"/components/radio/properties"},{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Properties",link:"/components/brand/properties"},{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Properties",link:"/components/icon/properties"},{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Properties",link:"/components/infotext/properties"},{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Properties",link:"/components/alert/properties"},{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]}],c=e=>({...e,link:"".concat("/mono/review/696-simplify-class-declarations-via-classnames").concat(e.link)});t(586);var d=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[],p=e=>{let{children:n}=e,[t,i]=(0,s.useState)(!1),[c,p]=(0,s.useState)(!1),[b,m]=(0,s.useState)(!1),h=(0,d.useRouter)();return(0,s.useEffect)(()=>{h.query&&(i("true"===h.query.fullscreen),p("true"===h.query.noh1),m("true"===h.query.properties))},[h]),(0,l.jsxs)(o,{children:[h.isReady&&t&&(0,l.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(b?"is-properties":""),children:n}),h.isReady&&!t&&(0,l.jsxs)(r.rG,{children:[(0,l.jsxs)(r.ff,{slot:"header",children:[(0,l.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(r.Pm,{data:JSON.stringify(u(a,h.pathname))}),(0,l.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var b=p},4870:function(e,n,t){"use strict";var l=t(2322),r=t(2784),s=t(5136),i=t(2779),o=t.n(i);let a=(0,r.forwardRef)(function(e,n){var t;let[i,a]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,l.jsxs)("div",{role:"tablist",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return o()(n)}("cmp-tab-bar",e.className),children:[i?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:i})}):null,e.tabs?(0,l.jsx)(l.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,l.jsx)(s.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=a},5136:function(e,n,t){"use strict";t.d(n,{Q:function(){return l.Z}});var l=t(3437)},3437:function(e,n,t){"use strict";var l=t(2322),r=t(2784),s=t(8490),i=t(7070),o=t(2779),a=t.n(o);let c=(0,r.forwardRef)(function(e,n){let t=(0,r.useRef)(null),[o,c]=(0,r.useState)(()=>s.IY),[d,u]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{if(c((0,i.V)()),e.stylePath&&u(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,l.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return a()(n)}("db-tab",e.className),children:[d?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,l.jsx)("input",{type:"radio",ref:t,name:e.name,id:o}),(0,l.jsx)("label",{role:"tab",htmlFor:o,children:e.label}),(0,l.jsxs)("section",{role:"tabpanel",id:"content-"+o,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})]})});n.Z=c},8490:function(e,n,t){"use strict";var l,r,s,i,o,a;t.d(n,{$f:function(){return u},DM:function(){return p},IY:function(){return c},SU:function(){return d},iw:function(){return l},r$:function(){return r}});let c="OVERWRITE_DEFAULT_ID",d="LABEL SHOULD BE SET";(i=l||(l={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let u=Object.entries(l).map(e=>{let[,n]=e;return n});(o=r||(r={})).NEUTRAL_0="neutral-0",o.NEUTRAL_1="neutral-1",o.NEUTRAL_2="neutral-2",o.NEUTRAL_3="neutral-3",o.NEUTRAL_4="neutral-4",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.PRIMARY="primary",o.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",o.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",o.SECONDARY="secondary",o.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",o.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let p=Object.entries(r).map(e=>{let[,n]=e;return n});(a=s||(s={})).CRITICAL="critical",a.INFORMATIONAL="informational",a.WARNING="warning",a.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},5256:function(e,n,t){"use strict";t.r(n);var l=t(2322),r=t(969),s=t(4870);n.default=()=>(0,l.jsxs)(r.Z,{children:[(0,l.jsx)("h1",{children:" DBTabBar Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"name:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{name:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, key, name, tabs, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",name:"account",tabs:"undefined",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, key, tabs, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",tabs:"undefined",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, key, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"tabs:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{tabs:"undefined",children:"Test"})}),(0,l.jsx)("dt",{children:"key:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=8275)}),_N_E=e.O()}]);
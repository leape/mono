(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3391],{83876:function(e,t,n){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],c=t[0];return n.e(t[1]).then(function(){return n(c)})}c.keys=function(){return Object.keys(o)},c.id=83876,e.exports=c},72779:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var d=c.apply(null,n);d&&e.push(d)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0!==(n=(function(){return c}).apply(t,[]))&&(e.exports=n)}()},36238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/examples",function(){return n(20263)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(52322),c=n(77900),r=n(2784);let d=()=>{let e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var t;let o=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";o&&n(!0)},[]),[t,e]},l=e=>{let{children:t,element:n="div",...o}=e,[c,l]=d();return c?(0,r.createElement)(n,{...o,children:t}):(0,r.createElement)(n,{...o,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],i=e=>({...e,link:"".concat("/mono/review/feat-drawer").concat(e.link)});n(60586);var a=n(5632);let u=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?u(e.children,t):[]})).map(e=>i(e)):[],h=e=>{let{children:t}=e,[n,d]=(0,r.useState)(!1),[i,h]=(0,r.useState)(!1),[x,j]=(0,r.useState)(!1),b=(0,a.useRouter)();return(0,r.useEffect)(()=>{b.query&&(d("true"===b.query.fullscreen),h("true"===b.query.noh1),j("true"===b.query.properties))},[b]),(0,o.jsxs)(l,{children:[b.isReady&&n&&(0,o.jsx)("div",{className:"".concat(i?"noh1":""," ").concat(x?"is-properties":""),children:t}),b.isReady&&!n&&(0,o.jsxs)(c.rG,{children:[(0,o.jsxs)(c.ff,{slot:"header",children:[(0,o.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(c.Pm,{data:JSON.stringify(u(s,b.pathname))}),(0,o.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:t}),(0,o.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})};var x=h},96889:function(e,t,n){"use strict";var o=n(52322),c=n(2784),r=n(72779),d=n.n(r);let l=(0,c.forwardRef)(function(e,t){function n(e){return!!(e&&"_"!==e&&"none"!==e)}let[r,l]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,o.jsxs)("button",{id:e.id,ref:t,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d()(t)}("db-button",e.className,{"is-icon-text-replace":n(e.icon)&&e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":n(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:[r?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:r})}):null,e.children]})});t.Z=l},94938:function(e,t,n){"use strict";n.d(t,{Y:function(){return o.Z}});var o=n(96889)},37008:function(e,t,n){"use strict";var o=n(52322),c=n(2784),r=n(94938),d=n(8490);n(72779);var l=n(7070);let s=(0,c.forwardRef)(function(e,t){var n;let s=(0,c.useRef)(t),i=(0,c.useRef)(null),[a,u]=(0,c.useState)(()=>d.IY);function h(t){("close"===t||"DIALOG"===t.target.nodeName&&!e.noBackdrop)&&e.onClose&&e.onClose()}function x(){s.current&&(e.open&&!s.current.open&&(i.current&&(i.current.hidden=!1),e.noBackdrop?s.current.show():s.current.showModal()),!e.open&&s.current.open&&(i.current&&(i.current.hidden=!0),setTimeout(()=>{var e;i.current&&(i.current.hidden=!1),null===(e=s.current)||void 0===e||e.close()},401)))}let[j,b]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{u(e.id?e.id:"drawer-"+(0,l.V)()),e.stylePath&&b(e.stylePath),x()},[]),(0,c.useEffect)(()=>{x()},[e.open]),(0,o.jsxs)("dialog",{className:"db-drawer",id:a,ref:s,onClick:e=>{h(e)},"data-backdrop":!e.noBackdrop,children:[j?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,o.jsxs)("article",{ref:i,className:"db-drawer-container"+(e.className?" "+e.className:""),"data-size":e.size,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,o.jsxs)("header",{className:"db-drawer-header",children:[e.slotDrawerHeader,e.withCloseButton?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(n=e.closeButtonText)&&void 0!==n?n:d.ce})}):null]}),(0,o.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});t.Z=s},8490:function(e,t,n){"use strict";var o,c,r,d,l,s;n.d(t,{$f:function(){return h},DM:function(){return x},IY:function(){return i},SU:function(){return a},ce:function(){return u},iw:function(){return o},r$:function(){return c}});let i="OVERWRITE_DEFAULT_ID",a="LABEL SHOULD BE SET",u="Close Button";(d=o||(o={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let h=Object.entries(o).map(e=>{let[,t]=e;return t});(l=c||(c={})).NEUTRAL_0="neutral-0",l.NEUTRAL_1="neutral-1",l.NEUTRAL_2="neutral-2",l.NEUTRAL_3="neutral-3",l.NEUTRAL_4="neutral-4",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.PRIMARY="primary",l.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",l.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",l.SECONDARY="secondary",l.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",l.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.WARNING="warning",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let x=Object.entries(c).map(e=>{let[,t]=e;return t});(s=r||(r={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,t]=e;return t})},7070:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});let o=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},20263:function(e,t,n){"use strict";n.r(t);var o=n(52322),c=n(70969),r=n(37008);t.default=()=>(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("h1",{children:" DBDrawer Examples "}),(0,o.jsxs)("dl",{className:"example-list",children:[(0,o.jsx)("dt",{children:"Default:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{children:"Test"})}),(0,o.jsx)("dt",{children:"open:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{open:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, open, rounded, size, slotDrawerHeader, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),open:!0,rounded:!0,size:"small",slotDrawerHeader:"account",title:"account",width:"full",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, rounded, size, slotDrawerHeader, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,size:"small",slotDrawerHeader:"account",title:"account",width:"full",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, rounded, size, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,size:"small",title:"account",width:"full",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, rounded, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",width:"full",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, rounded, title, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, noBackdrop, onClose, rounded, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, onClose, rounded, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",onClose:()=>console.log("onClose"),rounded:!0,title:"account",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, id, key, onClose, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",id:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, onClose, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, onClose, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, onClose, title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, onClose:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("onClose"),children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",closeButtonText:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonText:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonText:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"slotDrawerHeader:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{slotDrawerHeader:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"size:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{size:"small",children:"Test"})}),(0,o.jsx)("dt",{children:"width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{width:"full",children:"Test"})}),(0,o.jsx)("dt",{children:"withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{withCloseButton:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"noBackdrop:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{noBackdrop:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"rounded:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{rounded:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"direction:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{direction:"right",children:"Test"})}),(0,o.jsx)("dt",{children:"key:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{children:"Test"},"account")}),(0,o.jsx)("dt",{children:"id:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{id:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"describedbyid:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{describedbyid:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"onClose:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{onClose:()=>console.log("onClose"),children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(r.Z,{closeButtonId:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=36238)}),_N_E=e.O()}]);
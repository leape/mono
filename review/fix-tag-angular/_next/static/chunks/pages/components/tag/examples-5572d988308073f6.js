(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8686],{83876:function(e,t,n){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],c=t[0];return n.e(t[1]).then(function(){return n(c)})}c.keys=function(){return Object.keys(i)},c.id=83876,e.exports=c},72779:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var d=c.apply(null,n);d&&e.push(d)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0!==(n=(function(){return c}).apply(t,[]))&&(e.exports=n)}()},62509:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/examples",function(){return n(44339)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(52322),c=n(77900),a=n(2784);let d=()=>{let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var t;let i=(null===(t=e?.current)||void 0===t?void 0:t.innerHTML)==="";i&&n(!0)},[]),[t,e]};var r=e=>{let{children:t,element:n="div",...i}=e,[c,r]=d();return c?(0,a.createElement)(n,{...i,children:t}):(0,a.createElement)(n,{...i,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],l=e=>({...e,link:"".concat("/mono/review/fix-tag-angular").concat(e.link)});n(60586);var s=n(5632);let u=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?u(e.children,t):[]})).map(e=>l(e)):[];var b=e=>{let{children:t}=e,[n,d]=(0,a.useState)(!1),[l,b]=(0,a.useState)(!1),[x,h]=(0,a.useState)(!1),j=(0,s.useRouter)();return(0,a.useEffect)(()=>{j.query&&(d("true"===j.query.fullscreen),b("true"===j.query.noh1),h("true"===j.query.properties))},[j]),(0,i.jsxs)(r,{children:[j.isReady&&n&&(0,i.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(x?"is-properties":""),children:t}),j.isReady&&!n&&(0,i.jsxs)(c.rG,{children:[(0,i.jsxs)(c.ff,{slot:"header",children:[(0,i.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(c.Pm,{data:JSON.stringify(u(o,j.pathname))}),(0,i.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:t}),(0,i.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})}},96889:function(e,t,n){"use strict";var i=n(52322),c=n(2784),a=n(72779),d=n.n(a);let r=(0,c.forwardRef)(function(e,t){function n(e){return!!(e&&"_"!==e&&"none"!==e)}let[a,r]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,i.jsxs)("button",{id:e.id,ref:t,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d()(t)}("db-button",e.className,{"is-icon-text-replace":n(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":n(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:[a?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:a})}):null,e.children]})});t.Z=r},94938:function(e,t,n){"use strict";n.d(t,{Y:function(){return i.Z}});var i=n(96889)},35524:function(e,t,n){"use strict";var i=n(52322),c=n(2784),a=n(94938),d=n(72779),r=n.n(d);let o=(0,c.forwardRef)(function(e,t){function n(){return e.removeButton?e.removeButton:"Remove tag"}let[d,o]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,i.jsxs)("div",{ref:t,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r()(t)}("db-tag",e.className),tabIndex:function(){var t;if(!e.disabled)return null!==(t=e.tabIndex)&&void 0!==t?t:-1}(),"data-disabled":e.disabled,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[d?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children,e.text?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{children:e.text})}):null,"removable"===e.behaviour?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:t=>void(e.onRemove&&e.onRemove()),noText:!0,title:n(),children:n()})}):null]})});t.Z=o},44339:function(e,t,n){"use strict";n.r(t);var i=n(52322),c=n(70969),a=n(35524);t.default=()=>(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h1",{children:" DBTag Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"behaviour:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{behaviour:"removable",children:"Test"})}),(0,i.jsx)("dt",{children:"behaviour, describedbyid, disabled, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{behaviour:"removable",describedbyid:"account",disabled:!0,icon:"account",id:"account",noText:!0,onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, disabled, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",disabled:!0,icon:"account",id:"account",noText:!0,onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",noText:!0,onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, onRemove, overflow, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, overflow, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, removeButton, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",removeButton:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, tabIndex, text, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",tabIndex:100,text:"account",title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, tabIndex, title, type, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, tabIndex, title, value, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",icon:"account",id:"account",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",id:"account",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, key, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",tabIndex:100,title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"disabled:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{disabled:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"noText:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{noText:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"onRemove:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{onRemove:()=>console.log("Click"),children:"Test"})}),(0,i.jsx)("dt",{children:"overflow:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{overflow:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"removeButton:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{removeButton:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"text:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{text:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"type:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{type:"strong",children:"Test"})}),(0,i.jsx)("dt",{children:"value:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{value:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{tabIndex:100,children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{icon:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=62509)}),_N_E=e.O()}]);
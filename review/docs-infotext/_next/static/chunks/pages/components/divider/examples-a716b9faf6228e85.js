(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2945],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(r)},i.id=83876,e.exports=i},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=i.apply(null,t);l&&e.push(l)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(t=(function(){return i}).apply(n,[]))&&(e.exports=t)}()},28427:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider/examples",function(){return t(46846)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),i=t(77900),a=t(2784);let l=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]},s=e=>{let{children:n,element:t="div",...r}=e,[i,s]=l();return i?(0,a.createElement)(t,{...r,children:n}):(0,a.createElement)(t,{...r,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},d=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/docs-infotext").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>o(e)):[],h=e=>{let{children:n}=e,[t,l]=(0,a.useState)(!1),[o,h]=(0,a.useState)(!1),[b,j]=(0,a.useState)(!1),m=(0,c.useRouter)();return(0,a.useEffect)(()=>{m.query&&(l("true"===m.query.fullscreen),h("true"===m.query.noh1),j("true"===m.query.properties))},[m]),(0,r.jsxs)(s,{children:[m.isReady&&t&&(0,r.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(b?"is-properties":""),children:n}),m.isReady&&!t&&(0,r.jsxs)(i.rG,{children:[(0,r.jsxs)(i.ff,{slot:"header",children:[(0,r.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(i.Pm,{data:JSON.stringify(u(d,m.pathname))}),(0,r.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var b=h},5907:function(e,n,t){"use strict";var r=t(52322),i=t(2784),a=t(72779),l=t.n(a);let s=(0,i.forwardRef)(function(e,n){let[t,a]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,r.jsx)("div",{ref:n,"data-margin":e.margin,"data-variant":e.variant,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l()(n)}("db-divider",e.className),children:t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:t})}):null})});n.Z=s},46846:function(e,n,t){"use strict";t.r(n);var r=t(52322),i=t(70969),a=t(5907);n.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBDivider Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"margin:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{margin:"_",children:"Test"})}),(0,r.jsx)("dt",{children:"id, key, margin, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{id:"account",margin:"_",title:"account",variant:"vertical",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, key, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{id:"account",title:"account",variant:"vertical",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, key, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{id:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{id:"account",title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{variant:"vertical",children:"Test"})}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(a.Z,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=28427)}),_N_E=e.O()}]);
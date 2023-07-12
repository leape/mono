(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7062],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function d(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],d=n[0];return t.e(n[1]).then(function(){return t(d)})}d.keys=function(){return Object.keys(r)},d.id=83876,e.exports=d},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function d(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var l=d.apply(null,t);l&&e.push(l)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var a in t)r.call(t,a)&&t[a]&&e.push(a)}}}return e.join(" ")}e.exports?(d.default=d,e.exports=d):void 0!==(t=(function(){return d}).apply(n,[]))&&(e.exports=t)}()},76536:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/page/examples",function(){return t(88048)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),d=t(77900),i=t(2784);let l=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var a=e=>{let{children:n,element:t="div",...r}=e,[d,a]=l();return d?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/mfranzke-patch-3").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var b=e=>{let{children:n}=e,[t,l]=(0,i.useState)(!1),[c,b]=(0,i.useState)(!1),[h,j]=(0,i.useState)(!1),x=(0,o.useRouter)();return(0,i.useEffect)(()=>{x.query&&(l("true"===x.query.fullscreen),b("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,r.jsxs)(a,{children:[x.isReady&&t&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,r.jsxs)(d.rG,{children:[(0,r.jsxs)(d.ff,{slot:"header",children:[(0,r.jsx)(d.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(d.Pm,{data:JSON.stringify(u(s,x.pathname))}),(0,r.jsx)(d.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(d.fw,{slot:"footer",copyright:!0})]})]})}},51923:function(e,n,t){"use strict";var r=t(52322),d=t(2784),i=t(72779),l=t.n(i);let a=(0,d.forwardRef)(function(e,n){let[t,i]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,r.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l()(n)}("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),children:[t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:t})}):null,e.slotHeader,(0,r.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});n.Z=a},88048:function(e,n,t){"use strict";t.r(n);var r=t(52322),d=t(70969),i=t(51923);n.default=()=>(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h1",{children:" DBPage Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"type:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{type:"fixedHeaderFooter",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid, id, key, slotFooter, slotHeader, tabIndex, title, type:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",id:"account",slotFooter:"account",slotHeader:"account",tabIndex:100,title:"account",type:"fixedHeaderFooter",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, slotFooter, slotHeader, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",id:"account",slotFooter:"account",slotHeader:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, slotFooter, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",id:"account",slotFooter:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"slotHeader:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{slotHeader:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"slotFooter:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{slotFooter:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{id:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=76536)}),_N_E=e.O()}]);
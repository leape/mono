(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6332],{83876:function(n,e,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(n){if(!a.o(t,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=t[n],r=e[0];return a.e(e[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(t)},r.id=83876,n.exports=r},72779:function(n,e){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)n.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&n.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var o in a)t.call(a,o)&&a[o]&&n.push(o)}}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0!==(a=(function(){return r}).apply(e,[]))&&(n.exports=a)}()},99847:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card",function(){return a(75647)}])},75549:function(n,e,a){"use strict";a.d(e,{P:function(){return t}});let t=(n,e,a)=>{var t;return n.map((n,r)=>({...n,slotCode:null!==(t=null==a?void 0:a.at(r))&&void 0!==t?t:"No code available",examples:n.examples.map(n=>{var a;return{...n,example:e({...n.props,children:(null===(a=n.props)||void 0===a?void 0:a.children)?n.props.children:n.name})}})}))}},70969:function(n,e,a){"use strict";a.d(e,{Z:function(){return m}});var t=a(52322),r=a(77900),i=a(2784);let l=()=>{let n=(0,i.useRef)(null),[e,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var e;let t=(null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.innerHTML)==="";t&&a(!0)},[]),[e,n]},o=n=>{let{children:e,element:a="div",...t}=n,[r,o]=l();return r?(0,i.createElement)(a,{...t,children:e}):(0,i.createElement)(a,{...t,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(n=>({...n,children:n.children.map(n=>({label:n.label,link:"/components/".concat(n.name),children:[{label:"Properties",link:"/components/".concat(n.name,"/properties")},{label:"Examples",link:"/components/".concat(n.name,"/examples")},{label:"How to use",link:"/components/".concat(n.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(n.name,"/migration")}]}))}))}],c=n=>({...n,link:"".concat("/mono/review/876-dont-we-need-radio-in-this-list-and-files-as-well").concat(n.link)});a(60586);var d=a(5632);let u=(n,e)=>n?n.map(n=>({...n,current:"/"===n.link&&"/"===e||"/"!==n.link&&e.includes(n.link),children:n.children?u(n.children,e):[]})).map(n=>c(n)):[],p=n=>{let{children:e}=n,[a,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1),v=(0,d.useRouter)();return(0,i.useEffect)(()=>{v.query&&(l("true"===v.query.fullscreen),p("true"===v.query.noh1),b("true"===v.query.properties))},[v]),(0,t.jsxs)(o,{children:[v.isReady&&a&&(0,t.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(m?"is-properties":""),children:e}),v.isReady&&!a&&(0,t.jsxs)(r.rG,{children:[(0,t.jsxs)(r.ff,{slot:"header",children:[(0,t.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(r.Pm,{data:JSON.stringify(u(s,v.pathname))}),(0,t.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:e}),(0,t.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var m=p},68623:function(n,e,a){"use strict";var t=a(52322),r=a(71698),i=a(5632),l=a(70969),o=a(2784);let s=n=>{let{examples:e,slotCode:a}=n;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:e.map((n,e)=>(0,t.jsx)("div",{style:n.style,className:n.className,children:n.example},"".concat(n.name,"-").concat(e)))})})},c=n=>{let{title:e,variants:a}=n,[c,d]=(0,o.useState)(),u=(0,i.useRouter)();(0,o.useEffect)(()=>{if(u.query){var n;let e=null===(n=u.query.page)||void 0===n?void 0:n.toString();if(e){let n=a.find(n=>n.name.toLowerCase()===e);d(n),console.log(e)}}},[u]);let p=n=>{var e;return window.location.origin?"".concat(null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.href,"?page=").concat(n.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(s,{...c})}),!c&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:e}),null==a?void 0:a.map((n,e)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(n),children:n.name})}),(0,t.jsx)(s,{...n})]},"".concat(n.name,"-").concat(e)))]})})]})};e.Z=c},75647:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return m}});var t=a(52322),r=a(21356),i=a(18249),l=a(69608),o=a(71698),s=a(68623),c=JSON.parse('[{"name":"ColorVariant","examples":[{"name":"(Default) neutral-0","props":{"colorVariant":"neutral-0","variant":"interactive","spacing":"small"}},{"name":"neutral-1","props":{"colorVariant":"neutral-1","variant":"interactive","spacing":"small"}},{"name":"neutral-2","props":{"colorVariant":"neutral-2","variant":"interactive","spacing":"small"}},{"name":"neutral-3","props":{"colorVariant":"neutral-3","variant":"interactive","spacing":"small"}},{"name":"neutral-4","props":{"colorVariant":"neutral-4","variant":"interactive","spacing":"small"}},{"name":"primary","props":{"colorVariant":"primary","variant":"interactive","spacing":"small"}},{"name":"secondary","props":{"colorVariant":"secondary","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]'),d=a(75549);let u=n=>{let{colorVariant:e,variant:a,children:r,spacing:i}=n;return(0,t.jsxs)(o.f,{colorVariant:e,variant:a,spacing:i,children:[(0,t.jsx)("strong",{children:r}),e&&(0,t.jsx)("span",{children:e})]})},p=()=>(0,t.jsx)(s.Z,{title:"DBCard",variants:(0,d.P)(c,u,[(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])});var m=p}},function(n){n.O(0,[4996,9883,1698,1356,8249,9608,9774,2888,179],function(){return n(n.s=99847)}),_N_E=n.O()}]);
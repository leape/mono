(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6332],{83876:function(e,n,a){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function t(e){if(!a.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],t=n[0];return a.e(n[1]).then(function(){return a(t)})}t.keys=function(){return Object.keys(r)},t.id=83876,e.exports=t},72779:function(e,n){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=t.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)r.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0!==(a=(function(){return t}).apply(n,[]))&&(e.exports=a)}()},99847:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card",function(){return a(75647)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return r}});let r=(e,n,a)=>{var r,t;return e.map((e,i)=>({...e,slotCode:null!==(r=null==a?void 0:a.at(i))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return m}});var r=a(52322),t=a(77900),i=a(2784);let l=()=>{let e=(0,i.useRef)(null),[n,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&a(!0)},[]),[n,e]},s=e=>{let{children:n,element:a="div",...r}=e,[t,s]=l();return t?(0,i.createElement)(a,{...r,children:n}):(0,i.createElement)(a,{...r,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)});a(60586);var d=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[],p=e=>{let{children:n}=e,[a,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1),v=(0,d.useRouter)();return(0,i.useEffect)(()=>{v.query&&(l("true"===v.query.fullscreen),p("true"===v.query.noh1),b("true"===v.query.properties))},[v]),(0,r.jsxs)(s,{children:[v.isReady&&a&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(m?"is-properties":""),children:n}),v.isReady&&!a&&(0,r.jsxs)(t.rG,{children:[(0,r.jsxs)(t.ff,{slot:"header",children:[(0,r.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(t.Pm,{data:JSON.stringify(u(o,v.pathname))}),(0,r.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(t.fw,{slot:"footer",copyright:!0})]})]})};var m=p},68623:function(e,n,a){"use strict";var r=a(52322),t=a(76611),i=a(5632),l=a(70969),s=a(2784);let o=e=>{let{examples:n,slotCode:a}=e;return(0,r.jsx)(t.wq,{className:"variants-card",slotCode:a,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})},c=e=>{let{title:n,variants:a}=e,[c,d]=(0,s.useState)(),u=(0,i.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...c})}),!c&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(t.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(t.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})};n.Z=c},75647:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return b}});var r=a(52322),t=a(51498),i=a(21356),l=a(18249),s=a(69608),o=a(76611),c=a(68623),d=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) neutral-0","props":{"colorVariant":"neutral-0","variant":"interactive","spacing":"small"}},{"name":"neutral-1","props":{"colorVariant":"neutral-1","variant":"interactive","spacing":"small"}},{"name":"neutral-2","props":{"colorVariant":"neutral-2","variant":"interactive","spacing":"small"}},{"name":"neutral-3","props":{"colorVariant":"neutral-3","variant":"interactive","spacing":"small"}},{"name":"neutral-4","props":{"colorVariant":"neutral-4","variant":"interactive","spacing":"small"}},{"name":"primary","props":{"colorVariant":"primary","variant":"interactive","spacing":"small"}},{"name":"secondary","props":{"colorVariant":"secondary","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]'),u=a(75549);let p=e=>{let{colorVariant:n,variant:a,children:t,spacing:i}=e;return(0,r.jsxs)(o.f,{colorVariant:n,variant:a,spacing:i,children:[(0,r.jsx)("strong",{children:t}),n&&(0,r.jsx)("span",{children:n})]})},m=()=>(0,r.jsx)(c.Z,{title:"DBCard",variants:(0,u.P)(d,p,[(0,r.jsx)(t.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(s.default,{})])});var b=m}},function(e){e.O(0,[4996,9883,6611,1356,1498,8249,9608,9774,2888,179],function(){return e(e.s=99847)}),_N_E=e.O()}]);
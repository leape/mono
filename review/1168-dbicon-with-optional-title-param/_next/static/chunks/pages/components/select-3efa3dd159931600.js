(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{83876:function(e,n,t){var a={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(a)},l.id=83876,e.exports=l},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=l.apply(null,t);o&&e.push(o)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var r in t)a.call(t,r)&&t[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(t=(function(){return l}).apply(n,[]))&&(e.exports=t)}()},96148:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return t(24468)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>{var a,l;return e.map((e,i)=>({...e,slotCode:null!==(a=null==t?void 0:t.at(i))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(52322),l=t(77900),i=t(2784);let o=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let a=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";a&&t(!0)},[]),[n,e]};var r=e=>{let{children:n,element:t="div",...a}=e,[l,r]=o();return l?(0,i.createElement)(t,{...a,children:n}):(0,i.createElement)(t,{...a,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/1168-dbicon-with-optional-title-param").concat(e.link)});t(60586);var d=t(5632);let p=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?p(e.children,n):[]})).map(e=>c(e)):[];var u=e=>{let{children:n}=e,[t,o]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),[b,m]=(0,i.useState)(!1),v=(0,d.useRouter)();return(0,i.useEffect)(()=>{v.query&&(o("true"===v.query.fullscreen),u("true"===v.query.noh1),m("true"===v.query.properties))},[v]),(0,a.jsxs)(r,{children:[v.isReady&&t&&(0,a.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(b?"is-properties":""),children:n}),v.isReady&&!t&&(0,a.jsxs)(l.rG,{children:[(0,a.jsxs)(l.ff,{slot:"header",children:[(0,a.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,a.jsx)(l.Pm,{data:JSON.stringify(p(s,v.pathname))}),(0,a.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,a.jsx)("div",{children:n}),(0,a.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,t){"use strict";var a=t(52322),l=t(48111),i=t(5632),o=t(70969),r=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[c,d]=(0,r.useState)(),p=(0,i.useRouter)();(0,r.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[p]);let u=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(s,{...c})}),!c&&(0,a.jsx)(o.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,a.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},24468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(52322),l=t(60286),i=t(76509),o=t(55527),r=t(48111),s=t(68623),c=JSON.parse('[{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"label":"Label","description":"(Default) Adaptive","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Informational","props":{"label":"Label","description":"Informational","variant":"informational","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Warning","props":{"label":"Label","description":"Warning","variant":"warning","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Critical","props":{"label":"Label","description":"Critical","variant":"critical","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Successful","props":{"label":"Label","description":"Successful","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","description":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With value","props":{"label":"Label","description":"With value","value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled","props":{"label":"Label","description":"Disabled","disabled":true,"options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled + value","props":{"label":"Label","description":"Disabled + value","disabled":true,"value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Optgroup","props":{"label":"Label","description":"Optgroup","options":[{"value":"Optgroup 1","options":[{"value":"Option 1"},{"value":"Option 2"}]},{"value":"Option 2"}]}}]},{"name":"Content","examples":[{"name":"Default","props":{"label":"Label","description":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon","props":{"label":"Label","description":"With Icon","icon":"edit","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon + Variant","props":{"label":"Label","description":"With Icon + Variant","icon":"edit","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]}]'),d=t(75549);let p=e=>{let{children:n,label:t,variant:l,options:i,icon:o,description:s,disabled:c,value:d}=e;return(0,a.jsx)(r.kr,{label:t,variant:l,options:i,disabled:c,icon:o,value:d,description:s,children:n})};var u=()=>(0,a.jsx)(s.Z,{title:"DBSelect",variants:(0,d.P)(c,p,[(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(o.default,{})])})}},function(e){e.O(0,[4996,9883,8111,286,6509,5527,9774,2888,179],function(){return e(e.s=96148)}),_N_E=e.O()}]);
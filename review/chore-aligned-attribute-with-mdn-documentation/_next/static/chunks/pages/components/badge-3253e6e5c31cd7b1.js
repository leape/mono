(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3899],{83876:function(e,n,a){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function t(e){if(!a.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],t=n[0];return a.e(n[1]).then(function(){return a(t)})}t.keys=function(){return Object.keys(r)},t.id=83876,e.exports=t},9653:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return a(76987)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return r}});let r=(e,n,a)=>{var r,t;return e.map((e,l)=>({...e,slotCode:null!==(r=null==a?void 0:a.at(l))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return p}});var r=a(52322),t=a(77900),l=a(2784);let s=()=>{let e=(0,l.useRef)(null),[n,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&a(!0)},[]),[n,e]};var i=e=>{let{children:n,element:a="div",...r}=e,[t,i]=s();return t?(0,l.createElement)(a,{...r,children:n}):(0,l.createElement)(a,{...r,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/chore-aligned-attribute-with-mdn-documentation").concat(e.link)});a(60586);var m=a(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>c(e)):[];var p=e=>{let{children:n}=e,[a,s]=(0,l.useState)(!1),[c,p]=(0,l.useState)(!1),[u,b]=(0,l.useState)(!1),h=(0,m.useRouter)();return(0,l.useEffect)(()=>{h.query&&(s("true"===h.query.fullscreen),p("true"===h.query.noh1),b("true"===h.query.properties))},[h]),(0,r.jsxs)(i,{children:[h.isReady&&a&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(u?"is-properties":""),children:n}),h.isReady&&!a&&(0,r.jsxs)(t.rG,{children:[(0,r.jsxs)(t.ff,{slot:"header",children:[(0,r.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(t.Pm,{data:JSON.stringify(d(o,h.pathname))}),(0,r.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(t.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,a){"use strict";var r=a(52322),t=a(12048),l=a(5632),s=a(70969),i=a(2784);let o=e=>{let{examples:n,slotCode:a}=e;return(0,r.jsx)(t.wq,{className:"variants-card",slotCode:a,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,m]=(0,i.useState)(),d=(0,l.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let n=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);m(e),console.log(n)}}},[d]);let p=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...c})}),!c&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(t.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(t.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},76987:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return j}});var r=a(52322),t=a(97159),l=a(71075),s=a(20228),i=a(70211),o=a(91542),c=a(43516),m=a(71342),d=a(12048),p=a(68623),u=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Dot (Default)","props":{"noContent":true}},{"name":"Dot - Small","props":{"noContent":true,"size":"small"}},{"name":"Text","props":{}},{"name":"Icon","props":{"example":"icon"}},{"name":"Icon - Small","props":{"example":"icon","size":"small"}}]},{"name":"Placement","examples":[{"name":"Inline (Default)","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]'),b=a(75549);let h=e=>{let{children:n,variant:a,emphasis:t,noContent:l,size:s,placement:i,example:o}=e;return(0,r.jsxs)(r.Fragment,{children:[!i&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.aE,{variant:a,emphasis:t,size:s,children:l?"":n}),l&&(0,r.jsx)(d.EZ,{variant:"informational",size:"small",children:n})]}),i&&"inline"!==i&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Y1,{icon:"account",variant:"outlined",noText:!0,children:[(0,r.jsx)(d.aE,{size:"small",emphasis:"strong",variant:"critical",placement:i}),n]}),(0,r.jsx)(d.EZ,{variant:"informational",size:"small",children:n})]}),"inline"===i&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"badge-inline-container",children:[(0,r.jsx)(d.Pg,{icon:"account"}),(0,r.jsx)("span",{children:n}),(0,r.jsx)(d.aE,{size:"small",emphasis:"strong",variant:"critical",children:"Label"}),(0,r.jsx)(d.Pg,{icon:"error"})]})}),"icon"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.aE,{variant:"critical",emphasis:"strong",size:s,children:(0,r.jsx)(d.Pg,{icon:"account",children:n})}),(0,r.jsx)(d.EZ,{variant:"informational",size:"small",children:n})]}),"number"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.aE,{variant:"successful",children:"9"}),(0,r.jsx)(d.aE,{variant:"informational",children:"12"}),(0,r.jsx)(d.aE,{variant:"warning",children:"123"}),(0,r.jsx)(d.aE,{size:"small",emphasis:"strong",variant:"successful",children:"9"}),(0,r.jsx)(d.aE,{size:"small",emphasis:"strong",variant:"informational",children:"12"}),(0,r.jsx)(d.aE,{size:"small",emphasis:"strong",variant:"warning",children:"123"}),(0,r.jsx)(d.EZ,{variant:"informational",size:"small",children:n})]})]})};var j=()=>(0,r.jsx)(p.Z,{title:"DBBadge",variants:(0,b.P)(u,h,[(0,r.jsx)(t.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(m.default,{})])})}},function(e){e.O(0,[4996,9883,2048,228,3516,7358,7159,1075,4723,1342,9774,2888,179],function(){return e(e.s=9653)}),_N_E=e.O()}]);
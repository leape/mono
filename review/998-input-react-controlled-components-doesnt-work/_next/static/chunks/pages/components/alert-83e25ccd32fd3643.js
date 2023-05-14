(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9688],{83876:function(e,n,t){var l={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(l)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var r=a.apply(null,t);r&&e.push(r)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)l.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},44365:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert",function(){return t(69773)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return l}});let l=(e,n,t)=>{var l,a;return e.map((e,i)=>({...e,slotCode:null!==(l=null==t?void 0:t.at(i))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var l=t(52322),a=t(77900),i=t(2784);let r=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},o=e=>{let{children:n,element:t="div",...l}=e,[a,o]=r();return a?(0,i.createElement)(t,{...l,children:n}):(0,i.createElement)(t,{...l,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/998-input-react-controlled-components-doesnt-work").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[],p=e=>{let{children:n}=e,[t,r]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),b=(0,c.useRouter)();return(0,i.useEffect)(()=>{b.query&&(r("true"===b.query.fullscreen),p("true"===b.query.noh1),m("true"===b.query.properties))},[b]),(0,l.jsxs)(o,{children:[b.isReady&&t&&(0,l.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(h?"is-properties":""),children:n}),b.isReady&&!t&&(0,l.jsxs)(a.rG,{children:[(0,l.jsxs)(a.ff,{slot:"header",children:[(0,l.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(a.Pm,{data:JSON.stringify(u(s,b.pathname))}),(0,l.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var h=p},68623:function(e,n,t){"use strict";var l=t(52322),a=t(76611),i=t(5632),r=t(70969),o=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,l.jsx)(a.wq,{className:"variants-card",slotCode:t,children:(0,l.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,l.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})},d=e=>{let{title:n,variants:t}=e,[d,c]=(0,o.useState)(),u=(0,i.useRouter)();(0,o.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);c(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)("div",{children:(0,l.jsx)(s,{...d})}),!d&&(0,l.jsx)(r.Z,{children:(0,l.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,l.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(a.oH,{}),(0,l.jsx)("h2",{children:(0,l.jsx)(a.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,l.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})};n.Z=d},69773:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var l=t(52322),a=t(28186),i=t(59118),r=t(37237),o=t(80169),s=t(24942),d=t(76611),c=t(68623),u=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"100%"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"regular (Default)","style":{"width":"100%"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"expressive","style":{"width":"100%"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#"},"slotLink":"Link"}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"100%"},"props":{"type":"alert","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Inline","style":{"width":"100%"},"props":{"type":"inline","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"100%"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Critical","style":{"width":"100%"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Informational","style":{"width":"100%"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Successful","style":{"width":"100%"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Warning","style":{"width":"100%"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"100%"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Headline & Text & Link","style":{"width":"100%"},"props":{"headline":"Headline","link":{"href":"#"},"slotLink":"Link"}},{"name":"Text & Link","style":{"width":"100%"},"props":{"link":{"href":"#"},"slotLink":"Link"}},{"name":"Text","style":{"width":"100%"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"100%"},"props":{"type":"alert","headline":"Headline","link":{"href":"#"},"click":"()=>{alert(\\"click close button\\")}","slotLink":"Link"}},{"name":"Permanent","style":{"width":"100%"},"props":{"type":"alert","headline":"Headline","link":{"href":"#"},"behaviour":"permanent","slotLink":"Link"}}]}]'),p=t(75549);let h=e=>{let{variant:n,icon:t,headline:a,link:i,slotLink:r,type:o,children:s,behaviour:c}=e;return(0,l.jsx)(d.H3,{variant:n,icon:t,headline:a,link:i,slotLink:r,type:o,behaviour:c,onClick:()=>{alert(s.toString())},children:s})},m=()=>(0,l.jsx)(c.Z,{title:"DBAlert",variants:(0,p.P)(u,h,[(0,l.jsx)(a.default,{}),(0,l.jsx)(i.default,{}),(0,l.jsx)(r.default,{}),(0,l.jsx)(o.default,{}),(0,l.jsx)(s.default,{})])});var b=m}},function(e){e.O(0,[4996,9883,6611,7237,169,8186,4942,9118,9774,2888,179],function(){return e(e.s=44365)}),_N_E=e.O()}]);
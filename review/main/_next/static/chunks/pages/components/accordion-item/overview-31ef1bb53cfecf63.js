(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{86740:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/overview",function(){return a(69511)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>{var t,l,i;return e.map((e,s)=>({...e,slotCode:null!==(t=null==a?void 0:a.at(s))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:n({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},68623:function(e,n,a){"use strict";var t=a(52322),l=a(5632),i=a(2784),s=a(18338),r=a(65107);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,c]=(0,i.useState)(),u=(0,l.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);c(e)}}},[u]);let p=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},69511:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return p}});var t=a(52322),l=a(58855),i=a(68965),s=a(2784),r=a(65107),o=a(68623),d=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"title":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"title":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive","props":{"title":"expressive"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"title":"Enabled (Default)"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}},{"name":"Open","props":{"title":"Open","open":true}},{"name":"Open Disabled","props":{"title":"Open Disabled","open":true,"disabled":true}}]}]'),c=a(75549);let u=e=>{let{children:n,disabled:a,open:l,title:i}=e,[o,d]=(0,s.useState)(null!=l&&l);return(0,t.jsx)(r.kC,{title:i,disabled:a,open:o,onToggle:d,children:n})};var p=()=>(0,t.jsx)(o.Z,{title:"DBAccordionItem",variants:(0,c.P)(d,u,[(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{})])})}},function(e){e.O(0,[4996,4375,8338,5107,8965,8855,9774,2888,179],function(){return e(e.s=86740)}),_N_E=e.O()}]);
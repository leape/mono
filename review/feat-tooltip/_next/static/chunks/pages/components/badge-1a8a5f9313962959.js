(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33899],{9653:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return a(62806)}])},44496:function(e,n,a){"use strict";a.d(n,{P:function(){return getVariants}});let getVariants=(e,n,a)=>e.map((e,r)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(r))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,r;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(r=e.props.children)&&void 0!==r?r:e.name})}})}})},2670:function(e,n,a){"use strict";var r=a(52322),s=a(5632),i=a(2784),t=a(2087),l=a(24935);let VariantList=e=>{let{examples:n,slotCode:a}=e;return(0,r.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[o,c]=(0,i.useState)(),m=(0,s.useRouter)();(0,i.useEffect)(()=>{if(m.query){var e;let n=null===(e=m.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);c(e)}}},[m]);let getHref=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)("div",{children:(0,r.jsx)(VariantList,{...o})}),!o&&(0,r.jsx)(t.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(l.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,r.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},62806:function(e,n,a){"use strict";a.r(n);var r=a(52322),s=a(8621),i=a(57506),t=a(37047),l=a(98563),o=a(9466),c=a(95306),m=a(53458),p=a(24935),u=a(2670),d=a(9394),x=a(44496);let getBadge=e=>{let{children:n,variant:a,emphasis:s,noContent:i,size:t,placement:l,example:o}=e;return(0,r.jsxs)(r.Fragment,{children:[!l&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:a,emphasis:s,size:t,children:i?"":n}),i&&(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),l&&"inline"!==l&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.Y1,{icon:"account",variant:"outlined",noText:!0,children:[(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"critical",placement:l}),n]}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),"inline"===l&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"badge-inline-container",children:[(0,r.jsx)(p.Pg,{icon:"account"}),(0,r.jsx)("span",{children:n}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"critical",children:"Label"}),(0,r.jsx)(p.Pg,{icon:"error"})]})}),"icon"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:"critical",emphasis:"strong",size:t,children:(0,r.jsx)(p.Pg,{icon:"account",children:n})}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),"number"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:"successful",children:"9"}),(0,r.jsx)(p.aE,{variant:"informational",children:"12"}),(0,r.jsx)(p.aE,{variant:"warning",children:"123"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"successful",children:"9"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"informational",children:"12"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"warning",children:"123"}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]})]})};n.default=()=>(0,r.jsx)(u.Z,{title:"DBBadge",variants:(0,x.P)(d,getBadge,[(0,r.jsx)(s.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(m.default,{})])})},9394:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Dot (Default)","props":{"noContent":true}},{"name":"Dot - Small","props":{"noContent":true,"size":"small"}},{"name":"Text","props":{}},{"name":"Icon","props":{"example":"icon"}},{"name":"Icon - Small","props":{"example":"icon","size":"small"}}]},{"name":"Placement","examples":[{"name":"Inline (Default)","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}},function(e){e.O(0,[64996,84375,2087,24935,37047,95306,9466,8621,57506,98563,53458,49774,92888,40179],function(){return e(e.s=9653)}),_N_E=e.O()}]);
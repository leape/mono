(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{49120:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return n(77442)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,s,i;return e.map((e,l)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(l))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},2670:function(e,a,n){"use strict";var t=n(52322),s=n(5632),i=n(2784),l=n(2087),r=n(31346);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,c]=(0,i.useState)(),u=(0,s.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[u]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},77442:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(89235),i=n(17916),l=n(903),r=n(31346),o=n(2670),d=n(55491),c=n(44496);let u=e=>{let{variant:a,emphasis:n,children:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.EZ,{size:"small",variant:"informational",children:s}),(0,t.jsx)(r.oH,{variant:a,emphasis:n})]})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBDivider",variants:(0,c.P)(d,u,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},55491:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"200px"},"className":"db-ui-functional","props":{}},{"name":"regular (Default)","style":{"width":"200px"},"className":"db-ui-regular","props":{}},{"name":"expressive","style":{"width":"200px"},"className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Adaptive - Horizontal (Default)","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}},function(e){e.O(0,[4996,4375,2087,1346,9235,7916,903,9774,2888,179],function(){return e(e.s=49120)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64927],{87480:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return n(8205)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,l,s;return e.map((e,r)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(r))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}))}))}},2670:function(e,a,n){"use strict";var t=n(52322),l=n(5632),s=n(2784),r=n(2087),i=n(67782);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,s.useState)(),m=(0,l.useRouter)();(0,s.useEffect)(()=>{if(m.query){var e;let a=null===(e=m.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[m]);let c=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(r.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(i.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},8205:function(e,a,n){"use strict";n.r(a);var t=n(52322),l=n(97284),s=n(74847),r=n(5158),i=n(41454),o=n(57333),d=n(67782),u=n(2670),m=n(44496),c=n(46810);let p=e=>{let{label:a,size:n,name:l,checked:s,invalid:r,required:i,children:o,disabled:u,indeterminate:m,labelHidden:c}=e;return(0,t.jsx)(d.I3,{label:a,size:n,name:l,checked:s,invalid:r,required:i,disabled:u,labelHidden:c,indeterminate:m,children:o})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBCheckbox",variants:(0,m.P)(c,p,[(0,t.jsx)(l.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(o.default,{})])})},46810:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}},{"name":"Disabled","props":{"name":"States","disabled":true}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true}},{"name":"Required - Checked","props":{"name":"Requirement","required":true,"checked":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Checkbox Label","props":{"name":"Content"}},{"name":"No Label","props":{"name":"Content","labelHidden":true}}]}]')}},function(e){e.O(0,[64996,84375,2087,67782,74847,5158,97284,41454,57333,49774,92888,40179],function(){return e(e.s=87480)}),_N_E=e.O()}]);
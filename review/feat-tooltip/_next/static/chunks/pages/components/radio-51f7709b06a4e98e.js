(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16565],{43754:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return n(84582)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return getVariants}});let getVariants=(e,a,n)=>e.map((e,t)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(t))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},2670:function(e,a,n){"use strict";var t=n(52322),l=n(5632),s=n(2784),i=n(2087),r=n(24935);let VariantList=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,s.useState)(),o=(0,l.useRouter)();(0,s.useEffect)(()=>{if(o.query){var e;let a=null===(e=o.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[o]);let getHref=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(VariantList,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,t.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},84582:function(e,a,n){"use strict";n.r(a);var t=n(52322),l=n(61500),s=n(61087),i=n(62954),r=n(24935),d=n(2670),u=n(44496),o=n(81566);let getRadio=e=>{let{label:a,size:n,name:l,checked:s,invalid:i,required:d,children:u,disabled:o,value:c}=e;return(0,t.jsx)(r.an,{label:a,size:n,name:l,checked:s,invalid:i,required:d,disabled:o,value:c,children:u})};a.default=()=>(0,t.jsx)(d.Z,{title:"DBRadio",variants:(0,u.P)(o,getRadio,[(0,t.jsx)(l.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{})])})},81566:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality","value":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality","value":"regular"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality","value":"expressive"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States","value":"default"}},{"name":"Disabled","props":{"name":"States","disabled":true,"value":"disabled"}},{"name":"Disabled checked","props":{"name":"SpecialState","disabled":true,"checked":true,"value":"disabled-checked"}},{"name":"Required","props":{"name":"States","required":true,"value":"required"}},{"name":"Checked","props":{"name":"States","checked":true,"value":"checked"}},{"name":"Invalid","props":{"name":"States","invalid":true,"value":"invalid"}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size","value":"default"}},{"name":"Small","props":{"name":"Size","size":"small","value":"small"}}]}]')}},function(e){e.O(0,[64996,84375,2087,24935,61087,61500,62954,49774,92888,40179],function(){return e(e.s=43754)}),_N_E=e.O()}]);
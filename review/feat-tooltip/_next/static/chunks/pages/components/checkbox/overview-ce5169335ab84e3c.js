(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51940],{27143:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/overview",function(){return n(99919)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return getVariants}});let getVariants=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},2670:function(e,a,n){"use strict";var t=n(52322),s=n(5632),r=n(2784),i=n(2087),l=n(24935);let VariantList=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[o,c]=(0,r.useState)(),d=(0,s.useRouter)();(0,r.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[d]);let getHref=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("div",{children:(0,t.jsx)(VariantList,{...o})}),!o&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,t.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},99919:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(97284),r=n(74847),i=n(41454),l=n(24935),o=n(2670),c=n(44496),d=n(46810);let getCheckbox=e=>{let{label:a,size:n,name:s,checked:r,invalid:i,required:o,children:c,disabled:d,indeterminate:u}=e;return(0,t.jsx)(l.I3,{label:a,size:n,name:s,checked:r,invalid:i,required:o,disabled:d,indeterminate:u,children:c})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBCheckbox",variants:(0,c.P)(d,getCheckbox,[(0,t.jsx)(s.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{})])})},46810:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Disabled","props":{"name":"States","disabled":true}},{"name":"Disabled checked","props":{"name":"States","disabled":true,"checked":true}},{"name":"Required","props":{"name":"States","required":true}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]}]')}},function(e){e.O(0,[64996,84375,2087,24935,74847,97284,41454,49774,92888,40179],function(){return e(e.s=27143)}),_N_E=e.O()}]);
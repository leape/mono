(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6572],{23745:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return n(85563)}])},29712:function(e,a,n){"use strict";n.d(a,{P:function(){return getVariants}});let getVariants=(e,a,n)=>e.map((e,t)=>{var r;return{...e,slotCode:null!==(r=null==n?void 0:n.at(t))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},1227:function(e,a,n){"use strict";var t=n(52322),r=n(5632),s=n(2784),l=n(82797),i=n(45489);let VariantList=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[o,d]=(0,s.useState)(),u=(0,r.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);d(e)}}},[u]);let getHref=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("div",{children:(0,t.jsx)(VariantList,{...o})}),!o&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(i.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,t.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},85563:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(90976),s=n(23756),l=n(57277),i=n(58629),o=n(84271),d=n(45489),u=n(1227),c=n(18965),p=n(29712);let getLink=e=>{let{href:a,variant:n,disabled:r,size:s,content:l,children:i}=e;return(0,t.jsx)(d.vB,{href:a,variant:n,disabled:r,size:s,content:l,children:i})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBLink",variants:(0,p.P)(c,getLink,[(0,t.jsx)(r.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(o.default,{})])})},18965:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"href":"#"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"href":"#"}},{"name":"expressive","className":"db-ui-expressive","props":{"href":"#"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Primary","props":{"href":"#","variant":"primary"}}]},{"name":"State","examples":[{"name":"Default: (Enabled, Hover, Pressed)","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]')}},function(e){e.O(0,[4996,4375,2797,5489,976,3756,8629,4271,7277,9774,2888,179],function(){return e(e.s=23745)}),_N_E=e.O()}]);
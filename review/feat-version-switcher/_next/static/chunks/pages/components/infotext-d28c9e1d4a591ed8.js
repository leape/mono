(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6857],{26397:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext",function(){return n(1212)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return getVariants}});let getVariants=(e,a,n)=>e.map((e,t)=>{var i;return{...e,slotCode:null!==(i=null==n?void 0:n.at(t))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},2670:function(e,a,n){"use strict";var t=n(52322),i=n(5632),s=n(2784),r=n(29460),l=n(31346);let VariantList=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[o,c]=(0,s.useState)(),u=(0,i.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[u]);let getHref=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("div",{children:(0,t.jsx)(VariantList,{...o})}),!o&&(0,t.jsx)(r.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,t.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},1212:function(e,a,n){"use strict";n.r(a);var t=n(52322),i=n(52434),s=n(96299),r=n(44781),l=n(31346),o=n(2670),c=n(6514),u=n(44496);let getInfotext=e=>{let{variant:a,size:n,icon:i,children:s}=e;return(0,t.jsx)(l.EZ,{variant:a,size:n,icon:i,children:s})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBInfotext",variants:(0,u.P)(c,getInfotext,[(0,t.jsx)(i.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(r.default,{})])})},6514:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"icon":"account"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[4996,4375,1346,9460,6299,2434,4781,9774,2888,179],function(){return e(e.s=26397)}),_N_E=e.O()}]);
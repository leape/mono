(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32987],{41201:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/overview",function(){return n(21099)}])},29712:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},1227:function(e,a,n){"use strict";var t=n(52322),s=n(5632),i=n(2784),r=n(66503),l=n(37426);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,u]=(0,i.useState)(),d=(0,s.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[d]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...c})}),!c&&(0,t.jsx)(r.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},21099:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(67677),i=n(58232),r=n(29663),l=n(37426),o=n(1227),c=n(6514),u=n(29712);let d=e=>{let{variant:a,size:n,icon:s,children:i}=e;return(0,t.jsx)(l.EZ,{variant:a,size:n,icon:s,children:i})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBInfotext",variants:(0,u.P)(c,d,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{})])})},6514:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,23019,37426,66503,58232,67677,29663,49774,92888,40179],function(){return e(e.s=41201)}),_N_E=e.O()}]);
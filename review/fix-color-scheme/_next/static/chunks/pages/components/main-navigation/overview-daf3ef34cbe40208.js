(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68445],{12679:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation/overview",function(){return a(53300)}])},29712:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(i))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,i;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}})}})},1227:function(e,n,a){"use strict";var i=a(52322),s=a(5632),r=a(2784),t=a(82797),l=a(37426);let c=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[o,d]=(0,r.useState)(),u=(0,s.useRouter)();(0,r.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);d(e)}}},[u]);let v=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,i.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},53300:function(e,n,a){"use strict";a.r(n);var i=a(52322),s=a(9597),r=a(37426),t=a(1227),l=a(62698),c=a(29712);let o=e=>{let{children:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h6",{children:[n,":"]}),(0,i.jsxs)(r.Cc,{children:[(0,i.jsx)(r.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.pK,{active:!0,children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,i.jsx)(r.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,i.jsx)(r.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,i.jsx)(r.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,i.jsx)(r.pK,{disabled:!0,children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,i.jsx)(t.Z,{title:"DBMainNavigation",variants:(0,c.P)(l,o,[(0,i.jsx)(s.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,84375,82797,37426,9597,49774,92888,40179],function(){return e(e.s=12679)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6572],{23745:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return n(45799)}])},44496:function(e,a,n){"use strict";n.d(a,{P:function(){return r}});let r=(e,a,n)=>{var r,s,t;return e.map((e,l)=>({...e,slotCode:null!==(r=null==n?void 0:n.at(l))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}))}))}},2670:function(e,a,n){"use strict";var r=n(52322),s=n(5632),t=n(2784),l=n(29460),i=n(31346);let o=e=>{let{examples:a,slotCode:n}=e;return(0,r.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,r.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,c]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[u]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...d})}),!d&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(i.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(i.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},45799:function(e,a,n){"use strict";n.r(a);var r=n(52322),s=n(5168),t=n(58265),l=n(3921),i=n(96675),o=n(86841),d=n(31346),c=n(2670),u=n(18965),p=n(44496);let m=e=>{let{href:a,variant:n,disabled:s,size:t,content:l,children:i}=e;return(0,r.jsx)(d.vB,{href:a,variant:n,disabled:s,size:t,content:l,children:i})};a.default=()=>(0,r.jsx)(c.Z,{title:"DBLink",variants:(0,p.P)(u,m,[(0,r.jsx)(s.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{})])})},18965:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"href":"#"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"href":"#"}},{"name":"expressive","className":"db-ui-expressive","props":{"href":"#"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Primary","props":{"href":"#","variant":"primary"}}]},{"name":"State","examples":[{"name":"Default: (Enabled, Hover, Pressed)","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]')}},function(e){e.O(0,[4996,4375,1346,9460,5168,8265,6675,6841,3921,9774,2888,179],function(){return e(e.s=23745)}),_N_E=e.O()}]);
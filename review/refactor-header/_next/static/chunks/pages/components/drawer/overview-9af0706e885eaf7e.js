(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1405],{25753:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/overview",function(){return n(4612)}])},75549:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});let a=(e,t,n)=>{var a,o,s;return e.map((e,r)=>({...e,slotCode:null!==(a=null==n?void 0:n.at(r))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>({...e,example:t({...e.props,id:null!==(o=e.props.id)&&void 0!==o?o:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}))}))}},68623:function(e,t,n){"use strict";var a=n(52322),o=n(5632),s=n(2784),r=n(89477),l=n(8132);let i=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[u,p]=(0,s.useState)(),d=(0,o.useRouter)();(0,s.useEffect)(()=>{if(d.query){var e;let t=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(t){let e=n.find(e=>e.name.toLowerCase()===t);p(e)}}},[d]);let c=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)("div",{children:(0,a.jsx)(i,{...u})}),!u&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,a.jsx)(i,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},4612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(52322),o=n(70997),s=n(24640),r=n(16582),l=n(99303),i=n(16318),u=n(3960),p=n(60700),d=n(2784),c=n(8132),m=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Emphasis","examples":[{"name":"Strong (Default)","props":{"withCloseButton":true}},{"name":"Weak","props":{"withCloseButton":true,"emphasis":"weak"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"No Backdrop","props":{"withCloseButton":true,"noBackdrop":true}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]'),h=n(68623),f=n(75549);let x=e=>{let{id:t,width:n,rounded:o,noBackdrop:s,withCloseButton:r,spacing:l,openDrawer:i,setOpenDrawer:u,direction:p,children:d,emphasis:m}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.TG,{noBackdrop:s,withCloseButton:r,rounded:o,width:n,spacing:l,emphasis:m,direction:p,open:i===t,onClose:()=>{u(void 0)},children:d}),(0,a.jsxs)(c.Y1,{onClick:()=>{u(t)},children:["Open: ",d]})]})};var w=()=>{let[e,t]=(0,d.useState)(void 0);return(0,a.jsx)(h.Z,{title:"DBDrawer",variants:(0,f.P)(m,n=>x({...n,openDrawer:e,setOpenDrawer:t}),[(0,a.jsx)(o.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{}),(0,a.jsx)(p.default,{})])})}}},function(e){e.O(0,[4996,4375,9477,8132,6318,700,997,4640,6582,9303,3960,9774,2888,179],function(){return e(e.s=25753)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{25768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer",function(){return n(82790)}])},75549:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});let a=(e,t,n)=>{var a,o,s;return e.map((e,r)=>({...e,slotCode:null!==(a=null==n?void 0:n.at(r))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>({...e,example:t({...e.props,id:null!==(o=e.props.id)&&void 0!==o?o:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}))}))}},68623:function(e,t,n){"use strict";var a=n(52322),o=n(5632),s=n(2784),r=n(89477),l=n(8132);let i=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[u,d]=(0,s.useState)(),p=(0,o.useRouter)();(0,s.useEffect)(()=>{if(p.query){var e;let t=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(t){let e=n.find(e=>e.name.toLowerCase()===t);d(e)}}},[p]);let c=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)("div",{children:(0,a.jsx)(i,{...u})}),!u&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,a.jsx)(i,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},82790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(52322),o=n(70997),s=n(24640),r=n(99303),l=n(16318),i=n(3960),u=n(60700),d=n(2784),p=n(8132),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"No Backdrop","props":{"withCloseButton":true,"noBackdrop":true}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]'),m=n(68623),h=n(75549);let f=e=>{let{id:t,width:n,rounded:o,noBackdrop:s,withCloseButton:r,spacing:l,openDrawer:i,setOpenDrawer:u,direction:d,children:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(p.TG,{noBackdrop:s,withCloseButton:r,rounded:o,width:n,spacing:l,direction:d,open:i===t,onClose:()=>{u(void 0)},children:c}),(0,a.jsxs)(p.Y1,{onClick:()=>{u(t)},children:["Open: ",c]})]})};var x=()=>{let[e,t]=(0,d.useState)(void 0);return(0,a.jsx)(m.Z,{title:"DBDrawer",variants:(0,h.P)(c,n=>f({...n,openDrawer:e,setOpenDrawer:t}),[(0,a.jsx)(o.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{})])})}}},function(e){e.O(0,[4996,4375,9477,8132,6318,700,997,4640,9303,3960,9774,2888,179],function(){return e(e.s=25768)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7619],{29509:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item",function(){return n(18953)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,r,s;return e.map((e,i)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}))}))}},68623:function(e,a,n){"use strict";var t=n(52322),r=n(5632),s=n(2784),i=n(18338),l=n(51963);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[u,p]=(0,s.useState)(),c=(0,r.useRouter)();(0,s.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);p(e)}}},[c]);let d=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[u&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...u})}),!u&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},18953:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(36186),s=n(30078),i=n(75270),l=n(90518),o=n(51963),u=n(68623),p=n(89267),c=n(75549);let d=e=>{let{children:a,icon:n,disabled:r,active:s,width:i,areaPopup:l}=e;return(0,t.jsx)(o.pK,{icon:n,disabled:r,active:s,width:i,areaPopup:l,onClick:()=>{alert(a.toString())},slotSubNavigation:l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:l?a:(0,t.jsx)("a",{href:"#",children:a})})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBNavigationItem",variants:(0,c.P)(p,d,[(0,t.jsx)(r.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"areaPopup":true}},{"name":"regular (Default)","className":"db-ui-regular","props":{"areaPopup":true}},{"name":"expressive","className":"db-ui-expressive","props":{"areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}},function(e){e.O(0,[4996,4375,8338,1963,3359,78,6186,518,9774,2888,179],function(){return e(e.s=29509)}),_N_E=e.O()}]);
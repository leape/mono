(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7619],{29509:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item",function(){return t(43542)}])},29712:function(e,a,t){"use strict";t.d(a,{P:function(){return getVariants}});let getVariants=(e,a,t)=>e.map((e,n)=>{var r;return{...e,slotCode:null!==(r=null==t?void 0:t.at(n))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var t,n;return{...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},1227:function(e,a,t){"use strict";var n=t(52322),r=t(5632),i=t(2784),s=t(82797),l=t(45489);let VariantList=e=>{let{examples:a,slotCode:t}=e;return(0,n.jsx)(l.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:t}=e,[o,u]=(0,i.useState)(),p=(0,r.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(a){let e=t.find(e=>e.name.toLowerCase()===a);u(e)}}},[p]);let getHref=e=>{var a,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(a=t.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("div",{children:(0,n.jsx)(VariantList,{...o})}),!o&&(0,n.jsx)(s.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==t?void 0:t.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(l.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,n.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},43542:function(e,a,t){"use strict";t.r(a);var n=t(52322),r=t(9803),i=t(2189),s=t(24882),l=t(16592),o=t(45489),u=t(1227),p=t(89267),c=t(29712);let getNavigationItem=e=>{let{children:a,icon:t,disabled:r,active:i,width:s,areaPopup:l}=e;return(0,n.jsx)(o.pK,{icon:t,disabled:r,active:i,width:s,areaPopup:l,onClick:()=>{alert(a.toString())},slotSubNavigation:l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.pK,{children:(0,n.jsx)("a",{href:"#",children:"Test1"})}),(0,n.jsx)(o.pK,{children:(0,n.jsx)("a",{href:"#",children:"Test2"})})]}),children:l?a:(0,n.jsx)("a",{href:"#",children:a})})};a.default=()=>(0,n.jsx)(u.Z,{title:"DBNavigationItem",variants:(0,c.P)(p,getNavigationItem,[(0,n.jsx)(r.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(l.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"areaPopup":true}},{"name":"regular (Default)","className":"db-ui-regular","props":{"areaPopup":true}},{"name":"expressive","className":"db-ui-expressive","props":{"areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}},function(e){e.O(0,[4996,4375,2797,5489,4882,2189,9803,6592,9774,2888,179],function(){return e(e.s=29509)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25641],{70505:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tooltip/overview",function(){return n(79424)}])},44496:function(e,t,n){"use strict";n.d(t,{P:function(){return getVariants}});let getVariants=(e,t,n)=>e.map((e,a)=>{var o;return{...e,slotCode:null!==(o=null==n?void 0:n.at(a))&&void 0!==o?o:"No code available",examples:e.examples.map(e=>{var n,a;return{...e,example:t({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},2670:function(e,t,n){"use strict";var a=n(52322),o=n(5632),i=n(2784),l=n(2087),s=n(24935);let VariantList=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(s.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[r,p]=(0,i.useState)(),c=(0,o.useRouter)();(0,i.useEffect)(()=>{if(c.query){var e;let t=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(t){let e=n.find(e=>e.name.toLowerCase()===t);p(e)}}},[c]);let getHref=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsx)("div",{children:(0,a.jsx)(VariantList,{...r})}),!r&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,a.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},79424:function(e,t,n){"use strict";n.r(t);var a=n(52322),o=n(12445),i=n(16198),l=n(80272),s=n(30817),r=n(21685),p=n(24935),c=n(2670),d=n(10171),m=n(44496);let getTooltip=e=>{let{children:t,width:n,emphasis:o,placement:i,delay:l,content:s,behaviour:r}=e;return(0,a.jsxs)(p.Y1,{children:[t,(0,a.jsx)(p.Nd,{width:n,emphasis:o,placement:i,behaviour:r,delay:l,children:s})]})};t.default=()=>(0,a.jsx)(c.Z,{title:"DBTooltip",variants:(0,m.P)(d,getTooltip,[(0,a.jsx)(o.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(r.default,{})])})},10171:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"content":"Tooltip"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"content":"Tooltip"}},{"name":"expressive","className":"db-ui-expressive","props":{"content":"Tooltip"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{"content":"Tooltip"}},{"name":"Strong","props":{"content":"Tooltip","emphasis":"strong"}}]},{"name":"Placement","examples":[{"name":"bottom (Default)","props":{"content":"Tooltip","placement":"bottom"}},{"name":"top","props":{"content":"Tooltip","placement":"top"}},{"name":"left","props":{"content":"Tooltip","placement":"left"}},{"name":"right","props":{"content":"Tooltip","placement":"right"}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Tooltip"}},{"name":"Delay slow","props":{"content":"Tooltip","delay":"slow"}},{"name":"Delay fast","props":{"content":"Tooltip","delay":"fast"}},{"name":"No animation","props":{"content":"Tooltip","behaviour":"plain"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed"}}]}]')}},function(e){e.O(0,[64996,84375,2087,24935,80272,30817,12445,21685,16198,49774,92888,40179],function(){return e(e.s=70505)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25641],{70505:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tooltip/overview",function(){return o(99861)}])},29712:function(t,e,o){"use strict";o.d(e,{P:function(){return n}});let n=(t,e,o)=>t.map((t,n)=>{var i;return{...t,slotCode:null!==(i=null==o?void 0:o.at(n))&&void 0!==i?i:"No code available",examples:t.examples.map(t=>{var o,n;return{...t,example:e({...t.props,id:null!==(o=t.props.id)&&void 0!==o?o:t.name,children:null!==(n=t.props.children)&&void 0!==n?n:t.name})}})}})},1227:function(t,e,o){"use strict";var n=o(52322),i=o(5632),a=o(2784),l=o(82797),p=o(37426);let s=t=>{let{examples:e,slotCode:o}=t;return(0,n.jsx)(p.wq,{className:"variants-card",slotCode:o,children:(0,n.jsx)("div",{className:"variants-list",children:e.map((t,e)=>(0,n.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(e)))})})};e.Z=t=>{let{title:e,variants:o}=t,[r,d]=(0,a.useState)(),c=(0,i.useRouter)();(0,a.useEffect)(()=>{if(c.query){var t;let e=null===(t=c.query.page)||void 0===t?void 0:t.toString();if(e){let t=o.find(t=>t.name.toLowerCase()===e);d(t)}}},[c]);let m=t=>{var e,o;return window.location.origin?"".concat(null===(o=window)||void 0===o?void 0:null===(e=o.location)||void 0===e?void 0:e.href,"?page=").concat(t.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("div",{children:(0,n.jsx)(s,{...r})}),!r&&(0,n.jsx)(l.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:e}),null==o?void 0:o.map((t,e)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(p.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(p.vB,{content:"external",target:"_blank",href:m(t),children:t.name})}),(0,n.jsx)(s,{...t})]},"".concat(t.name,"-").concat(e)))]})})]})}},99861:function(t,e,o){"use strict";o.r(e);var n=o(52322),i=o(95976),a=o(4620),l=o(44598),p=o(8917),s=o(28248),r=o(88712),d=o(37426),c=o(1227),m=o(10171),u=o(29712);let f=t=>{let{children:e,width:o,emphasis:i,placement:a,delay:l,content:p,animation:s,variant:r,id:c}=t;return(0,n.jsxs)(d.Y1,{describedbyid:c,children:[e,(0,n.jsx)(d.Nd,{width:o,emphasis:i,placement:a,animation:s,delay:l,variant:r,id:c,children:p})]})};e.default=()=>(0,n.jsx)(c.Z,{title:"DBTooltip",variants:(0,u.P)(m,f,[(0,n.jsx)(i.default,{}),(0,n.jsx)(a.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(p.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(r.default,{})])})},10171:function(t){"use strict";t.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"content":"Tooltip","id":"tooltip-01"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"content":"Tooltip","id":"tooltip-02"}},{"name":"expressive","className":"db-ui-expressive","props":{"content":"Tooltip","id":"tooltip-03"}}]},{"name":"Variant","examples":[{"name":"With arrow (Default)","props":{"content":"Tooltip","id":"tooltip-04"}},{"name":"Basic","props":{"content":"Tooltip","variant":"basic","id":"tooltip-05"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{"content":"Tooltip","id":"tooltip-06"}},{"name":"Strong","props":{"content":"Tooltip","emphasis":"strong","id":"tooltip-07"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Tooltip","placement":"bottom-start","id":"tooltip-08-start"}},{"name":"bottom (Default)","props":{"content":"Tooltip","placement":"bottom","id":"tooltip-08"}},{"name":"bottom-end","props":{"content":"Tooltip","placement":"bottom-end","id":"tooltip-08-end"}},{"name":"left-start","props":{"content":"Tooltip","placement":"left-start","id":"tooltip-10-start"}},{"name":"left","props":{"content":"Tooltip","placement":"left","id":"tooltip-10"}},{"name":"left-end","props":{"content":"Tooltip","placement":"left-end","id":"tooltip-10-end"}},{"name":"right-start","props":{"content":"Tooltip","placement":"right-start","id":"tooltip-11-start"}},{"name":"right","props":{"content":"Tooltip","placement":"right","id":"tooltip-11"}},{"name":"right-end","props":{"content":"Tooltip","placement":"right-end","id":"tooltip-11-end"}},{"name":"top-start","props":{"content":"Tooltip","placement":"top-start","id":"tooltip-09-start"}},{"name":"top","props":{"content":"Tooltip","placement":"top","id":"tooltip-09"}},{"name":"top-end","props":{"content":"Tooltip","placement":"top-end","id":"tooltip-09-end"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"tooltip-12"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"tooltip-13"}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Tooltip","id":"tooltip-14"}},{"name":"Delay slow","props":{"content":"Tooltip","delay":"slow","id":"tooltip-15"}},{"name":"Delay fast","props":{"content":"Tooltip","delay":"fast","id":"tooltip-16"}},{"name":"No animation","props":{"content":"Tooltip","animation":"disabled","id":"tooltip-17"}}]}]')}},function(t){t.O(0,[64996,84375,82797,37426,8917,88712,95976,28248,4620,44598,49774,92888,40179],function(){return t(t.s=70505)}),_N_E=t.O()}]);
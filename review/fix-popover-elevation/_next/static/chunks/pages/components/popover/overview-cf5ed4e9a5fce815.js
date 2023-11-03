(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27589],{64148:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/overview",function(){return t(86407)}])},29712:function(e,o,t){"use strict";t.d(o,{P:function(){return getVariants}});let getVariants=(e,o,t)=>e.map((e,n)=>{var a;return{...e,slotCode:null!==(a=null==t?void 0:t.at(n))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var t,n;return{...e,example:o({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},1227:function(e,o,t){"use strict";var n=t(52322),a=t(5632),p=t(2784),r=t(82797),s=t(37426);let VariantList=e=>{let{examples:o,slotCode:t}=e;return(0,n.jsx)(s.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:o.map((e,o)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(o)))})})};o.Z=e=>{let{title:o,variants:t}=e,[i,l]=(0,p.useState)(),d=(0,a.useRouter)();(0,p.useEffect)(()=>{if(d.query){var e;let o=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(o){let e=t.find(e=>e.name.toLowerCase()===o);l(e)}}},[d]);let getHref=e=>{var o,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(o=t.location)||void 0===o?void 0:o.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[i&&(0,n.jsx)("div",{children:(0,n.jsx)(VariantList,{...i})}),!i&&(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:o}),null==t?void 0:t.map((e,o)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,n.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(o)))]})})]})}},86407:function(e,o,t){"use strict";t.r(o);var n=t(52322),a=t(22440),p=t(24475),r=t(62275),s=t(69223),i=t(45712),l=t(44891),d=t(37426),c=t(1227),m=t(69780),v=t(29712);let getPopover=e=>{let{id:o,children:t,width:a,gap:p,spacing:r,placement:s,delay:i,content:l,animation:c}=e;return(0,n.jsxs)(d.Y1,{describedbyid:o,children:[t,(0,n.jsx)(d.Ys,{width:a,gap:p,spacing:r,placement:s,animation:c,delay:i,id:o,children:l})]})};o.default=()=>(0,n.jsx)(c.Z,{title:"DBPopover",variants:(0,v.P)(m,getPopover,[(0,n.jsx)(a.default,{}),(0,n.jsx)(p.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(l.default,{})])})},69780:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"content":"Popover","id":"popover-01"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"content":"Popover","id":"popover-02"}},{"name":"expressive","className":"db-ui-expressive","props":{"content":"Popover","id":"popover-03"}}]},{"name":"Spacing","examples":[{"name":"Small (Default)","props":{"content":"Popover","spacing":"small","id":"popover-04"}},{"name":"Medium","props":{"content":"Popover","spacing":"medium","id":"popover-05"}},{"name":"None","props":{"content":"Popover","spacing":"none","id":"popover-06"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Popover","placement":"bottom-start","id":"popover-07-start"}},{"name":"bottom (Default)","props":{"content":"Popover","placement":"bottom","id":"popover-07"}},{"name":"bottom-end","props":{"content":"Popover","placement":"bottom-end","id":"popover-07-end"}},{"name":"left-start","props":{"content":"Popover","placement":"left-start","id":"popover-09-start"}},{"name":"left","props":{"content":"Popover","placement":"left","id":"popover-09"}},{"name":"left-end","props":{"content":"Popover","placement":"left-end","id":"popover-09-end"}},{"name":"right-start","props":{"content":"Popover","placement":"right-start","id":"popover-10-start"}},{"name":"right","props":{"content":"Popover","placement":"right","id":"popover-10"}},{"name":"right-end","props":{"content":"Popover","placement":"right-end","id":"popover-10-end"}},{"name":"top-start","props":{"content":"Popover","placement":"top-start","id":"popover-08-start"}},{"name":"top","props":{"content":"Popover","placement":"top","id":"popover-08"}},{"name":"top-end","props":{"content":"Popover","placement":"top-end","id":"popover-08-end"}}]},{"name":"Gap","examples":[{"name":"No gap (Default)","props":{"content":"Popover","id":"popover-11"}},{"name":"With gap","props":{"content":"Popover","gap":true,"id":"popover-12"}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Popover","id":"popover-13"}},{"name":"Delay slow","props":{"content":"Popover","delay":"slow","id":"popover-14"}},{"name":"Delay fast","props":{"content":"Popover","delay":"fast","id":"popover-15"}},{"name":"No animation","props":{"content":"Popover","animation":"disabled","id":"popover-16"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"popover-17"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"popover-18"}}]}]')}},function(e){e.O(0,[64996,84375,82797,37426,62275,45712,24475,22440,44891,69223,49774,92888,40179],function(){return e(e.s=64148)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77380],{91002:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover",function(){return t(47952)}])},29712:function(e,n,t){"use strict";t.d(n,{P:function(){return getVariants}});let getVariants=(e,n,t)=>e.map((e,a)=>{var o;return{...e,slotCode:null!==(o=null==t?void 0:t.at(a))&&void 0!==o?o:"No code available",examples:e.examples.map(e=>{var t,a;return{...e,example:n({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},1227:function(e,n,t){"use strict";var a=t(52322),o=t(5632),s=t(2784),r=t(82797),l=t(37426);let VariantList=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[i,p]=(0,s.useState)(),c=(0,o.useRouter)();(0,s.useEffect)(()=>{if(c.query){var e;let n=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);p(e)}}},[c]);let getHref=e=>{var n,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[i&&(0,a.jsx)("div",{children:(0,a.jsx)(VariantList,{...i})}),!i&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,a.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},47952:function(e,n,t){"use strict";t.r(n);var a=t(52322),o=t(22440),s=t(24475),r=t(62275),l=t(69223),i=t(45712),p=t(44891),c=t(37426),m=t(1227),d=t(69780),u=t(29712);let getPopover=e=>{let{children:n,width:t,gap:o,spacing:s,placement:r,delay:l,content:i,behaviour:p}=e;return(0,a.jsxs)(c.Y1,{children:[n,(0,a.jsx)(c.Ys,{width:t,gap:o,spacing:s,placement:r,behaviour:p,delay:l,children:i})]})};n.default=()=>(0,a.jsx)(m.Z,{title:"DBPopover",variants:(0,u.P)(d,getPopover,[(0,a.jsx)(o.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(p.default,{})])})},69780:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"content":"Popover"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"content":"Popover"}},{"name":"expressive","className":"db-ui-expressive","props":{"content":"Popover"}}]},{"name":"Spacing","examples":[{"name":"Small (Default)","props":{"content":"Popover","spacing":"small"}},{"name":"Medium","props":{"content":"Popover","spacing":"medium"}},{"name":"None","props":{"content":"Popover","spacing":"none"}}]},{"name":"Placement","examples":[{"name":"bottom (Default)","props":{"content":"Popover","placement":"bottom"}},{"name":"top","props":{"content":"Popover","placement":"top"}},{"name":"left","props":{"content":"Popover","placement":"left"}},{"name":"right","props":{"content":"Popover","placement":"right"}}]},{"name":"Gap","examples":[{"name":"No gap (Default)","props":{"content":"Popover"}},{"name":"With gap","props":{"content":"Popover","gap":true}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Popover"}},{"name":"Delay slow","props":{"content":"Popover","delay":"slow"}},{"name":"Delay fast","props":{"content":"Popover","delay":"fast"}},{"name":"No animation","props":{"content":"Popover","behaviour":"plain"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed"}}]}]')}},function(e){e.O(0,[64996,84375,82797,37426,62275,45712,24475,22440,44891,69223,49774,92888,40179],function(){return e(e.s=91002)}),_N_E=e.O()}]);
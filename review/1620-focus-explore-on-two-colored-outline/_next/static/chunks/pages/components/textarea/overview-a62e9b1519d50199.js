(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5980],{56881:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea/overview",function(){return l(99853)}])},44496:function(e,a,l){"use strict";l.d(a,{P:function(){return getVariants}});let getVariants=(e,a,l)=>e.map((e,s)=>{var n;return{...e,slotCode:null!==(n=null==l?void 0:l.at(s))&&void 0!==n?n:"No code available",examples:e.examples.map(e=>{var l,s;return{...e,example:a({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}})}})},2670:function(e,a,l){"use strict";var s=l(52322),n=l(5632),r=l(2784),t=l(2087),i=l(31346);let VariantList=e=>{let{examples:a,slotCode:l}=e;return(0,s.jsx)(i.wq,{className:"variants-card",slotCode:l,children:(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[o,u]=(0,r.useState)(),d=(0,n.useRouter)();(0,r.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=l.find(e=>e.name.toLowerCase()===a);u(e)}}},[d]);let getHref=e=>{var a,l;return window.location.origin?"".concat(null===(l=window)||void 0===l?void 0:null===(a=l.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)("div",{children:(0,s.jsx)(VariantList,{...o})}),!o&&(0,s.jsx)(t.Z,{children:(0,s.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,s.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(i.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(i.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,s.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},99853:function(e,a,l){"use strict";l.r(a);var s=l(52322),n=l(23017),r=l(15407),t=l(50364),i=l(7789),o=l(72454),u=l(14383),d=l(31346),m=l(2670),p=l(92829),c=l(44496);let handleChange=e=>{let{debug:a}=console;a(e)},getTextarea=e=>{let{cols:a,disabled:l,message:n,label:r,placeholder:t,rows:i,value:o,variant:u,readOnly:m,required:p,children:c}=e;return(0,s.jsx)(d.GI,{cols:a,disabled:l,message:n,label:r,readOnly:m,onChange:handleChange,required:p,placeholder:null!=t?t:c,rows:i,defaultValue:o,variant:u})};a.default=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m.Z,{title:"DBTextarea",variants:(0,c.P)(p,getTextarea,[(0,s.jsx)(n.default,{}),(0,s.jsx)(r.default,{}),(0,s.jsx)(t.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(o.default,{}),(0,s.jsx)(u.default,{})])})})},92829:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"label":"Label"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"label":"Label"}},{"name":"expressive","className":"db-ui-expressive","props":{"label":"Label"}}]},{"name":"Message","examples":[{"name":"Basic (Default)","props":{"label":"Label"}},{"name":"Helper Message","props":{"label":"Label","message":"Helper Message"}}]},{"name":"Variant","examples":[{"name":"(Default) Basic","props":{"label":"Label","description":"(Default) Basic","message":"Helper Message"}},{"name":"Informational","props":{"label":"Label","description":"Informational","variant":"informational","message":"Informational Message"}},{"name":"Warning","props":{"label":"Label","description":"Warning","variant":"warning","message":"Warning Message"}},{"name":"Critical","props":{"label":"Label","description":"Critical","variant":"critical","message":"Critical Message"}},{"name":"Successful","props":{"label":"Label","description":"Successful","variant":"successful","message":"Successful Message"}}]},{"name":"States","examples":[{"name":"(Default) Empty","props":{"label":"Label","message":"Helper Message"}},{"name":"Filled","props":{"label":"Label","value":"Filled","message":"Helper Message"}},{"name":"Disabled","props":{"label":"Label","value":"Disabled","disabled":true,"message":"Helper Message"}},{"name":"Readonly","props":{"label":"Label","value":"Readonly","readOnly":true,"message":"Helper Message"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"label":"Label"}},{"name":"Required","props":{"label":"Label","required":true}},{"name":"Filled Required","props":{"label":"Label","value":"Filled Required","required":true}}]},{"name":"Rows","examples":[{"name":"(Default) 4 Rows","style":{"width":"328px"},"props":{"label":"(Default) 4 Rows","value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{"name":"Custom","style":{"width":"328px"},"props":{"label":"Custom Example 8 Rows","rows":8,"value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}]}]')}},function(e){e.O(0,[4996,4375,2087,1346,364,7789,2454,3017,4383,5407,9774,2888,179],function(){return e(e.s=56881)}),_N_E=e.O()}]);
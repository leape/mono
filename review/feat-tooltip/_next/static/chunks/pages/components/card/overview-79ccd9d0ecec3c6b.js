(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75190],{48314:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/overview",function(){return n(79652)}])},44496:function(a,e,n){"use strict";n.d(e,{P:function(){return getVariants}});let getVariants=(a,e,n)=>a.map((a,i)=>{var r;return{...a,slotCode:null!==(r=null==n?void 0:n.at(i))&&void 0!==r?r:"No code available",examples:a.examples.map(a=>{var n,i;return{...a,example:e({...a.props,id:null!==(n=a.props.id)&&void 0!==n?n:a.name,children:null!==(i=a.props.children)&&void 0!==i?i:a.name})}})}})},2670:function(a,e,n){"use strict";var i=n(52322),r=n(5632),t=n(2784),s=n(2087),l=n(24935);let VariantList=a=>{let{examples:e,slotCode:n}=a;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,i.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,i.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))})})};e.Z=a=>{let{title:e,variants:n}=a,[c,o]=(0,t.useState)(),p=(0,r.useRouter)();(0,t.useEffect)(()=>{if(p.query){var a;let e=null===(a=p.query.page)||void 0===a?void 0:a.toString();if(e){let a=n.find(a=>a.name.toLowerCase()===e);o(a)}}},[p]);let getHref=a=>{var e,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(e=n.location)||void 0===e?void 0:e.href,"?page=").concat(a.name.toLowerCase()):""};return(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)("div",{children:(0,i.jsx)(VariantList,{...c})}),!c&&(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,i.jsx)("h1",{children:e}),null==n?void 0:n.map((a,e)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(a),children:a.name})}),(0,i.jsx)(VariantList,{...a})]},"".concat(a.name,"-").concat(e)))]})})]})}},79652:function(a,e,n){"use strict";n.r(e);var i=n(52322),r=n(89310),t=n(59620),s=n(86303),l=n(88448),c=n(24935),o=n(2670),p=n(1304),m=n(44496);let getCard=a=>{let{colorVariant:e,variant:n,children:r,spacing:t}=a;return(0,i.jsxs)(c.f,{colorVariant:e,variant:n,spacing:t,children:[(0,i.jsx)("strong",{children:r}),e&&(0,i.jsx)("span",{children:e})]})};e.default=()=>(0,i.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,getCard,[(0,i.jsx)(r.default,{}),(0,i.jsx)(t.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(l.default,{})])})},1304:function(a){"use strict";a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) adaptive","props":{"variant":"interactive","spacing":"small","colorVariant":"adaptive"}},{"name":"neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"brand","props":{"colorVariant":"brand","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}},function(a){a.O(0,[64996,84375,2087,24935,59620,89310,86303,88448,49774,92888,40179],function(){return a(a.s=48314)}),_N_E=a.O()}]);
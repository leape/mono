(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5190],{48314:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/overview",function(){return n(79652)}])},44496:function(a,e,n){"use strict";n.d(e,{P:function(){return getVariants}});let getVariants=(a,e,n)=>a.map((a,r)=>{var i;return{...a,slotCode:null!==(i=null==n?void 0:n.at(r))&&void 0!==i?i:"No code available",examples:a.examples.map(a=>{var n,r;return{...a,example:e({...a.props,id:null!==(n=a.props.id)&&void 0!==n?n:a.name,children:null!==(r=a.props.children)&&void 0!==r?r:a.name})}})}})},2670:function(a,e,n){"use strict";var r=n(52322),i=n(5632),t=n(2784),s=n(2087),l=n(31346);let VariantList=a=>{let{examples:e,slotCode:n}=a;return(0,r.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,r.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,r.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))})})};e.Z=a=>{let{title:e,variants:n}=a,[c,o]=(0,t.useState)(),p=(0,i.useRouter)();(0,t.useEffect)(()=>{if(p.query){var a;let e=null===(a=p.query.page)||void 0===a?void 0:a.toString();if(e){let a=n.find(a=>a.name.toLowerCase()===e);o(a)}}},[p]);let getHref=a=>{var e,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(e=n.location)||void 0===e?void 0:e.href,"?page=").concat(a.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(VariantList,{...c})}),!c&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:e}),null==n?void 0:n.map((a,e)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(l.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(a),children:a.name})}),(0,r.jsx)(VariantList,{...a})]},"".concat(a.name,"-").concat(e)))]})})]})}},79652:function(a,e,n){"use strict";n.r(e);var r=n(52322),i=n(89310),t=n(59620),s=n(86303),l=n(88448),c=n(31346),o=n(2670),p=n(1304),m=n(44496);let getCard=a=>{let{colorVariant:e,variant:n,children:i,spacing:t}=a;return(0,r.jsxs)(c.f,{colorVariant:e,variant:n,spacing:t,children:[(0,r.jsx)("strong",{children:i}),e&&(0,r.jsx)("span",{children:e})]})};e.default=()=>(0,r.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,getCard,[(0,r.jsx)(i.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(l.default,{})])})},1304:function(a){"use strict";a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"neutral-strong","props":{"colorVariant":"neutral-strong","variant":"interactive","spacing":"small"}},{"name":"primary","props":{"colorVariant":"primary","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}},function(a){a.O(0,[4996,4375,2087,1346,9620,9310,6303,8448,9774,2888,179],function(){return a(a.s=48314)}),_N_E=a.O()}]);
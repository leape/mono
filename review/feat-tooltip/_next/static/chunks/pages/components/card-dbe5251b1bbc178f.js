(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16332],{99847:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card",function(){return e(6715)}])},44496:function(a,n,e){"use strict";e.d(n,{P:function(){return getVariants}});let getVariants=(a,n,e)=>a.map((a,r)=>{var i;return{...a,slotCode:null!==(i=null==e?void 0:e.at(r))&&void 0!==i?i:"No code available",examples:a.examples.map(a=>{var e,r;return{...a,example:n({...a.props,id:null!==(e=a.props.id)&&void 0!==e?e:a.name,children:null!==(r=a.props.children)&&void 0!==r?r:a.name})}})}})},2670:function(a,n,e){"use strict";var r=e(52322),i=e(5632),t=e(2784),s=e(2087),l=e(24935);let VariantList=a=>{let{examples:n,slotCode:e}=a;return(0,r.jsx)(l.wq,{className:"variants-card",slotCode:e,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((a,n)=>(0,r.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(n)))})})};n.Z=a=>{let{title:n,variants:e}=a,[c,o]=(0,t.useState)(),p=(0,i.useRouter)();(0,t.useEffect)(()=>{if(p.query){var a;let n=null===(a=p.query.page)||void 0===a?void 0:a.toString();if(n){let a=e.find(a=>a.name.toLowerCase()===n);o(a)}}},[p]);let getHref=a=>{var n,e;return window.location.origin?"".concat(null===(e=window)||void 0===e?void 0:null===(n=e.location)||void 0===n?void 0:n.href,"?page=").concat(a.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(VariantList,{...c})}),!c&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==e?void 0:e.map((a,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(l.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(a),children:a.name})}),(0,r.jsx)(VariantList,{...a})]},"".concat(a.name,"-").concat(n)))]})})]})}},6715:function(a,n,e){"use strict";e.r(n);var r=e(52322),i=e(89310),t=e(59620),s=e(86303),l=e(88448),c=e(24935),o=e(2670),p=e(1304),m=e(44496);let getCard=a=>{let{colorVariant:n,variant:e,children:i,spacing:t}=a;return(0,r.jsxs)(c.f,{colorVariant:n,variant:e,spacing:t,children:[(0,r.jsx)("strong",{children:i}),n&&(0,r.jsx)("span",{children:n})]})};n.default=()=>(0,r.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,getCard,[(0,r.jsx)(i.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(l.default,{})])})},1304:function(a){"use strict";a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"neutral-strong","props":{"colorVariant":"neutral-strong","variant":"interactive","spacing":"small"}},{"name":"primary","props":{"colorVariant":"primary","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}},function(a){a.O(0,[64996,84375,2087,24935,59620,89310,86303,88448,49774,92888,40179],function(){return a(a.s=99847)}),_N_E=a.O()}]);
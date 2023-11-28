(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45980],{56881:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea/overview",function(){return l(66105)}])},29712:function(e,a,l){"use strict";l.d(a,{P:function(){return n}});let n=(e,a,l)=>e.map((e,n)=>{var s;return{...e,slotCode:null!==(s=null==l?void 0:l.at(n))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var l,n;return{...e,example:a({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},1227:function(e,a,l){"use strict";var n=l(52322),s=l(5632),i=l(2784),t=l(66503),r=l(37426);let o=e=>{let{examples:a,slotCode:l}=e;return(0,n.jsx)(r.wq,{className:"variants-card",slotCode:l,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[d,u]=(0,i.useState)(),p=(0,s.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(a){let e=l.find(e=>e.name.toLowerCase()===a);u(e)}}},[p]);let m=e=>{var a,l;return window.location.origin?"".concat(null===(l=window)||void 0===l?void 0:null===(a=l.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{children:(0,n.jsx)(o,{...d})}),!d&&(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,n.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},66105:function(e,a,l){"use strict";l.r(a);var n=l(52322),s=l(53691),i=l(74774),t=l(79219),r=l(74600),o=l(46962),d=l(91596),u=l(27398),p=l(65708),m=l(34761),b=l(2784),c=l(37426),v=l(1227),f=l(92829),x=l(29712);let g=e=>{let{cols:a,disabled:l,message:s,label:i,placeholder:t,rows:r,value:o,variant:d,readOnly:u,required:p,children:m,invalid:v,labelVariant:f}=e,[x,g]=(0,b.useState)(o);return(0,n.jsx)(c.GI,{cols:a,disabled:l,message:s,label:i,labelVariant:f,readOnly:u,onChange:e=>{g(e.target.value)},required:p,placeholder:null!=t?t:m,rows:r,value:x,variant:d,invalid:v})};a.default=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v.Z,{title:"DBTextarea",variants:(0,x.P)(f,g,[(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(t.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(d.default,{}),(0,n.jsx)(u.default,{}),(0,n.jsx)(p.default,{}),(0,n.jsx)(m.default,{})])})})},92829:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"label":"Label"}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"label":"Label"}},{"name":"Expressive","className":"db-ui-expressive","props":{"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","props":{"label":"Label"}},{"name":"Floating Label","props":{"label":"Label","labelVariant":"floating","value":"Floating Label"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","props":{"label":"Label"}},{"name":"Helper Message","props":{"label":"Label","message":"Helper Message"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{"label":"Label","message":"Helper Message"}},{"name":"Critical","props":{"label":"Label","variant":"critical","message":"Critical Message"}},{"name":"Informational","props":{"label":"Label","variant":"informational","message":"Informational Message"}},{"name":"Successful","props":{"label":"Label","variant":"successful","message":"Successful Message"}},{"name":"Warning","props":{"label":"Label","variant":"warning","message":"Warning Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","props":{"label":"Label"}},{"name":"Filled","props":{"label":"Label","value":"Filled"}},{"name":"Filled - Invalid","props":{"label":"Label","value":"Filled - Invalid","invalid":true}},{"name":"Filled - Valid","props":{"label":"Label","value":"Filled - Valid","invalid":false}},{"name":"Disabled","props":{"label":"Label","disabled":true}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","props":{"label":"Label","labelVariant":"floating"}},{"name":"Filled","props":{"label":"Label","value":"Filled","labelVariant":"floating"}},{"name":"Filled - Invalid","props":{"label":"Label","invalid":true,"value":"Filled - Invalid","labelVariant":"floating"}},{"name":"Filled - Valid","props":{"label":"Label","value":"Filled - Valid","invalid":false,"labelVariant":"floating"}},{"name":"Disabled","props":{"label":"Label","disabled":true,"labelVariant":"floating"}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true,"labelVariant":"floating"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"label":"Label"}},{"name":"Required","props":{"label":"Label","required":true}},{"name":"Required - Filled","props":{"label":"Label","value":"Required - Filled","required":true}}]},{"name":"Rows","examples":[{"name":"(Default) 4 Rows","style":{"width":"328px"},"props":{"label":"(Default) 4 Rows","value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{"name":"Custom","style":{"width":"328px"},"props":{"label":"Custom Example 8 Rows","rows":8,"value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}]},{"name":"Content","examples":[{"name":"(Default) Visible Label","props":{"label":"Label","name":"Content"}},{"name":"Hidden Label","props":{"label":"Label","labelVariant":"hidden"}}]}]')}},function(e){e.O(0,[64996,23019,37426,66503,74600,91596,46962,27398,53691,65708,34761,74774,79219,49774,92888,40179],function(){return e(e.s=56881)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58367],{33137:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input",function(){return l(14704)}])},29712:function(e,a,l){"use strict";l.d(a,{P:function(){return n}});let n=(e,a,l)=>e.map((e,n)=>{var r;return{...e,slotCode:null!==(r=null==l?void 0:l.at(n))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var l,n;return{...e,example:a({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},1227:function(e,a,l){"use strict";var n=l(52322),r=l(5632),t=l(2784),s=l(82797),i=l(37426);let p=e=>{let{examples:a,slotCode:l}=e;return(0,n.jsx)(i.wq,{className:"variants-card",slotCode:l,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[o,b]=(0,t.useState)(),d=(0,r.useRouter)();(0,t.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=l.find(e=>e.name.toLowerCase()===a);b(e)}}},[d]);let u=e=>{var a,l;return window.location.origin?"".concat(null===(l=window)||void 0===l?void 0:null===(a=l.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("div",{children:(0,n.jsx)(p,{...o})}),!o&&(0,n.jsx)(s.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(i.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(i.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,n.jsx)(p,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},14704:function(e,a,l){"use strict";l.r(a);var n=l(52322),r=l(80095),t=l(46132),s=l(61914),i=l(22235),p=l(82492),o=l(41693),b=l(24134),d=l(81984),u=l(84401),m=l(2784),c=l(37426),v=l(1227),L=l(71952),f=l(29712);let x=e=>{let{label:a,variant:l,value:r,type:t,minLength:s,required:i,disabled:p,iconAfter:o,icon:b,children:d,message:u,labelVariant:v,readOnly:L,invalid:f}=e,[x,g]=(0,m.useState)(r);return(0,n.jsx)(c.aq,{label:a,message:u,placeholder:d,labelVariant:v,variant:l,value:x,type:t,minLength:s,required:i,disabled:p,readOnly:L,iconAfter:o,invalid:f,icon:b,onChange:e=>{g(e.target.value)}})};a.default=()=>(0,n.jsx)(v.Z,{title:"DBInput",variants:(0,f.P)(L,x,[(0,n.jsx)(r.default,{}),(0,n.jsx)(t.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(p.default,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(b.default,{}),(0,n.jsx)(d.default,{}),(0,n.jsx)(u.default,{})])})},71952:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"label":"Label"}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"label":"Label"}},{"name":"Expressive","className":"db-ui-expressive","props":{"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","props":{"label":"Label"}},{"name":"Floating Label","props":{"label":"Label","labelVariant":"floating","value":"Floating Label"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","props":{"label":"Label"}},{"name":"Helper Message","props":{"label":"Label","message":"Helper Message"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{"label":"Label","message":"Helper Message"}},{"name":"Critical","props":{"label":"Label","variant":"critical","message":"Critical Message"}},{"name":"Informational","props":{"label":"Label","variant":"informational","message":"Informational Message"}},{"name":"Successful","props":{"label":"Label","variant":"successful","message":"Successful Message"}},{"name":"Warning","props":{"label":"Label","variant":"warning","message":"Warning Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","props":{"label":"Label"}},{"name":"Filled","props":{"label":"Label","value":"Filled"}},{"name":"Filled - Invalid","props":{"label":"Label","value":"Filled - Invalid","invalid":true}},{"name":"Filled - Valid","props":{"label":"Label","value":"Filled - Valid","required":true}},{"name":"Disabled","props":{"label":"Label","disabled":true}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","props":{"label":"Label","labelVariant":"floating"}},{"name":"Filled","props":{"label":"Label","value":"Filled","labelVariant":"floating"}},{"name":"Filled - Invalid","props":{"label":"Label","invalid":true,"value":"Filled - Invalid","labelVariant":"floating"}},{"name":"Filled - Valid","props":{"label":"Label","value":"Filled - Valid","required":true,"labelVariant":"floating"}},{"name":"Disabled","props":{"label":"Label","disabled":true,"labelVariant":"floating"}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true,"labelVariant":"floating"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"Label","value":"(Default) Text"}},{"name":"Filled Number","props":{"label":"Number","value":"123456","type":"number"}},{"name":"Text - Leading Icon","props":{"label":"Label","icon":"x_placeholder"}},{"name":"Text - Leading Icon - Trailing Icon","props":{"label":"Label","icon":"x_placeholder","iconAfter":"x_placeholder"}},{"name":"Text - Trailing Icon","props":{"label":"Label","iconAfter":"x_placeholder"}},{"name":"Hidden Label","props":{"label":"Label","labelVariant":"hidden"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"label":"Label"}},{"name":"Required","props":{"label":"Label","required":true}},{"name":"Required - Filled","props":{"label":"Label","value":"Required - Filled","required":true}}]},{"name":"Example - Types","examples":[{"name":"(Default) Text","props":{"label":"Label"}},{"name":"Password","props":{"label":"Label","type":"password"}},{"name":"Search","props":{"label":"Label","type":"search"}},{"name":"E-Mail","props":{"label":"Label","type":"email"}},{"name":"Number","props":{"label":"Label","type":"number"}},{"name":"Tel","props":{"label":"Label","type":"tel"}},{"name":"URL","props":{"label":"Label","type":"url"}},{"name":"Date","props":{"label":"Label","type":"date"}},{"name":"Datetime Local","props":{"label":"Label","type":"datetime-local"}},{"name":"Month","props":{"label":"Label","type":"month"}},{"name":"Time","props":{"label":"Label","type":"time"}},{"name":"Week","props":{"label":"Label","type":"week"}}]}]')}},function(e){e.O(0,[64996,84375,82797,37426,84401,22235,24134,41693,82492,81984,80095,46132,61914,49774,92888,40179],function(){return e(e.s=33137)}),_N_E=e.O()}]);
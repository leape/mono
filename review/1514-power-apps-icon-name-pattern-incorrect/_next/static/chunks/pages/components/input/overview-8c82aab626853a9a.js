(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4325],{46286:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input/overview",function(){return l(53029)}])},75549:function(e,a,l){"use strict";l.d(a,{P:function(){return n}});let n=(e,a,l)=>{var n,s,i;return e.map((e,t)=>({...e,slotCode:null!==(n=null==l?void 0:l.at(t))&&void 0!==n?n:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},68623:function(e,a,l){"use strict";var n=l(52322),s=l(5632),i=l(2784),t=l(18338),r=l(74638);let o=e=>{let{examples:a,slotCode:l}=e;return(0,n.jsx)(r.wq,{className:"variants-card",slotCode:l,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[u,c]=(0,i.useState)(),d=(0,s.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=l.find(e=>e.name.toLowerCase()===a);c(e)}}},[d]);let m=e=>{var a,l;return window.location.origin?"".concat(null===(l=window)||void 0===l?void 0:null===(a=l.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)("div",{children:(0,n.jsx)(o,{...u})}),!u&&(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,n.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},53029:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return p}});var n=l(52322),s=l(35675),i=l(87037),t=l(88331),r=l(57056),o=l(74638),u=l(68623),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"label":"Label","message":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"label":"Label","message":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive","props":{"label":"Label","message":"expressive"}}]},{"name":"Variant","examples":[{"name":"(Default) Basic","props":{"label":"Label","message":"(Default) Basic","placeholder":"I am a placeholder"}},{"name":"Informational","props":{"label":"Label","message":"Informational","variant":"informational"}},{"name":"Warning","props":{"label":"Label","message":"Warning","variant":"warning"}},{"name":"Critical","props":{"label":"Label","message":"Critical","variant":"critical"}},{"name":"Successful","props":{"label":"Label","message":"Successful","variant":"successful"}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","message":"Default"}},{"name":"Filled","props":{"label":"Label","value":"Input Text","disabled":true,"message":"Filled"}},{"name":"Filled Number","props":{"label":"Label","value":"123456","type":"number","message":"Filled Number"}},{"name":"Invalid","props":{"label":"Label","message":"Invalid","required":true,"minLength":5}},{"name":"Disabled","props":{"label":"Label","disabled":true,"message":"Disabled"}},{"name":"Disabled with value","props":{"label":"Label","value":"Input Text","disabled":true,"message":"Disabled with value"}},{"name":"Required","props":{"label":"Label","value":"Input Text","disabled":true,"required":true,"message":"Required"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"Label","message":"(Default) Text"}},{"name":"Leading Icon + Text","props":{"label":"Label","icon":"account","message":"Leading Icon + Text"}},{"name":"Leading Icon + Text + Trailing Icon","props":{"label":"Label","icon":"account","iconAfter":"edit","message":"Leading Icon + Text + Trailing Icon"}},{"name":"Text + Trailing Icon","props":{"label":"Label","iconAfter":"edit","message":"Text + Trailing Icon"}},{"name":"Text + Trailing Icon + Variant:Successful","props":{"label":"Label","variant":"successful","iconAfter":"edit","message":"Text + Trailing Icon + Variant:Successful"}}]}]'),d=l(75549);let m=e=>{let{label:a,variant:l,value:s,type:i,minLength:t,required:r,disabled:u,iconAfter:c,icon:d,children:m}=e;return(0,n.jsx)(o.aq,{label:a,message:m,placeholder:m,variant:l,value:s,type:i,minLength:t,required:r,disabled:u,iconAfter:c,icon:d})};var p=()=>(0,n.jsx)(u.Z,{title:"DBInput",variants:(0,d.P)(c,m,[(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(t.default,{}),(0,n.jsx)(r.default,{})])})}},function(e){e.O(0,[4996,4375,8338,4638,8331,7056,7037,5675,9774,2888,179],function(){return e(e.s=46286)}),_N_E=e.O()}]);
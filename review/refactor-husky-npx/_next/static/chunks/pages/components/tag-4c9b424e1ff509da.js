(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{55413:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag",function(){return n(43695)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,r,i;return e.map((e,s)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(s))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},68623:function(e,a,n){"use strict";var t=n(52322),r=n(5632),i=n(2784),s=n(18338),o=n(51963);let l=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(o.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,u]=(0,i.useState)(),p=(0,r.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[p]);let m=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(l,{...c})}),!c&&(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(o.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(o.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(l,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},43695:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(51336),i=n(57559),s=n(32576),o=n(56388),l=n(44429),c=n(14183),u=n(97453),p=n(51963),m=n(68623),d=n(47837),v=n(75549);let f=e=>{let{variant:a,disabled:n,children:r,icon:i,overflow:s,checked:o,noText:l,behaviour:c,emphasis:u,label:m,removeButton:d,name:v}=e;return(0,t.jsx)(p.k8,{variant:a,disabled:n,icon:i,noText:l,behaviour:c,emphasis:u,checked:o,label:m,overflow:s,removeButton:d,name:v,onRemove:()=>{alert(r.toString())},children:r})};a.default=()=>(0,t.jsx)(m.Z,{title:"DBTag",variants:(0,v.P)(d,f,[(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(c.default,{}),(0,t.jsx)(u.default,{})])})},47837:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive","props":{"behaviour":"interactive"}},{"name":"Interactive-unique 01","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Interactive-unique 02","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"behaviour":"interactive"}},{"name":"Checked","props":{"behaviour":"interactive","checked":true}},{"name":"Disabled","props":{"behaviour":"interactive","checked":true,"disabled":true}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]}]')}},function(e){e.O(0,[4996,4375,8338,1963,2576,6388,4429,4183,1336,7559,7453,9774,2888,179],function(){return e(e.s=55413)}),_N_E=e.O()}]);
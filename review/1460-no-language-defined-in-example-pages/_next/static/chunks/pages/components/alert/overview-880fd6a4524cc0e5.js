(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9251],{4111:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/overview",function(){return t(51245)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>{var a,i,l;return e.map((e,r)=>({...e,slotCode:null!==(a=null==t?void 0:t.at(r))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>({...e,example:n({...e.props,id:null!==(i=e.props.id)&&void 0!==i?i:e.name,children:null!==(l=e.props.children)&&void 0!==l?l:e.name})}))}))}},68623:function(e,n,t){"use strict";var a=t(52322),i=t(5632),l=t(2784),r=t(18338),s=t(6210);let d=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(s.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[o,p]=(0,l.useState)(),c=(0,i.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let n=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);p(e)}}},[c]);let h=e=>{var n,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(d,{...o})}),!o&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,a.jsx)(d,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},51245:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(52322),i=t(92511),l=t(14653),r=t(3144),s=t(58937),d=t(7990),o=t(6210),p=t(68623),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"expressive","style":{"width":"300px"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Inline","style":{"width":"300px"},"props":{"type":"inline","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Headline & Text & Link","style":{"width":"300px"},"props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Text & Link","style":{"width":"300px"},"props":{"link":{"href":"#","text":"Link"}}},{"name":"Text","style":{"width":"300px"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"click":"()=>{alert(\\"click close button\\")}"}},{"name":"Permanent","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"behaviour":"permanent"}}]}]'),h=t(75549);let x=e=>{let{variant:n,icon:t,headline:i,link:l,type:r,children:s,behaviour:d}=e;return(0,a.jsx)(o.H3,{variant:n,icon:t,headline:i,link:l,type:r,behaviour:d,onClick:()=>{alert(s.toString())},children:s})};var u=()=>(0,a.jsx)(p.Z,{title:"DBAlert",variants:(0,h.P)(c,x,[(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(d.default,{})])})}},function(e){e.O(0,[4996,4375,8338,6210,3144,8937,2511,7990,4653,9774,2888,179],function(){return e(e.s=4111)}),_N_E=e.O()}]);
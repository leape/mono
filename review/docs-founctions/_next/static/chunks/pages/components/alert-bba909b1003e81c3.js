(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9688],{44365:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert",function(){return t(17144)}])},44496:function(e,n,t){"use strict";t.d(n,{P:function(){return getVariants}});let getVariants=(e,n,t)=>e.map((e,a)=>{var i;return{...e,slotCode:null!==(i=null==t?void 0:t.at(a))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var t,a;return{...e,example:n({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},2670:function(e,n,t){"use strict";var a=t(52322),i=t(5632),l=t(2784),r=t(2087),s=t(31346);let VariantList=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(s.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[d,o]=(0,l.useState)(),p=(0,i.useRouter)();(0,l.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);o(e)}}},[p]);let getHref=e=>{var n,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)("div",{children:(0,a.jsx)(VariantList,{...d})}),!d&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,a.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},17144:function(e,n,t){"use strict";t.r(n);var a=t(52322),i=t(88097),l=t(68951),r=t(951),s=t(40869),d=t(5956),o=t(31346),p=t(2670),c=t(86600),h=t(44496);let getAlert=e=>{let{variant:n,icon:t,headline:i,link:l,type:r,children:s,behaviour:d}=e;return(0,a.jsx)(o.H3,{variant:n,icon:t,headline:i,link:l,type:r,behaviour:d,onClick:()=>{alert(s.toString())},children:s})};n.default=()=>(0,a.jsx)(p.Z,{title:"DBAlert",variants:(0,h.P)(c,getAlert,[(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(d.default,{})])})},86600:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"expressive","style":{"width":"300px"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Inline","style":{"width":"300px"},"props":{"type":"inline","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Headline & Text & Link","style":{"width":"300px"},"props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Text & Link","style":{"width":"300px"},"props":{"link":{"href":"#","text":"Link"}}},{"name":"Text","style":{"width":"300px"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"click":"()=>{alert(\\"click close button\\")}"}},{"name":"Permanent","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"behaviour":"permanent"}}]}]')}},function(e){e.O(0,[4996,4375,2087,1346,951,869,8097,3570,8951,9774,2888,179],function(){return e(e.s=44365)}),_N_E=e.O()}]);
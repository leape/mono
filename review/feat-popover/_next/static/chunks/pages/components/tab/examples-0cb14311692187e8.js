(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50633],{37468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/examples",function(){return n(22273)}])},47431:function(e,t,n){"use strict";var c=n(52322),i=n(2784),r=n(41220),d=n(36029);let s=(0,i.forwardRef)(function(e,t){let n=(0,i.useRef)(null),[s,a]=(0,i.useState)(()=>r.IY),[l,u]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{if(a((0,d.Vj)()),e.stylePath&&u(e.stylePath),e.active){var t;null===(t=n.current)||void 0===t||t.click()}},[]),(0,c.jsxs)("div",{ref:t,id:e.id,className:(0,d.yI)("db-tab",e.className),children:[l?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,c.jsx)("input",{type:"radio",ref:n,name:e.name,id:s}),(0,c.jsx)("label",{role:"tab",htmlFor:s,children:e.label}),(0,c.jsxs)("section",{role:"tabpanel",id:"content-"+s,children:[e.content?(0,c.jsx)(c.Fragment,{children:e.content}):null,e.children]})]})});t.Z=s},41220:function(e,t,n){"use strict";var c,i,r,d,s,a,l;n.d(t,{$f:function(){return T},DM:function(){return j},IY:function(){return u},Kn:function(){return x},SU:function(){return o},YP:function(){return h},ce:function(){return b},iw:function(){return c},r$:function(){return r}});let u="OVERWRITE_DEFAULT_ID",o="LABEL SHOULD BE SET",x="-message",h="Back",b="Close Button";(s=c||(c={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let T=Object.entries(c).map(e=>{let[,t]=e;return t});(i||(i={})).PRIMARY="primary",(a=r||(r={})).BASE="base",a.BASE_STRONG="base-strong",a.BASE_TRANSPARENT_FULL="base-transparent-full",a.BASE_TRANSPARENT_SEMI="base-transparent-semi",a.NEUTRAL="neutral",a.NEUTRAL_STRONG="neutral-strong",a.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",a.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",a.BRAND="brand",a.BRAND_TRANSPARENT_FULL="brand-transparent-full",a.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",a.SUCCESSFUL="successful",a.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",a.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",a.CRITICAL="critical",a.CRITICAL_TRANSPARENT_Full="critical-transparent-full",a.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",a.WARNING="warning",a.WARNING_TRANSPARENT_FULL="warning-transparent-full",a.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",a.INFORMATIONAL="informational",a.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",a.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(r).map(e=>{let[,t]=e;return t});Object.entries(i).map(e=>{let[,t]=e;return t}),(l=d||(d={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,t]=e;return t})},36029:function(e,t,n){"use strict";n.d(t,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&addAttributeToChildren(e,t)})},cls=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let c="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let t in e)e[t]&&(c+="".concat(t," "))}}),c.trim()},getMessageIcon=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},22273:function(e,t,n){"use strict";n.r(t);var c=n(52322),i=n(2087),r=n(47431);t.default=()=>(0,c.jsxs)(i.Z,{children:[(0,c.jsx)("h1",{children:" DBTab Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"active:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{active:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"active, content, describedbyid, id, key, label, name, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{active:!0,content:"account",describedbyid:"account",id:"account",label:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"content, describedbyid, id, key, label, name, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{content:"account",describedbyid:"account",id:"account",label:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"content, describedbyid, id, key, name, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{content:"account",describedbyid:"account",id:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"content, describedbyid, id, key, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{content:"account",describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{tabIndex:100,title:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex, title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{tabIndex:100,title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"content:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{content:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(r.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[84375,2087,49774,92888,40179],function(){return e(e.s=37468)}),_N_E=e.O()}]);
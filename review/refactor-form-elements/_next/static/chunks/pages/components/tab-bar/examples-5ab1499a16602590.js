(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45558],{18275:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return n(36033)}])},99085:function(e,t,n){"use strict";var r=n(52322),i=n(2784),c=n(82154),s=n(36029);let d=(0,i.forwardRef)(function(e,t){var n;let[d,a]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,r.jsxs)("div",{role:"tablist",ref:t,id:e.id,className:(0,s.yI)("cmp-tab-bar",e.className),children:[d?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:d})}):null,e.tabs?(0,r.jsx)(r.Fragment,{children:null===(n=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===n?void 0:n.map(e=>(0,r.jsx)(c.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});t.Z=d},82154:function(e,t,n){"use strict";n.d(t,{Q:function(){return r.Z}});var r=n(47431)},47431:function(e,t,n){"use strict";var r=n(52322),i=n(2784),c=n(41220),s=n(36029);let d=(0,i.forwardRef)(function(e,t){let n=(0,i.useRef)(null),[d,a]=(0,i.useState)(()=>c.IY),[l,u]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{if(a((0,s.Vj)()),e.stylePath&&u(e.stylePath),e.active){var t;null===(t=n.current)||void 0===t||t.click()}},[]),(0,r.jsxs)("div",{ref:t,id:e.id,className:(0,s.yI)("db-tab",e.className),children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,r.jsx)("input",{type:"radio",ref:n,name:e.name,id:d}),(0,r.jsx)("label",{role:"tab",htmlFor:d,children:e.label}),(0,r.jsxs)("section",{role:"tabpanel",id:"content-"+d,children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.children]})]})});t.Z=d},41220:function(e,t,n){"use strict";var r,i,c,s,d,a,l;n.d(t,{$f:function(){return j},DM:function(){return T},D_:function(){return f},IY:function(){return u},Kn:function(){return h},SU:function(){return o},YP:function(){return x},ce:function(){return b},iw:function(){return r},r$:function(){return c}});let u="OVERWRITE_DEFAULT_ID",o="LABEL SHOULD BE SET",h="-message",f="-placeholder",x="Back",b="Close Button";(d=r||(r={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let j=Object.entries(r).map(e=>{let[,t]=e;return t});(i||(i={})).PRIMARY="primary",(a=c||(c={})).NEUTRAL="neutral",a.NEUTRAL_STRONG="neutral-strong",a.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",a.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",a.PRIMARY="primary",a.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",a.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",a.SUCCESSFUL="successful",a.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",a.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",a.CRITICAL="critical",a.CRITICAL_TRANSPARENT_Full="critical-transparent-full",a.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",a.WARNING="warning",a.WARNING_TRANSPARENT_FULL="warning-transparent-full",a.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",a.INFORMATIONAL="informational",a.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",a.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let T=Object.entries(c).map(e=>{let[,t]=e;return t});Object.entries(i).map(e=>{let[,t]=e;return t}),(l=s||(s={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,t]=e;return t})},36029:function(e,t,n){"use strict";n.d(t,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&addAttributeToChildren(e,t)})},cls=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let t in e)e[t]&&(r+="".concat(t," "))}}),r.trim()},getMessageIcon=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},36033:function(e,t,n){"use strict";n.r(t);var r=n(52322),i=n(2087),c=n(99085);t.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBTabBar Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"name:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{name:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, name, tabIndex, tabs, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{describedbyid:"account",id:"account",name:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, tabs, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{describedbyid:"account",id:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{tabIndex:100,title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"tabs:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{tabs:"undefined",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[84375,2087,49774,92888,40179],function(){return e(e.s=18275)}),_N_E=e.O()}]);
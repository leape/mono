(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80594],{8467:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/examples",function(){return n(10050)}])},78061:function(e,t,n){"use strict";var i=n(52322),d=n(2784),a=n(36029),r=n(41220);let s=(0,d.forwardRef)(function(e,t){let[n,s]=(0,d.useState)(()=>r.IY),[l,c]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{s(e.id||"popover-"+(0,a.Vj)()),e.stylePath&&c(e.stylePath)},[]),(0,i.jsxs)("i",{ref:t,id:n,className:(0,a.yI)("db-popover",e.className),"data-spacing":e.spacing,"data-gap":e.gap,"data-behaviour":e.behaviour,"data-open":e.open,"data-delay":e.delay,"data-width":e.width,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),children:[l?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});t.Z=s},41220:function(e,t,n){"use strict";var i,d,a,r,s,l,c;n.d(t,{$f:function(){return j},DM:function(){return T},IY:function(){return h},Kn:function(){return o},SU:function(){return u},YP:function(){return p},ce:function(){return x},iw:function(){return i},r$:function(){return a}});let h="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",o="-message",p="Back",x="Close Button";(s=i||(i={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let j=Object.entries(i).map(e=>{let[,t]=e;return t});(d||(d={})).PRIMARY="primary",(l=a||(a={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.BRAND="brand",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.WARNING="warning",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let T=Object.entries(a).map(e=>{let[,t]=e;return t});Object.entries(d).map(e=>{let[,t]=e;return t}),(c=r||(r={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,t]=e;return t})},36029:function(e,t,n){"use strict";n.d(t,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&addAttributeToChildren(e,t)})},cls=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let t in e)e[t]&&(i+="".concat(t," "))}}),i.trim()},getMessageIcon=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},10050:function(e,t,n){"use strict";n.r(t);var i=n(52322),d=n(2087),a=n(78061);t.default=()=>(0,i.jsxs)(d.Z,{children:[(0,i.jsx)("h1",{children:" DBPopover Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"behaviour, delay, describedbyid, gap, id, key, placement, spacing, tabIndex, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",describedbyid:"account",gap:!0,id:"account",placement:"right",spacing:"medium",tabIndex:100,title:"account",width:"fixed",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, id, key, placement, spacing, tabIndex, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,id:"account",placement:"right",spacing:"medium",tabIndex:100,title:"account",width:"fixed",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, key, placement, spacing, tabIndex, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,placement:"right",spacing:"medium",tabIndex:100,title:"account",width:"fixed",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, placement, spacing, tabIndex, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,placement:"right",spacing:"medium",tabIndex:100,title:"account",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, placement, spacing, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,placement:"right",spacing:"medium",title:"account",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, placement, spacing, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,placement:"right",spacing:"medium",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, placement, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,placement:"right",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, delay, gap, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",gap:!0,width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, delay, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",delay:"slow",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"spacing:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{spacing:"medium",children:"Test"})]}),(0,i.jsx)("dt",{children:"placement:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{placement:"right",children:"Test"})]}),(0,i.jsx)("dt",{children:"gap:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{gap:!0,children:"Test"})]}),(0,i.jsx)("dt",{children:"delay:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{delay:"slow",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(a.Z,{behaviour:"plain",children:"Test"})]})]})]})}},function(e){e.O(0,[84375,2087,49774,92888,40179],function(){return e(e.s=8467)}),_N_E=e.O()}]);
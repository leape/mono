(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80594],{8467:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/examples",function(){return n(10050)}])},78061:function(e,t,n){"use strict";var i=n(52322),r=n(2784),d=n(36029),c=n(41220);let a=(0,r.forwardRef)(function(e,t){let[n,a]=(0,r.useState)(()=>c.IY),[s,l]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{a(e.id||"popover-"+(0,d.Vj)()),e.stylePath&&l(e.stylePath)},[]),(0,i.jsxs)("div",{ref:t,id:n,className:(0,d.yI)("db-popover",e.className),"data-spacing":e.spacing,"data-gap":e.gap,"data-behaviour":e.behaviour,"data-open":e.open,"data-delay":e.delay,"data-width":e.width,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),children:[s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:s})}):null,e.children]})});t.Z=a},41220:function(e,t,n){"use strict";var i,r,d,c,a,s,l;n.d(t,{$f:function(){return j},DM:function(){return m},IY:function(){return u},Kn:function(){return p},SU:function(){return o},YP:function(){return h},ce:function(){return x},iw:function(){return i},r$:function(){return d}});let u="OVERWRITE_DEFAULT_ID",o="LABEL SHOULD BE SET",p="-message",h="Back",x="Close Button";(a=i||(i={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive";let j=Object.entries(i).map(e=>{let[,t]=e;return t});(r||(r={})).PRIMARY="primary",(s=d||(d={})).NEUTRAL="neutral",s.NEUTRAL_STRONG="neutral-strong",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let m=Object.entries(d).map(e=>{let[,t]=e;return t});Object.entries(r).map(e=>{let[,t]=e;return t}),(l=c||(c={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,t]=e;return t})},36029:function(e,t,n){"use strict";n.d(t,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&addAttributeToChildren(e,t)})},cls=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let t in e)e[t]&&(i+="".concat(t," "))}}),i.trim()},getMessageIcon=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},10050:function(e,t,n){"use strict";n.r(t);var i=n(52322),r=n(2087),d=n(78061);t.default=()=>(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("h1",{children:" DBPopover Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"delay:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{delay:"slow",children:"Test"})]}),(0,i.jsx)("dt",{children:"describedbyid, gap, id, key, placement, spacing, tabIndex, title, width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",gap:!0,id:"account",placement:"right",spacing:"medium",tabIndex:100,title:"account",width:"fixed",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, gap, id, key, placement, spacing, tabIndex, title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",gap:!0,id:"account",placement:"right",spacing:"medium",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"gap, id, key, placement, spacing, tabIndex, title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,id:"account",placement:"right",spacing:"medium",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"gap, key, placement, spacing, tabIndex, title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,placement:"right",spacing:"medium",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"gap, placement, spacing, tabIndex, title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,placement:"right",spacing:"medium",tabIndex:100,title:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"gap, placement, spacing, title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,placement:"right",spacing:"medium",title:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"gap, placement, spacing:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,placement:"right",spacing:"medium",children:"Test"})]}),(0,i.jsx)("dt",{children:"gap, placement:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,placement:"right",children:"Test"})]}),(0,i.jsx)("dt",{children:"gap:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{gap:!0,children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{behaviour:"plain",children:"Test"})]}),(0,i.jsx)("dt",{children:"width:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{width:"fixed",children:"Test"})]}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{id:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{tabIndex:100,children:"Test"})]}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{title:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"spacing:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{spacing:"medium",children:"Test"})]}),(0,i.jsx)("dt",{children:"placement:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{placement:"right",children:"Test"})]})]})]})}},function(e){e.O(0,[84375,2087,49774,92888,40179],function(){return e(e.s=8467)}),_N_E=e.O()}]);
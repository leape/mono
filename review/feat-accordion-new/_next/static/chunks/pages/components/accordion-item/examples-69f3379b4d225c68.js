(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1432],{10463:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/examples",function(){return t(10910)}])},13524:function(e,n,t){"use strict";var l=t(52322),r=t(2784),i=t(7070),s=t(8490);let c=(0,r.forwardRef)(function(e,n){let[t,c]=(0,r.useState)(()=>s.IY),[d,o]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{c(e.id||"accordion-item-"+(0,i.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,l.jsxs)("details",{ref:n,id:t,className:(0,i.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,children:[d?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,l.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,l.jsx)(l.Fragment,{children:e.title}):null,e.title?null:(0,l.jsx)(l.Fragment,{children:e.slotTitle})]}),(0,l.jsxs)("div",{children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.content?null:(0,l.jsx)(l.Fragment,{children:e.children})]})]})});n.Z=c},8490:function(e,n,t){"use strict";var l,r,i,s,c,d,o;t.d(n,{$f:function(){return h},DM:function(){return j},IY:function(){return a},SU:function(){return u},YP:function(){return T},ce:function(){return x},iw:function(){return l},r$:function(){return i}});let a="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",T="Back",x="Close Button";(c=l||(l={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive";let h=Object.entries(l).map(e=>{let[,n]=e;return n});(r||(r={})).PRIMARY="primary",(d=i||(i={})).NEUTRAL="neutral",d.NEUTRAL_STRONG="neutral-strong",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.PRIMARY="primary",d.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",d.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(r).map(e=>{let[,n]=e;return n}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{Vj:function(){return l},yI:function(){return i},yn:function(){return r}});let l=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},r=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&r(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let l="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)l+="".concat(e," ");else for(let n in e)e[n]&&(l+="".concat(n," "))}}),l.trim()}},10910:function(e,n,t){"use strict";t.r(n);var l=t(52322),r=t(18338),i=t(13524);n.default=()=>(0,l.jsxs)(r.Z,{children:[(0,l.jsx)("h1",{children:" DBAccordionItem Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"content:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{content:"account",children:"Test"})]}),(0,l.jsx)("dt",{children:"describedbyid, id, key, onToggle, slotTitle, tabIndex, title:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),slotTitle:(0,l.jsx)("div",{children:"slotTitle"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex, title:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"id, key, onToggle, tabIndex:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{id:"account",onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"key, onToggle, tabIndex:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"onToggle, tabIndex:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{onToggle:e=>console.log(e),tabIndex:100,children:"Test"})]}),(0,l.jsx)("dt",{children:"onToggle:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{onToggle:e=>console.log(e),children:"Test"})]}),(0,l.jsx)("dt",{children:"disabled:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{disabled:!0,children:"Test"})]}),(0,l.jsx)("dt",{children:"slotTitle:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{slotTitle:(0,l.jsx)("div",{children:"slotTitle"}),children:"Test"})]}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{title:"account",children:"Test"})]}),(0,l.jsx)("dt",{children:"describedbyid:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{describedbyid:"account",children:"Test"})]}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{id:"account",children:"Test"})]}),(0,l.jsx)("dt",{children:"key:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{children:"Test"},"account")]}),(0,l.jsx)("dt",{children:"tabIndex:"})," ",(0,l.jsxs)("dd",{children:[" ",(0,l.jsx)(i.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=10463)}),_N_E=e.O()}]);
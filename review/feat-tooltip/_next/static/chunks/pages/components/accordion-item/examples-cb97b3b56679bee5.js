(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81432],{10463:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/examples",function(){return t(99802)}])},72061:function(e,n,t){"use strict";var r=t(52322),i=t(2784),l=t(36029),s=t(41220);let d=(0,i.forwardRef)(function(e,n){let[t,d]=(0,i.useState)(()=>s.IY),[c,o]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{d(e.id||"accordion-item-"+(0,l.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,r.jsxs)("details",{ref:n,id:t,className:(0,l.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,children:[c?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,r.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,r.jsx)(r.Fragment,{children:e.title}):null,e.title?null:(0,r.jsx)(r.Fragment,{children:e.slotTitle})]}),(0,r.jsxs)("div",{children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.content?null:(0,r.jsx)(r.Fragment,{children:e.children})]})]})});n.Z=d},41220:function(e,n,t){"use strict";var r,i,l,s,d,c,o;t.d(n,{$f:function(){return j},DM:function(){return A},IY:function(){return a},Kn:function(){return T},SU:function(){return u},YP:function(){return h},ce:function(){return x},iw:function(){return r},r$:function(){return l}});let a="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",T="-message",h="Back",x="Close Button";(d=r||(r={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let j=Object.entries(r).map(e=>{let[,n]=e;return n});(i||(i={})).PRIMARY="primary",(c=l||(l={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.BRAND="brand",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.WARNING="warning",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let A=Object.entries(l).map(e=>{let[,n]=e;return n});Object.entries(i).map(e=>{let[,n]=e;return n}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},36029:function(e,n,t){"use strict";t.d(n,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&addAttributeToChildren(e,n)})},cls=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},getMessageIcon=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},99802:function(e,n,t){"use strict";t.r(n);var r=t(52322),i=t(2087),l=t(72061);n.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBAccordionItem Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"content:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{content:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, onToggle, slotTitle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),slotTitle:(0,r.jsx)("div",{children:"slotTitle"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"id, key, onToggle, tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{id:"account",onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"key, onToggle, tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{onToggle:e=>console.log(e),tabIndex:100,children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"onToggle, tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{onToggle:e=>console.log(e),tabIndex:100,children:"Test"})]}),(0,r.jsx)("dt",{children:"onToggle:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{onToggle:e=>console.log(e),children:"Test"})]}),(0,r.jsx)("dt",{children:"disabled:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{disabled:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"slotTitle:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{slotTitle:(0,r.jsx)("div",{children:"slotTitle"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(l.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[84375,2087,49774,92888,40179],function(){return e(e.s=10463)}),_N_E=e.O()}]);
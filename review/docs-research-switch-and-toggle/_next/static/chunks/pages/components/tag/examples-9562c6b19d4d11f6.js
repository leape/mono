(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8686],{62509:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/examples",function(){return n(44339)}])},96889:function(e,t,n){"use strict";var i=n(52322),c=n(2784),d=n(7070);let a=(0,c.forwardRef)(function(e,t){let[n,a]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,i.jsxs)("button",{id:e.id,ref:t,className:(0,d.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:[n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});t.Z=a},94938:function(e,t,n){"use strict";n.d(t,{Y:function(){return i.Z}});var i=n(96889)},35524:function(e,t,n){"use strict";var i=n(52322),c=n(2784),d=n(94938),a=n(7070);let o=(0,c.forwardRef)(function(e,t){function n(){return e.removeButton?e.removeButton:"Remove tag"}let[o,s]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,i.jsxs)("div",{ref:t,id:e.id,className:(0,a.yI)("db-tag",e.className),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[o?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:o})}):null,e.children,e.text?(0,i.jsx)(i.Fragment,{children:e.text}):null,"removable"===e.behaviour?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:t=>void(e.onRemove&&e.onRemove()),noText:!0,title:n(),children:n()})}):null]})});t.Z=o},7070:function(e,t,n){"use strict";n.d(t,{Vj:function(){return i},mT:function(){return a},yI:function(){return d},yn:function(){return c}});let i=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},c=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&c(e,t)})},d=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let t in e)e[t]&&(i+="".concat(t," "))}}),i.trim()},a=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},44339:function(e,t,n){"use strict";n.r(t);var i=n(52322),c=n(18338),d=n(35524);t.default=()=>(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h1",{children:" DBTag Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"behaviour:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{behaviour:"removable",children:"Test"})]}),(0,i.jsx)("dt",{children:"behaviour, describedbyid, disabled, emphasis, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{behaviour:"removable",describedbyid:"account",disabled:!0,emphasis:"strong",icon:"account",id:"account",noText:!0,onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, disabled, emphasis, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",disabled:!0,emphasis:"strong",icon:"account",id:"account",noText:!0,onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, noText, onRemove, overflow, removeButton, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",noText:!0,onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, onRemove, overflow, removeButton, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, overflow, removeButton, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",overflow:!0,removeButton:"account",tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, overflow, tabIndex, text, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",overflow:!0,tabIndex:100,text:"account",title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, overflow, tabIndex, title, value, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",overflow:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, icon, id, key, overflow, tabIndex, title, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",emphasis:"strong",icon:"account",id:"account",overflow:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"emphasis, icon, id, key, overflow, tabIndex, title, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",icon:"account",id:"account",overflow:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"emphasis, icon, key, overflow, tabIndex, title, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",icon:"account",overflow:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"emphasis, icon, overflow, tabIndex, title, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",icon:"account",overflow:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"})]}),(0,i.jsx)("dt",{children:"emphasis, icon, overflow, title, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",icon:"account",overflow:!0,title:"account",variant:"critical",children:"Test"})]}),(0,i.jsx)("dt",{children:"emphasis, icon, overflow, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",icon:"account",overflow:!0,variant:"critical",children:"Test"})]}),(0,i.jsx)("dt",{children:"emphasis, overflow, variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",overflow:!0,variant:"critical",children:"Test"})]}),(0,i.jsx)("dt",{children:"emphasis, overflow:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",overflow:!0,children:"Test"})]}),(0,i.jsx)("dt",{children:"emphasis:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{emphasis:"strong",children:"Test"})]}),(0,i.jsx)("dt",{children:"disabled:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{disabled:!0,children:"Test"})]}),(0,i.jsx)("dt",{children:"noText:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{noText:!0,children:"Test"})]}),(0,i.jsx)("dt",{children:"onRemove:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{onRemove:()=>console.log("onRemove triggered"),children:"Test"})]}),(0,i.jsx)("dt",{children:"removeButton:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{removeButton:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"text:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{text:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"value:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{value:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{describedbyid:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{id:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{children:"Test"},"account")]}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{tabIndex:100,children:"Test"})]}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{title:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{icon:"account",children:"Test"})]}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{variant:"critical",children:"Test"})]}),(0,i.jsx)("dt",{children:"overflow:"})," ",(0,i.jsxs)("dd",{children:[" ",(0,i.jsx)(d.Z,{overflow:!0,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=62509)}),_N_E=e.O()}]);
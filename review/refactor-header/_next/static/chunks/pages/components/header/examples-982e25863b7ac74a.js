(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{87691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return t(61650)}])},96889:function(e,n,t){"use strict";var r=t(52322),a=t(2784),d=t(72779),i=t.n(d);let l=(0,a.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[d,l]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,r.jsxs)("button",{id:e.id,ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i()(n)}("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[d?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children]})});n.Z=l},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return r.Z}});var r=t(96889)},5907:function(e,n,t){"use strict";var r=t(52322),a=t(2784),d=t(72779),i=t.n(d);let l=(0,a.forwardRef)(function(e,n){let[t,d]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,r.jsx)("div",{ref:n,"data-margin":e.margin,"data-variant":e.variant,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i()(n)}("db-divider",e.className),children:t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:t})}):null})});n.Z=l},917:function(e,n,t){"use strict";t.d(n,{o:function(){return r.Z}});var r=t(5907)},37008:function(e,n,t){"use strict";var r=t(52322),a=t(2784),d=t(94938),i=t(8490);t(72779);var l=t(7070);let s=(0,a.forwardRef)(function(e,n){var t;let s=(0,a.useRef)(n),c=(0,a.useRef)(null),[o,u]=(0,a.useState)(()=>i.IY);function h(n){("close"===n||"DIALOG"===n.target.nodeName&&!e.noBackdrop)&&e.onClose&&e.onClose()}function x(){s.current&&(e.open&&!s.current.open&&(c.current&&(c.current.hidden=!1),e.noBackdrop?s.current.show():s.current.showModal()),!e.open&&s.current.open&&(c.current&&(c.current.hidden=!0),setTimeout(()=>{var e;c.current&&(c.current.hidden=!1),null===(e=s.current)||void 0===e||e.close()},401)))}let[j,T]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{u(e.id||"drawer-"+(0,l.V)()),e.stylePath&&T(e.stylePath),x()},[]),(0,a.useEffect)(()=>{x()},[e.open]),(0,r.jsxs)("dialog",{className:"db-drawer",id:o,ref:s,onClick:e=>{h(e)},"data-backdrop":!e.noBackdrop,children:[j?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,r.jsxs)("article",{ref:c,className:"db-drawer-container"+(e.className?" "+e.className:""),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,r.jsxs)("header",{className:"db-drawer-header",children:[e.slotDrawerHeader,e.withCloseButton?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:i.ce})}):null]}),(0,r.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=s},19571:function(e,n,t){"use strict";t.d(n,{T:function(){return r.Z}});var r=t(37008)},32046:function(e,n,t){"use strict";var r=t(52322),a=t(2784),d=t(72779),i=t.n(d),l=t(917),s=t(94938),c=t(19571);let o=(0,a.forwardRef)(function(e,n){function t(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[d,o]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,r.jsxs)("header",{role:"banner",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i()(n)}("db-header",e.className),children:[d?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,r.jsxs)(c.T,{spacing:"small",className:"db-header-drawer db-header-hide-on-desktop",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>t(),children:[(0,r.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,r.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,r.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,r.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,r.jsx)("div",{className:"db-header-meta-navigation db-header-hide-on-mobile",children:e.slotMetaNavigation}),(0,r.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,r.jsxs)("div",{className:"db-header-brand-container",children:[e.slotBrand,(0,r.jsx)(l.o,{variant:"vertical",className:"db-header-divider db-header-hide-on-mobile"})]}),(0,r.jsxs)("div",{className:"db-header-navigation-container",children:[(0,r.jsx)("div",{className:"db-header-navigation db-header-hide-on-mobile",children:e.children}),(0,r.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,r.jsxs)("div",{className:"db-header-action-container",children:[(0,r.jsx)(l.o,{variant:"vertical",margin:"none",className:"db-header-divider"}),(0,r.jsx)(s.Y,{id:"button-burger-menu",icon:"menu",variant:"text",className:"db-header-hide-on-desktop",noText:!0,onClick:()=>t(),children:"Burger Menu"}),(0,r.jsx)("div",{className:"db-header-action-bar db-header-hide-on-mobile",children:e.slotActionBar})]})]})]})});n.Z=o},8490:function(e,n,t){"use strict";var r,a,d,i,l,s,c;t.d(n,{$f:function(){return j},DM:function(){return T},IY:function(){return o},SU:function(){return u},YP:function(){return h},ce:function(){return x},iw:function(){return r},r$:function(){return d}});let o="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",x="Close Button";(l=r||(r={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive";let j=Object.entries(r).map(e=>{let[,n]=e;return n});(a||(a={})).PRIMARY="primary",(s=d||(d={})).NEUTRAL_0="neutral-0",s.NEUTRAL_1="neutral-1",s.NEUTRAL_2="neutral-2",s.NEUTRAL_3="neutral-3",s.NEUTRAL_4="neutral-4",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SECONDARY="secondary",s.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",s.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let T=Object.entries(d).map(e=>{let[,n]=e;return n});Object.entries(a).map(e=>{let[,n]=e;return n}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});let r=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},61650:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(89477),d=t(32046);n.default=()=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:" DBHeader Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"slotBrand:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotBrand:(0,r.jsx)("div",{children:"slotBrand"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid, drawerOpen, id, key, onToggle, slotActionBar, slotBrand, slotCallToAction, slotMetaNavigation, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",drawerOpen:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotBrand:(0,r.jsx)("div",{children:"slotBrand"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, drawerOpen, id, key, onToggle, slotActionBar, slotCallToAction, slotMetaNavigation, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",drawerOpen:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, drawerOpen, id, key, onToggle, slotActionBar, slotCallToAction, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",drawerOpen:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, drawerOpen, id, key, onToggle, slotActionBar, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",drawerOpen:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, drawerOpen, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",drawerOpen:!0,id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"onToggle, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"onToggle:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotMetaNavigation:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotCallToAction:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotActionBar:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"drawerOpen:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{drawerOpen:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{tabIndex:100,children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{title:"account",children:"Test"})]})]})]})}},function(e){e.O(0,[203,9477,9774,2888,179],function(){return e(e.s=87691)}),_N_E=e.O()}]);
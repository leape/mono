(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8186],{94328:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/examples",function(){return e(44495)}])},96889:function(t,n,e){"use strict";var c=e(52322),i=e(2784),a=e(7070);let d=(0,i.forwardRef)(function(t,n){function e(t){return!!(t&&"_"!==t&&"none"!==t)}let[d,o]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{t.stylePath&&o(t.stylePath)},[]),(0,c.jsxs)("button",{id:t.id,ref:n,className:(0,a.yI)("db-button",t.className,{"is-icon-text-replace":e(t.icon)&&t.noText}),type:t.type,title:t.title,disabled:t.disabled,"aria-label":t.label,"data-icon":e(t.icon)?t.icon:void 0,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,name:t.name,value:t.value,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:n=>{t.onClick&&t.onClick(n)},children:[d?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:d})}):null,t.children]})});n.Z=d},94938:function(t,n,e){"use strict";e.d(n,{Y:function(){return c.Z}});var c=e(96889)},21191:function(t,n,e){"use strict";var c=e(52322),i=e(2784),a=e(94938),d=e(7070),o=e(8490);let s=(0,i.forwardRef)(function(t,n){var e,s;let[l,u]=(0,i.useState)(()=>!1),[r,x]=(0,i.useState)(()=>!1),[b,h]=(0,i.useState)(()=>!0),[j,k]=(0,i.useState)(()=>!1),[T,N]=(0,i.useState)(()=>"sub-navigation-"+(0,d.Vj)()),[I,p]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{u(!0),t.stylePath&&p(t.stylePath)},[]),(0,i.useEffect)(()=>{void 0!==t.subNavigationExpanded&&k(!!t.subNavigationExpanded)},[t.subNavigationExpanded]),(0,i.useEffect)(()=>{if(void 0!==t.areaPopup)x(t.areaPopup),h(r);else if(l&&document&&T){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(T);if(t){let n=t.children;(null==n?void 0:n.length)>0?x(!0):h(!1)}}},[l,t.areaPopup]),(0,c.jsxs)("li",{ref:n,className:(0,d.yI)("db-navigation-item",t.className),"data-width":t.width,"data-icon":(s=t.icon)&&"_"!==s&&"none"!==s?t.icon:void 0,"aria-current":t.active?"page":void 0,"aria-disabled":t.disabled,children:[I?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:I})}):null,b?null:(0,c.jsx)(c.Fragment,{children:t.children}),b?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":j,disabled:t.disabled,onClick:n=>{t.onClick&&t.onClick(n),r&&k(!0)},children:t.children}),(0,c.jsxs)("menu",{className:"db-sub-navigation",id:T,children:[r?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"db-mobile-navigation-back",children:(0,c.jsx)(a.Y,{icon:"arrow-back",variant:"text",id:t.backButtonId,onClick:t=>{t.stopPropagation(),k(!1)},children:null!==(e=t.backButtonText)&&void 0!==e?e:o.YP})})}):null,t.slotSubNavigation]})]}):null]})});n.Z=s},8490:function(t,n,e){"use strict";var c,i,a,d,o,s,l;e.d(n,{$f:function(){return h},DM:function(){return j},IY:function(){return u},SU:function(){return r},YP:function(){return x},ce:function(){return b},iw:function(){return c},r$:function(){return a}});let u="OVERWRITE_DEFAULT_ID",r="LABEL SHOULD BE SET",x="Back",b="Close Button";(o=c||(c={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive";let h=Object.entries(c).map(t=>{let[,n]=t;return n});(i||(i={})).PRIMARY="primary",(s=a||(a={})).NEUTRAL_0="neutral-0",s.NEUTRAL_1="neutral-1",s.NEUTRAL_2="neutral-2",s.NEUTRAL_3="neutral-3",s.NEUTRAL_4="neutral-4",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SECONDARY="secondary",s.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",s.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(a).map(t=>{let[,n]=t;return n});Object.entries(i).map(t=>{let[,n]=t;return n}),(l=d||(d={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(d).map(t=>{let[,n]=t;return n})},7070:function(t,n,e){"use strict";e.d(n,{Vj:function(){return c},yI:function(){return a},yn:function(){return i}});let c=()=>{var t;return null===(t=window.crypto)||void 0===t?void 0:t.randomUUID()},i=(t,n)=>{let e=t.children;Object.values(e).forEach(t=>{t.setAttribute(n.key,n.value),t.children.length>0&&i(t,n)})},a=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];let c="";return n.forEach((t,n)=>{if(t){if("string"==typeof t)c+="".concat(t," ");else for(let n in t)t[n]&&(c+="".concat(n," "))}}),c.trim()}},44495:function(t,n,e){"use strict";e.r(n);var c=e(52322),i=e(18338),a=e(21191);n.default=()=>(0,c.jsxs)(i.Z,{children:[(0,c.jsx)("h1",{children:" DBNavigationItem Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"active:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{active:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"active, areaPopup, backButtonId, backButtonText, describedbyid, disabled, icon, id, key, onClick, slotSubNavigation, subNavigationExpanded, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{active:!0,areaPopup:!0,backButtonId:"account",backButtonText:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",onClick:t=>console.log(t),slotSubNavigation:(0,c.jsx)("div",{children:"slotSubNavigation"}),subNavigationExpanded:!0,tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"areaPopup, backButtonId, backButtonText, describedbyid, disabled, icon, id, key, onClick, slotSubNavigation, subNavigationExpanded, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{areaPopup:!0,backButtonId:"account",backButtonText:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",onClick:t=>console.log(t),slotSubNavigation:(0,c.jsx)("div",{children:"slotSubNavigation"}),subNavigationExpanded:!0,tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, describedbyid, disabled, icon, id, key, onClick, slotSubNavigation, subNavigationExpanded, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",onClick:t=>console.log(t),slotSubNavigation:(0,c.jsx)("div",{children:"slotSubNavigation"}),subNavigationExpanded:!0,tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, describedbyid, icon, id, key, onClick, slotSubNavigation, subNavigationExpanded, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",describedbyid:"account",icon:"account",id:"account",onClick:t=>console.log(t),slotSubNavigation:(0,c.jsx)("div",{children:"slotSubNavigation"}),subNavigationExpanded:!0,tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, describedbyid, icon, id, key, onClick, subNavigationExpanded, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",describedbyid:"account",icon:"account",id:"account",onClick:t=>console.log(t),subNavigationExpanded:!0,tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, describedbyid, icon, id, key, onClick, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",describedbyid:"account",icon:"account",id:"account",onClick:t=>console.log(t),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, id, key, onClick, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",id:"account",onClick:t=>console.log(t),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, key, onClick, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",onClick:t=>console.log(t),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, onClick, tabIndex, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",onClick:t=>console.log(t),tabIndex:100,title:"account",width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, onClick, title, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",onClick:t=>console.log(t),title:"account",width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, onClick, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",onClick:t=>console.log(t),width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, icon, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",icon:"account",width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText, width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId, backButtonText:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",backButtonText:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonText:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonText:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"areaPopup:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{areaPopup:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"slotSubNavigation:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{slotSubNavigation:(0,c.jsx)("div",{children:"slotSubNavigation"}),children:"Test"})]}),(0,c.jsx)("dt",{children:"subNavigationExpanded:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{subNavigationExpanded:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"onClick:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onClick:t=>console.log(t),children:"Test"})]}),(0,c.jsx)("dt",{children:"icon:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{icon:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"width:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{width:"auto",children:"Test"})]}),(0,c.jsx)("dt",{children:"backButtonId:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{backButtonId:"account",children:"Test"})]})]})]})}},function(t){t.O(0,[4375,8338,9774,2888,179],function(){return t(t.s=94328)}),_N_E=t.O()}]);
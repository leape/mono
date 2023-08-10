(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{83876:function(e,n,t){var c={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!t.o(c,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=c[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(c)},i.id=83876,e.exports=i},68346:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return t(21786)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var c=t(52322),i=t(77900),a=t(2784);let l=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let c=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";c&&t(!0)},[]),[n,e]};var r=e=>{let{children:n,element:t="div",...c}=e,[i,r]=l();return i?(0,a.createElement)(t,{...c,children:n}):(0,a.createElement)(t,{...c,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/chore-wording").concat(e.link)});t(60586);var s=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var h=e=>{let{children:n}=e,[t,l]=(0,a.useState)(!1),[d,h]=(0,a.useState)(!1),[b,x]=(0,a.useState)(!1),j=(0,s.useRouter)();return(0,a.useEffect)(()=>{j.query&&(l("true"===j.query.fullscreen),h("true"===j.query.noh1),x("true"===j.query.properties))},[j]),(0,c.jsxs)(r,{children:[j.isReady&&t&&(0,c.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(b?"is-properties":""),children:n}),j.isReady&&!t&&(0,c.jsxs)(i.rG,{children:[(0,c.jsxs)(i.ff,{slot:"header",children:[(0,c.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,c.jsx)(i.Pm,{data:JSON.stringify(u(o,j.pathname))}),(0,c.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,c.jsx)("div",{children:n}),(0,c.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})}},4312:function(e,n,t){"use strict";var c=t(52322),i=t(2784),a=t(87233),l=t(94938),r=t(9076),o=t(8490),d=t(7070);let s=(0,i.forwardRef)(function(e,n){var t,s,u;let[h,b]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&b(e.stylePath)},[]),(0,c.jsxs)("div",{ref:n,className:(0,d.y)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":(s=e.icon,u=e.variant,s&&"_"!==s&&"none"!==s?s:u&&a.I[u]||"info"),"data-elevation":e.elevation,children:[h?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:h})}):null,e.headline?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,c.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.v,{variant:"inline",className:"db-alert-link",href:e.link.href,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,hreflang:e.link.hreflang,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:o.ce})}):null]})});n.Z=s},96889:function(e,n,t){"use strict";var c=t(52322),i=t(2784),a=t(7070);let l=(0,i.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[l,r]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,c.jsxs)("button",{id:e.id,ref:n,className:(0,a.y)("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[l?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});n.Z=l},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return c.Z}});var c=t(96889)},9076:function(e,n,t){"use strict";t.d(n,{v:function(){return c.Z}});var c=t(87224)},87224:function(e,n,t){"use strict";var c=t(52322),i=t(2784),a=t(7070);let l=(0,i.forwardRef)(function(e,n){let[t,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,c.jsxs)("a",{ref:n,className:(0,a.y)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=l},8490:function(e,n,t){"use strict";var c,i,a,l,r,o,d;t.d(n,{$f:function(){return b},DM:function(){return x},IY:function(){return s},SU:function(){return u},ce:function(){return h},iw:function(){return c},r$:function(){return a}});let s="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Close Button";(r=c||(c={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive";let b=Object.entries(c).map(e=>{let[,n]=e;return n});(i||(i={})).PRIMARY="primary",(o=a||(a={})).NEUTRAL_0="neutral-0",o.NEUTRAL_1="neutral-1",o.NEUTRAL_2="neutral-2",o.NEUTRAL_3="neutral-3",o.NEUTRAL_4="neutral-4",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.PRIMARY="primary",o.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",o.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",o.SECONDARY="secondary",o.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",o.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let x=Object.entries(a).map(e=>{let[,n]=e;return n});Object.entries(i).map(e=>{let[,n]=e;return n}),(d=l||(l={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},87233:function(e,n,t){"use strict";t.d(n,{I:function(){return c}});let c={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return c},y:function(){return i}});let c=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let c="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let n in e)e[n]&&(c+="".concat(n," "))}}),c.trim()}},21786:function(e,n,t){"use strict";t.r(n);var c=t(52322),i=t(70969),a=t(4312);n.default=()=>(0,c.jsxs)(i.Z,{children:[(0,c.jsx)("h1",{children:" DBAlert Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"Default:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{children:"Test"})}),(0,c.jsx)("dt",{children:"ariaLive:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{ariaLive:"polite",children:"Test"})}),(0,c.jsx)("dt",{children:"ariaLive, behaviour, closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{ariaLive:"polite",behaviour:"permanent",closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"behaviour, closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{behaviour:"permanent",closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, id, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, tabIndex, title, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, title, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",icon:"account",variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",elevation:"none",variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId, variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",variant:"critical",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonId:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonId:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"behaviour:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{behaviour:"permanent",children:"Test"})}),(0,c.jsx)("dt",{children:"closeButtonText:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{closeButtonText:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"headline:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{headline:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"link:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},children:"Test"})}),(0,c.jsx)("dt",{children:"type:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{type:"inline",children:"Test"})}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{describedbyid:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{id:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{children:"Test"},"account")}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{tabIndex:100,children:"Test"})}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{title:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"onClick:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,c.jsx)("dt",{children:"icon:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{icon:"account",children:"Test"})}),(0,c.jsx)("dt",{children:"elevation:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{elevation:"none",children:"Test"})}),(0,c.jsx)("dt",{children:"variant:"})," ",(0,c.jsx)("dd",{children:(0,c.jsx)(a.Z,{variant:"critical",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=68346)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,5317],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function i(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],i=n[0];return l.e(n[1]).then(function(){return l(i)})}i.keys=function(){return Object.keys(t)},i.id=3876,e.exports=i},8346:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return l(7976)}])},4192:function(e,n,l){"use strict";l.d(n,{Z:function(){return h}});var t=l(2322),i=l(6744),a=l(2784);let o=()=>{let e=(0,a.useRef)(null),[n,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},c=e=>{let{children:n,element:l="div",...t}=e,[i,c]=o();return i?(0,a.createElement)(l,{...t,children:n}):(0,a.createElement)(l,{...t,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(7965);l(6288);var s=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,s.useRouter)();return(0,t.jsx)(c,{children:(0,t.jsxs)(i.rG,{children:[(0,t.jsxs)(i.ff,{slot:"header",children:[(0,t.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(i.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(i.fw,{slot:"footer",copyright:!0})]})})};var h=u},9686:function(e,n,l){"use strict";var t=l(2322),i=l(2784),a=l(8949);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("button",{type:e.type,disabled:e.disabled,"aria-label":e.text,className:"db-button"+(e.className?" "+e.className:"")+(e.icon&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,t.jsx)(a.P,{icon:e.icon,icntxt:e.icntxt}),e.children]})}},8394:function(e,n,l){"use strict";var t=l(2322),i=l(2784);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}},8949:function(e,n,l){"use strict";l.d(n,{P:function(){return t.Z}});var t=l(8394)},7961:function(e,n,l){"use strict";var t=l(2322),i=l(2784),a=l(8949);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("a",{className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children,"inline"!==e.variant?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.P,{icon:"external"==e.content?"link-external":"link",icntxt:!0})}):null]})}},8359:function(e,n,l){"use strict";l.d(n,{I:function(){return t}});let t={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"}},7965:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return i}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/refactor-focus-outline-radius").concat(e.link)})},7976:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return h}});var t=l(2322),i=l(4192),a=l(2784),o=l(8949),c=l(8359),r=l(9686),s=l(7961);let d={closeButton:"Close Button"};var u=function(e){var n,l,i,u,h,k,b,p,m,x,j,f,v,y,g,w,C,T,E,N,B;let[L,_]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&_(e.stylePath)},[]),(0,t.jsxs)("div",{className:"db-alert"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-type":e.type,children:[L?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:L})}):null,(0,t.jsx)(o.P,{className:"db-alert-icon",icon:(N=e.icon,B=e.variant,N||c.I[B]||"info")}),(0,t.jsxs)("div",{className:"db-alert-content-container",children:[(0,t.jsxs)("div",{className:"db-alert-headline-container",children:[e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("strong",{children:e.headline})}):(0,t.jsx)("span",{children:e.children}),(0,t.jsxs)("div",{className:"db-alert-close-container",children:["inline"!==e.type?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-headline-link",href:null===(n=e.link)||void 0===n?void 0:n.href,target:null===(l=e.link)||void 0===l?void 0:l.target,rel:null===(i=e.link)||void 0===i?void 0:i.rel,role:null===(u=e.link)||void 0===u?void 0:u.role,disabled:null===(h=e.link)||void 0===h?void 0:h.disabled,selected:null===(k=e.link)||void 0===k?void 0:k.selected,label:null===(b=e.link)||void 0===b?void 0:b.label,hreflang:null===(p=e.link)||void 0===p?void 0:p.hreflang,current:null===(m=e.link)||void 0===m?void 0:m.current,children:e.slotLink})}):null,(0,t.jsx)(r.Z,{icon:"close",variant:"transparent",size:"small",onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(E=e.closeButtonText)&&void 0!==E?E:d.closeButton})]})]}),e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{children:e.children})}):null,(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-content-link",href:null===(x=e.link)||void 0===x?void 0:x.href,target:null===(j=e.link)||void 0===j?void 0:j.target,rel:null===(f=e.link)||void 0===f?void 0:f.rel,role:null===(v=e.link)||void 0===v?void 0:v.role,disabled:null===(y=e.link)||void 0===y?void 0:y.disabled,selected:null===(g=e.link)||void 0===g?void 0:g.selected,label:null===(w=e.link)||void 0===w?void 0:w.label,hreflang:null===(C=e.link)||void 0===C?void 0:C.hreflang,current:null===(T=e.link)||void 0===T?void 0:T.current,children:e.slotLink})]})]})},h=()=>(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:" DBAlert Examples "}),(0,t.jsxs)("div",{className:"example-list",children:["Default: ",(0,t.jsx)(u,{children:"Test"}),(0,t.jsx)("p",{children:"closeButtonText:"})," ",(0,t.jsx)(u,{closeButtonText:"account",children:"Test"}),(0,t.jsx)("p",{children:"closeButtonText, headline, icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{closeButtonText:"account",headline:"account",icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"headline, icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{headline:"account",icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, slotLink, title, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),slotLink:"account",title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, title, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, title:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),title:"account",children:"Test"}),(0,t.jsx)("p",{children:"onClick:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"headline:"})," ",(0,t.jsx)(u,{headline:"account",children:"Test"}),(0,t.jsx)("p",{children:"icon:"})," ",(0,t.jsx)(u,{icon:"account",children:"Test"}),(0,t.jsx)("p",{children:"link:"})," ",(0,t.jsx)(u,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},children:"Test"}),(0,t.jsx)("p",{children:"type:"})," ",(0,t.jsx)(u,{type:"inline",children:"Test"}),(0,t.jsx)("p",{children:"slotLink:"})," ",(0,t.jsx)(u,{slotLink:"account",children:"Test"}),(0,t.jsx)("p",{children:"variant:"})," ",(0,t.jsx)(u,{variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"title:"})," ",(0,t.jsx)(u,{title:"account",children:"Test"})]})]})}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=8346)}),_N_E=e.O()}]);
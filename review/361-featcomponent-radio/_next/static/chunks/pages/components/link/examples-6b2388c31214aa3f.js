(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1302],{3876:function(e,n,r){var l={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function t(e){if(!r.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],t=n[0];return r.e(n[1]).then(function(){return r(t)})}t.keys=function(){return Object.keys(l)},t.id=3876,e.exports=t},3438:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/examples",function(){return r(670)}])},5554:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var l=r(2322),t=r(8982),c=r(2784);let a=()=>{let e=(0,c.useRef)(null),[n,r]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&r(!0)},[]),[n,e]},o=e=>{let{children:n,element:r="div",...l}=e,[t,o]=a();return t?(0,c.createElement)(r,{...l,children:n}):(0,c.createElement)(r,{...l,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var s=r(1092);r(8155);var i=r(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,s.e)(e)):[],u=e=>{let{children:n}=e,r=(0,i.useRouter)();return(0,l.jsx)(o,{children:(0,l.jsxs)(t.rG,{children:[(0,l.jsxs)(t.ff,{slot:"header",children:[(0,l.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(t.Pm,{data:JSON.stringify(d(s.Z,r.pathname))}),(0,l.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(t.fw,{slot:"footer",copyright:!0})]})})};var h=u},7754:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var l=r(2322),t=r(2784);function c(e){let[n,r]=(0,t.useState)(()=>null);return(0,t.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}},4237:function(e,n,r){"use strict";r.d(n,{P:function(){return l.Z}});var l=r(7754)},5321:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var l=r(2322),t=r(2784),c=r(4237);function a(e){let[n,r]=(0,t.useState)(()=>null);return(0,t.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,l.jsxs)("a",{className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children,"inline"!==e.variant?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.P,{icon:"external"==e.content?"link-external":"link",icntxt:!0})}):null]})}},1092:function(e,n,r){"use strict";r.d(n,{Z:function(){return l},e:function(){return t}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],t=e=>({...e,link:"".concat("/mono/review/361-featcomponent-radio").concat(e.link)})},670:function(e,n,r){"use strict";r.r(n);var l=r(2322),t=r(5554),c=r(5321);n.default=()=>(0,l.jsxs)(t.Z,{children:[(0,l.jsx)("h1",{children:" DBLink Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(c.Z,{children:"Test"}),(0,l.jsx)("p",{children:"content:"})," ",(0,l.jsx)(c.Z,{content:"internal",children:"Test"}),(0,l.jsx)("p",{children:"content, current, disabled, href, hreflang, id, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)(c.Z,{content:"internal",current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, id, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, title, variant:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",variant:"primary",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, title:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"current, disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"referrerpolicy, rel, role, selected:"})," ",(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,children:"Test"}),(0,l.jsx)("p",{children:"referrerpolicy, role, selected:"})," ",(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",role:"account",selected:!0,children:"Test"}),(0,l.jsx)("p",{children:"referrerpolicy, selected:"})," ",(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",selected:!0,children:"Test"}),(0,l.jsx)("p",{children:"selected:"})," ",(0,l.jsx)(c.Z,{selected:!0,children:"Test"}),(0,l.jsx)("p",{children:"id:"})," ",(0,l.jsx)(c.Z,{id:"account",children:"Test"}),(0,l.jsx)("p",{children:"size:"})," ",(0,l.jsx)(c.Z,{size:"small",children:"Test"}),(0,l.jsx)("p",{children:"variant:"})," ",(0,l.jsx)(c.Z,{variant:"primary",children:"Test"}),(0,l.jsx)("p",{children:"title:"})," ",(0,l.jsx)(c.Z,{title:"account",children:"Test"}),(0,l.jsx)("p",{children:"onClick:"})," ",(0,l.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"}),(0,l.jsx)("p",{children:"current:"})," ",(0,l.jsx)(c.Z,{current:"time",children:"Test"}),(0,l.jsx)("p",{children:"disabled:"})," ",(0,l.jsx)(c.Z,{disabled:!0,children:"Test"}),(0,l.jsx)("p",{children:"href:"})," ",(0,l.jsx)(c.Z,{href:"account",children:"Test"}),(0,l.jsx)("p",{children:"hreflang:"})," ",(0,l.jsx)(c.Z,{hreflang:"account",children:"Test"}),(0,l.jsx)("p",{children:"label:"})," ",(0,l.jsx)(c.Z,{label:"account",children:"Test"}),(0,l.jsx)("p",{children:"target:"})," ",(0,l.jsx)(c.Z,{target:"_blank",children:"Test"}),(0,l.jsx)("p",{children:"rel:"})," ",(0,l.jsx)(c.Z,{rel:"account",children:"Test"}),(0,l.jsx)("p",{children:"role:"})," ",(0,l.jsx)(c.Z,{role:"account",children:"Test"}),(0,l.jsx)("p",{children:"referrerpolicy:"})," ",(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",children:"Test"})]})]})}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=3438)}),_N_E=e.O()}]);
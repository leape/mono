(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9585],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function s(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],s=n[0];return l.e(n[1]).then(function(){return l(s)})}s.keys=function(){return Object.keys(t)},s.id=3876,e.exports=s},4448:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/examples",function(){return l(1617)}])},5554:function(e,n,l){"use strict";l.d(n,{Z:function(){return b}});var t=l(2322),s=l(8982),o=l(2784);let i=()=>{let e=(0,o.useRef)(null),[n,l]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},a=e=>{let{children:n,element:l="div",...t}=e,[s,a]=i();return s?(0,o.createElement)(l,{...t,children:n}):(0,o.createElement)(l,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(1092);l(1828);var c=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,c.useRouter)();return(0,t.jsx)(a,{children:(0,t.jsxs)(s.rG,{children:[(0,t.jsxs)(s.ff,{slot:"header",children:[(0,t.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(s.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=u},7754:function(e,n,l){"use strict";var t=l(2322),s=l(2784);n.Z=function(e){let[n,l]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}},4237:function(e,n,l){"use strict";l.d(n,{P:function(){return t.Z}});var t=l(7754)},7441:function(e,n,l){"use strict";var t=l(2322),s=l(2784),o=l(4237),i=l(2110);n.Z=function(e){var n,l;let[a,r]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("span",{className:"db-infotext"+(e.className?" "+e.className:""),title:e.title,"data-variant":e.variant,"data-size":e.size,children:[a?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:a})}):null,"small"!==e.size?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.P,{icon:(n=e.icon,l=e.variant,n||i.I[l]||"info")})}):null,e.children]})}},2110:function(e,n,l){"use strict";l.d(n,{I:function(){return t}});let t={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"}},1092:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return s}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"TODO: Add to specific category; DBCodeDocs",link:"/components/code-docs",children:[{label:"Examples",link:"/components/code-docs/examples"},{label:"How to use",link:"/components/code-docs/how-to-use"}]},{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/feat-react-show-code").concat(e.link)})},1617:function(e,n,l){"use strict";l.r(n);var t=l(2322),s=l(5554),o=l(7441);n.default=()=>(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h1",{children:" DBInfotext Examples "}),(0,t.jsxs)("div",{className:"example-list",children:["Default: ",(0,t.jsx)(o.Z,{children:"Test"}),(0,t.jsx)("p",{children:"icon:"})," ",(0,t.jsx)(o.Z,{icon:"account",children:"Test"}),(0,t.jsx)("p",{children:"icon, size, title, variant:"})," ",(0,t.jsx)(o.Z,{icon:"account",size:"small",title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"size, title, variant:"})," ",(0,t.jsx)(o.Z,{size:"small",title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"title, variant:"})," ",(0,t.jsx)(o.Z,{title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"title:"})," ",(0,t.jsx)(o.Z,{title:"account",children:"Test"}),(0,t.jsx)("p",{children:"size:"})," ",(0,t.jsx)(o.Z,{size:"small",children:"Test"}),(0,t.jsx)("p",{children:"variant:"})," ",(0,t.jsx)(o.Z,{variant:"critical",children:"Test"})]})]})}},function(e){e.O(0,[879,9774,2888,179],function(){return e(e.s=4448)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,8942],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function o(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],o=n[0];return t.e(n[1]).then(function(){return t(o)})}o.keys=function(){return Object.keys(l)},o.id=3876,e.exports=o},7691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return t(6971)}])},4192:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),o=t(6744),s=t(2784);let a=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},i=e=>{let{children:n,element:t="div",...l}=e,[o,i]=a();return o?(0,s.createElement)(t,{...l,children:n}):(0,s.createElement)(t,{...l,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(7965);t(6288);var r=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,c.e)(e)):[],u=e=>{let{children:n}=e,t=(0,r.useRouter)();return(0,l.jsx)(i,{children:(0,l.jsxs)(o.rG,{children:[(0,l.jsxs)(o.ff,{slot:"header",children:[(0,l.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(o.Pm,{data:JSON.stringify(d(c.Z,t.pathname))}),(0,l.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(o.fw,{slot:"footer",copyright:!0})]})})};var b=u},7965:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return o}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"TODO: Add to specific category; DBCodeDocs",link:"/components/code-docs",children:[{label:"Examples",link:"/components/code-docs/examples"},{label:"How to use",link:"/components/code-docs/how-to-use"}]},{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=e=>({...e,link:"".concat("/mono/review/feat-react-show-code").concat(e.link)})},6971:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var l=t(2322),o=t(4192),s=t(2784),a=function(e){let[n,t]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&t(e.stylePath)},[]),(0,l.jsxs)("header",{role:"banner",className:"db-header"+(e.className?" "+e.className:""),children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,e.slotBrand,(0,l.jsx)("div",{className:"desktop-navigation",children:e.slotDesktopNavigation}),(0,l.jsx)("div",{className:"mobile-navigation",children:e.slotMobileNavigation}),(0,l.jsx)("div",{className:"meta-navigation",children:e.slotMetaNavigation}),e.children]})},i=()=>(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("h1",{children:" DBHeader Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(a,{children:"Test"}),(0,l.jsx)("p",{children:"slotBrand:"})," ",(0,l.jsx)(a,{slotBrand:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotBrand, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,l.jsx)(a,{slotBrand:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,l.jsx)(a,{slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,l.jsx)(a,{slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotMetaNavigation, title:"})," ",(0,l.jsx)(a,{slotMetaNavigation:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"title:"})," ",(0,l.jsx)(a,{title:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotDesktopNavigation:"})," ",(0,l.jsx)(a,{slotDesktopNavigation:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotMobileNavigation:"})," ",(0,l.jsx)(a,{slotMobileNavigation:"account",children:"Test"}),(0,l.jsx)("p",{children:"slotMetaNavigation:"})," ",(0,l.jsx)(a,{slotMetaNavigation:"account",children:"Test"})]})]})}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=7691)}),_N_E=e.O()}]);
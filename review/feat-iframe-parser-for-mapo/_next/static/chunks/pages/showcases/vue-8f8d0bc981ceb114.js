(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6148],{3876:function(e,n,l){var o={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,5317],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function t(e){if(!l.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],t=n[0];return l.e(n[1]).then(function(){return l(t)})}t.keys=function(){return Object.keys(o)},t.id=3876,e.exports=t},659:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcases/vue",function(){return l(3888)}])},4192:function(e,n,l){"use strict";l.d(n,{Z:function(){return u}});var o=l(2322),t=l(6744),s=l(2784);let a=()=>{let e=(0,s.useRef)(null),[n,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let o=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";o&&l(!0)},[]),[n,e]},i=e=>{let{children:n,element:l="div",...o}=e,[t,i]=a();return t?(0,s.createElement)(l,{...o,children:n}):(0,s.createElement)(l,{...o,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(7965);l(6288);var c=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],b=e=>{let{children:n}=e,l=(0,c.useRouter)();return(0,o.jsx)(i,{children:(0,o.jsxs)(t.rG,{children:[(0,o.jsxs)(t.ff,{slot:"header",children:[(0,o.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(t.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,o.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:n}),(0,o.jsx)(t.fw,{slot:"footer",copyright:!0})]})})};var u=b},3206:function(e,n,l){"use strict";var o=l(2322);let t=e=>{let{src:n}=e;return(0,o.jsx)("iframe",{src:"".concat("/mono/review/feat-iframe-parser-for-mapo").concat(n)})};n.Z=t},7965:function(e,n,l){"use strict";l.d(n,{Z:function(){return o},e:function(){return t}});let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],t=e=>({...e,link:"".concat("/mono/review/feat-iframe-parser-for-mapo").concat(e.link)})},3888:function(e,n,l){"use strict";l.r(n);var o=l(2322),t=l(4192),s=l(3206);let a=()=>(0,o.jsx)(t.Z,{children:(0,o.jsx)(s.Z,{src:"/vue-showcase/index.html"})});n.default=a}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=659)}),_N_E=e.O()}]);
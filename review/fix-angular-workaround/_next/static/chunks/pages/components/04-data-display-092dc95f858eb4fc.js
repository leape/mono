(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8639],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,5317],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function o(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],o=n[0];return l.e(n[1]).then(function(){return l(o)})}o.keys=function(){return Object.keys(t)},o.id=3876,e.exports=o},1478:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/04-data-display",function(){return l(2118)}])},4192:function(e,n,l){"use strict";l.d(n,{Z:function(){return b}});var t=l(2322),o=l(6744),s=l(2784);let a=()=>{let e=(0,s.useRef)(null),[n,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},i=e=>{let{children:n,element:l="div",...t}=e,[o,i]=a();return o?(0,s.createElement)(l,{...t,children:n}):(0,s.createElement)(l,{...t,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(7965);l(6288);var c=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,c.useRouter)();return(0,t.jsx)(i,{children:(0,t.jsxs)(o.rG,{children:[(0,t.jsxs)(o.ff,{slot:"header",children:[(0,t.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(o.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(o.fw,{slot:"footer",copyright:!0})]})})};var b=u},7965:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return o}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=e=>({...e,link:"".concat("/mono/review/fix-angular-workaround").concat(e.link)})},2118:function(e,n,l){"use strict";l.r(n);var t=l(2322),o=l(5392),s=l(4192);let a=e=>{let{children:n}=e;return(0,t.jsx)(s.Z,{children:n})};function i(e){let n=Object.assign({h1:"h1",p:"p"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"04 Data Display"}),"\n",(0,t.jsx)(n.p,{children:"TODO: Add docs for data-display"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(i,e)}))}},5392:function(e,n,l){"use strict";l.d(n,{ah:function(){return s}});var t=l(2784);let o=t.createContext({});function s(e){let n=t.useContext(o);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=1478)}),_N_E=e.O()}]);
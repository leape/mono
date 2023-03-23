(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8367],{3876:function(e,n,t){var s={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function l(e){if(!t.o(s,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=s[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(s)},l.id=3876,e.exports=l},2617:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input",function(){return t(1351)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var s=t(2322),l=t(7900),i=t(2784);let r=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let s=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";s&&t(!0)},[]),[n,e]},d=e=>{let{children:n,element:t="div",...s}=e,[l,d]=r();return l?(0,i.createElement)(t,{...s,children:n}):(0,i.createElement)(t,{...s,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(6666);t(586);var o=t(5632);let a=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?a(e.children,n):[]})).map(e=>(0,c.e)(e)):[],h=e=>{let{children:n}=e,[t,r]=(0,i.useState)(!1),[h,j]=(0,i.useState)(!1),x=(0,o.useRouter)();return(0,i.useEffect)(()=>{x.query&&(r("true"===x.query.fullscreen),j("true"===x.query.noh1))},[x]),(0,s.jsxs)(d,{children:[x.isReady&&t&&(0,s.jsx)("div",{className:h?"noh1":"",children:n}),x.isReady&&!t&&(0,s.jsxs)(l.rG,{children:[(0,s.jsxs)(l.ff,{slot:"header",children:[(0,s.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,s.jsx)(l.Pm,{data:JSON.stringify(a(c.Z,x.pathname))}),(0,s.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,s.jsx)("div",{children:n}),(0,s.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})};var j=h},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return s},e:function(){return l}});let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/feat-add-missing-components-in-showcases").concat(e.link)})},1351:function(e,n,t){"use strict";t.r(n);var s=t(2322),l=t(5392),i=t(8429);let r=e=>{let{children:n}=e;return(0,s.jsx)(i.Z,{children:n})};function d(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"DBInput"}),"\n",(0,s.jsx)(n.h2,{children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{align:"center",children:"Required"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Options"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"union"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'text' | 'search' | 'number' | 'tel' | 'url' | 'email' | 'password' | 'hidden' | 'date' | 'datetime-local' | 'week'"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"variant"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"union"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'adaptive' | 'critical' | 'informational' | 'warning' | 'successful'"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"iconAfter"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"title"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stylePath"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"className"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"children"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"placeholder"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxLength"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minLength"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pattern"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"change"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onChange"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blur"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onBlur"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"focus"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onFocus"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"validityChange"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(valid: boolean) => void"})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"label"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disabled"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"required"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"icon"}),(0,s.jsx)(n.td,{children:"No description"}),(0,s.jsx)(n.td,{align:"center",children:"❌"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)}))}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return i}});var s=t(2784);let l=s.createContext({});function i(e){let n=s.useContext(l);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=2617)}),_N_E=e.O()}]);
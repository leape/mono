(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3575],{3876:function(e,n,s){var t={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function o(e){if(!s.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],o=n[0];return s.e(n[1]).then(function(){return s(o)})}o.keys=function(){return Object.keys(t)},o.id=3876,e.exports=o},1083:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations",function(){return s(2851)}])},8429:function(e,n,s){"use strict";s.d(n,{Z:function(){return h}});var t=s(2322),o=s(7900),l=s(2784);let i=()=>{let e=(0,l.useRef)(null),[n,s]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&s(!0)},[]),[n,e]},a=e=>{let{children:n,element:s="div",...t}=e,[o,a]=i();return o?(0,l.createElement)(s,{...t,children:n}):(0,l.createElement)(s,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=s(6666);s(586);var c=s(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,[s,i]=(0,l.useState)(!1),[u,h]=(0,l.useState)(!1),[p,b]=(0,l.useState)(!1),m=(0,c.useRouter)();return(0,l.useEffect)(()=>{m.query&&(i("true"===m.query.fullscreen),h("true"===m.query.noh1),b("true"===m.query.properties))},[m]),(0,t.jsxs)(a,{children:[m.isReady&&s&&(0,t.jsx)("div",{className:"".concat(u?"noh1":""," ").concat(p?"is-properties":""),children:n}),m.isReady&&!s&&(0,t.jsxs)(o.rG,{children:[(0,t.jsxs)(o.ff,{slot:"header",children:[(0,t.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(o.Pm,{data:JSON.stringify(d(r.Z,m.pathname))}),(0,t.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(o.fw,{slot:"footer",copyright:!0})]})]})};var h=u},6666:function(e,n,s){"use strict";s.d(n,{Z:function(){return t},e:function(){return o}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=e=>({...e,link:"".concat("/mono/review/refactor-show-code").concat(e.link)})},2851:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var t=s(2322),o=s(8429),l=s(5392);function i(e){let n=Object.assign({h1:"h1",p:"p",img:"img",a:"a",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"@db-ui/foundations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),"\n",(0,t.jsx)(n.a,{href:"https://conventionalcommits.org",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg",alt:"Conventional Commits"})}),"\n",(0,t.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})})]}),"\n",(0,t.jsxs)(n.p,{children:["A library containing all tokens of ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We currently support:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#css",children:"CSS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#scss",children:"SCSS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tailwind",children:"Tailwind"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Install"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"npm i @db-ui/foundations"})}),"\n",(0,t.jsx)(n.h2,{children:"Usage"}),"\n",(0,t.jsx)(n.h3,{children:"CSS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// main.ts / main.js\nimport "@db-ui/foundations/build/css/db-ui-foundations.css";\n// optional: to use classes like e.g. db-ui-bg-success\nimport "@db-ui/foundations/build/css/color-classes.css";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".my-container {\n	padding: var(--db-spacing-fixed-md);\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="db-ui-regular db-ui-bg-success my-container"></div>\n'})}),"\n",(0,t.jsx)(n.h3,{children:"SCSS"}),"\n",(0,t.jsx)(n.p,{children:"Based on your technology/setup you need to change the paths of the assets folder:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default: points to ",(0,t.jsx)(n.code,{children:"../assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Webpack: points to ",(0,t.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Rollup: points to ",(0,t.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:'// index.scss\n@use "@db-ui/foundations/build/scss/rollup.assets-paths" as *;\n@use "@db-ui/foundations/build/scss/icon/icons" as *;\n@use "@db-ui/foundations/build/scss/db-ui-foundations" as *;\n// optional: to use db-ui-bg-success\n@import "@db-ui/foundations/build/scss/color-classes" as *;\n// optional: to use use $db-spacing-fixed-md\n@use "@db-ui/foundations/build/scss/variables.global" as *;\n\n.my-container {\n	padding: $db-spacing-fixed-md;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="db-ui-regular db-ui-bg-success my-container"></div>\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Tailwind"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'//tailwind.config.cjs\n\nconst tokens = require("@db-ui/foundations/build/tailwind/tailwind-tokens.json");\n\nmodule.exports = {\n	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],\n	plugins: [],\n	theme: {\n		screens: tokens.screens,\n		spacing: tokens.spacing,\n		boxShadow: tokens.elevation,\n		gap: ({ theme }) => ({\n			...theme("spacing")\n		}),\n		space: ({ theme }) => ({\n			...theme("spacing")\n		})\n	}\n};\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="p-fix-md"></div>\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Deutsche Bahn brand"}),"\n",(0,t.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,t.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,t.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,t.jsx)(n.h2,{children:"Contributions"}),"\n",(0,t.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"Code of conduct"}),"\n",(0,t.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,t.jsx)(n.h2,{children:"License"}),"\n",(0,t.jsxs)(n.p,{children:["This project is licensed under ",(0,t.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)};let r=e=>{let{children:n}=e;return(0,t.jsx)(o.Z,{children:n})};function c(e){return(0,t.jsx)(a,{})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(c,e)}))}},5392:function(e,n,s){"use strict";s.d(n,{ah:function(){return l}});var t=s(2784);let o=t.createContext({});function l(e){let n=t.useContext(o);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=1083)}),_N_E=e.O()}]);
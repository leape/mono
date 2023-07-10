(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3575],{83876:function(o,e,t){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(o){if(!t.o(n,o))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[o],s=e[0];return t.e(e[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(n)},s.id=83876,o.exports=s},41083:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations",function(){return t(70066)}])},70969:function(o,e,t){"use strict";t.d(e,{Z:function(){return h}});var n=t(52322),s=t(77900),r=t(2784);let c=()=>{let o=(0,r.useRef)(null),[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var e;let n=(null===(e=o?.current)||void 0===e?void 0:e.innerHTML)==="";n&&t(!0)},[]),[e,o]};var l=o=>{let{children:e,element:t="div",...n}=o,[s,l]=c();return s?(0,r.createElement)(t,{...n,children:e}):(0,r.createElement)(t,{...n,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(o=>({...o,children:o.children.map(o=>({label:o.label,link:"/components/".concat(o.name),children:[{label:"Properties",link:"/components/".concat(o.name,"/properties")},{label:"Examples",link:"/components/".concat(o.name,"/examples")},{label:"How to use",link:"/components/".concat(o.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(o.name,"/migration")}]}))}))}],a=o=>({...o,link:"".concat("/mono/review/main").concat(o.link)});t(60586);var p=t(5632);let d=(o,e)=>o?o.map(o=>({...o,current:"/"===o.link&&"/"===e||"/"!==o.link&&e.includes(o.link),children:o.children?d(o.children,e):[]})).map(o=>a(o)):[];var h=o=>{let{children:e}=o,[t,c]=(0,r.useState)(!1),[a,h]=(0,r.useState)(!1),[u,y]=(0,r.useState)(!1),E=(0,p.useRouter)();return(0,r.useEffect)(()=>{E.query&&(c("true"===E.query.fullscreen),h("true"===E.query.noh1),y("true"===E.query.properties))},[E]),(0,n.jsxs)(l,{children:[E.isReady&&t&&(0,n.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(u?"is-properties":""),children:e}),E.isReady&&!t&&(0,n.jsxs)(s.rG,{children:[(0,n.jsxs)(s.ff,{slot:"header",children:[(0,n.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(s.Pm,{data:JSON.stringify(d(i,E.pathname))}),(0,n.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:e}),(0,n.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})}},70066:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var n=t(52322),s=t(70969),r=t(45392),c=t(65854);let l={annotations:c.ds,Code:c.EK},i={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function a(o){let e=Object.assign({h1:"h1",p:"p",img:"img",a:"a",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3"},(0,r.ah)(),o.components);return l||d("CH",!1),l.Code||d("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(e.h1,{children:"@db-ui/foundations"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.img,{src:"/docs/images/download/License-Apache_2.0-blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,n.jsx)(e.a,{href:"https://github.com/prettier/prettier",children:(0,n.jsx)(e.img,{src:"/docs/images/download/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),"\n",(0,n.jsx)(e.a,{href:"https://conventionalcommits.org",children:"![Conventional Commits](/docs/images/download/Conventional Commits-1.0.0-yellow.svg)"}),"\n",(0,n.jsx)(e.a,{href:"https://makeapullrequest.com",children:(0,n.jsx)(e.img,{src:"/docs/images/download/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})})]}),"\n",(0,n.jsxs)(e.p,{children:["A library containing all tokens of ",(0,n.jsx)(e.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"We currently support:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#css",children:"CSS"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#scss",children:"SCSS"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#tailwind",children:"Tailwind"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{children:"Install"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"npm i @db-ui/foundations"})}),"\n",(0,n.jsx)(e.h2,{children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:["The defaults for ",(0,n.jsx)(e.code,{children:"db-ui-foundations.css"})," are:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/tonalities",children:"Tonality"}),": ",(0,n.jsx)(e.code,{children:"regular"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/adaptive-styles",children:"Adaptive Coloring"}),": ",(0,n.jsx)(e.code,{children:"neutral-0"})]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{children:"CSS"}),"\n",(0,n.jsxs)(e.p,{children:["Default assets path for ",(0,n.jsx)(e.code,{children:"db-ui-foundations.css"})," is ",(0,n.jsx)(e.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,n.jsx)(e.code,{children:"public"})," folder before build."]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"// main.ts / main.js",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/css/db-ui-foundations.css",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"// optional: to use classes like e.g. db-ui-bg-success",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/css/color-classes.css",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:".",props:{style:{color:"#ECEFF4"}}},{content:"my-container ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	padding",props:{style:{color:"#D8DEE9"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"var",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#ECEFF4"}}},{content:"--db-spacing-fixed-md",props:{style:{color:"#88C0D0"}}},{content:")",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"css"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<div ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-ui-regular db-ui-bg-success my-container",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"></div>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{children:"SCSS"}),"\n",(0,n.jsx)(e.p,{children:"Based on your technology/setup you need to change the paths of the assets folder:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Default: points to ",(0,n.jsx)(e.code,{children:"../assets"})]}),"\n",(0,n.jsxs)(e.li,{children:["Webpack: points to ",(0,n.jsx)(e.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,n.jsxs)(e.li,{children:["Rollup: points to ",(0,n.jsx)(e.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"// index.scss",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"@use ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/scss/rollup.assets-paths",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as *;",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"@use ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/scss/icon/icons",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as *;",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"@use ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/scss/db-ui-foundations",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as *;",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"// optional: to use db-ui-bg-success",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"@import ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/scss/color-classes",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as",props:{style:{color:"#88C0D0"}}},{content:" *",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"// optional: to use use $db-spacing-fixed-md",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"@use ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/scss/variables.global",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as *;",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:".",props:{style:{color:"#ECEFF4"}}},{content:"my-container ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	padding",props:{style:{color:"#D8DEE9"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"$db-spacing-fixed-md",props:{style:{color:"#88C0D0"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"scss"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<div ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-ui-regular db-ui-bg-success my-container",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"></div>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{children:"Tailwind"}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"//tailwind.config.cjs",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"const ",props:{style:{color:"#81A1C1"}}},{content:"tokens ",props:{style:{color:"#D8DEE9"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"require",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/foundations/build/tailwind/tailwind-tokens.json",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"module",props:{style:{color:"#8FBCBB"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"exports ",props:{style:{color:"#8FBCBB"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	content",props:{style:{color:"#88C0D0"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"./index.html",props:{style:{color:"#A3BE8C"}}},{content:'", "',props:{style:{color:"#ECEFF4"}}},{content:"./src/**/*.{js,jsx,ts,tsx}",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	plugins",props:{style:{color:"#88C0D0"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" []",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	theme",props:{style:{color:"#88C0D0"}}},{content:": {",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		screens",props:{style:{color:"#88C0D0"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"tokens",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"screens",props:{style:{color:"#D8DEE9"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		spacing",props:{style:{color:"#88C0D0"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"tokens",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"spacing",props:{style:{color:"#D8DEE9"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		boxShadow",props:{style:{color:"#88C0D0"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"tokens",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"elevation",props:{style:{color:"#D8DEE9"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		gap",props:{style:{color:"#88C0D0"}}},{content:": ({ ",props:{style:{color:"#ECEFF4"}}},{content:"theme ",props:{style:{color:"#D8DEE9"}}},{content:"}) ",props:{style:{color:"#ECEFF4"}}},{content:"=>",props:{style:{color:"#81A1C1"}}},{content:" (",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			...",props:{style:{color:"#81A1C1"}}},{content:"theme",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"spacing",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		space",props:{style:{color:"#88C0D0"}}},{content:": ({ ",props:{style:{color:"#ECEFF4"}}},{content:"theme ",props:{style:{color:"#D8DEE9"}}},{content:"}) ",props:{style:{color:"#ECEFF4"}}},{content:"=>",props:{style:{color:"#81A1C1"}}},{content:" (",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			...",props:{style:{color:"#81A1C1"}}},{content:"theme",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"spacing",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"	}",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,n.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<div ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"p-fix-md",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"></div>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(e.h2,{children:"Deutsche Bahn brand"}),"\n",(0,n.jsxs)(e.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,n.jsx)(e.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,n.jsx)(e.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,n.jsx)(e.h2,{children:"Contributions"}),"\n",(0,n.jsxs)(e.p,{children:["Contributions are very welcome, please refer to the ",(0,n.jsx)(e.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,n.jsx)(e.h2,{children:"Code of conduct"}),"\n",(0,n.jsxs)(e.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,n.jsx)(e.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,n.jsx)(e.h2,{children:"License"}),"\n",(0,n.jsxs)(e.p,{children:["This project is licensed under ",(0,n.jsx)(e.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}var p=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),o.components);return e?(0,n.jsx)(e,Object.assign({},o,{children:(0,n.jsx)(a,o)})):a(o)};function d(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}let h=o=>{let{children:e}=o;return(0,n.jsx)(s.Z,{children:e})};function u(o){return(0,n.jsx)(p,{})}var y=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,Object.assign({},o,{children:(0,n.jsx)(u,o)}))}}},function(o){o.O(0,[4996,9883,9774,2888,179],function(){return o(o.s=41083)}),_N_E=o.O()}]);
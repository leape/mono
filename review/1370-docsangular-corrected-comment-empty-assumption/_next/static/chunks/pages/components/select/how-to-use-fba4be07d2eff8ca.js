(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8469],{83876:function(e,n,t){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(o)},r.id=83876,e.exports=r},25787:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select/how-to-use",function(){return t(39624)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var o=t(52322),r=t(77900),l=t(2784);let c=()=>{let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let o=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";o&&t(!0)},[]),[n,e]};var s=e=>{let{children:n,element:t="div",...o}=e,[r,s]=c();return r?(0,l.createElement)(t,{...o,children:n}):(0,l.createElement)(t,{...o,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],i=e=>({...e,link:"".concat("/mono/review/1370-docsangular-corrected-comment-empty-assumption").concat(e.link)});t(60586);var d=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>i(e)):[];var p=e=>{let{children:n}=e,[t,c]=(0,l.useState)(!1),[i,p]=(0,l.useState)(!1),[b,h]=(0,l.useState)(!1),m=(0,d.useRouter)();return(0,l.useEffect)(()=>{m.query&&(c("true"===m.query.fullscreen),p("true"===m.query.noh1),h("true"===m.query.properties))},[m]),(0,o.jsxs)(s,{children:[m.isReady&&t&&(0,o.jsx)("div",{className:"".concat(i?"noh1":""," ").concat(b?"is-properties":""),children:n}),m.isReady&&!t&&(0,o.jsxs)(r.rG,{children:[(0,o.jsxs)(r.ff,{slot:"header",children:[(0,o.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(r.Pm,{data:JSON.stringify(u(a,m.pathname))}),(0,o.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:n}),(0,o.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},23497:function(e,n,t){"use strict";t.r(n),t.d(n,{CH:function(){return c},chCodeConfig:function(){return s}});var o=t(52322),r=t(45392),l=t(65854);let c={annotations:l.ds,Code:l.EK},s={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function a(e){let n=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3"},(0,r.ah)(),e.components);return c||i("CH",!1),c.Code||i("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,o.jsx)(n.h2,{children:"HTML"}),"\n",(0,o.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,o.jsx)(n.h3,{children:"Use component"}),"\n",(0,o.jsx)(c.Code,{codeConfig:s,northPanel:{tabs:["index.html"],active:"index.html",heightRatio:1},files:[{name:"index.html",focus:"",code:{lines:[{tokens:[{content:"<!-- index.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"...",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<body>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<div ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-select",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<option ",props:{style:{color:"#81A1C1"}}},{content:"value",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"test1",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Test1",props:{style:{color:"#D8DEE9FF"}}},{content:"</option>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<option ",props:{style:{color:"#81A1C1"}}},{content:"value",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"test2",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Test2",props:{style:{color:"#D8DEE9FF"}}},{content:"</option>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</div>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</body>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]})]})}function i(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},39624:function(e,n,t){"use strict";t.r(n);var o=t(52322),r=t(45392),l=t(70969),c=t(23497),s=t(81355),a=t(26914),i=t(58721);let d=e=>{let{children:n}=e;return(0,o.jsx)(l.Z,{children:n})};function u(e){let n=Object.assign({h1:"h1"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"How to use DBSelect"}),"\n",(0,o.jsx)(c.default,{}),"\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)(i.default,{})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,Object.assign({},e,{children:(0,o.jsx)(u,e)}))}}},function(e){e.O(0,[4996,9883,1355,6914,8721,9774,2888,179],function(){return e(e.s=25787)}),_N_E=e.O()}]);
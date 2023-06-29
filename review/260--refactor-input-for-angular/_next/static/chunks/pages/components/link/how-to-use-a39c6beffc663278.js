(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6863],{83876:function(e,t,n){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(o)},r.id=83876,e.exports=r},76331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/how-to-use",function(){return n(15763)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(52322),r=n(77900),c=n(2784);let s=()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var t;let o=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";o&&n(!0)},[]),[t,e]};var l=e=>{let{children:t,element:n="div",...o}=e,[r,l]=s();return r?(0,c.createElement)(n,{...o,children:t}):(0,c.createElement)(n,{...o,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],i=e=>({...e,link:"".concat("/mono/review/260--refactor-input-for-angular").concat(e.link)});n(60586);var d=n(5632);let p=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?p(e.children,t):[]})).map(e=>i(e)):[];var u=e=>{let{children:t}=e,[n,s]=(0,c.useState)(!1),[i,u]=(0,c.useState)(!1),[h,b]=(0,c.useState)(!1),g=(0,d.useRouter)();return(0,c.useEffect)(()=>{g.query&&(s("true"===g.query.fullscreen),u("true"===g.query.noh1),b("true"===g.query.properties))},[g]),(0,o.jsxs)(l,{children:[g.isReady&&n&&(0,o.jsx)("div",{className:"".concat(i?"noh1":""," ").concat(h?"is-properties":""),children:t}),g.isReady&&!n&&(0,o.jsxs)(r.rG,{children:[(0,o.jsxs)(r.ff,{slot:"header",children:[(0,o.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(r.Pm,{data:JSON.stringify(p(a,g.pathname))}),(0,o.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:t}),(0,o.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},70980:function(e,t,n){"use strict";n.r(t),n.d(t,{CH:function(){return s},chCodeConfig:function(){return l}});var o=n(52322),r=n(45392),c=n(65854);let s={annotations:c.ds,Code:c.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function a(e){let t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3"},(0,r.ah)(),e.components);return s||i("CH",!1),s.Code||i("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,o.jsx)(t.h2,{children:"HTML"}),"\n",(0,o.jsxs)(t.p,{children:["For general installation and configuration look at the ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,o.jsx)(t.h3,{children:"Use component"}),"\n",(0,o.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["index.html"],active:"index.html",heightRatio:1},files:[{name:"index.html",focus:"",code:{lines:[{tokens:[{content:"<!-- index.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"...",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<body>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<a ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-link",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"#",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Link",props:{style:{color:"#D8DEE9FF"}}},{content:"</a>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</body>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]})]})}function i(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},93331:function(e,t,n){"use strict";n.r(t),n.d(t,{CH:function(){return s},chCodeConfig:function(){return l}});var o=n(52322),r=n(45392),c=n(65854);let s={annotations:c.ds,Code:c.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function a(e){let t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3"},(0,r.ah)(),e.components);return s||i("CH",!1),s.Code||i("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,o.jsx)(t.h2,{children:"Vue"}),"\n",(0,o.jsxs)(t.p,{children:["For general installation and configuration look at the ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,o.jsx)(t.h3,{children:"Use component"}),"\n",(0,o.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["App.vue"],active:"App.vue",heightRatio:1},files:[{name:"App.vue",focus:"",code:{lines:[{tokens:[{content:"<!-- App.vue -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<script>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"DBLink ",props:{style:{color:"#8FBCBB"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/v-components",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</script>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<template>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<",props:{style:{color:"#81A1C1"}}},{content:"DBLink ",props:{style:{color:"#D8DEE9"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"#",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"primary",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Link",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBLink",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</template>",props:{style:{color:"#81A1C1"}}}]}],lang:"vue"},annotations:[]}]})]})}function i(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},15763:function(e,t,n){"use strict";n.r(t);var o=n(52322),r=n(45392),c=n(70969),s=n(70980),l=n(91722),a=n(13184),i=n(93331);let d=e=>{let{children:t}=e;return(0,o.jsx)(c.Z,{children:t})};function p(e){let t=Object.assign({h1:"h1"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"How to use DBLink"}),"\n",(0,o.jsx)(s.default,{}),"\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)(i.default,{})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,Object.assign({},e,{children:(0,o.jsx)(p,e)}))}}},function(e){e.O(0,[4996,9883,1722,3184,9774,2888,179],function(){return e(e.s=76331)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[6846,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function s(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(l)},s.id=3876,e.exports=s},4212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-docs/examples",function(){return t(257)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var l=t(2322),s=t(7900),o=t(2784);let i=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},a=e=>{let{children:n,element:t="div",...l}=e,[s,a]=i();return s?(0,o.createElement)(t,{...l,children:n}):(0,o.createElement)(t,{...l,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(6666);t(586);var r=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,c.e)(e)):[],u=e=>{let{children:n}=e,t=(0,r.useRouter)();return(0,l.jsx)(a,{children:(0,l.jsxs)(s.rG,{children:[(0,l.jsxs)(s.ff,{slot:"header",children:[(0,l.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(s.Pm,{data:JSON.stringify(d(c.Z,t.pathname))}),(0,l.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var h=u},6889:function(e,n,t){"use strict";var l=t(2322),s=t(2784),o=t(6510);let i=(0,s.forwardRef)(function(e,n){function t(e){return e&&"_"!==e&&"none"!==e}let[i,a]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,l.jsxs)("button",{ref:n,type:e.type,disabled:e.disabled,"aria-label":e.label,className:"db-button"+(e.className?" "+e.className:"")+(t(e.icon)&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:i})}):null,t(e.icon)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.P,{icon:e.icon,icntxt:e.icntxt})}):null,e.children,e.text]})});n.Z=i},4938:function(e,n,t){"use strict";t.d(n,{Y:function(){return l.Z}});var l=t(6889)},4728:function(e,n,t){"use strict";var l=t(2322),s=t(2784);let o=(0,s.forwardRef)(function(e,n){let[t,o]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,l.jsxs)("div",{ref:n,className:"db-card"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-direction":e.direction,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=o},4786:function(e,n,t){"use strict";t.d(n,{f:function(){return l.Z}});var l=t(4728)},648:function(e,n,t){"use strict";var l=t(2322),s=t(2784);let o=(0,s.forwardRef)(function(e,n){let[t,o]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=o},6510:function(e,n,t){"use strict";t.d(n,{P:function(){return l.Z}});var l=t(648)},816:function(e,n,t){"use strict";var l=t(2322),s=t(2784),o=t(6510),i=t(7233);let a=(0,s.forwardRef)(function(e,n){var t,a;let[c,r]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,l.jsxs)("span",{ref:n,className:"db-infotext"+(e.className?" "+e.className:""),title:e.title,"data-variant":e.variant,"data-size":e.size,children:[c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:c})}):null,"small"!==e.size?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.P,{icon:(t=e.icon,a=e.variant,t||i.I[a]||"info")})}):null,e.children]})});n.Z=a},7233:function(e,n,t){"use strict";t.d(n,{I:function(){return l}});let l={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return s}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/test-xo-config").concat(e.link)})},257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var l=t(2322),s=t(8429),o=t(2784),i=t(4786),a=t(4938),c=t(816),r=t(7070);let d=(0,o.forwardRef)(function(e,n){var t,s,d,u,h;let[b,p]=(0,o.useState)(()=>!1),[m,x]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{e.stylePath&&x(e.stylePath)},[]),(0,l.jsxs)(i.f,{ref:n,className:"db-code-docs"+(e.className?" "+e.className:""),children:[m?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:m})}):null,e.children,(0,l.jsxs)("details",{className:"code-details",onToggle:()=>void p(!b),children:[(0,l.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:b?null!==(u=e.hideCodeLabel)&&void 0!==u?u:"Hide Code":null!==(h=e.showCodeLabel)&&void 0!==h?h:"Show Code"}),(0,l.jsxs)("div",{className:"code",children:[e.codeSnippets&&0!==e.codeSnippets.length?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.Z,{className:"no-code",variant:"informational",children:null!==(s=e.noCodeLabel)&&void 0!==s?s:"No Code available"})}),e.codeSnippets&&e.codeSnippets.length>0?(0,l.jsx)(l.Fragment,{children:null===(t=e.codeSnippets)||void 0===t?void 0:t.map(n=>(0,l.jsxs)("pre",{children:[(0,l.jsx)("code",{className:"language-typescript",children:n}),(0,l.jsx)(a.Y,{className:"copy-button",size:"small",variant:"outline",onClick:()=>{navigator.clipboard.writeText(n)},children:null!==(d=e.copyLabel)&&void 0!==d?d:"Copy Code"})]},"snippet-".concat((0,r.V)())))}):null]})]})]})});var u=()=>(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("h1",{children:" DBCodeDocs Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{children:"Test"})}),(0,l.jsx)("dt",{children:"codeSnippets:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{codeSnippets:["test1","test2"],children:"Test"})}),(0,l.jsx)("dt",{children:"codeSnippets, copyLabel, hideCodeLabel, id, noCodeLabel, showCodeLabel, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{codeSnippets:["test1","test2"],copyLabel:"account",hideCodeLabel:"account",id:"account",noCodeLabel:"account",showCodeLabel:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"copyLabel, hideCodeLabel, id, noCodeLabel, showCodeLabel, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{copyLabel:"account",hideCodeLabel:"account",id:"account",noCodeLabel:"account",showCodeLabel:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"copyLabel, hideCodeLabel, id, showCodeLabel, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{copyLabel:"account",hideCodeLabel:"account",id:"account",showCodeLabel:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"copyLabel, hideCodeLabel, id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{copyLabel:"account",hideCodeLabel:"account",id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"copyLabel, id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{copyLabel:"account",id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"noCodeLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{noCodeLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"showCodeLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{showCodeLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"hideCodeLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{hideCodeLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"copyLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{copyLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(d,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=4212)}),_N_E=e.O()}]);
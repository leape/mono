(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5558],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function s(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(l)},s.id=3876,e.exports=s},8275:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return t(5256)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),s=t(7900),r=t(2784);let a=()=>{let e=(0,r.useRef)(null),[n,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},i=e=>{let{children:n,element:t="div",...l}=e,[s,i]=a();return s?(0,r.createElement)(t,{...l,children:n}):(0,r.createElement)(t,{...l,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var o=t(6666);t(586);var c=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,o.e)(e)):[],u=e=>{let{children:n}=e,[t,a]=(0,r.useState)(!1),[u,b]=(0,r.useState)(!1),[p,m]=(0,r.useState)(!1),h=(0,c.useRouter)();return(0,r.useEffect)(()=>{h.query&&(a("true"===h.query.fullscreen),b("true"===h.query.noh1),m("true"===h.query.properties))},[h]),(0,l.jsxs)(i,{children:[h.isReady&&t&&(0,l.jsx)("div",{className:"".concat(u?"noh1":""," ").concat(p?"is-properties":""),children:n}),h.isReady&&!t&&(0,l.jsxs)(s.rG,{children:[(0,l.jsxs)(s.ff,{slot:"header",children:[(0,l.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(s.Pm,{data:JSON.stringify(d(o.Z,h.pathname))}),(0,l.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})};var b=u},4870:function(e,n,t){"use strict";var l=t(2322),s=t(2784),r=t(5136);let a=(0,s.forwardRef)(function(e,n){var t;let[a,i]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,l.jsxs)("div",{role:"tablist",ref:n,className:"cmp-tab-bar"+(e.className?" "+e.className:""),children:[a?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:a})}):null,e.tabs?(0,l.jsx)(l.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,l.jsx)(r.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=a},5136:function(e,n,t){"use strict";t.d(n,{Q:function(){return l.Z}});var l=t(3437)},3437:function(e,n,t){"use strict";var l=t(2322),s=t(2784),r=t(8490),a=t(7070);let i=(0,s.forwardRef)(function(e,n){let t=(0,s.useRef)(null),[i,o]=(0,s.useState)(()=>r.IY),[c,d]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{if(o((0,a.V)()),e.stylePath&&d(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,l.jsxs)("div",{ref:n,className:"db-tab"+(e.className?" "+e.className:""),children:[c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,l.jsx)("input",{type:"radio",ref:t,name:e.name,id:i}),(0,l.jsx)("label",{role:"tab",htmlFor:i,children:e.label}),(0,l.jsxs)("section",{role:"tabpanel",id:"content-"+i,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})]})});n.Z=i},8490:function(e,n,t){"use strict";var l,s,r,a,i,o;t.d(n,{$f:function(){return u},DM:function(){return b},IY:function(){return c},SU:function(){return d},iw:function(){return l},r$:function(){return s}});let c="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND",d="LABEL SHOULD BE SET";(a=l||(l={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive";let u=Object.entries(l).map(e=>{let[,n]=e;return n});(i=s||(s={})).NEUTRAL_0="neutral-0",i.NEUTRAL_1="neutral-1",i.NEUTRAL_2="neutral-2",i.NEUTRAL_3="neutral-3",i.NEUTRAL_4="neutral-4",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SECONDARY="secondary",i.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",i.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",i.SUCCESSFUL="successful",i.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",i.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATIONAL="informational",i.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",i.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let b=Object.entries(s).map(e=>{let[,n]=e;return n});(o=r||(r={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return s}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/refactor-show-code").concat(e.link)})},5256:function(e,n,t){"use strict";t.r(n);var l=t(2322),s=t(8429),r=t(4870);n.default=()=>(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("h1",{children:" DBTabBar Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"name:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{name:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, name, tabs, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{id:"account",name:"account",tabs:"undefined",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, tabs, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{id:"account",tabs:"undefined",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"tabs:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{tabs:"undefined",children:"Test"})}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(r.Z,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=8275)}),_N_E=e.O()}]);
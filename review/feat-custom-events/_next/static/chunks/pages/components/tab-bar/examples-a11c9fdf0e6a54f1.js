(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5558],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,5317],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function s(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(l)},s.id=3876,e.exports=s},8275:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return t(8265)}])},4192:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),s=t(6744),a=t(2784);let r=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},i=e=>{let{children:n,element:t="div",...l}=e,[s,i]=r();return s?(0,a.createElement)(t,{...l,children:n}):(0,a.createElement)(t,{...l,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var o=t(7965);t(6288);var c=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,o.e)(e)):[],u=e=>{let{children:n}=e,t=(0,c.useRouter)();return(0,l.jsx)(i,{children:(0,l.jsxs)(s.rG,{children:[(0,l.jsxs)(s.ff,{slot:"header",children:[(0,l.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(s.Pm,{data:JSON.stringify(d(o.Z,t.pathname))}),(0,l.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=u},5908:function(e,n,t){"use strict";var l=t(2322),s=t(2784),a=t(7377),r=t(9345);let i=(0,s.forwardRef)(function(e,n){let t=(0,s.useRef)(null),[i,o]=(0,s.useState)(()=>a.IY),[c,d]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{if(o((0,r.V)()),e.stylePath&&d(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,l.jsxs)("div",{ref:n,className:"db-tab"+(e.className?" "+e.className:""),children:[c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,l.jsx)("input",{type:"radio",ref:t,name:e.name,id:i}),(0,l.jsx)("label",{role:"tab",htmlFor:i,children:e.label}),(0,l.jsxs)("section",{role:"tabpanel",id:"content-"+i,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})]})});n.Z=i},7377:function(e,n,t){"use strict";var l,s,a,r,i,o;t.d(n,{IY:function(){return c},SU:function(){return d}});let c="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND",d="LABEL SHOULD BE SET";(r=l||(l={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive",Object.entries(l).map(e=>{let[,n]=e;return n}),(i=s||(s={})).NEUTRAL_0="neutral-0",i.NEUTRAL_1="neutral-1",i.NEUTRAL_2="neutral-2",i.NEUTRAL_3="neutral-3",i.NEUTRAL_4="neutral-4",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SECONDARY="secondary",i.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",i.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",i.SUCCESS="success",i.SUCCESS_TRANSPARENT_FULL="success-transparent-full",i.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATION="information",i.INFORMATION_TRANSPARENT_FULL="information-transparent-full",i.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi",Object.entries(s).map(e=>{let[,n]=e;return n}),(o=a||(a={})).CRITICAL="critical",o.INFORMATION="information",o.WARNING="warning",o.SUCCESS="success",Object.entries(a).map(e=>{let[,n]=e;return n})},9345:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return(null==window?void 0:null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()}},7965:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return s}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/feat-custom-events").concat(e.link)})},8265:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var l=t(2322),s=t(4192),a=t(2784),r=t(5908);let i=(0,a.forwardRef)(function(e,n){var t;let[s,i]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,l.jsxs)("div",{role:"tablist",ref:n,className:"cmp-tab-bar"+(e.className?" "+e.className:""),children:[s?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:s})}):null,e.tabs?(0,l.jsx)(l.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,l.jsx)(r.Z,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});var o=()=>(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("h1",{children:" DBTabBar Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(i,{children:"Test"}),(0,l.jsx)("p",{children:"name:"})," ",(0,l.jsx)(i,{name:"account",children:"Test"}),(0,l.jsx)("p",{children:"id, name, tabs, title:"})," ",(0,l.jsx)(i,{id:"account",name:"account",tabs:"undefined",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"id, tabs, title:"})," ",(0,l.jsx)(i,{id:"account",tabs:"undefined",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"id, title:"})," ",(0,l.jsx)(i,{id:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"title:"})," ",(0,l.jsx)(i,{title:"account",children:"Test"}),(0,l.jsx)("p",{children:"tabs:"})," ",(0,l.jsx)(i,{tabs:"undefined",children:"Test"}),(0,l.jsx)("p",{children:"id:"})," ",(0,l.jsx)(i,{id:"account",children:"Test"})]})]})}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=8275)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6590],{83876:function(n,e,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(n){if(!t.o(r,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[n],s=e[0];return t.e(e[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(r)},s.id=83876,n.exports=s},33533:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/how-to-use",function(){return t(36026)}])},70969:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var r=t(52322),s=t(77900),a=t(2784);let i=()=>{let n=(0,a.useRef)(null),[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var e;let r=(null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.innerHTML)==="";r&&t(!0)},[]),[e,n]},l=n=>{let{children:e,element:t="div",...r}=n,[s,l]=i();return s?(0,a.createElement)(t,{...r,children:e}):(0,a.createElement)(t,{...r,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(n=>({...n,children:n.children.map(n=>({label:n.label,link:"/components/".concat(n.name),children:[{label:"Properties",link:"/components/".concat(n.name,"/properties")},{label:"Examples",link:"/components/".concat(n.name,"/examples")},{label:"How to use",link:"/components/".concat(n.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(n.name,"/migration")}]}))}))}],c=n=>({...n,link:"".concat("/mono/review/refactor-component-tests").concat(n.link)});t(60586);var d=t(5632);let u=(n,e)=>n?n.map(n=>({...n,current:"/"===n.link&&"/"===e||"/"!==n.link&&e.includes(n.link),children:n.children?u(n.children,e):[]})).map(n=>c(n)):[],b=n=>{let{children:e}=n,[t,i]=(0,a.useState)(!1),[c,b]=(0,a.useState)(!1),[h,j]=(0,a.useState)(!1),p=(0,d.useRouter)();return(0,a.useEffect)(()=>{p.query&&(i("true"===p.query.fullscreen),b("true"===p.query.noh1),j("true"===p.query.properties))},[p]),(0,r.jsxs)(l,{children:[p.isReady&&t&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:e}),p.isReady&&!t&&(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(u(o,p.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:e}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})};var h=b},91462:function(n,e,t){"use strict";t.r(e);var r=t(52322),s=t(45392);function a(n){let e=Object.assign({h2:"h2",p:"p"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Angular"}),"\n",(0,r.jsx)(e.p,{children:"TODO"})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},83903:function(n,e,t){"use strict";t.r(e);var r=t(52322),s=t(45392);function a(n){let e=Object.assign({h2:"h2",p:"p"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"HTML"}),"\n",(0,r.jsx)(e.p,{children:"TODO"})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},70252:function(n,e,t){"use strict";t.r(e);var r=t(52322),s=t(45392);function a(n){let e=Object.assign({h2:"h2",p:"p"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"React"}),"\n",(0,r.jsx)(e.p,{children:"TODO"})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},69413:function(n,e,t){"use strict";t.r(e);var r=t(52322),s=t(45392);function a(n){let e=Object.assign({h2:"h2",p:"p"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Vue"}),"\n",(0,r.jsx)(e.p,{children:"TODO"})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},36026:function(n,e,t){"use strict";t.r(e);var r=t(52322),s=t(45392),a=t(70969),i=t(83903),l=t(91462),o=t(70252),c=t(69413);let d=n=>{let{children:e}=n;return(0,r.jsx)(a.Z,{children:e})};function u(n){let e=Object.assign({h1:"h1"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"How to use DBTabBar"}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(c.default,{})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,Object.assign({},n,{children:(0,r.jsx)(u,n)}))}}},function(n){n.O(0,[9883,9774,2888,179],function(){return n(n.s=33533)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{83876:function(e,n,t){var d={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!t.o(d,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=d[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(d)},l.id=83876,e.exports=l},74212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-docs/examples",function(){return t(81442)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var d=t(52322),l=t(77900),i=t(2784);let a=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let d=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";d&&t(!0)},[]),[n,e]};var c=e=>{let{children:n,element:t="div",...d}=e,[l,c]=a();return l?(0,i.createElement)(t,{...d,children:n}):(0,i.createElement)(t,{...d,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],s=e=>({...e,link:"".concat("/mono/review/927-consider-if-we-should-replace-classnames-as-a-dependency-with-utils-function").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>s(e)):[];var b=e=>{let{children:n}=e,[t,a]=(0,i.useState)(!1),[s,b]=(0,i.useState)(!1),[h,j]=(0,i.useState)(!1),x=(0,o.useRouter)();return(0,i.useEffect)(()=>{x.query&&(a("true"===x.query.fullscreen),b("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,d.jsxs)(c,{children:[x.isReady&&t&&(0,d.jsx)("div",{className:"".concat(s?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,d.jsxs)(l.rG,{children:[(0,d.jsxs)(l.ff,{slot:"header",children:[(0,d.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,d.jsx)(l.Pm,{data:JSON.stringify(u(r,x.pathname))}),(0,d.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,d.jsx)("div",{children:n}),(0,d.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})}},54728:function(e,n,t){"use strict";var d=t(52322),l=t(2784),i=t(7070);let a=(0,l.forwardRef)(function(e,n){let[t,a]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,d.jsxs)("div",{ref:n,className:(0,i.y)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=a},34786:function(e,n,t){"use strict";t.d(n,{f:function(){return d.Z}});var d=t(54728)},63172:function(e,n,t){"use strict";var d=t(52322),l=t(2784),i=t(34786),a=t(7070);let c=(0,l.forwardRef)(function(e,n){var t,c;let[r,s]=(0,l.useState)(()=>!1),[o,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,d.jsxs)(i.f,{elevation:"none",ref:n,className:(0,a.y)("db-code-docs",e.className),children:[o?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:o})}):null,e.children,(0,d.jsxs)("details",{className:"code-details",onToggle:e=>void s(!r),children:[(0,d.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:r?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(c=e.showCodeLabel)&&void 0!==c?c:"Show Code"}),(0,d.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=c},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return d},y:function(){return l}});let d=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let d="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)d+="".concat(e," ");else for(let n in e)e[n]&&(d+="".concat(n," "))}}),d.trim()}},81442:function(e,n,t){"use strict";t.r(n);var d=t(52322),l=t(70969),i=t(63172);n.default=()=>(0,d.jsxs)(l.Z,{children:[(0,d.jsx)("h1",{children:" DBCodeDocs Examples "}),(0,d.jsxs)("dl",{className:"example-list",children:[(0,d.jsx)("dt",{children:"Default:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{children:"Test"})}),(0,d.jsx)("dt",{children:"showCodeLabel:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{showCodeLabel:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, showCodeLabel, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",showCodeLabel:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, id, key, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{describedbyid:"account",id:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{title:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"hideCodeLabel:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{hideCodeLabel:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"slotCode:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{slotCode:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"describedbyid:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{describedbyid:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"id:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{id:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"key:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{children:"Test"},"account")}),(0,d.jsx)("dt",{children:"tabIndex:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(i.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=74212)}),_N_E=e.O()}]);
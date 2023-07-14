(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},87691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return t(61650)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var i=t(52322),a=t(77900),l=t(2784);let d=()=>{let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let i=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]};var s=e=>{let{children:n,element:t="div",...i}=e,[a,s]=d();return a?(0,l.createElement)(t,{...i,children:n}):(0,l.createElement)(t,{...i,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/version/v0.0.23").concat(e.link)});t(60586);var r=t(5632);let b=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?b(e.children,n):[]})).map(e=>c(e)):[];var u=e=>{let{children:n}=e,[t,d]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),[h,j]=(0,l.useState)(!1),x=(0,r.useRouter)();return(0,l.useEffect)(()=>{x.query&&(d("true"===x.query.fullscreen),u("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,i.jsxs)(s,{children:[x.isReady&&t&&(0,i.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(b(o,x.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},32046:function(e,n,t){"use strict";var i=t(52322),a=t(2784),l=t(7070);let d=(0,a.forwardRef)(function(e,n){let[t,d]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,i.jsxs)("header",{role:"banner",ref:n,className:(0,l.y)("db-header",e.className),children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,e.slotBrand,(0,i.jsx)("div",{className:"desktop-navigation",children:e.slotDesktopNavigation}),(0,i.jsx)("div",{className:"mobile-navigation",children:e.slotMobileNavigation}),(0,i.jsx)("div",{className:"meta-navigation",children:e.slotMetaNavigation}),e.children]})});n.Z=d},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return i},y:function(){return a}});let i=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let i="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let n in e)e[n]&&(i+="".concat(n," "))}}),i.trim()}},61650:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(70969),l=t(32046);n.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBHeader Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"slotBrand:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{slotBrand:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotBrand, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",id:"account",slotBrand:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",id:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, slotMobileNavigation, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotDesktopNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{slotDesktopNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMobileNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{slotMobileNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMetaNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{slotMetaNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=87691)}),_N_E=e.O()}]);
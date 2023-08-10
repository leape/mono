(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{83876:function(e,i,n){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function d(e){if(!n.o(t,e))return Promise.resolve().then(function(){var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i});var i=t[e],d=i[0];return n.e(i[1]).then(function(){return n(d)})}d.keys=function(){return Object.keys(t)},d.id=83876,e.exports=d},10280:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/examples",function(){return n(77269)}])},70969:function(e,i,n){"use strict";n.d(i,{Z:function(){return h}});var t=n(52322),d=n(77900),l=n(2784);let c=()=>{let e=(0,l.useRef)(null),[i,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var i;let t=(null===(i=null==e?void 0:e.current)||void 0===i?void 0:i.innerHTML)==="";t&&n(!0)},[]),[i,e]};var a=e=>{let{children:i,element:n="div",...t}=e,[d,a]=c();return d?(0,l.createElement)(n,{...t,children:i}):(0,l.createElement)(n,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/version/v0.0.30").concat(e.link)});n(60586);var s=n(5632);let g=(e,i)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===i||"/"!==e.link&&i.includes(e.link),children:e.children?g(e.children,i):[]})).map(e=>o(e)):[];var h=e=>{let{children:i}=e,[n,c]=(0,l.useState)(!1),[o,h]=(0,l.useState)(!1),[m,b]=(0,l.useState)(!1),u=(0,s.useRouter)();return(0,l.useEffect)(()=>{u.query&&(c("true"===u.query.fullscreen),h("true"===u.query.noh1),b("true"===u.query.properties))},[u]),(0,t.jsxs)(a,{children:[u.isReady&&n&&(0,t.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(m?"is-properties":""),children:i}),u.isReady&&!n&&(0,t.jsxs)(d.rG,{children:[(0,t.jsxs)(d.ff,{slot:"header",children:[(0,t.jsx)(d.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(d.Pm,{data:JSON.stringify(g(r,u.pathname))}),(0,t.jsx)(d.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:i}),(0,t.jsx)(d.fw,{slot:"footer",copyright:!0})]})]})}},54728:function(e,i,n){"use strict";var t=n(52322),d=n(2784),l=n(7070);let c=(0,d.forwardRef)(function(e,i){let[n,c]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,t.jsxs)("div",{ref:i,className:(0,l.y)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:i=>{e.onClick&&e.onClick(i)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});i.Z=c},7070:function(e,i,n){"use strict";n.d(i,{V:function(){return t},y:function(){return d}});let t=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},d=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];let t="";return i.forEach((e,i)=>{if(e){if("string"==typeof e)t+="".concat(e," ");else for(let i in e)e[i]&&(t+="".concat(i," "))}}),t.trim()}},77269:function(e,i,n){"use strict";n.r(i);var t=n(52322),d=n(70969),l=n(54728);i.default=()=>(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h1",{children:" DBCard Examples "}),(0,t.jsxs)("dl",{className:"example-list",children:[(0,t.jsx)("dt",{children:"Default:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{children:"Test"})}),(0,t.jsx)("dt",{children:"colorVariant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{colorVariant:"undefined",children:"Test"})}),(0,t.jsx)("dt",{children:"colorVariant, describedbyid, elevation, id, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, spacing, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{colorVariant:"undefined",describedbyid:"account",elevation:"none",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),spacing:"medium",tabIndex:100,title:"account",variant:"interactive",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"describedbyid, elevation, id, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, spacing, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{describedbyid:"account",elevation:"none",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),spacing:"medium",tabIndex:100,title:"account",variant:"interactive",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"describedbyid, elevation, id, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{describedbyid:"account",elevation:"none",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"interactive",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"describedbyid, elevation, id, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, tabIndex, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{describedbyid:"account",elevation:"none",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"elevation, id, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, tabIndex, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"elevation, imgAlt, imgHeight, imgSrc, imgWidth, key, onClick, tabIndex, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"elevation, imgAlt, imgHeight, imgSrc, imgWidth, onClick, tabIndex, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),tabIndex:100,title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgAlt, imgHeight, imgSrc, imgWidth, onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgSrc, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"elevation, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"elevation:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{elevation:"none",children:"Test"})}),(0,t.jsx)("dt",{children:"spacing:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{spacing:"medium",children:"Test"})}),(0,t.jsx)("dt",{children:"variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{variant:"interactive",children:"Test"})}),(0,t.jsx)("dt",{children:"describedbyid:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{describedbyid:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"id:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{id:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"key:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{children:"Test"},"account")}),(0,t.jsx)("dt",{children:"tabIndex:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{tabIndex:100,children:"Test"})}),(0,t.jsx)("dt",{children:"title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"imgAlt:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{imgAlt:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"imgHeight:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{imgHeight:100,children:"Test"})}),(0,t.jsx)("dt",{children:"imgSrc:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})}),(0,t.jsx)("dt",{children:"imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(l.Z,{imgWidth:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=10280)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5613],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},74001:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge/examples",function(){return t(21500)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(52322),a=t(77900),s=t(2784);let r=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]};var l=e=>{let{children:n,element:t="div",...i}=e,[a,l]=r();return a?(0,s.createElement)(t,{...i,children:n}):(0,s.createElement)(t,{...i,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let d=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/1372-incorrect-local-font-names").concat(e.link)});t(60586);var o=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>c(e)):[];var b=e=>{let{children:n}=e,[t,r]=(0,s.useState)(!1),[c,b]=(0,s.useState)(!1),[u,m]=(0,s.useState)(!1),j=(0,o.useRouter)();return(0,s.useEffect)(()=>{j.query&&(r("true"===j.query.fullscreen),b("true"===j.query.noh1),m("true"===j.query.properties))},[j]),(0,i.jsxs)(l,{children:[j.isReady&&t&&(0,i.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(u?"is-properties":""),children:n}),j.isReady&&!t&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(h(d,j.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},53213:function(e,n,t){"use strict";var i=t(52322),a=t(2784),s=t(7070);let r=(0,a.forwardRef)(function(e,n){let[t,r]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,i.jsxs)("span",{ref:n,className:(0,s.y)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return i},y:function(){return a}});let i=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let i="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let n in e)e[n]&&(i+="".concat(n," "))}}),i.trim()}},21500:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(70969),s=t(53213);n.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBBadge Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"placement:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{placement:"corner-top-left",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, id, key, placement, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",emphasis:"strong",id:"account",placement:"corner-top-left",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, emphasis, id, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",emphasis:"strong",id:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"emphasis, id, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",id:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"emphasis, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"emphasis, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"emphasis, size, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",size:"small",title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"emphasis, size, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",size:"small",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"emphasis, size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",size:"small",children:"Test"})}),(0,i.jsx)("dt",{children:"emphasis:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{emphasis:"strong",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{tabIndex:100,children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{size:"small",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=74001)}),_N_E=e.O()}]);
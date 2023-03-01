(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{3876:function(e,n,i){var t={"./db-accordion.entry.js":[2754,2754],"./db-brand.entry.js":[1534,1534],"./db-breadcrumb.entry.js":[4533,4533],"./db-button_2.entry.js":[8130,8130],"./db-card.entry.js":[9319,9319],"./db-cards.entry.js":[2858,2858],"./db-checkbox.entry.js":[6323,6323],"./db-chip.entry.js":[7458,7458],"./db-dropdown.entry.js":[9650,9650],"./db-footer.entry.js":[6245,6245],"./db-header.entry.js":[7491,7491],"./db-headline.entry.js":[1498,1498],"./db-image.entry.js":[5514,5514],"./db-input.entry.js":[942,942],"./db-language-switcher.entry.js":[8698,8698],"./db-link.entry.js":[7213,7213],"./db-linklist.entry.js":[4637,4637],"./db-logo.entry.js":[874,874],"./db-mainnavigation.entry.js":[5555,5555],"./db-meta.entry.js":[72,72],"./db-metanavigation.entry.js":[8922,8922],"./db-notification.entry.js":[2244,2244],"./db-notifications.entry.js":[8915,8915],"./db-overflow-menu.entry.js":[3699,3699],"./db-page.entry.js":[5974,5974],"./db-pagination.entry.js":[2428,2428],"./db-progress.entry.js":[5317,5317],"./db-radio.entry.js":[5028,5028],"./db-select.entry.js":[258,258],"./db-sidenavi.entry.js":[9821,9821],"./db-tab-bar.entry.js":[1584,1584],"./db-tab.entry.js":[7823,7823],"./db-table.entry.js":[3324,3324],"./db-tag.entry.js":[4806,4806],"./db-textarea.entry.js":[7900,7900],"./db-toggle.entry.js":[3469,3469],"./github-version-switcher.entry.js":[915,915]};function l(e){if(!i.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],l=n[0];return i.e(n[1]).then(function(){return i(l)})}l.keys=function(){return Object.keys(t)},l.id=3876,e.exports=l},280:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/examples",function(){return i(4669)}])},4192:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(2322),l=i(6744),o=i(2784);let s=()=>{let e=(0,o.useRef)(null),[n,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&i(!0)},[]),[n,e]},c=e=>{let{children:n,element:i="div",...t}=e,[l,c]=s();return l?(0,o.createElement)(i,{...t,children:n}):(0,o.createElement)(i,{...t,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var a=i(7965);i(6288);var r=i(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,a.e)(e)):[],m=e=>{let{children:n}=e,i=(0,r.useRouter)();return(0,t.jsx)(c,{children:(0,t.jsxs)(l.rG,{children:[(0,t.jsxs)(l.ff,{slot:"header",children:[(0,t.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(l.Pm,{data:JSON.stringify(d(a.Z,i.pathname))}),(0,t.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(l.fw,{slot:"footer",copyright:!0})]})})};var h=m},7583:function(e,n,i){"use strict";var t=i(2322),l=i(2784);n.Z=function(e){let[n,i]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,t.jsxs)("div",{className:"db-card"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-direction":e.direction,onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})}},7965:function(e,n,i){"use strict";i.d(n,{Z:function(){return t},e:function(){return l}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"TODO: Add to specific category; DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]},{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/361-featcomponent-radio").concat(e.link)})},4669:function(e,n,i){"use strict";i.r(n);var t=i(2322),l=i(4192),o=i(7583);n.default=()=>(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{children:" DBCard Examples "}),(0,t.jsxs)("div",{className:"example-list",children:["Default: ",(0,t.jsx)(o.Z,{children:"Test"}),(0,t.jsx)("p",{children:"colorVariant:"})," ",(0,t.jsx)(o.Z,{colorVariant:"account",children:"Test"}),(0,t.jsx)("p",{children:"colorVariant, direction, id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{colorVariant:"account",direction:"row",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"direction, id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{direction:"row",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)(o.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgHeight, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgWidth:"})," ",(0,t.jsx)(o.Z,{imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"direction:"})," ",(0,t.jsx)(o.Z,{direction:"row",children:"Test"}),(0,t.jsx)("p",{children:"variant:"})," ",(0,t.jsx)(o.Z,{variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"id:"})," ",(0,t.jsx)(o.Z,{id:"account",children:"Test"}),(0,t.jsx)("p",{children:"title:"})," ",(0,t.jsx)(o.Z,{title:"account",children:"Test"}),(0,t.jsx)("p",{children:"onClick:"})," ",(0,t.jsx)(o.Z,{onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"imgAlt:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",children:"Test"}),(0,t.jsx)("p",{children:"imgSrc:"})," ",(0,t.jsx)(o.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"}),(0,t.jsx)("p",{children:"imgHeight:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,children:"Test"})]})]})}},function(e){e.O(0,[2501,9774,2888,179],function(){return e(e.s=280)}),_N_E=e.O()}]);
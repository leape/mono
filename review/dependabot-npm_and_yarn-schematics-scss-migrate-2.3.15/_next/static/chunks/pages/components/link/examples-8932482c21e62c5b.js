(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1302],{3876:function(e,n,l){var r={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function t(e){if(!l.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],t=n[0];return l.e(n[1]).then(function(){return l(t)})}t.keys=function(){return Object.keys(r)},t.id=3876,e.exports=t},3438:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/examples",function(){return l(6629)}])},8429:function(e,n,l){"use strict";l.d(n,{Z:function(){return u}});var r=l(2322),t=l(7900),c=l(2784);let a=()=>{let e=(0,c.useRef)(null),[n,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&l(!0)},[]),[n,e]},o=e=>{let{children:n,element:l="div",...r}=e,[t,o]=a();return t?(0,c.createElement)(l,{...r,children:n}):(0,c.createElement)(l,{...r,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var s=l(6666);l(586);var i=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,s.e)(e)):[],h=e=>{let{children:n}=e,l=(0,i.useRouter)();return(0,r.jsx)(o,{children:(0,r.jsxs)(t.rG,{children:[(0,r.jsxs)(t.ff,{slot:"header",children:[(0,r.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(t.Pm,{data:JSON.stringify(d(s.Z,l.pathname))}),(0,r.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(t.fw,{slot:"footer",copyright:!0})]})})};var u=h},648:function(e,n,l){"use strict";var r=l(2322),t=l(2784);let c=(0,t.forwardRef)(function(e,n){let[l,c]=(0,t.useState)(()=>null);return(0,t.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,r.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});n.Z=c},6510:function(e,n,l){"use strict";l.d(n,{P:function(){return r.Z}});var r=l(648)},7224:function(e,n,l){"use strict";var r=l(2322),t=l(2784),c=l(6510);let a=(0,t.forwardRef)(function(e,n){let[l,a]=(0,t.useState)(()=>null);return(0,t.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,r.jsxs)("a",{ref:n,className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children,"inline"!==e.variant?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.P,{icon:"external"==e.content?"link-external":"link",icntxt:!0})}):null]})});n.Z=a},6666:function(e,n,l){"use strict";l.d(n,{Z:function(){return r},e:function(){return t}});let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],t=e=>({...e,link:"".concat("/mono/review/dependabot-npm_and_yarn-schematics-scss-migrate-2.3.15").concat(e.link)})},6629:function(e,n,l){"use strict";l.r(n);var r=l(2322),t=l(8429),c=l(7224);n.default=()=>(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("h1",{children:" DBLink Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"content:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"internal",children:"Test"})}),(0,r.jsx)("dt",{children:"content, current, disabled, href, hreflang, id, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"internal",current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, id, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, title, variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",variant:"primary",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"current, disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"label, referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"referrerpolicy, rel, role, selected, target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"referrerpolicy, rel, role, selected:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"referrerpolicy, role, selected:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",role:"account",selected:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"referrerpolicy, selected:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",selected:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"selected:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{selected:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{id:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"size:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{size:"small",children:"Test"})}),(0,r.jsx)("dt",{children:"variant:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{variant:"primary",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"onClick:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,r.jsx)("dt",{children:"current:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{current:"time",children:"Test"})}),(0,r.jsx)("dt",{children:"disabled:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"href:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{href:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"hreflang:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{hreflang:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"label:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{label:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"target:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{target:"_blank",children:"Test"})}),(0,r.jsx)("dt",{children:"rel:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{rel:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"role:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{role:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"referrerpolicy:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=3438)}),_N_E=e.O()}]);
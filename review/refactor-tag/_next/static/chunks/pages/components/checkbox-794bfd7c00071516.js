(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{83876:function(e,n,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],r=n[0];return a.e(n[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(t)},r.id=83876,e.exports=r},87480:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return a(73308)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>{var t,r;return e.map((e,l)=>({...e,slotCode:null!==(t=null==a?void 0:a.at(l))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return m}});var t=a(52322),r=a(77900),l=a(2784);let i=()=>{let e=(0,l.useRef)(null),[n,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&a(!0)},[]),[n,e]};var s=e=>{let{children:n,element:a="div",...t}=e,[r,s]=i();return r?(0,l.createElement)(a,{...t,children:n}):(0,l.createElement)(a,{...t,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/refactor-tag").concat(e.link)});a(60586);var c=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var m=e=>{let{children:n}=e,[a,i]=(0,l.useState)(!1),[d,m]=(0,l.useState)(!1),[b,p]=(0,l.useState)(!1),h=(0,c.useRouter)();return(0,l.useEffect)(()=>{h.query&&(i("true"===h.query.fullscreen),m("true"===h.query.noh1),p("true"===h.query.properties))},[h]),(0,t.jsxs)(s,{children:[h.isReady&&a&&(0,t.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(b?"is-properties":""),children:n}),h.isReady&&!a&&(0,t.jsxs)(r.rG,{children:[(0,t.jsxs)(r.ff,{slot:"header",children:[(0,t.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(r.Pm,{data:JSON.stringify(u(o,h.pathname))}),(0,t.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,a){"use strict";var t=a(52322),r=a(82852),l=a(5632),i=a(70969),s=a(2784);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,c]=(0,s.useState)(),u=(0,l.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);c(e),console.log(n)}}},[u]);let m=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},73308:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m}});var t=a(52322),r=a(86061),l=a(49126),i=a(50739),s=a(82852),o=a(68623),d=a(75549),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Disabled","props":{"name":"States","disabled":true}},{"name":"Disabled checked","props":{"name":"States","disabled":true,"checked":true}},{"name":"Required","props":{"name":"States","required":true}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]}]');let u=e=>{let{label:n,size:a,name:r,checked:l,invalid:i,required:o,children:d,disabled:c,indeterminate:u}=e;return(0,t.jsx)(s.I3,{label:n,size:a,name:r,checked:l,invalid:i,required:o,disabled:c,indeterminate:u,children:d})};var m=()=>(0,t.jsx)(o.Z,{title:"DBCheckbox",variants:(0,d.P)(c,u,[(0,t.jsx)(r.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{})])})}},function(e){e.O(0,[4996,9883,2852,9126,6061,739,9774,2888,179],function(){return e(e.s=87480)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5417],{83876:function(e,t,n){var s={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!n.o(s,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(s)},r.id=83876,e.exports=r},11576:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/properties",function(){return n(54201)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var s=n(52322),r=n(77900),i=n(2784);let d=()=>{let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var t;let s=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";s&&n(!0)},[]),[t,e]},l=e=>{let{children:t,element:n="div",...s}=e,[r,l]=d();return r?(0,i.createElement)(n,{...s,children:t}):(0,i.createElement)(n,{...s,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],a=e=>({...e,link:"".concat("/mono/review/refactor-component-tests").concat(e.link)});n(60586);var c=n(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>a(e)):[],j=e=>{let{children:t}=e,[n,d]=(0,i.useState)(!1),[a,j]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!1),u=(0,c.useRouter)();return(0,i.useEffect)(()=>{u.query&&(d("true"===u.query.fullscreen),j("true"===u.query.noh1),b("true"===u.query.properties))},[u]),(0,s.jsxs)(l,{children:[u.isReady&&n&&(0,s.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(x?"is-properties":""),children:t}),u.isReady&&!n&&(0,s.jsxs)(r.rG,{children:[(0,s.jsxs)(r.ff,{slot:"header",children:[(0,s.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,s.jsx)(r.Pm,{data:JSON.stringify(h(o,u.pathname))}),(0,s.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,s.jsx)("div",{children:t}),(0,s.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var x=j},54201:function(e,t,n){"use strict";n.r(t);var s=n(52322),r=n(45392),i=n(70969);let d=e=>{let{children:t}=e;return(0,s.jsx)(i.Z,{children:t})};function l(e){let t=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",em:"em"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"DBButton"}),"\n",(0,s.jsx)(t.h2,{children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Options"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ariaexpanded"}),(0,s.jsxs)(t.td,{children:["If the button controls a grouping of other elements, the ariaexpanded state ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",children:"indicates whether the controlled grouping is currently expanded or collapsed"}),"."]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ariapressed"}),(0,s.jsxs)(t.td,{children:["Defines the button as a toggle button. The value of ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed",children:"ariapressed describes the state of the button"}),"."]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"disabled"}),(0,s.jsxs)(t.td,{children:["The disabled attribute can be set to ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled",children:"keep a user from clicking on the button"}),"."]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"noText"}),(0,s.jsx)(t.td,{children:"Define the text next to the icon specified via the icon Property to get hidden."}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsxs)(t.td,{children:["The label represents the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",children:"aria-label attributes"})," value of the button"]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsxs)(t.td,{children:["The name attribute specifies a ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name",children:"name attributes value"})," for the button."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"type"}),(0,s.jsxs)(t.td,{children:["The type attribute specifies the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type",children:"type of button"}),"."]}),(0,s.jsx)(t.td,{children:"union"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'button' | 'reset' | 'submit'"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsxs)(t.td,{children:["The value attribute specifies an initial ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value",children:"value for the button"}),"."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"state"}),(0,s.jsx)(t.td,{children:"Show loading progress inside button."}),(0,s.jsx)(t.td,{children:"literal"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'loading'"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size of the button"}),(0,s.jsx)(t.td,{children:"literal"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'small'"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"width"}),(0,s.jsx)(t.td,{children:"Width of the button. Auto width based on text size, full width based on parent elements width."}),(0,s.jsx)(t.td,{children:"union"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'full' | 'auto'"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"variant"}),(0,s.jsx)(t.td,{children:"Variant of the button. Use only 1 primary button on a page as CTA otherwise use one of the adaptive buttons."}),(0,s.jsx)(t.td,{children:"union"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"'outlined' | 'primary' | 'solid' | 'text'"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"children"}),(0,s.jsx)(t.td,{children:"default slot"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"className"}),(0,s.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"React specific for render process."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stylePath"}),(0,s.jsx)(t.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onClick"}),(0,s.jsx)(t.td,{children:"React specific onClick to pass to forward ref."}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"icon"}),(0,s.jsxs)(t.td,{children:["Define an icon by it's identifier (like e.g. ",(0,s.jsx)(t.em,{children:"account"}),", compare to ",(0,s.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]})]})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(d,Object.assign({},e,{children:(0,s.jsx)(l,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=11576)}),_N_E=e.O()}]);
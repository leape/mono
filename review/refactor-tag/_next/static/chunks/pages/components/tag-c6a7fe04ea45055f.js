(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{83876:function(e,a,n){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function o(e){if(!n.o(t,e))return Promise.resolve().then(function(){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a});var a=t[e],o=a[0];return n.e(a[1]).then(function(){return n(o)})}o.keys=function(){return Object.keys(t)},o.id=83876,e.exports=o},55413:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag",function(){return n(55635)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,o;return e.map((e,r)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(r))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var n;return{...e,example:a({...e.props,id:null!==(o=e.props.id)&&void 0!==o?o:e.name,children:(null===(n=e.props)||void 0===n?void 0:n.children)?e.props.children:e.name})}})}))}},70969:function(e,a,n){"use strict";n.d(a,{Z:function(){return u}});var t=n(52322),o=n(77900),r=n(2784);let c=()=>{let e=(0,r.useRef)(null),[a,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var a;let t=(null===(a=null==e?void 0:e.current)||void 0===a?void 0:a.innerHTML)==="";t&&n(!0)},[]),[a,e]};var i=e=>{let{children:a,element:n="div",...t}=e,[o,i]=c();return o?(0,r.createElement)(n,{...t,children:a}):(0,r.createElement)(n,{...t,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/refactor-tag").concat(e.link)});n(60586);var s=n(5632);let b=(e,a)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===a||"/"!==e.link&&a.includes(e.link),children:e.children?b(e.children,a):[]})).map(e=>d(e)):[];var u=e=>{let{children:a}=e,[n,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1),h=(0,s.useRouter)();return(0,r.useEffect)(()=>{h.query&&(c("true"===h.query.fullscreen),u("true"===h.query.noh1),p("true"===h.query.properties))},[h]),(0,t.jsxs)(i,{children:[h.isReady&&n&&(0,t.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(m?"is-properties":""),children:a}),h.isReady&&!n&&(0,t.jsxs)(o.rG,{children:[(0,t.jsxs)(o.ff,{slot:"header",children:[(0,t.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(o.Pm,{data:JSON.stringify(b(l,h.pathname))}),(0,t.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:a}),(0,t.jsx)(o.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,a,n){"use strict";var t=n(52322),o=n(82852),r=n(5632),c=n(70969),i=n(2784);let l=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(o.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,s]=(0,i.useState)(),b=(0,r.useRouter)();(0,i.useEffect)(()=>{if(b.query){var e;let a=null===(e=b.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);s(e),console.log(a)}}},[b]);let u=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(l,{...d})}),!d&&(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(o.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(o.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,t.jsx)(l,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},55635:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return v}});var t=n(52322),o=n(51336),r=n(4398),c=n(32576),i=n(56388),l=n(44429),d=n(14183),s=n(97453),b=n(82852),u=n(68623),m=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Type","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"type":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"type":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","type":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","type":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","type":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","type":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive Button","props":{"component":"button"},"code":{"angular":"<db-tab><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tab\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Link","props":{"component":"link"},"code":{"angular":"<db-tab><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tab\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Checkbox","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Radio 1","props":{"component":"radio"},"code":{"angular":"<db-tab><db-radio>Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Radio 2","props":{"component":"radio","code":{"angular":"<db-tab><db-radio>Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>"}}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Checked","props":{"component":"checkbox","checked":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Disabled","props":{"component":"checkbox","checked":true,"disabled":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\" [disabled]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" disabled=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\" :disabled=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]}]'),p=n(75549);let h=e=>{let{variant:a,disabled:n,children:o,icon:r,overflow:c,noText:i,behaviour:l,type:d,removeButton:s,checked:u,component:m}=e;return(0,t.jsxs)(b.k8,{variant:a,disabled:n,icon:r,noText:i,behaviour:l,type:d,overflow:c,removeButton:s,onRemove:()=>{alert(o.toString())},children:["button"===m&&(0,t.jsx)(b.Y1,{children:o}),"link"===m&&(0,t.jsx)(b.vB,{href:"#",children:o}),"checkbox"===m&&(0,t.jsx)(b.I3,{checked:u,children:o}),"radio"===m&&(0,t.jsx)(b.an,{checked:u,name:"radio",children:o}),!m&&(0,t.jsx)("span",{children:o})]})};var v=()=>(0,t.jsx)(u.Z,{title:"DBTag",variants:(0,p.P)(m,h,[(0,t.jsx)(o.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(c.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(d.default,{}),(0,t.jsx)(s.default,{})])})}},function(e){e.O(0,[4996,9883,2852,2576,6388,4429,4183,1336,4398,7453,9774,2888,179],function(){return e(e.s=55413)}),_N_E=e.O()}]);
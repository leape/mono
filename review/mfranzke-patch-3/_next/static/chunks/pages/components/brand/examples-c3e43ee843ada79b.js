(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{83876:function(e,t,i){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function d(e){if(!i.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],d=t[0];return i.e(t[1]).then(function(){return i(d)})}d.keys=function(){return Object.keys(n)},d.id=83876,e.exports=d},72779:function(e,t){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function d(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)){if(i.length){var l=d.apply(null,i);l&&e.push(l)}}else if("object"===c){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var r in i)n.call(i,r)&&i[r]&&e.push(r)}}}return e.join(" ")}e.exports?(d.default=d,e.exports=d):void 0!==(i=(function(){return d}).apply(t,[]))&&(e.exports=i)}()},26259:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return i(58227)}])},70969:function(e,t,i){"use strict";i.d(t,{Z:function(){return g}});var n=i(52322),d=i(77900),c=i(2784);let l=()=>{let e=(0,c.useRef)(null),[t,i]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var t;let n=(null===(t=e?.current)||void 0===t?void 0:t.innerHTML)==="";n&&i(!0)},[]),[t,e]};var r=e=>{let{children:t,element:i="div",...n}=e,[d,r]=l();return d?(0,c.createElement)(i,{...n,children:t}):(0,c.createElement)(i,{...n,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],s=e=>({...e,link:"".concat("/mono/review/mfranzke-patch-3").concat(e.link)});i(60586);var o=i(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>s(e)):[];var g=e=>{let{children:t}=e,[i,l]=(0,c.useState)(!1),[s,g]=(0,c.useState)(!1),[u,m]=(0,c.useState)(!1),b=(0,o.useRouter)();return(0,c.useEffect)(()=>{b.query&&(l("true"===b.query.fullscreen),g("true"===b.query.noh1),m("true"===b.query.properties))},[b]),(0,n.jsxs)(r,{children:[b.isReady&&i&&(0,n.jsx)("div",{className:"".concat(s?"noh1":""," ").concat(u?"is-properties":""),children:t}),b.isReady&&!i&&(0,n.jsxs)(d.rG,{children:[(0,n.jsxs)(d.ff,{slot:"header",children:[(0,n.jsx)(d.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(d.Pm,{data:JSON.stringify(h(a,b.pathname))}),(0,n.jsx)(d.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(d.fw,{slot:"footer",copyright:!0})]})]})}},74938:function(e,t,i){"use strict";var n=i(52322),d=i(2784),c=i(72779),l=i.n(c);let r={anchorRef:"/",src:"./assets/images/db_logo.svg",width:34,height:24},a=(0,d.forwardRef)(function(e,t){var i,c,a,s,o;let[h,g]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{e.stylePath&&g(e.stylePath)},[]),(0,n.jsxs)("div",{ref:t,className:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return l()(t)}("db-brand",e.className),children:[h?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,n.jsxs)("a",{href:null!==(i=e.anchorRef)&&void 0!==i?i:r.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"db-logo",src:null!==(c=e.imgSrc)&&void 0!==c?c:r.src,alt:null!==(a=e.imgAlt)&&void 0!==a?a:"",height:null!==(s=e.imgHeight)&&void 0!==s?s:r.height,width:null!==(o=e.imgWidth)&&void 0!==o?o:r.width})}),e.anchorChildren?(0,n.jsx)(n.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,n.jsx)(n.Fragment,{children:e.children})]})});t.Z=a},58227:function(e,t,i){"use strict";i.r(t);var n=i(52322),d=i(70969),c=i(74938);t.default=()=>(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("h1",{children:" DBBrand Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"Default:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorChildren:!0,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren, anchorRef, anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorChildren:!0,anchorRef:"account",anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRef, anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRef:"account",anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"describedbyid, id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, key, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, tabIndex, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,tabIndex:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRef:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRef:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorTitle:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorTitle:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRelation:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"hideDefaultAsset:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{hideDefaultAsset:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"describedbyid:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{id:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"},"account")}),(0,n.jsx)("dt",{children:"tabIndex:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{tabIndex:100,children:"Test"})}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgHeight:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=26259)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{3876:function(n,e,r){var t={"./db-accordion.entry.js":[4223,4223],"./db-brand.entry.js":[9878,9878],"./db-breadcrumb.entry.js":[6560,6560],"./db-button_2.entry.js":[7250,7250],"./db-card.entry.js":[1187,1187],"./db-cards.entry.js":[4063,4063],"./db-checkbox.entry.js":[3735,3735],"./db-chip.entry.js":[1204,1204],"./db-dropdown.entry.js":[3474,3474],"./db-footer.entry.js":[8795,8795],"./db-header.entry.js":[3954,3954],"./db-headline.entry.js":[2954,4861],"./db-image.entry.js":[6924,6924],"./db-input.entry.js":[3824,3824],"./db-language-switcher.entry.js":[986,986],"./db-link.entry.js":[8105,8105],"./db-linklist.entry.js":[8507,8507],"./db-mainnavigation.entry.js":[4791,4791],"./db-meta.entry.js":[4168,4168],"./db-metanavigation.entry.js":[6134,6134],"./db-notification.entry.js":[2736,2736],"./db-notifications.entry.js":[8929,8929],"./db-overflow-menu.entry.js":[3413,3413],"./db-page.entry.js":[1349,1349],"./db-pagination.entry.js":[8120,8120],"./db-progress.entry.js":[7818,7818],"./db-radio.entry.js":[7686,7686],"./db-select.entry.js":[1346,1346],"./db-sidenavi.entry.js":[6095,6095],"./db-tab-bar.entry.js":[1065,1065],"./db-tab.entry.js":[5964,5964],"./db-table.entry.js":[1029,1029],"./db-tag.entry.js":[8024,8024],"./db-textarea.entry.js":[7410,7410],"./db-toggle.entry.js":[2169,2169],"./github-version-switcher.entry.js":[825,825]};function s(n){if(!r.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],s=e[0];return r.e(e[1]).then((function(){return r(s)}))}s.keys=function(){return Object.keys(t)},s.id=3876,n.exports=s},3525:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9102)}])},4192:function(n,e,r){"use strict";r.d(e,{Z:function(){return f}});var t=r(7328),s=r(6670),i=r(2322),o=r(6367),a=r(6297),c=r(8530),l=r(2784),d=function(n){var e=n.children,r=n.element,i=void 0===r?"div":r,o=(0,a.Z)(n,["children","element"]),d=(0,c.Z)(function(){var n=(0,l.useRef)(null),e=(0,l.useState)(!1),r=e[0],t=e[1];return(0,l.useEffect)((function(){var e;""===(null===(e=null===n||void 0===n?void 0:n.current)||void 0===e?void 0:e.innerHTML)&&t(!0)}),[]),[r,n]}(),2),u=d[0],b=d[1];return u?(0,l.createElement)(i,(0,s.Z)((0,t.Z)({},o),{children:e})):(0,l.createElement)(i,(0,s.Z)((0,t.Z)({},o),{ref:b,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}}))},u=r(7965),b=(r(8603),r(5632)),h=function(n,e){return n?n.map((function(n){return(0,s.Z)((0,t.Z)({},n),{current:"/"===n.link&&"/"===e||"/"!==n.link&&e.includes(n.link),children:n.children?h(n.children,e):[]})})).map((function(n){return(0,u.e)(n)})):[]},f=function(n){var e=n.children,r=(0,b.useRouter)();return(0,i.jsx)(d,{children:(0,i.jsxs)(o.rG,{children:[(0,i.jsxs)(o.ff,{slot:"header",children:[(0,i.jsx)(o.Bl,{src:"https://raw.githubusercontent.com/db-ui/mono/main/packages/foundations/assets/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(o.Pm,{data:JSON.stringify(h(u.Z,r.pathname))}),(0,i.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("main",{children:(0,i.jsx)("div",{children:e})}),(0,i.jsx)(o.fw,{slot:"footer",copyright:!0})]})})}},7965:function(n,e,r){"use strict";r.d(e,{Z:function(){return i},e:function(){return o}});var t=r(7328),s=r(6670),i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components"},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vue",link:"/showcases/vue"}]}],o=function(n){return(0,s.Z)((0,t.Z)({},n),{link:"".concat("/mono/review/feat-23-gh-page").concat(n.link)})}},9102:function(n,e,r){"use strict";r.r(e);var t=r(2322),s=r(5392),i=r(4192),o=function(n){var e=n.children;return(0,t.jsx)(i.Z,{children:e})};function a(n){var e=Object.assign({h1:"h1",p:"p"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{children:"DB-UI Mono"}),"\n",(0,t.jsx)(e.p,{children:"TODO: Import Readme.md from root here"})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,Object.assign({},n,{children:(0,t.jsx)(a,n)}))}},5392:function(n,e,r){"use strict";r.d(e,{ah:function(){return i}});var t=r(2784);const s=t.createContext({});function i(n){const e=t.useContext(s);return t.useMemo((()=>"function"===typeof n?n(e):{...e,...n}),[e,n])}}},function(n){n.O(0,[2647,9774,2888,179],(function(){return e=3525,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
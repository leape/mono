(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2560],{35255:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/readme",function(){return s(46894)}])},46894:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r=s(52322),d=s(66503),c=s(45392);function i(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Colors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You use ",(0,r.jsx)(n.code,{children:"Colors"})," to highlight an area with a specific color."]}),"\n",(0,r.jsxs)(n.li,{children:["You can also use it to change the text color for components with the ",(0,r.jsx)(n.code,{children:"*-transparent-semi"})," colors."]}),"\n",(0,r.jsxs)(n.li,{children:["Most classes/placeholders will change ",(0,r.jsx)(n.code,{children:"color"})," and ",(0,r.jsx)(n.code,{children:"background-color"})," and will set properties, which will be passed down to adaptive components."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"How to include colors"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"CSS"})," and ",(0,r.jsx)(n.code,{children:"Tailwind"})," you need to use the import ",(0,r.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/color/classes/all.css";'})," in your root ",(0,r.jsx)(n.code,{children:".css"})," file.\nOr if you only want a single variant e.g. ",(0,r.jsx)(n.code,{children:"informational"})," you can import ",(0,r.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/color/classes/informational.css";'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this ",(0,r.jsx)(n.code,{children:"@import"})," syntax accordingly."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"SCSS"})," you need to use the import ",(0,r.jsx)(n.code,{children:"@use @db-ui/foundations/build/scss/color/placeholder"})," in your ",(0,r.jsx)(n.code,{children:".scss"})," file, where you need to reference the specific variable.\nThen you can use e.g. ",(0,r.jsx)(n.code,{children:"informational"})," color by extending our SCSS placeholders like this: ",(0,r.jsx)(n.code,{children:"@extend %db-bg-informational"}),"."]}),"\n",(0,r.jsx)(n.h3,{children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["We're providing an ",(0,r.jsx)(n.a,{href:"./overview",children:"overview for all possible colors"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There are several variants: ",(0,r.jsx)(n.code,{children:"base"}),", ",(0,r.jsx)(n.code,{children:"brand"}),", ",(0,r.jsx)(n.code,{children:"neutral"}),", ",(0,r.jsx)(n.code,{children:"critical"}),", ",(0,r.jsx)(n.code,{children:"informational"}),", ",(0,r.jsx)(n.code,{children:"successful"}),", ",(0,r.jsx)(n.code,{children:"warning"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["We use ",(0,r.jsx)(n.code,{children:"XXX"})," here you should replace it with a variant from above."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Variant"}),(0,r.jsx)(n.th,{children:"CSS"}),(0,r.jsx)(n.th,{children:"SCSS"}),(0,r.jsx)(n.th,{children:"Tailwind"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"XXX"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX"'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@extend %db-bg-XXX"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"XXX-transparent-semi"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX-transparent-semi"'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@extend %db-bg-XXX-transparent-semi"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX-transparent-semi"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"XXX-transparent-full"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX-transparent-full"'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@extend %db-bg-XXX-transparent-full"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-bg-XXX-transparent-full"'})})]})]})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let t=e=>{let{children:n}=e;return(0,r.jsx)(d.Z,{children:n})};function o(e){return(0,r.jsx)(l,{})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})})}}},function(e){e.O(0,[23019,37426,66503,49774,92888,40179],function(){return e(e.s=35255)}),_N_E=e.O()}]);
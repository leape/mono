"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5107],{13524:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>r.IY),[d,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(e.id||"accordion-item-"+(0,i.Vj)()),e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("details",{ref:n,id:t,className:(0,i.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,a.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})});n.Z=s},578:function(e,n,t){t.d(n,{k:function(){return a.Z}});var a=t(13524)},46938:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(578);let s=(0,l.forwardRef)(function(e,n){var t;let s=(0,l.useRef)(n),[d,c]=(0,l.useState)(()=>[]),[o,u]=(0,l.useState)(()=>""),[h,f]=(0,l.useState)(()=>!1),[v,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&m(e.stylePath),f(!0)},[]),(0,l.useEffect)(()=>{if(s.current&&h){let n=s.current.getElementsByTagName("details");if(n){let t=[];Array.from(n).forEach(e=>{let n=e.id;e.open&&t.push(n);let a=e.getElementsByTagName("summary");(null==a?void 0:a.length)>0&&a[0].addEventListener("click",()=>{u(n)})}),"single"===e.behaviour&&t.length>1&&(t=[t[0]]),c(t)}f(!1)}},[s.current,h]),(0,l.useEffect)(()=>{(null==o?void 0:o.length)>0&&(d.includes(o)?"single"===e.behaviour?c([]):c(d.filter(e=>e!==o)):"single"===e.behaviour?c([o]):c([...d,o]),e.onChange&&e.onChange(d),u(""))},[o]),(0,l.useEffect)(()=>{if(null==s?void 0:s.current){let e=s.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=d.includes(e.id)})}},[d]),(0,a.jsxs)("div",{ref:s,className:(0,i.yI)("db-accordion",e.className),children:[v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:v})}):null,e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===t?void 0:t.map((e,n)=>(0,a.jsx)(r.k,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(n)))}):null]})});n.Z=s},4312:function(e,n,t){var a=t(52322),l=t(2784),i=t(87233),r=t(94938),s=t(9076),d=t(8490),c=t(7070);let o=(0,l.forwardRef)(function(e,n){var t,o,u;let[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&f(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,className:(0,c.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":(o=e.icon,u=e.variant,o&&"_"!==o&&"none"!==o?o:u&&i.I[u]||"info"),"data-elevation":e.elevation,children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.v,{variant:"inline",className:"db-alert-link",href:e.link.href,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,hreflang:e.link.hreflang,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:d.ce})}):null]})});n.Z=o},53213:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,className:(0,i.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},74938:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){var t,r,s,d,c;let[o,u]=(0,l.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&f(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,className:(0,i.yI)("db-brand",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:o.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(r=e.imgSrc)&&void 0!==r?r:o.src,alt:null!==(s=e.imgAlt)&&void 0!==s?s:"",height:null!==(d=e.imgHeight)&&void 0!==d?d:o.height,width:null!==(c=e.imgWidth)&&void 0!==c?c:o.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})});n.Z=r},96889:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[r,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("button",{id:e.id,ref:n,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[r?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:r})}):null,e.children]})});n.Z=r},94938:function(e,n,t){t.d(n,{Y:function(){return a.Z}});var a=t(96889)},54728:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,className:(0,i.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=r},34786:function(e,n,t){t.d(n,{f:function(){return a.Z}});var a=t(54728)},27818:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>!1),[d,c]=(0,l.useState)(()=>r.IY),[o,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(!0),c(e.id||"checkbox-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(t&&document&&d){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(d);t&&(void 0!=e.checked&&(t.checked=e.checked),void 0!==e.indeterminate&&(t.indeterminate=e.indeterminate))}},[t,e.indeterminate,e.checked]),(0,a.jsxs)(a.Fragment,{children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"checkbox",ref:n,className:(0,i.yI)("db-checkbox",e.className),id:d,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,required:e.required,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=o&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,a.jsxs)("label",{htmlFor:d,children:[e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=s},63172:function(e,n,t){var a=t(52322),l=t(2784),i=t(34786),r=t(7070);let s=(0,l.forwardRef)(function(e,n){var t,s;let[d,c]=(0,l.useState)(()=>!1),[o,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)(i.f,{elevation:"none",ref:n,className:(0,r.yI)("db-code-docs",e.className),children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,e.children,(0,a.jsxs)("details",{className:"code-details",onToggle:e=>void c(!d),children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:d?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(s=e.showCodeLabel)&&void 0!==s?s:"Show Code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=s},5907:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsx)("div",{ref:n,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,i.yI)("db-divider",e.className),children:t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null})});n.Z=r},37008:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(8490),s=t(7070);let d=(0,l.forwardRef)(function(e,n){var t;let d=(0,l.useRef)(n),c=(0,l.useRef)(null),[o,u]=(0,l.useState)(()=>r.IY);function h(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function f(){d.current&&(e.open&&!d.current.open&&(c.current&&(c.current.hidden=!1),"none"===e.backdrop?d.current.show():d.current.showModal()),!e.open&&d.current.open&&(c.current&&(c.current.hidden=!0),setTimeout(()=>{var e;c.current&&(c.current.hidden=!1),null===(e=d.current)||void 0===e||e.close()},401)))}let[v,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{u(e.id||"drawer-"+(0,s.Vj)()),e.stylePath&&m(e.stylePath),f()},[]),(0,l.useEffect)(()=>{f()},[e.open]),(0,a.jsxs)("dialog",{className:"db-drawer",id:o,ref:d,onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":e.backdrop,children:[v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:v})}):null,(0,a.jsxs)("article",{ref:c,className:(0,s.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:r.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=d},19571:function(e,n,t){t.d(n,{T:function(){return a.Z}});var a=t(37008)},32046:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(94938),s=t(19571),d=t(8490);let c=(0,l.forwardRef)(function(e,n){var t;let[c,o]=(0,l.useState)(()=>d.IY),[u,h]=(0,l.useState)(()=>!1),[f,v]=(0,l.useState)(()=>!1),[m,g]=(0,l.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function x(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[b,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(!0),o(e.id||"header-"+(0,i.Vj)()),e.stylePath&&j(e.stylePath)},[]),(0,l.useEffect)(()=>{if(u&&document&&c&&e.forceMobile){let e=document.getElementById(c);e&&(0,i.yn)(e,{key:"force-mobile",value:""}),v(!0)}},[u]),(0,a.jsxs)("header",{ref:n,className:(0,i.yI)("db-header",e.className),id:c,"data-on-forcing-mobile":e.forceMobile&&!f,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsxs)(s.T,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>x(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{"data-hide-on":"desktop",children:(0,a.jsx)(r.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>x(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:m.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})});n.Z=c},648:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{"aria-hidden":"true",ref:n,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,title:e.title,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},16510:function(e,n,t){t.d(n,{P:function(){return a.Z}});var a=t(648)},40816:function(e,n,t){var a=t(52322),l=t(2784),i=t(87233),r=t(7070);let s=(0,l.forwardRef)(function(e,n){var t,s;let[d,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,className:(0,r.yI)("db-infotext",e.className),title:e.title,"data-icon":(t=e.icon,s=e.variant,t||s&&i.I[s]||"info"),"data-variant":e.variant,"data-size":e.size,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children]})});n.Z=s},36655:function(e,n,t){var a=t(52322),l=t(2784),i=t(16510),r=t(7070),s=t(8490),d=t(87233);let c=(0,l.forwardRef)(function(e,n){var t,c,o,u;let[h,f]=(0,l.useState)(()=>s.IY),[v,m]=(0,l.useState)(()=>void 0),[g,x]=(0,l.useState)(()=>s.IY),[b,j]=(0,l.useState)(()=>({label:s.SU,placeholder:" "}));function y(e){return!!(e&&"_"!==e&&"none"!==e)}let[p,N]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{f(e.id||"input-"+(0,r.Vj)()),x(e.dataListId||"datalist-".concat((0,r.Vj)())),e.stylePath&&N(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,r.yI)("db-input",e.className),"data-variant":e.variant,children:[p?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:p})}):null,y(e.icon)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.P,{className:"icon-before",icon:e.icon})}):null,(0,a.jsx)("input",{ref:n,id:h,name:e.name,type:e.type||"text",placeholder:null!==(c=e.placeholder)&&void 0!==c?c:b.placeholder,"aria-labelledby":h+"-label",disabled:e.disabled,required:e.required,defaultValue:e.defaultValue,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,pattern:e.pattern,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=v&&(m(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},list:e.dataList&&g}),(0,a.jsx)("label",{"aria-hidden":"true",htmlFor:h,id:h+"-label",children:(0,a.jsx)("span",{children:null!==(o=e.label)&&void 0!==o?o:b.label})}),e.description?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{className:"description",children:e.description})}):null,e.variant||e.required||e.pattern?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.P,{className:"icon-state",icon:(u=e.variant)?d.I[u]:""})}):null,y(e.iconAfter)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.P,{className:"icon-after",icon:e.iconAfter})}):null,e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:g,children:null===(t=e.dataList)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},g+"-option-"+e.key))})}):null,e.children]})});n.Z=c},9076:function(e,n,t){t.d(n,{v:function(){return a.Z}});var a=t(87224)},87224:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("a",{ref:n,className:(0,i.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=r},74570:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("nav",{ref:n,className:(0,i.yI)("db-main-navigation",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("menu",{children:e.children})]})});n.Z=r},21191:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(7070),s=t(8490);let d=(0,l.forwardRef)(function(e,n){var t,d;let[c,o]=(0,l.useState)(()=>!1),[u,h]=(0,l.useState)(()=>!1),[f,v]=(0,l.useState)(()=>!0),[m,g]=(0,l.useState)(()=>!1),[x,b]=(0,l.useState)(()=>"sub-navigation-"+(0,r.Vj)()),[j,y]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{o(!0),e.stylePath&&y(e.stylePath)},[]),(0,l.useEffect)(()=>{void 0!==e.subNavigationExpanded&&g(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,l.useEffect)(()=>{if(void 0!==e.areaPopup)h(e.areaPopup),v(u);else if(c&&document&&x){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(x);if(e){let n=e.children;(null==n?void 0:n.length)>0?h(!0):v(!1)}}},[c,e.areaPopup]),(0,a.jsxs)("li",{ref:n,className:(0,r.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":(d=e.icon)&&"_"!==d&&"none"!==d?e.icon:void 0,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[j?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:j})}):null,f?null:(0,a.jsx)(a.Fragment,{children:e.children}),f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":u,"aria-expanded":m,disabled:e.disabled,onClick:n=>{e.onClick&&e.onClick(n),u&&g(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:x,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(i.Y,{icon:"arrow-back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),g(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:s.YP})})}):null,e.slotSubNavigation]})]}):null]})});n.Z=d},51923:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>!1),[s,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{r(!e.fadeIn),e.stylePath&&d(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,a.jsxs)("div",{ref:n,className:(0,i.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":t,children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,e.slotHeader,(0,a.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});n.Z=r},53048:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>!1),[d,c]=(0,l.useState)(()=>r.IY),[o,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(!0),c(e.id||"radio-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&t&&document&&d){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(d);e&&(e.checked=!0,s(!1))}},[t]),(0,a.jsxs)(a.Fragment,{children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"radio",ref:n,className:(0,i.yI)("db-radio",e.className),id:d,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,value:e.value,required:e.required,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=o&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,a.jsxs)("label",{htmlFor:d,children:[e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=s},67014:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("section",{ref:n,"data-size":e.size||"medium",className:(0,i.yI)("db-section",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})]})});n.Z=r},42492:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490),s=t(16510),d=t(87233);let c=(0,l.forwardRef)(function(e,n){var t,c,o;let[u,h]=(0,l.useState)(()=>r.IY),[f,v]=(0,l.useState)(()=>void 0),[m,g]=(0,l.useState)(()=>void 0);function x(e){var n;return null!==(n=e.label)&&void 0!==n?n:e.value.toString()}let[b,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(e.id||"select-"+(0,i.Vj)()),e.value&&g(e.value),e.stylePath&&j(e.stylePath)},[]),(0,l.useEffect)(()=>{e.value&&g(e.value)},[e.value]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:(0,i.yI)("db-select",e.className),"data-variant":e.variant,"data-icon":e.icon,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsxs)("select",{ref:n,"data-value":e.value||m,"aria-invalid":e.invalid,"aria-required":e.required,required:e.required,disabled:e.disabled,id:u,name:e.name,value:e.value||m,onClick:n=>{e.onClick&&e.onClick(n)},onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),g(n.target.value),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=f&&(v(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(a.Fragment,{children:null===(t=e.options)||void 0===t?void 0:t.map(e=>{var n;return(0,a.jsxs)(a.Fragment,{children:[e.options?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("optgroup",{label:x(e),children:null===(n=e.options)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:x(e)},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:x(e)},"option-"+e.value)})]})})}):null,e.children]}),(0,a.jsx)("label",{htmlFor:u,children:null!==(c=e.label)&&void 0!==c?c:r.SU}),e.variant?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.P,{className:"icon-state",icon:(o=e.variant)?d.I[o]:""})}):null]}),e.description?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{className:"description",children:e.description})}):null]})});n.Z=c},14870:function(e,n,t){var a=t(52322),l=t(2784),i=t(55136),r=t(7070);let s=(0,l.forwardRef)(function(e,n){var t;let[s,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,a.jsxs)("div",{role:"tablist",ref:n,className:(0,r.yI)("cmp-tab-bar",e.className),children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,e.tabs?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,a.jsx)(i.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=s},55136:function(e,n,t){t.d(n,{Q:function(){return a.Z}});var a=t(83437)},83437:function(e,n,t){var a=t(52322),l=t(2784),i=t(8490),r=t(7070);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(null),[s,d]=(0,l.useState)(()=>i.IY),[c,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{if(d((0,r.Vj)()),e.stylePath&&o(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,a.jsxs)("div",{ref:n,className:(0,r.yI)("db-tab",e.className),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,a.jsx)("input",{type:"radio",ref:t,name:e.name,id:s}),(0,a.jsx)("label",{role:"tab",htmlFor:s,children:e.label}),(0,a.jsxs)("section",{role:"tabpanel",id:"content-"+s,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})]})});n.Z=s},35524:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(7070),s=t(8490);let d=(0,l.forwardRef)(function(e,n){let[t,d]=(0,l.useState)(()=>!1),[c,o]=(0,l.useState)(()=>s.IY),[u,h]=(0,l.useState)(()=>void 0);function f(e){return!!(e&&"_"!==e&&"none"!==e)}function v(){return e.removeButton?e.removeButton:"Remove tag"}function m(){return!!e.behaviour&&e.behaviour.includes("interactive")}let[g,x]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),o(e.id||"tag-"+(0,r.Vj)()),e.stylePath&&x(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&t&&document&&c){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(c);e&&(e.checked=!0,d(!1))}},[t]),(0,a.jsxs)("div",{ref:n,className:(0,r.yI)("db-tag",e.className),tabIndex:function(){var n;if(!e.disabled)return null!==(n=e.tabIndex)&&void 0!==n?n:void 0}(),"data-interactive":m(),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,children:[g?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:g})}):null,m()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{id:c,type:"interactive-unique"===e.behaviour?"radio":"checkbox",checked:e.checked,name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-invalid":e.invalid,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n)}}),(0,a.jsx)("label",{className:(0,r.yI)("tag-label",{"is-icon-text-replace":f(e.icon)&&e.noText}),htmlFor:c,"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:(0,r.yI)("tag-label",{"is-icon-text-replace":f(e.icon)&&e.noText}),"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})}),"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",size:"small",variant:"text",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:v(),children:v()})}):null]})});n.Z=d},65107:function(e,n,t){t.d(n,{aw:function(){return p.Z},kC:function(){return N.k},H3:function(){return f.Z},aE:function(){return S.Z},mX:function(){return d.Z},Y1:function(){return a.Y},f:function(){return i.f},I3:function(){return v.Z},wq:function(){return x.Z},oH:function(){return r.Z},TG:function(){return m.T},W4:function(){return c.Z},Pg:function(){return l.P},EZ:function(){return h.Z},aq:function(){return s.Z},vB:function(){return u.v},Cc:function(){return k.Z},pK:function(){return y.Z},an:function(){return g.Z},cN:function(){return o.Z},kr:function(){return b.Z},k8:function(){return j.Z}});var a=t(94938),l=t(16510);t(55136),t(14870);var i=t(34786),r=t(5907),s=t(36655),d=t(74938),c=t(32046);t(51923);var o=t(67014),u=t(9076),h=t(40816),f=t(4312),v=t(27818),m=t(19571),g=t(53048),x=t(63172),b=t(42492),j=t(35524),y=t(21191),p=t(46938),N=t(578),k=t(74570),S=t(53213)},8490:function(e,n,t){var a,l,i,r,s,d,c;t.d(n,{$f:function(){return v},DM:function(){return m},IY:function(){return o},SU:function(){return u},YP:function(){return h},ce:function(){return f},iw:function(){return a},r$:function(){return i}});let o="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",f="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let v=Object.entries(a).map(e=>{let[,n]=e;return n});(l||(l={})).PRIMARY="primary",(d=i||(i={})).NEUTRAL="neutral",d.NEUTRAL_STRONG="neutral-strong",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.PRIMARY="primary",d.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",d.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let m=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(l).map(e=>{let[,n]=e;return n}),(c=r||(r={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,n]=e;return n})},87233:function(e,n,t){t.d(n,{I:function(){return a}});let a={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},7070:function(e,n,t){t.d(n,{Vj:function(){return a},yI:function(){return i},yn:function(){return l}});let a=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},l=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&l(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1963],{13524:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>r.IY),[d,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(e.id||"accordion-item-"+(0,i.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,a.jsxs)("details",{ref:n,id:t,className:(0,i.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,a.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})});n.Z=s},578:function(e,n,t){t.d(n,{k:function(){return a.Z}});var a=t(13524)},46938:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(578);let s=(0,l.forwardRef)(function(e,n){var t;let s=(0,l.useRef)(n),[d,o]=(0,l.useState)(()=>[]),[c,u]=(0,l.useState)(()=>""),[h,f]=(0,l.useState)(()=>!1),[v,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&m(e.stylePath),f(!0)},[]),(0,l.useEffect)(()=>{if(s.current&&h){let n=s.current.getElementsByTagName("details");if(n){let t=[];Array.from(n).forEach(e=>{let n=e.id;e.open&&t.push(n);let a=e.getElementsByTagName("summary");(null==a?void 0:a.length)>0&&a[0].addEventListener("click",()=>{u(n)})}),"single"===e.behaviour&&t.length>1&&(t=[t[0]]),o(t)}f(!1)}},[s.current,h]),(0,l.useEffect)(()=>{(null==c?void 0:c.length)>0&&(d.includes(c)?"single"===e.behaviour?o([]):o(d.filter(e=>e!==c)):"single"===e.behaviour?o([c]):o([...d,c]),e.onChange&&e.onChange(d),u(""))},[c]),(0,l.useEffect)(()=>{if(null==s?void 0:s.current){let e=s.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=d.includes(e.id)})}},[d]),(0,a.jsxs)("div",{ref:s,id:e.id,className:(0,i.yI)("db-accordion",e.className),children:[v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:v})}):null,e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===t?void 0:t.map((e,n)=>(0,a.jsx)(r.k,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(n)))}):null]})});n.Z=s},4312:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(9076),s=t(8490),d=t(7070);let o=(0,l.forwardRef)(function(e,n){var t;let[o,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,d.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.v,{variant:"inline",className:"db-alert-link",href:e.link.href,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,hreflang:e.link.hreflang,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:s.ce})}):null]})});n.Z=o},53213:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,id:e.id,className:(0,i.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},74938:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){var t,r,s,d,o;let[c,u]=(0,l.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&f(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-brand",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:c.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(r=e.imgSrc)&&void 0!==r?r:c.src,alt:null!==(s=e.imgAlt)&&void 0!==s?s:"",height:null!==(d=e.imgHeight)&&void 0!==d?d:c.height,width:null!==(o=e.imgWidth)&&void 0!==o?o:c.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})});n.Z=r},96889:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("button",{id:e.id,ref:n,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},94938:function(e,n,t){t.d(n,{Y:function(){return a.Z}});var a=t(96889)},54728:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=r},34786:function(e,n,t){t.d(n,{f:function(){return a.Z}});var a=t(54728)},27818:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>!1),[d,o]=(0,l.useState)(()=>r.IY),[c,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(!0),o(e.id||"checkbox-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(t&&document&&d){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(d);t&&(void 0!=e.checked&&(t.checked=e.checked),void 0!==e.indeterminate&&(t.indeterminate=e.indeterminate),void 0!==e.defaultChecked&&(t.defaultChecked=e.defaultChecked))}},[t,e.indeterminate,e.checked,e.defaultChecked]),(0,a.jsxs)(a.Fragment,{children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"checkbox",ref:n,className:(0,i.yI)("db-checkbox",e.className),id:d,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,required:e.required,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=c&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,a.jsxs)("label",{htmlFor:d,children:[e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=s},63172:function(e,n,t){var a=t(52322),l=t(2784),i=t(34786),r=t(7070);let s=(0,l.forwardRef)(function(e,n){var t,s;let[d,o]=(0,l.useState)(()=>!1),[c,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)(i.f,{elevation:"none",ref:n,className:(0,r.yI)("db-code-docs",e.className),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children,(0,a.jsxs)("details",{className:"code-details",onToggle:e=>void o(!d),children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:d?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(s=e.showCodeLabel)&&void 0!==s?s:"Show Code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=s},5907:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsx)("div",{ref:n,id:e.id,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,i.yI)("db-divider",e.className),children:t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null})});n.Z=r},37008:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(8490),s=t(7070);let d=(0,l.forwardRef)(function(e,n){var t;let d=(0,l.useRef)(n),o=(0,l.useRef)(null),[c,u]=(0,l.useState)(()=>r.IY);function h(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function f(){d.current&&(e.open&&!d.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?d.current.show():d.current.showModal()),!e.open&&d.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=d.current)||void 0===e||e.close()},401)))}let[v,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{u(e.id||"drawer-"+(0,s.Vj)()),e.stylePath&&m(e.stylePath),f()},[]),(0,l.useEffect)(()=>{f()},[e.open]),(0,a.jsxs)("dialog",{className:"db-drawer",id:c,ref:d,onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":e.backdrop,children:[v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:v})}):null,(0,a.jsxs)("article",{ref:o,className:(0,s.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:r.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=d},19571:function(e,n,t){t.d(n,{T:function(){return a.Z}});var a=t(37008)},32046:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(94938),s=t(19571),d=t(8490);let o=(0,l.forwardRef)(function(e,n){var t;let[o,c]=(0,l.useState)(()=>d.IY),[u,h]=(0,l.useState)(()=>!1),[f,v]=(0,l.useState)(()=>!1),[m,g]=(0,l.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function x(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[b,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(!0),c(e.id||"header-"+(0,i.Vj)()),e.stylePath&&j(e.stylePath)},[]),(0,l.useEffect)(()=>{if(u&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,i.yn)(e,{key:"force-mobile",value:""}),v(!0)}},[u]),(0,a.jsxs)("header",{ref:n,className:(0,i.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!f,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsxs)(s.T,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>x(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{"data-hide-on":"desktop",children:(0,a.jsx)(r.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>x(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:m.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})});n.Z=o},648:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{"aria-hidden":"true",ref:n,id:e.id,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,title:e.title,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},16510:function(e,n,t){t.d(n,{P:function(){return a.Z}});var a=t(648)},6272:function(e,n,t){t.d(n,{E:function(){return a.Z}});var a=t(40816)},40816:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,id:e.id,className:(0,i.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},36655:function(e,n,t){var a=t(52322),l=t(2784),i=t(16510),r=t(7070),s=t(8490),d=t(6272);let o=(0,l.forwardRef)(function(e,n){var t,o,c;let[u,h]=(0,l.useState)(()=>s.IY),[f,v]=(0,l.useState)(()=>void 0),[m,g]=(0,l.useState)(()=>s.IY),[x,b]=(0,l.useState)(()=>({label:s.SU,placeholder:" "}));function j(e){return!!(e&&"_"!==e&&"none"!==e)}let[y,p]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(e.id||"input-"+(0,r.Vj)()),g(e.dataListId||"datalist-".concat((0,r.Vj)())),e.stylePath&&p(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,r.yI)("db-input",e.className),"data-variant":e.variant,children:[y?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:y})}):null,j(e.icon)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.P,{className:"icon-before",icon:e.icon})}):null,(0,a.jsx)("input",{ref:n,id:u,name:e.name,type:e.type||"text",placeholder:null!==(o=e.placeholder)&&void 0!==o?o:x.placeholder,"aria-labelledby":u+"-label",disabled:e.disabled,required:e.required,defaultValue:e.defaultValue,step:e.step,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,readOnly:e.readOnly,form:e.form,autoComplete:e.autoComplete,autoFocus:e.autoFocus,pattern:e.pattern,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=f&&(v(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},list:e.dataList&&m}),(0,a.jsx)("label",{"aria-hidden":"true",htmlFor:u,id:u+"-label",children:(0,a.jsx)("span",{children:null!==(c=e.label)&&void 0!==c?c:x.label})}),j(e.iconAfter)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.P,{className:"icon-after",icon:e.iconAfter})}):null,e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:m,children:null===(t=e.dataList)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},m+"-option-"+e.key))})}):null,e.children,e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.E,{size:"small",variant:e.variant,icon:(0,r.mT)(e.variant,e.messageIcon),children:e.message})}):null]})});n.Z=o},9076:function(e,n,t){t.d(n,{v:function(){return a.Z}});var a=t(87224)},87224:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("a",{ref:n,id:e.id,className:(0,i.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=r},74570:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("nav",{ref:n,id:e.id,className:(0,i.yI)("db-main-navigation",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("menu",{children:e.children})]})});n.Z=r},21191:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(7070),s=t(8490);let d=(0,l.forwardRef)(function(e,n){var t;let[d,o]=(0,l.useState)(()=>!1),[c,u]=(0,l.useState)(()=>!1),[h,f]=(0,l.useState)(()=>!0),[v,m]=(0,l.useState)(()=>!1),[g,x]=(0,l.useState)(()=>"sub-navigation-"+(0,r.Vj)()),[b,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{o(!0),e.stylePath&&j(e.stylePath)},[]),(0,l.useEffect)(()=>{void 0!==e.subNavigationExpanded&&m(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,l.useEffect)(()=>{if(void 0!==e.areaPopup)u(e.areaPopup),f(c);else if(d&&document&&g){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(g);if(e){let n=e.children;(null==n?void 0:n.length)>0?u(!0):f(!1)}}},[d,e.areaPopup]),(0,a.jsxs)("li",{ref:n,id:e.id,className:(0,r.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,h?null:(0,a.jsx)(a.Fragment,{children:e.children}),h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":c,"aria-expanded":v,disabled:e.disabled,onClick:n=>{e.onClick&&e.onClick(n),c&&m(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:g,children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(i.Y,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),m(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:s.YP})})}):null,e.slotSubNavigation]})]}):null]})});n.Z=d},51923:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>!1),[s,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{r(!e.fadeIn),e.stylePath&&d(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":t,children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,e.slotHeader,(0,a.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});n.Z=r},53048:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490);let s=(0,l.forwardRef)(function(e,n){let[t,s]=(0,l.useState)(()=>!1),[d,o]=(0,l.useState)(()=>r.IY),[c,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(!0),o(e.id||"radio-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&t&&document&&d){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(d);e&&(e.checked=!0,s(!1))}},[t]),(0,a.jsxs)(a.Fragment,{children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"radio",ref:n,className:(0,i.yI)("db-radio",e.className),id:d,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,value:e.value,required:e.required,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=c&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,a.jsxs)("label",{htmlFor:d,children:[e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=s},67014:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("section",{ref:n,id:e.id,"data-size":e.size||"medium",className:(0,i.yI)("db-section",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})]})});n.Z=r},42492:function(e,n,t){var a=t(52322),l=t(2784),i=t(7070),r=t(8490),s=t(6272);let d=(0,l.forwardRef)(function(e,n){var t,d;let[o,c]=(0,l.useState)(()=>r.IY),[u,h]=(0,l.useState)(()=>void 0),[f,v]=(0,l.useState)(()=>void 0);function m(e){var n;return null!==(n=e.label)&&void 0!==n?n:e.value.toString()}let[g,x]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{c(e.id||"select-"+(0,i.Vj)()),e.value&&v(e.value),e.stylePath&&x(e.stylePath)},[]),(0,l.useEffect)(()=>{e.value&&v(e.value)},[e.value]),(0,a.jsxs)("div",{className:(0,i.yI)("db-select",e.className),"data-variant":e.variant,"data-icon":e.icon,children:[g?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:g})}):null,(0,a.jsxs)("select",{ref:n,"data-value":e.value||f,"aria-invalid":e.invalid,required:e.required,disabled:e.disabled,id:o,name:e.name,value:e.value||f,onClick:n=>{e.onClick&&e.onClick(n)},onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),v(n.target.value),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=u&&(h(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(a.Fragment,{children:null===(t=e.options)||void 0===t?void 0:t.map(e=>{var n;return(0,a.jsxs)(a.Fragment,{children:[e.options?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("optgroup",{label:m(e),children:null===(n=e.options)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:m(e)},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:m(e)},"option-"+e.value)})]})})}):null,e.children]}),(0,a.jsx)("label",{htmlFor:o,children:null!==(d=e.label)&&void 0!==d?d:r.SU}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.E,{size:"small",variant:e.variant,icon:(0,i.mT)(e.variant,e.messageIcon),children:e.message})}):null]})});n.Z=d},14870:function(e,n,t){var a=t(52322),l=t(2784),i=t(55136),r=t(7070);let s=(0,l.forwardRef)(function(e,n){var t;let[s,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,a.jsxs)("div",{role:"tablist",ref:n,id:e.id,className:(0,r.yI)("cmp-tab-bar",e.className),children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,e.tabs?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,a.jsx)(i.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=s},55136:function(e,n,t){t.d(n,{Q:function(){return a.Z}});var a=t(83437)},83437:function(e,n,t){var a=t(52322),l=t(2784),i=t(8490),r=t(7070);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(null),[s,d]=(0,l.useState)(()=>i.IY),[o,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{if(d((0,r.Vj)()),e.stylePath&&c(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,r.yI)("db-tab",e.className),children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,(0,a.jsx)("input",{type:"radio",ref:t,name:e.name,id:s}),(0,a.jsx)("label",{role:"tab",htmlFor:s,children:e.label}),(0,a.jsxs)("section",{role:"tabpanel",id:"content-"+s,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})]})});n.Z=s},35524:function(e,n,t){var a=t(52322),l=t(2784),i=t(94938),r=t(7070),s=t(8490);let d=(0,l.forwardRef)(function(e,n){let[t,d]=(0,l.useState)(()=>!1),[o,c]=(0,l.useState)(()=>s.IY),[u,h]=(0,l.useState)(()=>void 0);function f(){return e.removeButton?e.removeButton:"Remove tag"}function v(){return!!e.behaviour&&e.behaviour.includes("interactive")}let[m,g]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),c(e.id||"tag-"+(0,r.Vj)()),e.stylePath&&g(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&t&&document&&o){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(o);e&&(e.checked=!0,d(!1))}},[t]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,r.yI)("db-tag",e.className),tabIndex:function(){var n;if(!e.disabled)return null!==(n=e.tabIndex)&&void 0!==n?n:void 0}(),"data-interactive":v(),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,children:[m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:m})}):null,v()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{id:o,type:"interactive-unique"===e.behaviour?"radio":"checkbox",checked:e.checked,name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-invalid":e.invalid,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n)}}),(0,a.jsx)("label",{className:(0,r.yI)("tag-label",{"is-icon-text-replace":e.noText}),htmlFor:o,"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:(0,r.yI)("tag-label",{"is-icon-text-replace":e.noText}),"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})}),"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",size:"small",variant:"text",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:f(),children:f()})}):null]})});n.Z=d},7484:function(e,n,t){var a=t(52322),l=t(2784),i=t(6272),r=t(7070),s=t(8490);let d=(0,l.forwardRef)(function(e,n){var t,d,o,c;let[u,h]=(0,l.useState)(()=>s.IY),[f,v]=(0,l.useState)(()=>void 0),[m,g]=(0,l.useState)(()=>({label:s.SU,placeholder:" ",rows:"4"})),[x,b]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&b(e.stylePath),h(e.id||"textarea-"+(0,r.Vj)())},[]),(0,a.jsxs)("div",{ref:n,className:(0,r.yI)("db-textarea",e.className),"data-variant":e.variant,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,a.jsx)("label",{htmlFor:u,"data-overflow":e.overflow,id:u+"-label",children:null!==(t=e.label)&&void 0!==t?t:m.label}),(0,a.jsx)("textarea",{id:u,"data-resize":e.resize,autoComplete:e.autoComplete,autoFocus:e.autoFocus,disabled:e.disabled,required:e.required,readOnly:e.readOnly,form:e.form,maxLength:e.maxLength,minLength:e.minLength,name:e.name,wrap:e.wrap,spellCheck:e.spellCheck,onChange:n=>{var t,a,l,i,r,s;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=f&&(v(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(s=n.target)||void 0===s?void 0:null===(r=s.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},defaultValue:null!==(d=e.defaultValue)&&void 0!==d?d:e.children,value:e.value,placeholder:null!==(o=e.placeholder)&&void 0!==o?o:m.placeholder,rows:null!==(c=e.rows)&&void 0!==c?c:m.rows,cols:e.cols}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.E,{size:"small",variant:e.variant,icon:(0,r.mT)(e.variant,e.messageIcon),children:e.message})}):null]})});n.Z=d},51963:function(e,n,t){t.d(n,{aw:function(){return k.Z},kC:function(){return S.k},H3:function(){return a.Z},aE:function(){return l.Z},mX:function(){return i.Z},Y1:function(){return r.Y},f:function(){return s.f},I3:function(){return d.Z},wq:function(){return o.Z},oH:function(){return c.Z},TG:function(){return u.T},W4:function(){return h.Z},Pg:function(){return f.P},EZ:function(){return v.E},aq:function(){return m.Z},vB:function(){return g.v},Cc:function(){return F.Z},pK:function(){return x.Z},an:function(){return b.Z},cN:function(){return j.Z},kr:function(){return y.Z},k8:function(){return p.Z},GI:function(){return N.Z}});var a=t(4312),l=t(53213),i=t(74938),r=t(94938),s=t(34786),d=t(27818),o=t(63172),c=t(5907),u=t(19571),h=t(32046),f=t(16510),v=t(6272),m=t(36655),g=t(9076),x=t(21191);t(51923);var b=t(53048),j=t(67014),y=t(42492);t(55136),t(14870);var p=t(35524),N=t(7484),k=t(46938),S=t(578),F=t(74570)},8490:function(e,n,t){var a,l,i,r,s,d,o;t.d(n,{$f:function(){return v},DM:function(){return m},IY:function(){return c},SU:function(){return u},YP:function(){return h},ce:function(){return f},iw:function(){return a},r$:function(){return i}});let c="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",f="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let v=Object.entries(a).map(e=>{let[,n]=e;return n});(l||(l={})).PRIMARY="primary",(d=i||(i={})).NEUTRAL="neutral",d.NEUTRAL_STRONG="neutral-strong",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.PRIMARY="primary",d.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",d.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let m=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(l).map(e=>{let[,n]=e;return n}),(o=r||(r={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){t.d(n,{Vj:function(){return a},mT:function(){return r},yI:function(){return i},yn:function(){return l}});let a=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},l=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&l(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},r=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")}}]);
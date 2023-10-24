"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57388],{70718:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(76238);let d=(0,l.forwardRef)(function(e,n){let[t,d]=(0,l.useState)(()=>r.IY),[s,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(e.id||"accordion-item-"+(0,i.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,a.jsxs)("details",{ref:n,id:t,className:(0,i.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,(0,a.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})});n.Z=d},79689:function(e,n,t){t.d(n,{k:function(){return a.Z}});var a=t(70718)},48414:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(79689);let d=(0,l.forwardRef)(function(e,n){var t;let d=(0,l.useRef)(n),[s,o]=(0,l.useState)(()=>[]),[c,u]=(0,l.useState)(()=>""),[h,f]=(0,l.useState)(()=>!1),[v,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&m(e.stylePath),f(!0)},[]),(0,l.useEffect)(()=>{if(d.current&&h){let n=d.current.getElementsByTagName("details");if(n){let t=[];Array.from(n).forEach(e=>{let n=e.id;e.open&&t.push(n);let a=e.getElementsByTagName("summary");(null==a?void 0:a.length)>0&&a[0].addEventListener("click",()=>{u(n)})}),"single"===e.behaviour&&t.length>1&&(t=[t[0]]),o(t)}f(!1)}},[d.current,h]),(0,l.useEffect)(()=>{(null==c?void 0:c.length)>0&&(s.includes(c)?"single"===e.behaviour?o([]):o(s.filter(e=>e!==c)):"single"===e.behaviour?o([c]):o([...s,c]),e.onChange&&e.onChange(s),u(""))},[c]),(0,l.useEffect)(()=>{if(null==d?void 0:d.current){let e=d.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=s.includes(e.id)})}},[s]),(0,a.jsxs)("div",{ref:d,id:e.id,className:(0,i.yI)("db-accordion",e.className),children:[v?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:v})}):null,e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===t?void 0:t.map((e,n)=>(0,a.jsx)(r.k,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(n)))}):null]})});n.Z=d},43548:function(e,n,t){var a=t(52322),l=t(2784),i=t(62540),r=t(17212),d=t(76238),s=t(80724);let o=(0,l.forwardRef)(function(e,n){var t;let[o,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,s.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.v,{variant:"inline",className:"db-alert-link",href:e.link.href,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,hreflang:e.link.hreflang,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:d.ce})}):null]})});n.Z=o},83550:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,id:e.id,className:(0,i.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},94503:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){var t,r,d,s,o;let[c,u]=(0,l.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&f(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-brand",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:c.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(r=e.imgSrc)&&void 0!==r?r:c.src,alt:null!==(d=e.imgAlt)&&void 0!==d?d:"",height:null!==(s=e.imgHeight)&&void 0!==s?s:c.height,width:null!==(o=e.imgWidth)&&void 0!==o?o:c.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})});n.Z=r},42684:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("button",{id:e.id,ref:n,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},62540:function(e,n,t){t.d(n,{Y:function(){return a.Z}});var a=t(42684)},26213:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=r},37252:function(e,n,t){t.d(n,{f:function(){return a.Z}});var a=t(26213)},80910:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(76238);let d=(0,l.forwardRef)(function(e,n){let[t,d]=(0,l.useState)(()=>!1),[s,o]=(0,l.useState)(()=>r.IY),[c,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),o(e.id||"checkbox-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(t&&document&&s){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(s);t&&(void 0!=e.checked&&(t.checked=e.checked),void 0!==e.indeterminate&&(t.indeterminate=e.indeterminate),void 0!==e.defaultChecked&&(t.defaultChecked=e.defaultChecked))}},[t,e.indeterminate,e.checked,e.defaultChecked]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-hidden":e.labelHidden,htmlFor:s,className:(0,i.yI)("db-checkbox",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"checkbox",ref:n,id:s,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,required:e.required,onChange:n=>{var t,a,l,i,r,d;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=c&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(d=n.target)||void 0===d?void 0:null===(r=d.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})});n.Z=d},5980:function(e,n,t){var a=t(52322),l=t(2784),i=t(37252),r=t(80724);let d=(0,l.forwardRef)(function(e,n){var t,d;let[s,o]=(0,l.useState)(()=>!1),[c,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)(i.f,{ref:n,className:(0,r.yI)("db-code-docs",e.className),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children,(0,a.jsxs)("details",{className:"code-details",onToggle:e=>void o(!s),children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:s?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(d=e.showCodeLabel)&&void 0!==d?d:"Show Code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=d},10131:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsx)("div",{ref:n,id:e.id,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,i.yI)("db-divider",e.className),children:t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null})});n.Z=r},88997:function(e,n,t){var a=t(52322),l=t(2784),i=t(62540),r=t(76238),d=t(80724);let s=(0,l.forwardRef)(function(e,n){var t;let s=(0,l.useRef)(n),o=(0,l.useRef)(null),[c,u]=(0,l.useState)(()=>r.IY);function handleClose(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function handleDialogOpen(){s.current&&(e.open&&!s.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?s.current.show():s.current.showModal()),!e.open&&s.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=s.current)||void 0===e||e.close()},401)))}let[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{u(e.id||"drawer-"+(0,d.Vj)()),e.stylePath&&f(e.stylePath),handleDialogOpen()},[]),(0,l.useEffect)(()=>{handleDialogOpen()},[e.open]),(0,a.jsxs)("dialog",{className:"db-drawer",id:c,ref:s,onClick:e=>{handleClose(e)},onKeyDown:e=>handleClose(e),"data-backdrop":e.backdrop,children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsxs)("article",{ref:o,className:(0,d.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>handleClose("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:r.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=s},28371:function(e,n,t){t.d(n,{T:function(){return a.Z}});var a=t(88997)},61705:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(62540),d=t(28371),s=t(76238);let o=(0,l.forwardRef)(function(e,n){var t;let[o,c]=(0,l.useState)(()=>s.IY),[u,h]=(0,l.useState)(()=>!1),[f,v]=(0,l.useState)(()=>!1),[m,g]=(0,l.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function toggle(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[b,x]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(!0),c(e.id||"header-"+(0,i.Vj)()),e.stylePath&&x(e.stylePath)},[]),(0,l.useEffect)(()=>{if(u&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,i.yn)(e,{key:"force-mobile",value:""}),v(!0)}},[u]),(0,a.jsxs)("header",{ref:n,className:(0,i.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!f,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsxs)(d.T,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>toggle(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{"data-hide-on":"desktop",children:(0,a.jsx)(r.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>toggle(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:m.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})});n.Z=o},51897:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{"aria-hidden":"true",ref:n,id:e.id,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,title:e.title,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},70849:function(e,n,t){t.d(n,{E:function(){return a.Z}});var a=t(71087)},71087:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,id:e.id,className:(0,i.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=r},57862:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(76238),d=t(70849);let s=(0,l.forwardRef)(function(e,n){var t,s,o;let[c,u]=(0,l.useState)(()=>r.IY),[h,f]=(0,l.useState)(()=>r.IY+r.Kn),[v,m]=(0,l.useState)(()=>void 0),[g,b]=(0,l.useState)(()=>r.IY),[x,j]=(0,l.useState)(()=>({label:r.SU,placeholder:" "})),[y,p]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{u(e.id||"input-"+(0,i.Vj)()),f(c+r.Kn),b(e.dataListId||"datalist-".concat((0,i.Vj)())),e.stylePath&&p(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,i.yI)("db-input",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,"data-icon-after":e.iconAfter,children:[y?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:y})}):null,(0,a.jsx)("label",{htmlFor:c,children:null!==(s=e.label)&&void 0!==s?s:x.label}),(0,a.jsx)("input",{ref:n,id:c,name:e.name,type:e.type||"text",placeholder:null!==(o=e.placeholder)&&void 0!==o?o:x.placeholder,disabled:e.disabled,required:e.required,defaultValue:e.defaultValue,step:e.step,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,readOnly:e.readOnly,form:e.form,autoComplete:e.autoComplete,autoFocus:e.autoFocus,pattern:e.pattern,onChange:n=>{var t,a,l,i,r,d;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=v&&(m(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(d=n.target)||void 0===d?void 0:null===(r=d.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},list:e.dataList&&g,"aria-describedby":e.message&&h}),e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:g,children:null===(t=e.dataList)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},g+"-option-"+e.key))})}):null,e.children,e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.E,{size:"small",variant:e.variant,icon:(0,i.mT)(e.variant,e.messageIcon),id:h,children:e.message})}):null]})});n.Z=s},17212:function(e,n,t){t.d(n,{v:function(){return a.Z}});var a=t(60749)},60749:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("a",{ref:n,id:e.id,className:(0,i.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=r},91375:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("nav",{ref:n,id:e.id,className:(0,i.yI)("db-main-navigation",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("menu",{children:e.children})]})});n.Z=r},39570:function(e,n,t){var a=t(52322),l=t(2784),i=t(62540),r=t(80724),d=t(76238);let s=(0,l.forwardRef)(function(e,n){var t;let[s,o]=(0,l.useState)(()=>!1),[c,u]=(0,l.useState)(()=>!1),[h,f]=(0,l.useState)(()=>!0),[v,m]=(0,l.useState)(()=>!1),[g,b]=(0,l.useState)(()=>"sub-navigation-"+(0,r.Vj)()),[x,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{o(!0),e.stylePath&&j(e.stylePath)},[]),(0,l.useEffect)(()=>{void 0!==e.subNavigationExpanded&&m(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,l.useEffect)(()=>{if(void 0!==e.areaPopup)u(e.areaPopup),f(c);else if(s&&document&&g){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(g);if(e){let n=e.children;(null==n?void 0:n.length)>0?u(!0):f(!1)}}},[s,e.areaPopup]),(0,a.jsxs)("li",{ref:n,id:e.id,className:(0,r.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,h?null:(0,a.jsx)(a.Fragment,{children:e.children}),h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":c,"aria-expanded":v,disabled:e.disabled,onClick:n=>{e.onClick&&e.onClick(n),c&&m(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:g,children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(i.Y,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),m(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:d.YP})})}):null,e.slotSubNavigation]})]}):null]})});n.Z=s},4700:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>!1),[d,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{r(!e.fadeIn),e.stylePath&&s(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,i.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":t,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.slotHeader,(0,a.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});n.Z=r},69157:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(76238);let d=(0,l.forwardRef)(function(e,n){let[t,d]=(0,l.useState)(()=>!1),[s,o]=(0,l.useState)(()=>r.IY),[c,u]=(0,l.useState)(()=>void 0),[h,f]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),o(e.id||"radio-"+(0,i.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&t&&document&&s){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(s);t&&(void 0!=e.checked&&(t.checked=!0),void 0!==e.defaultChecked&&(t.defaultChecked=e.defaultChecked))}},[t]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-hidden":e.labelHidden,className:(0,i.yI)("db-radio",e.className),htmlFor:s,children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsx)("input",{type:"radio",ref:n,id:s,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,value:e.value,required:e.required,onChange:n=>{var t,a,l,i,r,d;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=c&&(u(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(d=n.target)||void 0===d?void 0:null===(r=d.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})});n.Z=d},95963:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724);let r=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,a.jsxs)("section",{ref:n,id:e.id,"data-size":e.size||"medium",className:(0,i.yI)("db-section",e.className),children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})]})});n.Z=r},44665:function(e,n,t){var a=t(52322),l=t(2784),i=t(80724),r=t(76238),d=t(70849);let s=(0,l.forwardRef)(function(e,n){var t,s,o;let[c,u]=(0,l.useState)(()=>r.IY),[h,f]=(0,l.useState)(()=>r.IY+r.Kn),[v,m]=(0,l.useState)(()=>r.IY+r.D_),[g,b]=(0,l.useState)(()=>void 0);function getOptionLabel(e){var n;return null!==(n=e.label)&&void 0!==n?n:e.value.toString()}let[x,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{let n=e.id||"select-"+(0,i.Vj)();u(n),f(n+r.Kn),m(n+r.D_),e.stylePath&&j(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,i.yI)("db-select",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,a.jsx)("label",{htmlFor:c,children:null!==(s=e.label)&&void 0!==s?s:r.SU}),(0,a.jsxs)("select",{ref:n,"aria-invalid":e.invalid,required:e.required,disabled:e.disabled,id:c,name:e.name,value:e.value,onClick:n=>{e.onClick&&e.onClick(n)},onChange:n=>{var t,a,l,i,r,d;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=g&&(b(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(d=n.target)||void 0===d?void 0:null===(r=d.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},"aria-describedby":e.message&&h||v,children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(a.Fragment,{children:null===(t=e.options)||void 0===t?void 0:t.map(e=>{var n;return(0,a.jsxs)(a.Fragment,{children:[e.options?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("optgroup",{label:getOptionLabel(e),children:null===(n=e.options)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:getOptionLabel(e)},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:getOptionLabel(e)},"option-"+e.value)})]})})}):null,e.children]}),(0,a.jsx)("span",{id:v,children:null!==(o=e.placeholder)&&void 0!==o?o:e.label}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.E,{size:"small",variant:e.variant,icon:(0,i.mT)(e.variant,e.messageIcon),id:h,children:e.message})}):null]})});n.Z=s},86735:function(e,n,t){var a=t(52322),l=t(2784),i=t(45588),r=t(80724);let d=(0,l.forwardRef)(function(e,n){var t;let[d,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("div",{role:"tablist",ref:n,id:e.id,className:(0,r.yI)("cmp-tab-bar",e.className),children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.tabs?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,a.jsx)(i.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=d},45588:function(e,n,t){t.d(n,{Q:function(){return a.Z}});var a=t(12126)},12126:function(e,n,t){var a=t(52322),l=t(2784),i=t(76238),r=t(80724);let d=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(null),[d,s]=(0,l.useState)(()=>i.IY),[o,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{if(s((0,r.Vj)()),e.stylePath&&c(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,r.yI)("db-tab",e.className),children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,(0,a.jsx)("input",{type:"radio",ref:t,name:e.name,id:d}),(0,a.jsx)("label",{role:"tab",htmlFor:d,children:e.label}),(0,a.jsxs)("section",{role:"tabpanel",id:"content-"+d,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})]})});n.Z=d},77824:function(e,n,t){var a=t(52322),l=t(2784),i=t(62540),r=t(80724);let d=(0,l.forwardRef)(function(e,n){function getRemoveButtonText(){return e.removeButton?e.removeButton:"Remove tag"}let[t,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,id:e.id,className:(0,r.yI)("db-tag",e.className),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children,e.text?(0,a.jsx)(a.Fragment,{children:e.text}):null,"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:getRemoveButtonText(),children:getRemoveButtonText()})}):null]})});n.Z=d},35680:function(e,n,t){var a=t(52322),l=t(2784),i=t(70849),r=t(80724),d=t(76238);let s=(0,l.forwardRef)(function(e,n){var t,s,o,c;let[u,h]=(0,l.useState)(()=>d.IY),[f,v]=(0,l.useState)(()=>d.IY+d.Kn),[m,g]=(0,l.useState)(()=>void 0),[b,x]=(0,l.useState)(()=>({label:d.SU,placeholder:" ",rows:"4"})),[j,y]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&y(e.stylePath),h(e.id||"textarea-"+(0,r.Vj)()),v(u+d.Kn)},[]),(0,a.jsxs)("div",{ref:n,className:(0,r.yI)("db-textarea",e.className),"data-label-variant":e.labelVariant,"data-variant":e.variant,children:[j?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,a.jsx)("label",{htmlFor:u,children:null!==(t=e.label)&&void 0!==t?t:b.label}),(0,a.jsx)("textarea",{id:u,"data-resize":e.resize,autoComplete:e.autoComplete,autoFocus:e.autoFocus,disabled:e.disabled,required:e.required,readOnly:e.readOnly,"aria-invalid":e.invalid,form:e.form,maxLength:e.maxLength,minLength:e.minLength,name:e.name,wrap:e.wrap,spellCheck:e.spellCheck,onChange:n=>{var t,a,l,i,r,d;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(a=n.target)||void 0===a?void 0:null===(t=a.validity)||void 0===t?void 0:t.valid)!=m&&(g(null===(i=n.target)||void 0===i?void 0:null===(l=i.validity)||void 0===l?void 0:l.valid),e.validityChange&&e.validityChange(!!(null===(d=n.target)||void 0===d?void 0:null===(r=d.validity)||void 0===r?void 0:r.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},defaultValue:null!==(s=e.defaultValue)&&void 0!==s?s:e.children,value:e.value,"aria-describedby":e.message&&f,placeholder:null!==(o=e.placeholder)&&void 0!==o?o:b.placeholder,rows:null!==(c=e.rows)&&void 0!==c?c:b.rows,cols:e.cols}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.E,{size:"small",variant:e.variant,icon:(0,r.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})});n.Z=s},57388:function(e,n,t){t.d(n,{aw:function(){return S.Z},kC:function(){return k.k},H3:function(){return a.Z},aE:function(){return l.Z},mX:function(){return i.Z},Y1:function(){return r.Y},f:function(){return d.f},I3:function(){return s.Z},wq:function(){return o.Z},oH:function(){return c.Z},TG:function(){return u.T},W4:function(){return h.Z},Pg:function(){return f.Z},EZ:function(){return v.E},aq:function(){return m.Z},vB:function(){return g.v},Cc:function(){return C.Z},pK:function(){return b.Z},an:function(){return x.Z},cN:function(){return j.Z},kr:function(){return y.Z},k8:function(){return p.Z},GI:function(){return N.Z}});var a=t(43548),l=t(83550),i=t(94503),r=t(62540),d=t(37252),s=t(80910),o=t(5980),c=t(10131),u=t(28371),h=t(61705),f=t(51897),v=t(70849),m=t(57862),g=t(17212),b=t(39570);t(4700);var x=t(69157),j=t(95963),y=t(44665);t(45588),t(86735);var p=t(77824),N=t(35680),S=t(48414),k=t(79689),C=t(91375)},76238:function(e,n,t){var a,l,i,r,d,s,o;t.d(n,{$f:function(){return g},DM:function(){return b},D_:function(){return f},IY:function(){return c},Kn:function(){return h},SU:function(){return u},YP:function(){return v},ce:function(){return m},iw:function(){return a},r$:function(){return i}});let c="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="-message",f="-placeholder",v="Back",m="Close Button";(d=a||(a={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let g=Object.entries(a).map(e=>{let[,n]=e;return n});(l||(l={})).PRIMARY="primary",(s=i||(i={})).BASE="base",s.BASE_STRONG="base-strong",s.BASE_TRANSPARENT_FULL="base-transparent-full",s.BASE_TRANSPARENT_SEMI="base-transparent-semi",s.NEUTRAL="neutral",s.NEUTRAL_STRONG="neutral-strong",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.BRAND="brand",s.BRAND_TRANSPARENT_FULL="brand-transparent-full",s.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let b=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(l).map(e=>{let[,n]=e;return n}),(o=r||(r={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(r).map(e=>{let[,n]=e;return n})},80724:function(e,n,t){t.d(n,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&addAttributeToChildren(e,n)})},cls=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},getMessageIcon=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")}}]);
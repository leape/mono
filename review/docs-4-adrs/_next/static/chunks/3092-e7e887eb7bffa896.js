(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3092],{4543:function(e,t,n){"use strict";let a,r,l;n.d(t,{F:function(){return em},H:function(){return y},b:function(){return eb},c:function(){return E},g:function(){return x},h:function(){return p},p:function(){return eC},r:function(){return ey}});let s=!1,i=!1,o=!1,d=!1,$=!1,c=(e,t="")=>()=>{},u=(e,t)=>()=>{},h="http://www.w3.org/1999/xlink",f={},b=e=>null!=e,m=e=>"object"==(e=typeof e)||"function"===e,p=(e,t,...n)=>{let a=null,r=null,l=null,s=!1,i=!1,o=[],d=t=>{for(let n=0;n<t.length;n++)Array.isArray(a=t[n])?d(a):null!=a&&"boolean"!=typeof a&&((s="function"!=typeof e&&!m(a))&&(a=String(a)),s&&i?o[o.length-1].$text$+=a:o.push(s?g(null,a):a),i=s)};if(d(n),t){t.key&&(r=t.key),t.name&&(l=t.name);{let e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,o,w);let $=g(e,null);return $.$attrs$=t,o.length>0&&($.$children$=o),$.$key$=r,$.$name$=l,$},g=(e,t)=>{let n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n.$name$=null,n},y={},v=e=>e&&e.$tag$===y,w={forEach:(e,t)=>e.map(N).forEach(t),map:(e,t)=>e.map(N).map(t).map(R)},N=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),R=e=>{if("function"==typeof e.vtag){let t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),p(e.vtag,t,...e.vchildren||[])}let t=g(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},k=(e,t)=>{if(null!=e&&!m(e)){if(4&t)return"false"!==e&&(""===e||!!e);if(2&t)return parseFloat(e);if(1&t)return String(e)}return e},x=e=>eg(e).$hostElement$,E=(e,t,n)=>{let a=x(e);return{emit:e=>S(a,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},S=(e,t,n)=>{let a=eT.ce(t,n);return e.dispatchEvent(a),a},T=new WeakMap,C=(e,t,n)=>{let a=ex.get(e);eO&&n?"string"==typeof(a=a||new CSSStyleSheet)?a=t:a.replaceSync(t):a=t,ex.set(e,a)},O=(e,t,n,a)=>{let r=L(t),l=ex.get(r);if(e=11===e.nodeType?e:eS,l){if("string"==typeof l){let t;e=e.head||e;let n=T.get(e);n||T.set(e,n=new Set),!n.has(r)&&((t=eS.createElement("style")).innerHTML=l,e.insertBefore(t,e.querySelector("link")),n&&n.add(r))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l])}return r},j=e=>{let t=e.$cmpMeta$,n=e.$hostElement$,a=t.$flags$,r=c("attachStyles",t.$tagName$),l=O(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&a&&(n["s-sc"]=l,n.classList.add(l+"-h"),2&a&&n.classList.add(l+"-s")),r()},L=(e,t)=>"sc-"+e.$tagName$,M=(e,t,n,a,r,l)=>{if(n!==a){let s=ew(e,t),i=t.toLowerCase();if("class"===t){let t=e.classList,r=A(n),l=A(a);t.remove(...r.filter(e=>e&&!l.includes(e))),t.add(...l.filter(e=>e&&!r.includes(e)))}else if("style"===t){for(let t in n)a&&null!=a[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(let t in a)n&&a[t]===n[t]||(t.includes("-")?e.style.setProperty(t,a[t]):e.style[t]=a[t])}else if("key"===t);else if("ref"===t)a&&a(e);else if(s||"o"!==t[0]||"n"!==t[1]){let o=m(a);if((s||o&&null!==a)&&!r)try{if(e.tagName.includes("-"))e[t]=a;else{let r=null==a?"":a;"list"===t?s=!1:(null==n||e[t]!=r)&&(e[t]=r)}}catch(e){}let d=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,d=!0),null==a||!1===a?(!1!==a||""===e.getAttribute(t))&&(d?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!s||4&l||r)&&!o&&(a=!0===a?"":a,d?e.setAttributeNS(h,t,a):e.setAttribute(t,a))}else t="-"===t[2]?t.slice(3):ew(eE,i)?i.slice(2):i[2]+t.slice(3),n&&eT.rel(e,t,n,!1),a&&eT.ael(e,t,a,!1)}},P=/\s/,A=e=>e?e.split(P):[],I=(e,t,n,a)=>{let r=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||f,s=t.$attrs$||f;for(a in l)a in s||M(r,a,l[a],void 0,n,t.$flags$);for(a in s)M(r,a,l[a],s[a],n,t.$flags$)},_=(e,t,n,i)=>{let $,c,u;let h=t.$children$[n],f=0;if(s||(o=!0,"slot"!==h.$tag$||(a&&i.classList.add(a+"-s"),h.$flags$|=h.$children$?2:1)),null!==h.$text$)$=h.$elm$=eS.createTextNode(h.$text$);else if(1&h.$flags$)$=h.$elm$=eS.createTextNode("");else{if(d||(d="svg"===h.$tag$),$=h.$elm$=eS.createElementNS(d?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&h.$flags$?"slot-fb":h.$tag$),d&&"foreignObject"===h.$tag$&&(d=!1),I(null,h,d),b(a)&&$["s-si"]!==a&&$.classList.add($["s-si"]=a),h.$children$)for(f=0;f<h.$children$.length;++f)(c=_(e,h,f,$))&&$.appendChild(c);"svg"===h.$tag$?d=!1:"foreignObject"===$.tagName&&(d=!0)}return $["s-hn"]=l,3&h.$flags$&&($["s-sr"]=!0,$["s-cr"]=r,$["s-sn"]=h.$name$||"",(u=e&&e.$children$&&e.$children$[n])&&u.$tag$===h.$tag$&&e.$elm$&&B(e.$elm$,!1)),$},B=(e,t)=>{eT.$flags$|=1;let n=e.childNodes;for(let e=n.length-1;e>=0;e--){let a=n[e];a["s-hn"]!==l&&a["s-ol"]&&(D(a).insertBefore(a,V(a)),a["s-ol"].remove(),a["s-ol"]=void 0,o=!0),t&&B(a,t)}eT.$flags$&=-2},U=(e,t,n,a,r,s)=>{let i,o=e["s-cr"]&&e["s-cr"].parentNode||e;for(o.shadowRoot&&o.tagName===l&&(o=o.shadowRoot);r<=s;++r)a[r]&&(i=_(null,n,r,e))&&(a[r].$elm$=i,o.insertBefore(i,V(t)))},z=(e,t,n,a,r)=>{for(;t<=n;++t)(a=e[t])&&(r=a.$elm$,K(a),i=!0,r["s-ol"]?r["s-ol"].remove():B(r,!0),r.remove())},q=(e,t,n,a)=>{let r,l,s=0,i=0,o=0,d=0,$=t.length-1,c=t[0],u=t[$],h=a.length-1,f=a[0],b=a[h];for(;s<=$&&i<=h;)if(null==c)c=t[++s];else if(null==u)u=t[--$];else if(null==f)f=a[++i];else if(null==b)b=a[--h];else if(H(c,f))F(c,f),c=t[++s],f=a[++i];else if(H(u,b))F(u,b),u=t[--$],b=a[--h];else if(H(c,b))("slot"===c.$tag$||"slot"===b.$tag$)&&B(c.$elm$.parentNode,!1),F(c,b),e.insertBefore(c.$elm$,u.$elm$.nextSibling),c=t[++s],b=a[--h];else if(H(u,f))("slot"===c.$tag$||"slot"===b.$tag$)&&B(u.$elm$.parentNode,!1),F(u,f),e.insertBefore(u.$elm$,c.$elm$),u=t[--$],f=a[++i];else{for(o=-1,d=s;d<=$;++d)if(t[d]&&null!==t[d].$key$&&t[d].$key$===f.$key$){o=d;break}o>=0?((l=t[o]).$tag$!==f.$tag$?r=_(t&&t[i],n,o,e):(F(l,f),t[o]=void 0,r=l.$elm$),f=a[++i]):(r=_(t&&t[i],n,i,e),f=a[++i]),r&&D(c.$elm$).insertBefore(r,V(c.$elm$))}s>$?U(e,null==a[h+1]?null:a[h+1].$elm$,n,a,i,h):i>h&&z(t,s,$)},H=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),V=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{let n;let a=t.$elm$=e.$elm$,r=e.$children$,l=t.$children$,s=t.$tag$,i=t.$text$;null===i?(d="svg"===s||"foreignObject"!==s&&d,"slot"===s||I(e,t,d),null!==r&&null!==l?q(a,r,t,l):null!==l?(null!==e.$text$&&(a.textContent=""),U(a,null,t,l,0,l.length-1)):null!==r&&z(r,0,r.length-1),d&&"svg"===s&&(d=!1)):(n=a["s-cr"])?n.parentNode.textContent=i:e.$text$!==i&&(a.data=i)},W=e=>{let t,n,a,r,l,s;let i=e.childNodes;for(n=0,a=i.length;n<a;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"]){for(r=0,l=t["s-sn"],t.hidden=!1;r<a;r++)if(s=i[r].nodeType,i[r]["s-hn"]!==t["s-hn"]||""!==l){if(1===s&&l===i[r].getAttribute("slot")){t.hidden=!0;break}}else if(1===s||3===s&&""!==i[r].textContent.trim()){t.hidden=!0;break}}W(t)}},G=[],Z=e=>{let t,n,a,r,l,s;let o=0,d=e.childNodes,$=d.length;for(;o<$;o++){if((t=d[o])["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(a=n.parentNode.childNodes,r=t["s-sn"],s=a.length-1;s>=0;s--)(n=a[s])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(J(n,r)?(l=G.find(e=>e.$nodeToRelocate$===n),i=!0,n["s-sn"]=n["s-sn"]||r,l?l.$slotRefNode$=t:G.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&G.map(e=>{J(e.$nodeToRelocate$,n["s-sn"])&&(l=G.find(e=>e.$nodeToRelocate$===n))&&!e.$slotRefNode$&&(e.$slotRefNode$=l.$slotRefNode$)})):G.some(e=>e.$nodeToRelocate$===n)||G.push({$nodeToRelocate$:n}));1===t.nodeType&&Z(t)}},J=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,K=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(K)},Q=(e,t)=>{let n=e.$hostElement$,d=e.$cmpMeta$,$=e.$vnode$||g(null,null),c=v(t)?t:p(null,null,t);if(l=n.tagName,d.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},d.$attrsToReflect$.map(([e,t])=>c.$attrs$[t]=n[e])),c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=$.$elm$=n.shadowRoot||n,a=n["s-sc"],r=n["s-cr"],s=(1&d.$flags$)!=0,i=!1,F($,c),eT.$flags$|=1,o){let e,t,n,a,r,l;Z(c.$elm$);let s=0;for(;s<G.length;s++)(t=(e=G[s]).$nodeToRelocate$)["s-ol"]||((n=eS.createTextNode(""))["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(s=0;s<G.length;s++)if(t=(e=G[s]).$nodeToRelocate$,e.$slotRefNode$){for(a=e.$slotRefNode$.parentNode,r=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if((l=n["s-nr"])&&l["s-sn"]===t["s-sn"]&&a===l.parentNode&&(!(l=l.nextSibling)||!l["s-nr"])){r=l;break}(r||a===t.parentNode)&&t.nextSibling===r||t===r||(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),a.insertBefore(t,r))}else 1===t.nodeType&&(t.hidden=!0)}i&&W(c.$elm$),eT.$flags$&=-2,G.length=0},X=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},Y=(e,t)=>{if(e.$flags$|=16,4&e.$flags$){e.$flags$|=512;return}X(e,e.$ancestorComponent$);let n=()=>ee(e,t);return eI(n)},ee=(e,t)=>{let n;let a=c("scheduleUpdate",e.$cmpMeta$.$tagName$),r=e.$lazyInstance$;return t&&(n=el(r,"componentWillLoad")),a(),es(n,()=>et(e,r,t))},et=async(e,t,n)=>{let a=e.$hostElement$,r=c("update",e.$cmpMeta$.$tagName$),l=a["s-rc"];n&&j(e);let s=c("render",e.$cmpMeta$.$tagName$);en(e,t),l&&(l.map(e=>e()),a["s-rc"]=void 0),s(),r();{let t=a["s-p"],n=()=>ea(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},en=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,Q(e,t)}catch(t){eN(t,e.$hostElement$)}return null},ea=e=>{let t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,a=c("postUpdate",t),r=e.$ancestorComponent$;64&e.$flags$?a():(e.$flags$|=64,ei(n),a(),e.$onReadyResolve$(n),r||er()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&eA(()=>Y(e,!1)),e.$flags$&=-517},er=e=>{ei(eS.documentElement),eA(()=>S(eE,"appload",{detail:{namespace:"db-ui-elements"}}))},el=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){eN(e)}},es=(e,t)=>e&&e.then?e.then(t):t(),ei=e=>e.classList.add("hydrated"),eo=(e,t)=>eg(e).$instanceValues$.get(t),ed=(e,t,n,a)=>{let r=eg(e),l=r.$hostElement$,s=r.$instanceValues$.get(t),i=r.$flags$,o=r.$lazyInstance$;n=k(n,a.$members$[t][0]);let d=Number.isNaN(s)&&Number.isNaN(n),$=n!==s&&!d;if((!(8&i)||void 0===s)&&$&&(r.$instanceValues$.set(t,n),o)){if(a.$watchers$&&128&i){let e=a.$watchers$[t];e&&e.map(e=>{try{o[e](n,s,t)}catch(e){eN(e,l)}})}(18&i)==2&&Y(r,!1)}},e$=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);let a=Object.entries(t.$members$),r=e.prototype;if(a.map(([e,[a]])=>{31&a||2&n&&32&a?Object.defineProperty(r,e,{get(){return eo(this,e)},set(n){ed(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(r,e,{value(...t){let n=eg(this);return n.$onInstancePromise$.then(()=>n.$lazyInstance$[e](...t))}})}),1&n){let n=new Map;r.attributeChangedCallback=function(e,t,a){eT.jmp(()=>{let t=n.get(e);if(this.hasOwnProperty(t))a=this[t],delete this[t];else if(r.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==a)return;this[t]=(null!==a||"boolean"!=typeof this[t])&&a})},e.observedAttributes=a.filter(([e,t])=>15&t[0]).map(([e,a])=>{let r=a[1]||e;return n.set(r,e),512&a[0]&&t.$attrsToReflect$.push([e,r]),r})}}return e},ec=async(e,t,n,a,r)=>{if((32&t.$flags$)==0){{if(t.$flags$|=32,(r=ek(n)).then){let e=u();r=await r,e()}r.isProxied||(n.$watchers$=r.watchers,e$(r,n,2),r.isProxied=!0);let e=c("createInstance",n.$tagName$);t.$flags$|=8;try{new r(t)}catch(e){eN(e)}t.$flags$&=-9,t.$flags$|=128,e()}if(r.style){let e=r.style,t=L(n);if(!ex.has(t)){let a=c("registerStyles",n.$tagName$);C(t,e,!!(1&n.$flags$)),a()}}}let l=t.$ancestorComponent$,s=()=>Y(t,!0);l&&l["s-rc"]?l["s-rc"].push(s):s()},eu=e=>{if((1&eT.$flags$)==0){let t=eg(e),n=t.$cmpMeta$,a=c("connectedCallback",n.$tagName$);if(!(1&t.$flags$)){t.$flags$|=1,12&n.$flags$&&eh(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){X(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){let n=e[t];delete e[t],e[t]=n}}),ec(e,t,n)}a()}},eh=e=>{let t=e["s-cr"]=eS.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ef=e=>{(1&eT.$flags$)==0&&eg(e)},eb=(e,t={})=>{let n;let a=c(),r=[],l=t.exclude||[],s=eE.customElements,i=eS.head,o=i.querySelector("meta[charset]"),d=eS.createElement("style"),$=[],u=!0;Object.assign(eT,t),eT.$resourcesUrl$=new URL(t.resourcesUrl||"./",eS.baseURI).href,e.map(e=>{e[1].map(t=>{let a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};a.$members$=t[2],a.$attrsToReflect$=[],a.$watchers$={};let i=a.$tagName$,o=class extends HTMLElement{constructor(e){super(e),e=this,ev(e,a),1&a.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){n&&(clearTimeout(n),n=null),u?$.push(this):eT.jmp(()=>eu(this))}disconnectedCallback(){eT.jmp(()=>ef(this))}componentOnReady(){return eg(this).$onReadyPromise$}};a.$lazyBundleId$=e[0],l.includes(i)||s.get(i)||(r.push(i),s.define(i,e$(o,a,1)))})}),d.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),i.insertBefore(d,o?o.nextSibling:i.firstChild),u=!1,$.length?$.map(e=>e.connectedCallback()):eT.jmp(()=>n=setTimeout(er,30)),a()},em=(e,t)=>t,ep=new WeakMap,eg=e=>ep.get(e),ey=(e,t)=>ep.set(t.$lazyInstance$=e,t),ev=(e,t)=>{let n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise(e=>n.$onInstanceResolve$=e),n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[],ep.set(e,n)},ew=(e,t)=>t in e,eN=(e,t)=>(0,console.error)(e,t),eR=new Map,ek=(e,t,a)=>{let r=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,s=eR.get(l);if(s)return s[r];if(!a||!BUILD.hotModuleReplacement){let e=e=>(eR.set(l,e),e[r]);switch(l){case"db-button_2":return n.e(7250).then(n.bind(n,7250)).then(e,eN);case"db-accordion":return n.e(4223).then(n.bind(n,4223)).then(e,eN);case"db-brand":return n.e(9878).then(n.bind(n,9878)).then(e,eN);case"db-breadcrumb":return n.e(6560).then(n.bind(n,6560)).then(e,eN);case"db-card":return n.e(1187).then(n.bind(n,1187)).then(e,eN);case"db-cards":return n.e(4063).then(n.bind(n,4063)).then(e,eN);case"db-checkbox":return n.e(3735).then(n.bind(n,3735)).then(e,eN);case"db-chip":return n.e(1204).then(n.bind(n,1204)).then(e,eN);case"db-dropdown":return n.e(3474).then(n.bind(n,3474)).then(e,eN);case"db-footer":return n.e(8795).then(n.bind(n,8795)).then(e,eN);case"db-header":return n.e(3954).then(n.bind(n,3954)).then(e,eN);case"db-image":return n.e(6924).then(n.bind(n,6924)).then(e,eN);case"db-input":return n.e(3824).then(n.bind(n,3824)).then(e,eN);case"db-language-switcher":return n.e(986).then(n.bind(n,986)).then(e,eN);case"db-link":return n.e(8105).then(n.bind(n,8105)).then(e,eN);case"db-linklist":return n.e(8507).then(n.bind(n,8507)).then(e,eN);case"db-mainnavigation":return n.e(4791).then(n.bind(n,4791)).then(e,eN);case"db-meta":return n.e(4168).then(n.bind(n,4168)).then(e,eN);case"db-metanavigation":return n.e(6134).then(n.bind(n,6134)).then(e,eN);case"db-notification":return n.e(2736).then(n.bind(n,2736)).then(e,eN);case"db-notifications":return n.e(8929).then(n.bind(n,8929)).then(e,eN);case"db-overflow-menu":return n.e(3413).then(n.bind(n,3413)).then(e,eN);case"db-page":return n.e(1349).then(n.bind(n,1349)).then(e,eN);case"db-pagination":return n.e(8120).then(n.bind(n,8120)).then(e,eN);case"db-progress":return n.e(7818).then(n.bind(n,7818)).then(e,eN);case"db-radio":return n.e(7686).then(n.bind(n,7686)).then(e,eN);case"db-sidenavi":return n.e(6095).then(n.bind(n,6095)).then(e,eN);case"db-tab":return n.e(5964).then(n.bind(n,5964)).then(e,eN);case"db-tab-bar":return n.e(1065).then(n.bind(n,1065)).then(e,eN);case"db-table":return n.e(1029).then(n.bind(n,1029)).then(e,eN);case"db-tag":return n.e(8024).then(n.bind(n,8024)).then(e,eN);case"db-textarea":return n.e(7410).then(n.bind(n,7410)).then(e,eN);case"db-toggle":return n.e(2169).then(n.bind(n,2169)).then(e,eN);case"github-version-switcher":return n.e(825).then(n.bind(n,825)).then(e,eN);case"db-headline":return n.e(4861).then(n.bind(n,4861)).then(e,eN);case"db-select":return n.e(1346).then(n.bind(n,1346)).then(e,eN)}}return n(3876)(`./${l}.entry.js`).then(e=>(eR.set(l,e),e[r]),eN)},ex=new Map,eE="undefined"!=typeof window?window:{},eS=eE.document||{head:{}},eT={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,a)=>e.addEventListener(t,n,a),rel:(e,t,n,a)=>e.removeEventListener(t,n,a),ce:(e,t)=>new CustomEvent(e,t)},eC=e=>Promise.resolve(e),eO=(()=>{try{return new CSSStyleSheet,"function"==typeof new CSSStyleSheet().replaceSync}catch(e){}return!1})(),ej=[],eL=[],eM=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){eN(e)}e.length=0},eP=()=>{eM(ej),eM(eL),($=ej.length>0)&&eT.raf(eP)},eA=e=>eC().then(e),eI=e=>{eL.push(e),$||($=!0,4&eT.$flags$?eA(eP):eT.raf(eP))}},3948:function(e,t,n){"use strict";n.d(t,{Bl:function(){return p},fw:function(){return g},ff:function(){return y},Pm:function(){return v},rG:function(){return w},T2:function(){return N}});var a=n(2784);let r=e=>e.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),l=e=>e.replace(/([A-Z])/g,e=>"-".concat(e[0].toLowerCase())),s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){let a=i(e.classList,t,n);""!==a&&(e.className=a),Object.keys(t).forEach(n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n){if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){let a=n.substring(2),r=a[0].toLowerCase()+a.substring(1);o(r)||d(e,r,t[n])}else{e[n]=t[n];let a=typeof t[n];"string"===a&&e.setAttribute(l(n),t[n])}}})}},i=(e,t,n)=>{let a=t.className||t.class,r=n.className||n.class,l=$(e),s=$(a?a.split(" "):[]),i=$(r?r.split(" "):[]),o=[];return l.forEach(e=>{s.has(e)?(o.push(e),s.delete(e)):i.has(e)||o.push(e)}),s.forEach(e=>o.push(e)),o.join(" ")},o=e=>{if("undefined"==typeof document)return!0;{let t="on"+e,n=t in document;if(!n){let e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},d=(e,t,n)=>{let a=e.__events||(e.__events={}),r=a[t];r&&e.removeEventListener(t,r),e.addEventListener(t,a[t]=function(e){n&&n.call(this,e)})},$=e=>{let t=new Map;return e.forEach(e=>t.set(e,e)),t},c=(e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{c(t,e)})}},h=(e,t)=>{let n=(t,n)=>a.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,a.forwardRef(n)};var f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};let b=(e,t,n,i)=>{void 0!==i&&i();let d=r(e),$=class extends a.Component{componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){s(this.componentEl,this.props,e)}render(){let t=this.props,{children:r,forwardedRef:s,style:i,className:d,ref:$}=t,c=f(t,["children","forwardedRef","style","className","ref"]),h=Object.keys(c).reduce((e,t)=>{let n=c[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){let a=t.substring(2).toLowerCase();"undefined"!=typeof document&&o(a)&&(e[t]=n)}else{let a=typeof n;("string"===a||"boolean"===a||"number"===a)&&(e[l(t)]=n)}return e},{});n&&(h=n(this.props,h));let b=Object.assign(Object.assign({},h),{ref:u(s,this.setComponentElRef),style:i});return(0,a.createElement)(e,b,r)}static get displayName(){return d}constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}};return t&&($.contextType=t),h($,d)};var m=n(4543);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,m.p)().then(()=>(0,m.b)([["db-card",[[4,"db-card",{alt:[513],header:[513],content:[513],image:[513],illustration:[513],uiCoreIllustrationPath:[513,"illustration-path"],variant:[513]}]]],["db-chip",[[4,"db-chip",{datatype:[513],disabled:[516],icon:[513],iconafter:[513],input_id:[513],name:[513],variant:[513]}]]],["db-link",[[4,"db-link",{current:[513],href:[513],hreflang:[513],icon:[513],iconVariant:[513,"icon-variant"],icononly:[516],media:[513],rel:[513],target:[513],type:[513],text:[513]}]]],["db-table",[[2,"db-table",{tabledata:[1],align:[513],verticalalign:[513],bodyalign:[513],bodyverticalalign:[513],border:[513],density:[513],fontsize:[513],stripes:[513],sticky:[513]}]]],["db-tag",[[4,"db-tag",{icon:[513],iconafter:[513],small:[516],variant:[513]}]]],["github-version-switcher",[[1,"github-version-switcher",{owner:[1],repo:[1],groups:[32],currentBranch:[32],cleanOwner:[32],cleanRepo:[32]}]]],["db-accordion",[[4,"db-accordion",{emphasis:[4],size:[1],summary:[1]}]]],["db-brand",[[4,"db-brand",{siteNameLink:[516,"site-name-link"],alt:[513],anchorRef:[513,"href"],anchorTitle:[513,"title"],anchorRelation:[513,"rel"],src:[513]}]]],["db-breadcrumb",[[4,"db-breadcrumb",{data:[513],ariaLabel:[513,"aria-label"]}]]],["db-cards",[[4,"db-cards"]]],["db-checkbox",[[2,"db-checkbox",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513],indeterminate:[4],setIndeterminate:[64]}]]],["db-dropdown",[[4,"db-dropdown",{data:[513],opposite:[516],summary:[513]}]]],["db-footer",[[6,"db-footer",{border:[4],copyright:[4]}]]],["db-header",[[4,"db-header"]]],["db-image",[[2,"db-image",{src:[513],modernformat:[1],srcset:[1],alt:[513],width:[514],height:[514],loading:[1],caption:[1],responsivemediaquery:[1],ariaid:[1]}]]],["db-input",[[6,"db-input",{ariainvalid:[513],ariarequired:[513],autocomplete:[513],autofocus:[516],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],list:[513],maxlength:[514],minlength:[514],name:[513],pattern:[513],placeholder:[513],readonly:[516],required:[516],size:[514],type:[513],value:[513],variant:[513]}]]],["db-language-switcher",[[4,"db-language-switcher",{ariaSelectedIndex:[514,"aria-selected-index"],data:[513]}]]],["db-linklist",[[4,"db-linklist",{data:[513]}]]],["db-mainnavigation",[[4,"db-mainnavigation",{siteName:[513,"site-name"],data:[513]}]]],["db-meta",[[1,"db-meta"]]],["db-metanavigation",[[4,"db-metanavigation",{data:[513]}]]],["db-notification",[[4,"db-notification",{role:[513],type:[513]}]]],["db-notifications",[[4,"db-notifications",{arialive:[513],variant:[513]}]]],["db-overflow-menu",[[4,"db-overflow-menu",{data:[513],opposite:[516],summary:[513]}]]],["db-page",[[4,"db-page"]]],["db-pagination",[[0,"db-pagination",{ellipsisstart:[516],ellipsisend:[516],currentpage:[514],pages:[514],count:[514],titleprevious:[513],titlenext:[513],titlepagination:[513],textprevious:[513],textnext:[513],arialabel:[513],ariaid:[1]}]]],["db-progress",[[2,"db-progress",{value:[514],max:[514],htmlid:[1],percentagesign:[1],circle:[4],indeterminate:[4]}]]],["db-radio",[[2,"db-radio",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513]}]]],["db-sidenavi",[[4,"db-sidenavi",{data:[513]}]]],["db-tab",[[4,"db-tab",{active:[516],label:[513],name:[513]}]]],["db-tab-bar",[[4,"db-tab-bar"]]],["db-textarea",[[6,"db-textarea",{ariainvalid:[513],ariarequired:[513],autofocus:[516],cols:[514],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],maxlength:[514],minlength:[514],name:[513],placeholder:[513],readonly:[516],required:[516],rows:[514],variant:[513],wrap:[513],value:[513],valueSize:[32]}]]],["db-toggle",[[4,"db-toggle",{htmlid:[1],disabled:[516],checked:[516]}]]],["db-headline",[[4,"db-headline",{variant:[1]}]]],["db-select",[[6,"db-select",{ariainvalid:[516],disabled:[516],input_id:[513],label:[513],multiple:[516],name:[513],required:[516],size:[514],value:[1],variant:[513]}]]],["db-button_2",[[4,"db-button",{ariaexpanded:[513],ariapressed:[513],disabled:[516],formaction:[513],formenctype:[513],formmethod:[513],formnovalidate:[516],formtarget:[513],icon:[513],iconafter:[513],icononly:[516],name:[513],tooltip:[513],type:[513],value:[513],variant:[513],size:[513]}],[1,"db-icon",{icon:[1],variant:[1]}]]]],void 0));let p=b("db-brand"),g=b("db-footer"),y=b("db-header"),v=b("db-mainnavigation"),w=b("db-page"),N=b("github-version-switcher")},8155:function(){},5632:function(e,t,n){e.exports=n(2203)}}]);
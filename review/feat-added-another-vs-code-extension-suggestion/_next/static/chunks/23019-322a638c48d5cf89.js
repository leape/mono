(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23019],{35368:function(e){/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */e.exports=function(){"use strict";let{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object,{freeze:i,seal:a,create:l}=Object,{apply:c,construct:u}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),u||(u=function(e,t){return new e(...t)});let s=_(Array.prototype.forEach),f=_(Array.prototype.pop),p=_(Array.prototype.push),d=_(String.prototype.toLowerCase),m=_(String.prototype.toString),h=_(String.prototype.match),g=_(String.prototype.replace),y=_(String.prototype.indexOf),T=_(String.prototype.trim),b=_(RegExp.prototype.test),E=(Y=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(Y,t)});function _(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function A(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){let e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function v(t){let n=l(null);for(let[o,i]of e(t))void 0!==r(t,o)&&(n[o]=i);return n}function N(e,t){for(;null!==e;){let n=r(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}let S=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),L=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),w=i(["#text"]),x=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),D=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),U=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),F=a(/^data-[\-\w.\u00B7-\uFFFF]/),j=a(/^aria-[\-\w]+$/),z=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G=a(/^html$/i);var Y,K=Object.freeze({__proto__:null,MUSTACHE_EXPR:P,ERB_EXPR:U,TMPLIT_EXPR:H,DATA_ATTR:F,ARIA_ATTR:j,IS_ALLOWED_URI:z,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:W,DOCTYPE_NAME:G});let q=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));let r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function t(){let n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=e=>t(e);if(r.version="3.0.6",r.removed=[],!o||!o.document||9!==o.document.nodeType)return r.isSupported=!1,r;let{document:a}=o,c=a,u=c.currentScript,{DocumentFragment,HTMLTemplateElement,Node,Element,NodeFilter,NamedNodeMap=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement,DOMParser,trustedTypes:_}=o,P=Element.prototype,U=N(P,"cloneNode"),H=N(P,"nextSibling"),F=N(P,"childNodes"),j=N(P,"parentNode");if("function"==typeof HTMLTemplateElement){let e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let B="",{implementation:W,createNodeIterator:Y,createDocumentFragment:V,getElementsByTagName:X}=a,{importNode:$}=c,Z={};r.isSupported="function"==typeof e&&"function"==typeof j&&W&&void 0!==W.createHTMLDocument;let{MUSTACHE_EXPR:J,ERB_EXPR:Q,TMPLIT_EXPR:ee,DATA_ATTR:et,ARIA_ATTR:en,IS_SCRIPT_OR_DATA:eo,ATTR_WHITESPACE:er}=K,{IS_ALLOWED_URI:ei}=K,ea=null,el=A({},[...S,...C,...R,...k,...w]),ec=null,eu=A({},[...x,...D,...M,...I]),es=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ef=null,ep=null,ed=!0,em=!0,eh=!1,eg=!0,ey=!1,eT=!1,eb=!1,eE=!1,e_=!1,eA=!1,ev=!1,eN=!0,eS=!1,eC=!0,eR=!1,eO={},ek=null,eL=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ew=null,ex=A({},["audio","video","img","source","image","track"]),eD=null,eM=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eI="http://www.w3.org/1998/Math/MathML",eP="http://www.w3.org/2000/svg",eU="http://www.w3.org/1999/xhtml",eH=eU,eF=!1,ej=null,ez=A({},[eI,eP,eU],m),eB=null,eW=["application/xhtml+xml","text/html"],eG=null,eY=null,eK=a.createElement("form"),eq=function(e){return e instanceof RegExp||e instanceof Function},eV=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!eY||eY!==e){if(e&&"object"==typeof e||(e={}),e=v(e),eG="application/xhtml+xml"===(eB=eB=-1===eW.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?m:d,ea="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS,eG):el,ec="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR,eG):eu,ej="ALLOWED_NAMESPACES"in e?A({},e.ALLOWED_NAMESPACES,m):ez,eD="ADD_URI_SAFE_ATTR"in e?A(v(eM),e.ADD_URI_SAFE_ATTR,eG):eM,ew="ADD_DATA_URI_TAGS"in e?A(v(ex),e.ADD_DATA_URI_TAGS,eG):ex,ek="FORBID_CONTENTS"in e?A({},e.FORBID_CONTENTS,eG):eL,ef="FORBID_TAGS"in e?A({},e.FORBID_TAGS,eG):{},ep="FORBID_ATTR"in e?A({},e.FORBID_ATTR,eG):{},eO="USE_PROFILES"in e&&e.USE_PROFILES,ed=!1!==e.ALLOW_ARIA_ATTR,em=!1!==e.ALLOW_DATA_ATTR,eh=e.ALLOW_UNKNOWN_PROTOCOLS||!1,eg=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,ey=e.SAFE_FOR_TEMPLATES||!1,eT=e.WHOLE_DOCUMENT||!1,e_=e.RETURN_DOM||!1,eA=e.RETURN_DOM_FRAGMENT||!1,ev=e.RETURN_TRUSTED_TYPE||!1,eE=e.FORCE_BODY||!1,eN=!1!==e.SANITIZE_DOM,eS=e.SANITIZE_NAMED_PROPS||!1,eC=!1!==e.KEEP_CONTENT,eR=e.IN_PLACE||!1,ei=e.ALLOWED_URI_REGEXP||z,eH=e.NAMESPACE||eU,es=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&eq(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(es.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&eq(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(es.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(es.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ey&&(em=!1),eA&&(e_=!0),eO&&(ea=A({},[...w]),ec=[],!0===eO.html&&(A(ea,S),A(ec,x)),!0===eO.svg&&(A(ea,C),A(ec,D),A(ec,I)),!0===eO.svgFilters&&(A(ea,R),A(ec,D),A(ec,I)),!0===eO.mathMl&&(A(ea,k),A(ec,M),A(ec,I))),e.ADD_TAGS&&(ea===el&&(ea=v(ea)),A(ea,e.ADD_TAGS,eG)),e.ADD_ATTR&&(ec===eu&&(ec=v(ec)),A(ec,e.ADD_ATTR,eG)),e.ADD_URI_SAFE_ATTR&&A(eD,e.ADD_URI_SAFE_ATTR,eG),e.FORBID_CONTENTS&&(ek===eL&&(ek=v(ek)),A(ek,e.FORBID_CONTENTS,eG)),eC&&(ea["#text"]=!0),eT&&A(ea,["html","head","body"]),ea.table&&(A(ea,["tbody"]),delete ef.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');B=(n=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===n&&(n=q(_,u)),null!==n&&"string"==typeof B&&(B=n.createHTML(""));i&&i(e),eY=e}},eX=A({},["mi","mo","mn","ms","mtext"]),e$=A({},["foreignobject","desc","title","annotation-xml"]),eZ=A({},["title","style","font","a","script"]),eJ=A({},C);A(eJ,R),A(eJ,O);let eQ=A({},k);A(eQ,L);let e0=function(e){let t=j(e);t&&t.tagName||(t={namespaceURI:eH,tagName:"template"});let n=d(e.tagName),o=d(t.tagName);return!!ej[e.namespaceURI]&&(e.namespaceURI===eP?t.namespaceURI===eU?"svg"===n:t.namespaceURI===eI?"svg"===n&&("annotation-xml"===o||eX[o]):!!eJ[n]:e.namespaceURI===eI?t.namespaceURI===eU?"math"===n:t.namespaceURI===eP?"math"===n&&e$[o]:!!eQ[n]:e.namespaceURI===eU?(t.namespaceURI!==eP||!!e$[o])&&(t.namespaceURI!==eI||!!eX[o])&&!eQ[n]&&(eZ[n]||!eJ[n]):"application/xhtml+xml"===eB&&!!ej[e.namespaceURI])},e1=function(e){p(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},e9=function(e,t){try{p(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ec[e]){if(e_||eA)try{e1(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},e2=function(e){let t=null,o=null;if(eE)e="<remove></remove>"+e;else{let t=h(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===eB&&eH===eU&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let r=n?n.createHTML(e):e;if(eH===eU)try{t=new DOMParser().parseFromString(r,eB)}catch(e){}if(!t||!t.documentElement){t=W.createDocument(eH,"template",null);try{t.documentElement.innerHTML=eF?B:r}catch(e){}}let i=t.body||t.documentElement;return(e&&o&&i.insertBefore(a.createTextNode(o),i.childNodes[0]||null),eH===eU)?X.call(t,eT?"html":"body")[0]:eT?t.documentElement:i},e3=function(e){return Y.call(e.ownerDocument||e,e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,null)},e6=function(e){return"function"==typeof Node&&e instanceof Node},e4=function(e,t,n){Z[e]&&s(Z[e],e=>{e.call(r,t,n,eY)})},e8=function(e){let t=null;if(e4("beforeSanitizeElements",e,null),e instanceof HTMLFormElement&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof NamedNodeMap)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes))return e1(e),!0;let n=eG(e.nodeName);if(e4("uponSanitizeElement",e,{tagName:n,allowedTags:ea}),e.hasChildNodes()&&!e6(e.firstElementChild)&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return e1(e),!0;if(!ea[n]||ef[n]){if(!ef[n]&&e7(n)&&(es.tagNameCheck instanceof RegExp&&b(es.tagNameCheck,n)||es.tagNameCheck instanceof Function&&es.tagNameCheck(n)))return!1;if(eC&&!ek[n]){let t=j(e)||e.parentNode,n=F(e)||e.childNodes;if(n&&t){let o=n.length;for(let r=o-1;r>=0;--r)t.insertBefore(U(n[r],!0),H(e))}}return e1(e),!0}return e instanceof Element&&!e0(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&b(/<\/no(script|embed|frames)/i,e.innerHTML)?(e1(e),!0):(ey&&3===e.nodeType&&(t=e.textContent,s([J,Q,ee],e=>{t=g(t,e," ")}),e.textContent!==t&&(p(r.removed,{element:e.cloneNode()}),e.textContent=t)),e4("afterSanitizeElements",e,null),!1)},e5=function(e,t,n){if(eN&&("id"===t||"name"===t)&&(n in a||n in eK))return!1;if(em&&!ep[t]&&b(et,t));else if(ed&&b(en,t));else if(!ec[t]||ep[t]){if(!(e7(e)&&(es.tagNameCheck instanceof RegExp&&b(es.tagNameCheck,e)||es.tagNameCheck instanceof Function&&es.tagNameCheck(e))&&(es.attributeNameCheck instanceof RegExp&&b(es.attributeNameCheck,t)||es.attributeNameCheck instanceof Function&&es.attributeNameCheck(t))||"is"===t&&es.allowCustomizedBuiltInElements&&(es.tagNameCheck instanceof RegExp&&b(es.tagNameCheck,n)||es.tagNameCheck instanceof Function&&es.tagNameCheck(n))))return!1}else if(eD[t]);else if(b(ei,g(n,er,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===y(n,"data:")&&ew[e]);else if(eh&&!b(eo,g(n,er,"")));else if(n)return!1;return!0},e7=function(e){return e.indexOf("-")>0},te=function(e){e4("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ec},i=t.length;for(;i--;){let a=t[i],{name:l,namespaceURI:c,value:u}=a,p=eG(l),d="value"===l?u:T(u);if(o.attrName=p,o.attrValue=d,o.keepAttr=!0,o.forceKeepAttr=void 0,e4("uponSanitizeAttribute",e,o),d=o.attrValue,o.forceKeepAttr||(e9(l,e),!o.keepAttr))continue;if(!eg&&b(/\/>/i,d)){e9(l,e);continue}ey&&s([J,Q,ee],e=>{d=g(d,e," ")});let m=eG(e.nodeName);if(e5(m,p,d)){if(eS&&("id"===p||"name"===p)&&(e9(l,e),d="user-content-"+d),n&&"object"==typeof _&&"function"==typeof _.getAttributeType){if(c);else switch(_.getAttributeType(m,p)){case"TrustedHTML":d=n.createHTML(d);break;case"TrustedScriptURL":d=n.createScriptURL(d)}}try{c?e.setAttributeNS(c,l,d):e.setAttribute(l,d),f(r.removed)}catch(e){}}}e4("afterSanitizeAttributes",e,null)},tt=function e(t){let n=null,o=e3(t);for(e4("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)e4("uponSanitizeShadowNode",n,null),e8(n)||(n.content instanceof DocumentFragment&&e(n.content),te(n));e4("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,a=null,l=null;if((eF=!e)&&(e="<!-->"),"string"!=typeof e&&!e6(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw E("dirty is not a string, aborting")}else throw E("toString is not a function")}if(!r.isSupported)return e;if(eb||eV(t),r.removed=[],"string"==typeof e&&(eR=!1),eR){if(e.nodeName){let t=eG(e.nodeName);if(!ea[t]||ef[t])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof Node)1===(i=(o=e2("<!---->")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName?o=i:"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!e_&&!ey&&!eT&&-1===e.indexOf("<"))return n&&ev?n.createHTML(e):e;if(!(o=e2(e)))return e_?null:ev?B:""}o&&eE&&e1(o.firstChild);let u=e3(eR?e:o);for(;a=u.nextNode();)e8(a)||(a.content instanceof DocumentFragment&&tt(a.content),te(a));if(eR)return e;if(e_){if(eA)for(l=V.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(ec.shadowroot||ec.shadowrootmode)&&(l=$.call(c,l,!0)),l}let f=eT?o.outerHTML:o.innerHTML;return eT&&ea["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&b(G,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),ey&&s([J,Q,ee],e=>{f=g(f,e," ")}),n&&ev?n.createHTML(f):f},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eV(e),eb=!0},r.clearConfig=function(){eY=null,eb=!1},r.isValidAttribute=function(e,t,n){eY||eV({});let o=eG(e),r=eG(t);return e5(o,r,n)},r.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],p(Z[e],t))},r.removeHook=function(e){if(Z[e])return f(Z[e])},r.removeHooks=function(e){Z[e]&&(Z[e]=[])},r.removeAllHooks=function(){Z={}},r}()}()},64441:function(e,t){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return f}});let r="refresh",i="navigate",a="restore",l="server-patch",c="prefetch",u="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67361:function(e,t,n){"use strict";function o(e,t,n,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),n(36213),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},99938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return E}});let o=n(43219),r=o._(n(2784)),i=n(90038),a=n(65571),l=n(68613),c=n(98318),u=n(24077),s=n(89994),f=n(56415),p=n(19190),d=n(67361),m=n(65299),h=n(64441),g=new Set;function y(e,t,n,o,r,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(g.has(i))return;g.add(i)}let l=i?e.prefetch(t,r):e.prefetch(t,n,o);Promise.resolve(l).catch(e=>{})}function T(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=r.default.forwardRef(function(e,t){let n,o;let{href:l,as:g,children:b,prefetch:E=null,passHref:_,replace:A,shallow:v,scroll:N,locale:S,onClick:C,onMouseEnter:R,onTouchStart:O,legacyBehavior:k=!1,...L}=e;n=b,k&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let w=r.default.useContext(s.RouterContext),x=r.default.useContext(f.AppRouterContext),D=null!=w?w:x,M=!w,I=!1!==E,P=null===E?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:U,as:H}=r.default.useMemo(()=>{if(!w){let e=T(l);return{href:e,as:g?T(g):e}}let[e,t]=(0,i.resolveHref)(w,l,!0);return{href:e,as:g?(0,i.resolveHref)(w,g):t||e}},[w,l,g]),F=r.default.useRef(U),j=r.default.useRef(H);k&&(o=r.default.Children.only(n));let z=k?o&&"object"==typeof o&&o.ref:t,[B,W,G]=(0,p.useIntersection)({rootMargin:"200px"}),Y=r.default.useCallback(e=>{(j.current!==H||F.current!==U)&&(G(),j.current=H,F.current=U),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[H,z,U,G,B]);r.default.useEffect(()=>{D&&W&&I&&y(D,U,H,{locale:S},{kind:P},M)},[H,U,W,S,I,null==w?void 0:w.locale,D,M,P]);let K={ref:Y,onClick(e){k||"function"!=typeof C||C(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,n,o,i,l,c,u,s,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let m=()=>{let e=null==c||c;"beforePopState"in t?t[i?"replace":"push"](n,o,{shallow:l,locale:u,scroll:e}):t[i?"replace":"push"](o||n,{forceOptimisticNavigation:!f,scroll:e})};s?r.default.startTransition(m):m()}(e,D,U,H,A,v,N,S,M,I)},onMouseEnter(e){k||"function"!=typeof R||R(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),D&&(I||!M)&&y(D,U,H,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:P},M)},onTouchStart(e){k||"function"!=typeof O||O(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),D&&(I||!M)&&y(D,U,H,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:P},M)}};if((0,c.isAbsoluteUrl)(H))K.href=H;else if(!k||_||"a"===o.type&&!("href"in o.props)){let e=void 0!==S?S:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,d.getDomainLocale)(H,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);K.href=t||(0,m.addBasePath)((0,u.addLocale)(H,e,null==w?void 0:w.defaultLocale))}return k?r.default.cloneElement(o,K):r.default.createElement("a",{...L,...K},n)}),E=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let o=n(2784),r=n(82120),i="function"==typeof IntersectionObserver,a=new Map,l=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!i,[s,f]=(0,o.useState)(!1),p=(0,o.useRef)(null),d=(0,o.useCallback)(e=>{p.current=e},[]);(0,o.useEffect)(()=>{if(i){if(u||s)return;let e=p.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=l.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},l.push(n),a.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),a.delete(o);let e=l.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!s){let e=(0,r.requestIdleCallback)(()=>f(!0));return()=>(0,r.cancelIdleCallback)(e)}},[u,n,t,s,p.current]);let m=(0,o.useCallback)(()=>{f(!1)},[]);return[d,s,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39097:function(e,t,n){e.exports=n(99938)},5632:function(e,t,n){e.exports=n(65123)}}]);
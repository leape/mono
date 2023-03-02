(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class y extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBIcon-component']")}get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/icon/icon-web-component.css"},this.props||(this.props={}),this.componentProps=["className","icntxt","icon","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <span aria-hidden="true" data-el="span-db-icon-1" data-ref="DBIcon-component">
        <template data-el="show-db-icon">
          <link rel="stylesheet" data-el="link-db-icon-1" />
        </template>
      
        <slot></slot>
      </span>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return["icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='span-db-icon-1']").forEach(t=>{t.className="db-icon"+(this.props.className?" "+this.props.className:"")+(this.props.icntxt?"":" is-icon-text-replace"),this.props.icon&&t.setAttribute("data-icon",this.props.icon)}),this._root.querySelectorAll("[data-el='show-db-icon']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-icon-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-icon",y);const A=()=>{var o;return((o=window==null?void 0:window.crypto)==null?void 0:o.randomUUID())||Math.random().toString()},_="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND",N="LABEL SHOULD BE SET";var d;(function(o){o.FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive"})(d||(d={}));Object.entries(d).map(([,o])=>o);var p;(function(o){o.NEUTRAL_0="neutral-0",o.NEUTRAL_1="neutral-1",o.NEUTRAL_2="neutral-2",o.NEUTRAL_3="neutral-3",o.NEUTRAL_4="neutral-4",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.PRIMARY_LIGHT="primary-light",o.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",o.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",o.SECONDARY_LIGHT="secondary-light",o.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",o.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",o.SUCCESS_LIGHT="success-light",o.SUCCESS_TRANSPARENT_FULL="success-transparent-full",o.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",o.CRITICAL_LIGHT="critical-light",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING_LIGHT="warning-light",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATION_LIGHT="information-light",o.INFORMATION_TRANSPARENT_FULL="information-transparent-full",o.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi"})(p||(p={}));Object.entries(p).map(([,o])=>o);var h;(function(o){o.CRITICAL="critical",o.INFORMATION="information",o.WARNING="warning",o.SUCCESS="success"})(h||(h={}));Object.entries(h).map(([,o])=>o);const E={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"};class v extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBInput-component']")}get _formRef(){return this._root.querySelector("[data-ref='DBInput-formRef']")}get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/input/input.css",_id:_,_isValid:void 0,_value:"",_placeholder:" ",_label:N,getIcon(e){return e?E[e]:""},handleChange(e){var n,s,i,r,l,u;t.props.onChange&&t.props.onChange(e),t.props.change&&t.props.change(e),t.state._value=e.target.value,t.update(),((s=(n=t._formRef)==null?void 0:n.validity)==null?void 0:s.valid)!=t.state._isValid&&(t.state._isValid=(r=(i=t._formRef)==null?void 0:i.validity)==null?void 0:r.valid,t.update(),t.props.validityChange&&typeof t.props.validityChange=="function"&&t.props.validityChange(!!((u=(l=t._formRef)==null?void 0:l.validity)!=null&&u.valid)))},handleBlur(e){t.props.onBlur&&t.props.onBlur(e),t.props.blur&&t.props.blur(e)},handleFocus(e){t.props.onFocus&&t.props.onFocus(e),t.props.focus&&t.props.focus(e)}},this.props||(this.props={}),this.componentProps=["onChange","change","validityChange","onBlur","blur","onFocus","focus","className","variant","iconBefore","name","type","disabled","required","maxLength","minLength","pattern","description","iconAfter","id","value","stylePath","placeholder","label"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onInputDbInput1Input=e=>{this.state.handleChange(e)},this.onInputDbInput1Blur=e=>{this.state.handleBlur(e)},this.onInputDbInput1Focus=e=>{this.state.handleFocus(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-input-1" data-ref="DBInput-component">
        <template data-el="show-db-input">
          <link rel="stylesheet" data-el="link-db-input-1" />
        </template>
      
        <template data-el="show-db-input-2">
          <db-icon class="icon-before" data-el="db-icon-db-input"></db-icon>
        </template>
      
        <input
          data-el="input-db-input-1"
          data-dom-state="DBInput-input-db-input-1"
          data-ref="DBInput-formRef"
        />
      
        <label aria-hidden="true" data-el="label-db-input-1">
          <span>
            <template data-el="div-db-input-2"><!-- state._label --></template>
          </span>
        </label>
      
        <template data-el="show-db-input-3">
          <p class="description">
            <template data-el="div-db-input-3"><!-- props.description --></template>
          </p>
        </template>
      
        <template data-el="show-db-input-4">
          <db-icon class="icon-input-state" data-el="db-icon-db-input-2"></db-icon>
        </template>
      
        <template data-el="show-db-input-5">
          <db-icon class="icon-after" data-el="db-icon-db-input-3"></db-icon>
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return[]}onMount(){this.state._id=this.props.id?this.props.id:"input-"+A(),this.update(),this.props.value&&(this.state._value=this.props.value,this.update()),this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update()),this.props.placeholder&&(this.state._placeholder=this.props.placeholder,this.update()),this.props.label&&(this.state._label=this.props.label,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){const t=this.getStateful(this._root),e=this.prepareHydrate(t);if(this.destroyAnyNodes(),this.updateBindings(),e.length){const n=this.getStateful(this._root);this.hydrateDom(e,n)}}getStateful(t){const e=t.querySelectorAll("[data-dom-state]");return e?Array.from(e):[]}prepareHydrate(t){return t.map(e=>({id:e.dataset.domState,value:e.value,active:document.activeElement===e,selectionStart:e.selectionStart}))}hydrateDom(t,e){return e.map((n,s)=>{const i=t.find(r=>n.dataset.domState===r.id);i&&(n.value=i.value,i.active&&(n.focus(),n.selectionStart=i.selectionStart))})}updateBindings(){this._root.querySelectorAll("[data-el='div-db-input-1']").forEach(t=>{t.className="db-input "+(this.props.className||""),this.props.variant&&t.setAttribute("data-variant",this.props.variant)}),this._root.querySelectorAll("[data-el='show-db-input']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-input-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='show-db-input-2']").forEach(t=>{this.props.iconBefore&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input']").forEach(t=>{this.props.iconBefore&&t.setAttribute("icon",this.props.iconBefore)}),this._root.querySelectorAll("[data-el='input-db-input-1']").forEach(t=>{t.setAttribute("id",this.state._id),this.props.name&&t.setAttribute("name",this.props.name),this.props.type,t.setAttribute("type",this.props.type||"text"),t.setAttribute("placeholder",this.state._placeholder),t.setAttribute("aria-labelledby",this.state._id+"-label"),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.required&&t.setAttribute("required",this.props.required),t.value=this.state._value,this.props.maxLength&&t.setAttribute("maxLength",this.props.maxLength),this.props.minLength&&t.setAttribute("minLength",this.props.minLength),this.props.pattern&&t.setAttribute("pattern",this.props.pattern),t.removeEventListener("input",this.onInputDbInput1Input),t.addEventListener("input",this.onInputDbInput1Input),t.removeEventListener("blur",this.onInputDbInput1Blur),t.addEventListener("blur",this.onInputDbInput1Blur),t.removeEventListener("focus",this.onInputDbInput1Focus),t.addEventListener("focus",this.onInputDbInput1Focus)}),this._root.querySelectorAll("[data-el='label-db-input-1']").forEach(t=>{t.setAttribute("for",this.state._id),t.setAttribute("id",this.state._id+"-label")}),this._root.querySelectorAll("[data-el='div-db-input-2']").forEach(t=>{this.renderTextNode(t,this.state._label)}),this._root.querySelectorAll("[data-el='show-db-input-3']").forEach(t=>{this.props.description&&this.showContent(t)}),this._root.querySelectorAll("[data-el='div-db-input-3']").forEach(t=>{this.renderTextNode(t,this.props.description)}),this._root.querySelectorAll("[data-el='show-db-input-4']").forEach(t=>{(this.props.variant||this.props.required||this.props.pattern)&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-2']").forEach(t=>{t.setAttribute("icon",this.state.getIcon(this.props.variant))}),this._root.querySelectorAll("[data-el='show-db-input-5']").forEach(t=>{this.props.iconAfter&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-3']").forEach(t=>{this.props.iconAfter&&t.setAttribute("icon",this.props.iconAfter)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-input",v);class S extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBButton-component']")}get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/button/button.css",handleClick(e){t.props.onClick&&t.props.onClick(e)}},this.props||(this.props={}),this.componentProps=["onClick","type","disabled","text","className","icon","icntxt","size","state","width","variant","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onButtonDbButton1Click=e=>{this.state.handleClick(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <button data-el="button-db-button-1" data-ref="DBButton-component">
        <template data-el="show-db-button">
          <link rel="stylesheet" data-el="link-db-button-1" />
        </template>
      
        <db-icon data-el="db-icon-db-button"></db-icon>
      
        <slot></slot>
      </button>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return["text","variant","icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='button-db-button-1']").forEach(t=>{this.props.type&&t.setAttribute("type",this.props.type),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.text&&t.setAttribute("aria-label",this.props.text),t.className="db-button"+(this.props.className?" "+this.props.className:"")+(this.props.icon&&!this.props.icntxt?" is-icon-text-replace":""),this.props.size&&t.setAttribute("data-size",this.props.size),this.props.state&&t.setAttribute("data-state",this.props.state),this.props.width&&t.setAttribute("data-width",this.props.width),this.props.variant&&t.setAttribute("data-variant",this.props.variant),t.removeEventListener("click",this.onButtonDbButton1Click),t.addEventListener("click",this.onButtonDbButton1Click)}),this._root.querySelectorAll("[data-el='show-db-button']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-button-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='db-icon-db-button']").forEach(t=>{this.props.icon&&t.setAttribute("icon",this.props.icon),this.props.icntxt&&t.setAttribute("icntxt",this.props.icntxt)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-button",S);const T=()=>(window.addEventListener("load",()=>{const o=document.querySelector("#db-input"),t=document.querySelector("#db-button"),e=document.querySelector("#db-input-container");o&&(o.props.onChange=n=>{e.innerHTML=n.target.value}),t&&(t.props.onClick=()=>{alert(JSON.stringify({input:o.state._value}))})}),`
		<div class="form-container">
			<div>
				<form>
					<fieldset>
							<p>DbInput:</p>
							<db-input
								id="db-input"
								name="username"
								label="Textinput"
								placeholder="Placeholder"
								description="Description"
								iconBefore="edit"
							></db-input>
						<p>DbButton:</p>
						<db-button type="button" id="db-button" variant="primary">
							Hi from Showcase!
						</db-button>

					</fieldset>
				</form>
			</div>
			<div>
			<h2>Output</h2>
					<dl>
						<dt>inputs value</dt>
						<dd id="db-input-container">"No Input set"</dd>
					</dl>
			</div>
		</div>
	`),w=()=>(window.addEventListener("load",()=>{const o=document.querySelector("#select-variant"),t=Array.from(document.querySelectorAll("db-button"));o&&o.addEventListener("change",e=>{for(const n of t)n.setAttribute("variant",e.target.value)})}),`
	<div>
		<h1>Button</h1>
		<div class="button-container">
			<select id="select-variant">
				<option>primary</option>
				<option>secondary</option>
				<option>ghost</option>
				<option>tertiary</option>
			</select>

			<db-button>Test</db-button>
			<db-button disabled="true">Test</db-button>
			<db-button icon="account">Test</db-button>
			<db-button icon="account" disabled="true">Test</db-button>
			<db-button icon="account" icntxt="true">Test</db-button>
			<db-button
			icon="account"
			disabled="true"
			icntxt="true"
			>Test</db-button>
			<db-button state="loading">Test</db-button>
		</div>
	</div>`),m=()=>document.location.search.slice(1).split("&").filter(o=>(o==null?void 0:o.length)>0).reduce((o,t)=>{const e=t.split("=");return{...o,[e[0]]:e[1]}},{}),x=()=>(window.addEventListener("load",()=>{const o=m();["primary","secondary","success","critical","warning","information"].some(t=>t.includes(o.color??""))?document.querySelector("#backgroundWarning").style.display="block":document.querySelector("#backgroundWarning").style.display="none"}),`
	<div>
		<h1>Input</h1>

		<strong id="backgroundWarning">
			This background is not working with inputs! Please use light colors
			as background.
		</strong>
		<div class="input-container">
		<form>
			<db-input
			 description="This is a description"
			 label="Start train station"
			 placeholder="some text"
			 iconBefore="edit"
			 variant="critical"
			 value="hello"
			 name="testInput"
			></db-input>

			<db-input
			 description="Valid test"
			 label="With event"
			 placeholder="some text"
			 iconBefore="edit"
			 iconAfter="heart"
			 variant="warning"
			 id="input-expr-warning"
			 required="true"
			></db-input>
			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-expr-date"
			></db-input>

			<db-input
			 label="Start train station"
			 placeholder="some text"
			 iconAfter="heart"
			 id="input-reg"
			 required="true"
			 minLength="5"
			></db-input>
			<db-input
			 label="Start date"
			 placeholder="some text"
			 type="week"
			 id="input-reg-date"
			></db-input>

			<db-input
			 id="db-input-functional-1"
			 label="Start train station"
			 placeholder="some text"
			></db-input>
			<db-input
			 id="db-input-functional-2"
			 label="Textinput disabled"
			 placeholder="some text"
			 variant="information"
			 disabled="true"
			></db-input>

			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-func-date"
			></db-input>
			<db-button type="submit">Submit</db-button>
		</form>
		</div>
	</div>`),b={button:"/button",input:"/input"},c=[{path:"/",label:"Home",component:T},{path:b.button,label:"Button",component:w},{path:b.input,label:"Input",component:x}];class C extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBPage-component']")}get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/page/page.css"},this.props||(this.props={}),this.componentProps=["className","type","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-page-1" data-ref="DBPage-component">
        <template data-el="show-db-page">
          <link rel="stylesheet" data-el="link-db-page-1" />
        </template>
      
        <slot name="header"></slot>
      
        <main class="db-main"><slot></slot></main>
      
        <slot name="footer"></slot>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-page-1']").forEach(t=>{t.className="db-page"+(this.props.className?" "+this.props.className:"")+(this.props.type==="fixedHeaderFooter"?" fixed-header-footer":"")}),this._root.querySelectorAll("[data-el='show-db-page']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-page-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-page",C);class I extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBHeader-component']")}get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/header/header.css"},this.props||(this.props={}),this.componentProps=["className","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <header
        role="banner"
        data-el="header-db-header-1"
        data-ref="DBHeader-component"
      >
        <template data-el="show-db-header">
          <link rel="stylesheet" data-el="link-db-header-1" />
        </template>
      
        <slot name="brand"></slot>
      
        <div class="desktop-navigation">
          <slot name="desktop-navigation"></slot>
        </div>
      
        <div class="mobile-navigation">
          <slot name="mobile-navigation"></slot>
        </div>
      
        <div class="meta-navigation">
          <slot name="meta-navigation"></slot>
        </div>
      
        <slot></slot>
      </header>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='header-db-header-1']").forEach(t=>{t.className="db-header"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-header']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-header-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-header",I);const a={anchorRef:"/",src:"./assets/images/db_logo.svg"};class P extends HTMLElement{get _component(){return this._root.querySelector("[data-ref='DBBrand-component']")}get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/brand/brand.css"},this.props||(this.props={}),this.componentProps=["className","anchorRef","anchorTitle","anchorRelation","hideDefaultAsset","imgSrc","imgAlt","imgHeight","imgWidth","anchorChildren","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),n=new RegExp(e,"i");this.componentProps.forEach(s=>{if(n.test(s)){const i=this.getAttribute(t);this.props[s]!==i&&(this.props[s]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-brand-1" data-ref="DBBrand-component">
        <template data-el="show-db-brand">
          <link rel="stylesheet" data-el="link-db-brand-1" />
        </template>
      
        <a data-el="a-db-brand-1">
          <template data-el="show-db-brand-2">
            <img class="db-logo" data-el="img-db-brand-1" />
          </template>
      
          <template data-el="show-db-brand-3">
            <slot></slot>
          </template>
        </a>
      
        <template data-el="show-db-brand-4">
          <slot></slot>
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(s=>{t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),this.nodesToDestroy.push(s)}),t.after(e)}attributeChangedCallback(t,e,n){this.props[t]=n,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-brand-1']").forEach(t=>{t.className="db-brand"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-brand']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-brand-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='a-db-brand-1']").forEach(t=>{(this.props.anchorRef??a.anchorRef)&&t.setAttribute("href",this.props.anchorRef??a.anchorRef),this.props.anchorTitle&&t.setAttribute("title",this.props.anchorTitle),this.props.anchorRelation&&t.setAttribute("rel",this.props.anchorRelation)}),this._root.querySelectorAll("[data-el='show-db-brand-2']").forEach(t=>{!this.props.hideDefaultAsset&&this.showContent(t)}),this._root.querySelectorAll("[data-el='img-db-brand-1']").forEach(t=>{(this.props.imgSrc??a.src)&&t.setAttribute("src",this.props.imgSrc??a.src),this.props.imgAlt&&t.setAttribute("alt",this.props.imgAlt),this.props.imgHeight&&t.setAttribute("height",this.props.imgHeight),this.props.imgWidth&&t.setAttribute("width",this.props.imgWidth)}),this._root.querySelectorAll("[data-el='show-db-brand-3']").forEach(t=>{this.props.anchorChildren&&this.showContent(t)}),this._root.querySelectorAll("[data-el='show-db-brand-4']").forEach(t=>{!this.props.anchorChildren&&this.showContent(t)})}renderTextNode(t,e){const n=document.createTextNode(e);t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),t.after(n),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-brand",P);const g=(o,t)=>`db-ui-${o} db-bg-${t}`,f=(o,t,e)=>{t=encodeURIComponent(t),e=encodeURIComponent(e),o[t]=e;const n=Object.keys(o).map(s=>`${s}=${o[s]}`);document.location.search=n.join("&")};onload=()=>{const o=document.querySelector("#select-tonality"),t=document.querySelector("#select-color"),e=document.querySelector("#content"),n=m(),s=n.tonality??"regular",i=n.color??"neutral-0";e.className=g(s,i),o&&(o.value=s,o.addEventListener("change",r=>{f(n,"tonality",r.target.value)})),t&&(t.value=i,t.addEventListener("change",r=>{f(n,"color",r.target.value)}))};const D=o=>`
	<db-page type="fixedHeaderFooter">
		<db-header slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			<nav slot="desktop-navigation" class="desktop-navigation">
				<ul>
					${c.map(t=>`<li><a href=".${t.path}">${t.label}</a></li>`).join("")}
				</ul>
			</nav>
			<div slot="meta-navigation">
			<select id="select-tonality">
				<option>functional</option>
				<option>regular</option>
				<option>expressive</option>
			</select>
			<select id="select-color">
				<option>neutral-0</option>
				<option>neutral-1</option>
				<option>neutral-2</option>
				<option>neutral-3</option>
				<option>neutral-4</option>
				<option>neutral-5</option>
				<option>neutral-6</option>
				<option>neutral-transparent-full</option>
				<option>neutral-transparent-semi</option>
				<option>primary</option>
				<option>primary-light</option>
				<option>primary-transparent-semi</option>
				<option>secondary</option>
				<option>secondary-light</option>
				<option>secondary-transparent-semi</option>
				<option>success</option>
				<option>success-light</option>
				<option>success-transparent-semi</option>
				<option>critical</option>
				<option>critical-light</option>
				<option>critical-transparent-semi</option>
				<option>warning</option>
				<option>warning-light</option>
				<option>warning-transparent-semi</option>
				<option>information</option>
				<option>information-light</option>
				<option>information-transparent-semi</option>
			</select>
			</div>
		</db-header>
			<div id="content" class="${g()}">
				${o}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`,U=()=>{const o=c.filter(t=>t.path!=="/").find(t=>window.location.href.includes(t.path));return o?o.component():c[0].component()};document.querySelector("#app").innerHTML=D(U());

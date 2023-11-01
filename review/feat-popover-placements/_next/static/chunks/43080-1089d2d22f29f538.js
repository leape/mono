"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43080],{43080:function(o,t,e){e.r(t),e.d(t,{CH:function(){return s},chCodeConfig:function(){return l},default:function(){return MDXContent}});var n=e(52322),r=e(45392),c=e(65854);let s={annotations:c.ds,Code:c.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function _createMdxContent(o){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...o.components};return s||_missingMdxReference("CH",!1),s.Code||_missingMdxReference("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(t.h2,{children:"HTML"}),"\n",(0,n.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,n.jsx)(t.h3,{children:"Use component"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use sub-navigations for mobile you need to add a ",(0,n.jsx)(t.code,{children:"eventListner:click"})," on the ",(0,n.jsx)(t.code,{children:"db-navigation-item-expand-button"}),". This eventListener should set ",(0,n.jsx)(t.code,{children:"aria-expanded"})," to ",(0,n.jsx)(t.code,{children:"true"})," for the ",(0,n.jsx)(t.code,{children:"button"}),". This will open a static overlay for mobile/tablet devices with your ",(0,n.jsx)(t.code,{children:"db-sub-navigation"}),". For desktop devices it works by default with ",(0,n.jsx)(t.code,{children:":hover"}),"."]}),"\n",(0,n.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["index.html"],active:"index.html",heightRatio:1},files:[{name:"index.html",focus:"",code:{lines:[{tokens:[{content:"<!-- index.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"...",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<body>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<!-- Only link	-->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	<li ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-navigation-item",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<a ",props:{style:{color:"#81A1C1"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"mypath",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"NavigationItem",props:{style:{color:"#D8DEE9FF"}}},{content:"</a>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</li>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"	<!-- With Sub-Navigation -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	<li ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-navigation-item",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<button ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-navigation-item-expand-button",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"aria-haspopup",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			Navi-Item 1",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		</button>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<menu ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"db-sub-navigation",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			<a ",props:{style:{color:"#81A1C1"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"mypath",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Sub-Navi-Item 1",props:{style:{color:"#D8DEE9FF"}}},{content:"</a>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			<a ",props:{style:{color:"#81A1C1"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"mypath",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Sub-Navi-Item 2",props:{style:{color:"#D8DEE9FF"}}},{content:"</a>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		</menu>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</li>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</body>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]})]})}function MDXContent(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(_createMdxContent,{...o})}):_createMdxContent(o)}function _missingMdxReference(o,t){throw Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
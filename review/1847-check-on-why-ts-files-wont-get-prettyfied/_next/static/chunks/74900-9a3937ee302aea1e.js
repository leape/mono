"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74900],{74900:function(o,t,e){e.r(t),e.d(t,{CH:function(){return s},chCodeConfig:function(){return l},default:function(){return a}});var n=e(52322),r=e(45392),c=e(65854);let s={annotations:c.ds,Code:c.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function p(o){let t={a:"a",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...o.components};return s||E("CH",!1),s.Code||E("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(t.h2,{children:"React"}),"\n",(0,n.jsxs)(t.p,{children:["For general installation and configuration look at the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,n.jsx)(t.h3,{children:"Use component"}),"\n",(0,n.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["App.tsx"],active:"App.tsx",heightRatio:1},files:[{name:"App.tsx",focus:"",code:{lines:[{tokens:[{content:"// App.tsx",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"useState ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"react",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"DBTextarea ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/react-components",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"const ",props:{style:{color:"#81A1C1"}}},{content:"App ",props:{style:{color:"#88C0D0"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"() ",props:{style:{color:"#ECEFF4"}}},{content:"=> ",props:{style:{color:"#81A1C1"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	const ",props:{style:{color:"#81A1C1"}}},{content:"[",props:{style:{color:"#ECEFF4"}}},{content:"textarea",props:{style:{color:"#D8DEE9"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"setTextarea",props:{style:{color:"#D8DEE9"}}},{content:"] ",props:{style:{color:"#ECEFF4"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"useState",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"default textarea",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	return",props:{style:{color:"#81A1C1"}}},{content:" (",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBTextarea",props:{style:{color:"#8FBCBB"}}}]},{tokens:[{content:"			label",props:{style:{color:"#8FBCBB"}}},{content:"=",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"Textarea Controlled",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			value",props:{style:{color:"#8FBCBB"}}},{content:"={",props:{style:{color:"#81A1C1"}}},{content:"textarea",props:{style:{color:"#D8DEE9"}}},{content:"}",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			onChange",props:{style:{color:"#8FBCBB"}}},{content:"={",props:{style:{color:"#81A1C1"}}},{content:"(",props:{style:{color:"#ECEFF4"}}},{content:"event",props:{style:{color:"#D8DEE9"}}},{content:") ",props:{style:{color:"#ECEFF4"}}},{content:"=> ",props:{style:{color:"#81A1C1"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"				setTextarea",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"event",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"target",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"value",props:{style:{color:"#D8DEE9"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			}",props:{style:{color:"#ECEFF4"}}},{content:"}",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		/>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	)",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"export default ",props:{style:{color:"#81A1C1"}}},{content:"App",props:{style:{color:"#D8DEE9"}}},{content:";",props:{style:{color:"#81A1C1"}}}]}],lang:"tsx"},annotations:[]}]})]})}function a(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}function E(o,t){throw Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
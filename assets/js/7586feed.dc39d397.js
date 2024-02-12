"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[9304],{5052:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(7624),s=n(2172);const o={},i="File locations",l={id:"faq/file-locations",title:"File locations",description:"Where are files stored?",source:"@site/docs/faq/file-locations.md",sourceDirName:"faq",slug:"/faq/file-locations",permalink:"/NETworkManager/docs/faq/file-locations",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/faq/file-locations.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FAQ",permalink:"/NETworkManager/docs/category/faq"},next:{title:"PowerShell with WSL",permalink:"/NETworkManager/docs/faq/powershell-wsl"}},d={},c=[{value:"Where are files stored?",id:"where-are-files-stored",level:2}];function a(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"file-locations",children:"File locations"}),"\n",(0,t.jsx)(r.h2,{id:"where-are-files-stored",children:"Where are files stored?"}),"\n",(0,t.jsxs)(r.p,{children:["The setup installs the application by default in the following path: ",(0,t.jsx)(r.code,{children:"%ProgramFiles%\\NETworkManager"})]}),"\n",(0,t.jsx)(r.p,{children:"You can run the archive and portable version from anywhere (e.g. USB stick, network share, etc.)."}),"\n",(0,t.jsx)(r.p,{children:"Profiles, settings and themes are stored in the following folders:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"File(s)"}),(0,t.jsx)(r.th,{children:"Setup or Archiv"}),(0,t.jsx)(r.th,{children:"Portable"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Profiles"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%UserProfile%\\Documents\\NETworkManager\\Profiles\\*"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"<APP_FOLDER>\\Profiles\\*"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Settings"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%UserProfile%\\Documents\\NETworkManager\\Settings\\*"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"<APP_FOLDER>\\Settings\\*"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Themes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"<APP_FOLDER>\\Themes\\*"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"<APP_FOLDER>\\Themes\\*"})})]})]})]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"It is recommended to backup the above files on a regular basis."})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"Use a cloud service like OneDrive or Nextcloud to sync the above folders with multiple devices or to use them as a backup."})}),"\n",(0,t.jsx)(r.p,{children:"In addition, some files and settings, as well as the cache, are stored in the following locations:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"File(s)"}),(0,t.jsx)(r.th,{children:"Setup, Archiv and Portable"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Local settings"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%LocalAppData%\\NETworkManager\\NETworkManager_Url_<RANDOM_STRING>\\*"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Log"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%LocalAppData%\\NETworkManager\\NETworkManager.log"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PowerShell profiles"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"HKCU:\\Console\\<PATH_OF_CONSOLE>"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PuTTY log"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%LocalAppData%\\NETworkManager\\PuTTY_Log\\*"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PuTTY profile"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"HKCU:\\Software\\SimonTatham\\PuTTY\\Sessions\\NETworkManager"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"WebConsole cache"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%LocalAppData%\\NETworkManager\\WebConsole_Cache\\*"})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>i});var t=n(1504);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
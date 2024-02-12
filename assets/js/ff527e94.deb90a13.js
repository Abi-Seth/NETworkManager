"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[864],{8676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(7624),a=t(2172);const s={sidebar_position:0},o="General",r={id:"settings/general",title:"General",description:"Show the following application on startup:",source:"@site/docs/settings/general.md",sourceDirName:"settings",slug:"/settings/general",permalink:"/NETworkManager/docs/settings/general",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/settings/general.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Settings",permalink:"/NETworkManager/docs/category/settings"},next:{title:"Window",permalink:"/NETworkManager/docs/settings/window"}},d={},l=[{value:"Show the following application on startup:",id:"show-the-following-application-on-startup",level:3},{value:"Visible applications",id:"visible-applications",level:3},{value:"Hidden applications",id:"hidden-applications",level:3},{value:"Run background job every x-minutes",id:"run-background-job-every-x-minutes",level:3},{value:"Number of stored entries",id:"number-of-stored-entries",level:3},{value:"ThreadPool additional min. threads",id:"threadpool-additional-min-threads",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"show-the-following-application-on-startup",children:"Show the following application on startup:"}),"\n",(0,i.jsx)(n.p,{children:"Default application that is displayed when the application is launched."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"NETworkManager.Models.ApplicationName"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"Dashboard"})]}),"\n",(0,i.jsx)(n.h3,{id:"visible-applications",children:"Visible applications"}),"\n",(0,i.jsx)(n.p,{children:"Applications that are displayed in the bar."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"NETworkManager.Models.ApplicationName"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"All"})]}),"\n",(0,i.jsx)(n.h3,{id:"hidden-applications",children:"Hidden applications"}),"\n",(0,i.jsx)(n.p,{children:"Applications that are not displayed in the bar."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"NETworkManager.Models.ApplicationName"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"None"})]}),"\n",(0,i.jsx)(n.h3,{id:"run-background-job-every-x-minutes",children:"Run background job every x-minutes"}),"\n",(0,i.jsx)(n.p,{children:"Run a background job every x-minutes to save profiles and settings."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"Integer"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"5"})," [Min ",(0,i.jsx)(n.code,{children:"0"}),", Max ",(0,i.jsx)(n.code,{children:"120"}),"]"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The value 0 will disable the background job. Changes to this value will take effect after restarting the application."})}),"\n",(0,i.jsx)(n.h3,{id:"number-of-stored-entries",children:"Number of stored entries"}),"\n",(0,i.jsx)(n.p,{children:"Maximum number of entries stored in the history for several application inputs."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"Integer"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"5"})," [Min ",(0,i.jsx)(n.code,{children:"0"}),", Max ",(0,i.jsx)(n.code,{children:"25"}),"]"]}),"\n",(0,i.jsx)(n.h3,{id:"threadpool-additional-min-threads",children:"ThreadPool additional min. threads"}),"\n",(0,i.jsxs)(n.p,{children:["Additional ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.threading.threadpool.setminthreads?view=net-7.0",children:"minimum number of threads"})," of the applications ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool",children:"ThreadPool"})," that are created on demand, as new requests are made, before switching to an algorithm for managing thread creation and destruction. This can improve e.g. the IP scanner or port scanner. The value is added to the default settings."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"Integer"})]}),"\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"512"})," [Min ",(0,i.jsx)(n.code,{children:"0"}),", Max ",(0,i.jsx)(n.code,{children:"1024"}),"]"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The value 0 leaves the default settings (number of CPU threads). If the value is to high, performance problems may occur. If the value is higher than the max. threads of the ThreadPool, the max. threads will be used. Changes to this value will take effect after restarting the application. Wheter the value was set successfully can be seen in the log file under ",(0,i.jsx)(n.code,{children:"%LocalAppData%\\NETworkManager\\NETworkManager.log"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var i=t(1504);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
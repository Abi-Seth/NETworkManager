"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[1403],{6968:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(4848),t=o(8453);const r={sidebar_position:19},s="IP Geolocation",l={id:"application/ip-geolocation",title:"IP Geolocation",description:"With IP Geolocation you can retrieve geolocation information for a fully qualified domain name (FQDN) or a public IP address.",source:"@site/docs/application/ip-geolocation.md",sourceDirName:"application",slug:"/application/ip-geolocation",permalink:"/NETworkManager/docs/application/ip-geolocation",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/ip-geolocation.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"docsSidebar",previous:{title:"Whois",permalink:"/NETworkManager/docs/application/whois"},next:{title:"Subnet Calculator",permalink:"/NETworkManager/docs/application/subnet-calculator"}},a={},c=[{value:"Profile",id:"profile",level:2},{value:"Inherit host from general",id:"inherit-host-from-general",level:3},{value:"Host",id:"host",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ip-geolocation",children:"IP Geolocation"}),"\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.strong,{children:"IP Geolocation"})," you can retrieve geolocation information for a fully qualified domain name (FQDN) or a public IP address."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["IP geolocation data is provided by ",(0,i.jsx)(n.a,{href:"https://ip-api.com/",children:"ip-api.com"})," and the API endpoint ",(0,i.jsx)(n.code,{children:"http://ip-api.com/json/<host>"})," is queried when the information is requested. The free API endpoint is limited to 45 requests per minute, supports only the ",(0,i.jsx)(n.code,{children:"http"})," protocol and is available for non-commercial use only."]})}),"\n",(0,i.jsx)(n.p,{children:"Example inputs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"borntoberoot.net"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1.1.1.1"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPGeolocation",src:o(804).A+"",width:"1200",height:"800"})}),"\n",(0,i.jsx)(n.p,{children:"In addition, further actions can be performed using the buttons at the bottom right:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Export..."})," - Export the information to a CSV, XML or JSON file."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Right-click on the result to copy the information."})}),"\n",(0,i.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,i.jsx)(n.h3,{id:"inherit-host-from-general",children:"Inherit host from general"}),"\n",(0,i.jsx)(n.p,{children:"Inherit the host from the general settings."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If this option is enabled, the ",(0,i.jsx)(n.a,{href:"#host",children:"host"})," is overwritten by the host from the general settings and the ",(0,i.jsx)(n.a,{href:"#host",children:"host"})," is disabled."]})}),"\n",(0,i.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,i.jsx)(n.p,{children:"Host (FQDN or public IP address) to query for IP geolocation information."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"String"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"Empty"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"borntoberoot.net"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1.1.1.1"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},804:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/ip-geolocation-8fdfc5307da951530138dacc0680f65e.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var i=o(6540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
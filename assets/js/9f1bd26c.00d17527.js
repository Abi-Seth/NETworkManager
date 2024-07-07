"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[1484],{5860:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var n=i(4848),r=i(8453);const d={sidebar_position:0},o="Dashboard",t={id:"application/dashboard",title:"Dashboard",description:"The Dashboard shows the status of your computer's current network connection to get a quick overview of the most important information.",source:"@site/docs/application/dashboard.md",sourceDirName:"application",slug:"/application/dashboard",permalink:"/NETworkManager/docs/application/dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/dashboard.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Application",permalink:"/NETworkManager/docs/category/application"},next:{title:"Network Interface",permalink:"/NETworkManager/docs/application/network-interface"}},c={},l=[{value:"Settings",id:"settings",level:2},{value:"Public IPv4 address",id:"public-ipv4-address",level:3},{value:"Public IPv6 address",id:"public-ipv6-address",level:3},{value:"Check public IP address",id:"check-public-ip-address",level:3},{value:"Use custom IPv4 address API",id:"use-custom-ipv4-address-api",level:3},{value:"Use custom IPv6 address API",id:"use-custom-ipv6-address-api",level:3},{value:"Check IP geolocation",id:"check-ip-geolocation",level:3},{value:"Check DNS resolver",id:"check-dns-resolver",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"dashboard",children:"Dashboard"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Dashboard"})," shows the status of your computer's current network connection to get a quick overview of the most important information."]}),"\n",(0,n.jsx)(s.p,{children:"As soon as the status of the local network adapter changes (e.g. Ethernet cable is plugged in, WLAN or VPN is connected, etc.), the connection to the router and Internet is checked."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Dashboard",src:i(7136).A+"",width:"1200",height:"800"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["With ",(0,n.jsx)(s.code,{children:"F5"})," you can refresh the dashboard at any time. You may need to click into a widget first."]})}),"\n",(0,n.jsx)(s.h2,{id:"settings",children:"Settings"}),"\n",(0,n.jsx)(s.h3,{id:"public-ipv4-address",children:"Public IPv4 address"}),"\n",(0,n.jsx)(s.p,{children:"Public IPv4 address reachable via ICMP."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"String"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"1.1.1.1"})]}),"\n",(0,n.jsx)(s.h3,{id:"public-ipv6-address",children:"Public IPv6 address"}),"\n",(0,n.jsx)(s.p,{children:"Public IPv6 address reachable via ICMP."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"String"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"2606:4700:4700::1111"})]}),"\n",(0,n.jsx)(s.h3,{id:"check-public-ip-address",children:"Check public IP address"}),"\n",(0,n.jsxs)(s.p,{children:["Enables or disables the resolution of the public IP address via ",(0,n.jsx)(s.a,{href:"https://www.ipify.org/",children:(0,n.jsx)(s.code,{children:"api.ipify.org"})})," and ",(0,n.jsx)(s.a,{href:"https://www.ipify.org/",children:(0,n.jsx)(s.code,{children:"api6.ipify.org"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"Boolean"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"Enabled"})]}),"\n",(0,n.jsx)(s.h3,{id:"use-custom-ipv4-address-api",children:"Use custom IPv4 address API"}),"\n",(0,n.jsxs)(s.p,{children:["Override the default IPv4 address API to resolve the public IP address. The API should return only a plain text IPv4 address like ",(0,n.jsx)(s.code,{children:"xx.xx.xx.xx"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"Boolean | String"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"Disabled | Empty"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://api.ipify.org/",children:(0,n.jsx)(s.code,{children:"api.ipify.org"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://ip4.seeip.org/",children:(0,n.jsx)(s.code,{children:"ip4.seeip.org"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://api.my-ip.io/ip",children:(0,n.jsx)(s.code,{children:"api.my-ip.io/ip"})})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"use-custom-ipv6-address-api",children:"Use custom IPv6 address API"}),"\n",(0,n.jsxs)(s.p,{children:["Override the default IPv6 address API to resolve the public IP address. The API should return only a plain text IPv6 address like ",(0,n.jsx)(s.code,{children:"xxxx:xx:xxx::xx"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"Boolean | String"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"Disabled | Empty"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://api6.ipify.org/",children:(0,n.jsx)(s.code,{children:"api6.ipify.org"})})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"check-ip-geolocation",children:"Check IP geolocation"}),"\n",(0,n.jsxs)(s.p,{children:["Enables or disables the resolution of the IP geolocation via ",(0,n.jsx)(s.a,{href:"https://ip-api.com/",children:(0,n.jsx)(s.code,{children:"ip-api.com"})}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The free API endpoint is limited to 45 requests per minute, supports only the ",(0,n.jsx)(s.code,{children:"http"})," protocol and is available for non-commercial use only."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"Boolean"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"Enabled"})]}),"\n",(0,n.jsx)(s.h3,{id:"check-dns-resolver",children:"Check DNS resolver"}),"\n",(0,n.jsxs)(s.p,{children:["Enables or disables the resolution of the used DNS resolver via ",(0,n.jsx)(s.a,{href:"https://ip-api.com/",children:(0,n.jsx)(s.code,{children:"ip-api.com"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"Boolean"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"Enabled"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},7136:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/dashboard-38fe0b3b8d53e1e0add8975e90c1f917.png"},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>t});var n=i(6540);const r={},d=n.createContext(r);function o(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
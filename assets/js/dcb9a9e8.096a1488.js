"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[8190],{2636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"advanced-usage/linux-client","title":"Running the Client on Linux","description":"This page serves as a community-driven guide to assist you in setting up the GameVault client on Linux.","source":"@site/docs/advanced-usage/linux-client.md","sourceDirName":"advanced-usage","slug":"/advanced-usage/linux-client","permalink":"/docs/advanced-usage/linux-client","draft":false,"unlisted":false,"editUrl":"https://github.com/phalcode/gamevault-docs/tree/master/docs/advanced-usage/linux-client.md","tags":[],"version":"current","lastUpdatedBy":"Alper Alkan","lastUpdatedAt":1733103038000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Configuring Fail2Ban for GameVault","permalink":"/docs/advanced-usage/fail2ban-gamevault-guide"},"next":{"title":"Running the Client on Steamdeck","permalink":"/docs/advanced-usage/steamdeck"}}');var s=t(6070),a=t(8591);const l={},o="Running the Client on Linux",d={},c=[{value:"Getting the application",id:"getting-the-application",level:2},{value:"Setting up with Wine",id:"setting-up-with-wine",level:2},{value:"Setting up with Bottles",id:"setting-up-with-bottles",level:2},{value:"Updating the Client",id:"updating-the-client",level:2},{value:"Known issues",id:"known-issues",level:2}];function r(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"running-the-client-on-linux",children:"Running the Client on Linux"})}),"\n",(0,s.jsx)(n.p,{children:"This page serves as a community-driven guide to assist you in setting up the GameVault client on Linux."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Please note that running GameVault on Linux using this method is considered ",(0,s.jsx)(n.strong,{children:"unsupported"})," and ",(0,s.jsx)(n.strong,{children:"unrecommended"}),". It should only be utilized as a last resort when no other options are available."]})}),"\n",(0,s.jsx)(n.h2,{id:"getting-the-application",children:"Getting the application"}),"\n",(0,s.jsxs)(n.p,{children:["To start, you need the Application files. The simplest way to get them is explained ",(0,s.jsx)(n.a,{href:"/docs/client-docs/setup#option-1-obtain-pre-built-artifacts-from-github",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-with-wine",children:"Setting up with Wine"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install Wine and winetricks"}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"winetricks dotnetdesktop6"})," in a terminal"]}),"\n",(0,s.jsxs)(n.li,{children:["Launch ",(0,s.jsx)(n.code,{children:"gamevault.exe"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-with-bottles",children:"Setting up with Bottles"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"When using Bottles under flatpak, your data will be in the following directory:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"~/.var/app/com.usebottles.bottles/data/bottles/[YOUR BOTTLE NAME]"})}),(0,s.jsx)(n.p,{children:"Keep that in mind when unpacking games to install them."})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.a,{href:"https://usebottles.com/",children:"Bottles"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create a new bottle",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Creating a new Bottle",src:t(2029).A+"",width:"672",height:"559"})]}),"\n",(0,s.jsxs)(n.li,{children:["Inside your bottle click ",(0,s.jsx)(n.code,{children:"Dependencies"})," and install ",(0,s.jsx)(n.code,{children:"dotnetcoredesktop6"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{alt:"Configuring the .NET Core Dependency",src:t(656).A+"",width:"1920",height:"1042"})]}),"\n",(0,s.jsxs)(n.li,{children:["Go back to the main page for your bottle and press ",(0,s.jsx)(n.code,{children:"Run Executable..."})," and select ",(0,s.jsx)(n.code,{children:"gamevault.exe"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-client",children:"Updating the Client"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Since there is currently no auto-update functionality available (as mentioned in ",(0,s.jsx)(n.a,{href:"/docs/client-docs/updating-client#other-sources",children:"this link"}),"), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation."]})}),"\n",(0,s.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Text can look very broken if certain fonts are not installed on your system.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you're on Arch Linux, ",(0,s.jsx)(n.a,{href:"https://aur.archlinux.org/packages/ttf-ms-win11-auto",children:"this"})," AUR package fixes the issue."]}),"\n",(0,s.jsxs)(n.li,{children:["If you're on Debian, you could try to use ",(0,s.jsx)(n.a,{href:"https://packages.debian.org/ttf-mscorefonts-installer",children:"this"})," package. (untested)"]}),"\n",(0,s.jsxs)(n.li,{children:["Additionally - you can also try ",(0,s.jsx)(n.a,{href:"https://archive.org/details/windows-11-21h2-complete-font-collection",children:"this"})," and install it to your wine prefix's fonts folder ~/.wine/drive_c/windows/Fonts ; This works on the steamdeck"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},656:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dotnet-394a9ce8159950d1b64fc6831db7a59c.png"},2029:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/make_bottle-0aa58e120e66831b38d8c7cc6584b087.png"},8591:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(758);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
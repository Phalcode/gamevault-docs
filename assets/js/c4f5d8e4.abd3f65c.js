"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[2634],{7933:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var s=a(4480),i=a(3526),r=a(758);const o={features:"features_t9lD"},n=a.p+"assets/images/admin-0ad4037b89a248bffa4e939d647d326c.png",l=a.p+"assets/images/community-717286c80fce866c158ab595629a937a.png",c=a.p+"assets/images/game-45374cc5b999ec17b1ca3578f8ff926b.png",d=a.p+"assets/images/github-0cf1393534e30fd4eb2411670f3e9234.png",h=a.p+"assets/images/installation-318f17d2cf4b9f87ccafd406a2bdb009.png",m=a.p+"assets/images/library-afce4846b08b60cecca986a39b1fa331.png",u=a.p+"assets/medias/admin-3adfe380e11d3351a3ba7eb4e25ce685.mp4",p=a.p+"assets/medias/community-c59d264ef301a24c508f40a02340fd3c.mp4",g=a.p+"assets/medias/game-08b3dace3b1757584d3a82bab9bc7f93.mp4",f=a.p+"assets/medias/installation-b349635775bda338fd4babf0d8519e2c.mp4",x=a.p+"assets/medias/library-82c4106d4da1f0466e2995c53b6df7c0.mp4";var b=a(6070);const w=[{title:"\ud83c\udfae Browse Your Games",img:m,video:x,description:(0,b.jsx)(b.Fragment,{children:"Browse your server's beautifully organized library to download, install and play your collection of video games of all kinds!"})},{title:"\ud83d\udc6f Build Your Community",img:n,video:u,description:(0,b.jsx)(b.Fragment,{children:"Share your platform with your friends and family so they can enjoy your library, too. Administrate your users and games."})},{title:"\u23f1\ufe0f Track Your Progress",img:l,video:p,description:(0,b.jsx)(b.Fragment,{children:"See how long you or your friends have been playing a game, find out what they are and keep track of what you've already completed or abandoned."})},{title:"\ud83d\udd0e Automatic Metadata Enrichment",img:c,video:g,description:(0,b.jsx)(b.Fragment,{children:"GameVault automatically enriches your game with all the juicy information and and images from the largest video game database."})},{title:"\ud83d\udce6 Easy To Use",img:h,video:f,description:(0,b.jsxs)("div",{children:["There\u2019s no need to compile any code! The app is readily available in the"," ",(0,b.jsx)("a",{href:"https://www.microsoft.com/store/apps/9PCKDV76GL75",children:"Microsoft Store"}),". Plus, ","",(0,b.jsx)("a",{href:"/docs/client-docs/how-to-use.md#2-installing-the-game",children:"installing games"})," and ",(0,b.jsx)("a",{href:"/docs/server-docs/setup",children:"setting up a server"})," is equally straightforward!"]})},{title:"\ud83d\udc65 Join The Movement",img:d,description:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("a",{target:"_blank",href:"https://discord.gg/NEdNen2dSu",children:"Join our growing community"})," ",", star us on GitHub, or even ",(0,b.jsx)("a",{href:"/docs/contribute",children:"contribute"})," ","to our source-available project! Everyone can help!"]})}];function y(e){let{title:t,img:a,video:s,description:r}=e;return(0,b.jsxs)("div",{className:(0,i.A)("col col--4"),children:[(0,b.jsx)("div",{className:"text--center",children:s?(0,b.jsx)("video",{className:"w-full max-w-screen-sm rounded-xl",muted:!0,autoPlay:!0,controls:!0,loop:!0,src:s}):(0,b.jsx)("img",{className:"rounded-xl",alt:t,src:a})}),(0,b.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,b.jsx)("h3",{children:t}),(0,b.jsx)("p",{children:r})]})]})}function v(){return(0,b.jsx)("section",{className:o.features,children:(0,b.jsx)("div",{className:"container",children:(0,b.jsx)("div",{className:"row",children:w.map(((e,t)=>(0,b.jsx)(y,{...e},t)))})})})}var j=a(3385);const k=e=>{const t=location.search.match(e);return t&&t[2]||void 0},N=/[?&](ref|source|utm_source)=([^?&]+)/,E=/[?&](utm_campaign)=([^?&]+)/,V=/[?&](utm_medium)=([^?&]+)/,S=/[?&](utm_term)=([^?&]+)/,G=/[?&](utm_content)=([^?&]+)/,C=()=>void 0!==navigator.languages?navigator.languages[0]:navigator.language,D=()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},q=()=>document.referrer||void 0,O=()=>k(N),P=()=>k(V),L=()=>k(E),T=()=>k(S),R=()=>k(G),I=e=>{let t=location.pathname||"";if(e.hash){const e=location.hash.indexOf("?");t+=e>-1?location.hash.substring(0,e):location.hash}if(e.search){const e=location.hash.indexOf("?");t+=location.search||(e>-1?location.hash.substring(e):"")}return t},M={stop(){}};class A{constructor(e,t){this.projectID=e,this.options=t,this.pageData=null,this.pageViewsOptions=null,this.errorsOptions=null,this.perfStatsCollected=!1,this.activePage=null,this.errorListenerExists=!1,this.trackPathChange=this.trackPathChange.bind(this),this.heartbeat=this.heartbeat.bind(this),this.captureError=this.captureError.bind(this)}captureError(e){"number"==typeof this.errorsOptions?.sampleRate&&this.errorsOptions.sampleRate>Math.random()||this.submitError({filename:e.filename,lineno:e.lineno,colno:e.colno,name:e.error?.name||"Error",message:e.error?.message||e.message},!0)}trackErrors(e){return this.errorListenerExists||!this.canTrack()?M:(this.errorsOptions=e,window.addEventListener("error",this.captureError),this.errorListenerExists=!0,{stop:()=>{window.removeEventListener("error",this.captureError)}})}submitError(e,t){const a={pid:this.projectID},s={pg:this.activePage||I({hash:this.pageViewsOptions?.hash,search:this.pageViewsOptions?.search}),lc:C(),tz:D(),...e};if(t&&this.errorsOptions?.callback){const e=this.errorsOptions.callback(s);if(!1===e)return;e&&"object"==typeof e&&Object.assign(s,e)}Object.assign(s,a),this.sendRequest("error",s)}async track(e){if(!this.canTrack())return;const t={...e,pid:this.projectID,pg:this.activePage,lc:C(),tz:D(),ref:q(),so:O(),me:P(),ca:L(),te:T(),co:R()};await this.sendRequest("custom",t)}trackPageViews(e){if(!this.canTrack())return M;if(this.pageData)return this.pageData.actions;let t;this.pageViewsOptions=e,e?.unique||(t=setInterval(this.trackPathChange,2e3)),setTimeout(this.heartbeat,3e3);const a=setInterval(this.heartbeat,28e3),s=I({hash:e?.hash,search:e?.search});return this.pageData={path:s,actions:{stop:()=>{clearInterval(t),clearInterval(a)}}},this.trackPage(s,e?.unique),this.pageData.actions}getPerformanceStats(){if(!this.canTrack()||this.perfStatsCollected||!window.performance?.getEntriesByType)return{};const e=window.performance.getEntriesByType("navigation")[0];return e?(this.perfStatsCollected=!0,{dns:e.domainLookupEnd-e.domainLookupStart,tls:e.secureConnectionStart?e.requestStart-e.secureConnectionStart:0,conn:e.secureConnectionStart?e.secureConnectionStart-e.connectStart:e.connectEnd-e.connectStart,response:e.responseEnd-e.responseStart,render:e.domComplete-e.domContentLoadedEventEnd,dom_load:e.domContentLoadedEventEnd-e.responseEnd,page_load:e.loadEventStart,ttfb:e.responseStart-e.requestStart}):{}}heartbeat(){if(!this.pageViewsOptions?.heartbeatOnBackground&&"hidden"===document.visibilityState)return;const e={pid:this.projectID};this.sendRequest("hb",e)}trackPathChange(){if(!this.pageData)return;const e=I({hash:this.pageViewsOptions?.hash,search:this.pageViewsOptions?.search}),{path:t}=this.pageData;t!==e&&this.trackPage(e,!1)}trackPage(e,t=!1){if(!this.pageData)return;this.pageData.path=e;const a=this.getPerformanceStats();this.activePage=e,this.submitPageView({pg:e},t,a,!0)}submitPageView(e,t,a,s){const i={pid:this.projectID,perf:a,unique:t},r={lc:C(),tz:D(),ref:q(),so:O(),me:P(),ca:L(),te:T(),co:R(),...e};if(s&&this.pageViewsOptions?.callback){const e=this.pageViewsOptions.callback(r);if(!1===e)return;e&&"object"==typeof e&&Object.assign(r,e)}Object.assign(r,i),this.sendRequest("",r)}canTrack(){return!(this.options?.disabled||"undefined"==typeof window||this.options?.respectDNT&&"1"===window.navigator?.doNotTrack||!this.options?.devMode&&("localhost"===location?.hostname||"127.0.0.1"===location?.hostname||""===location?.hostname)||navigator?.webdriver)}async sendRequest(e,t){const a=this.options?.apiURL||"https://api.swetrix.com/log";await fetch(`${a}/${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}let _=null;function z(e){let{className:t,...a}=e;return(0,b.jsx)("div",{className:(0,i.A)("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t),...a})}var B=a(88);const H=[[{question:"Does GameVault combine my gaming platforms in one place?",answer:"No, GameVault is not for combining games from different platforms into one app. Rather, it's for managing your own gaming platform with your own game files hosted on your server."},{question:"Is GameVault open-source?",answer:"No, GameVault is source-available, meaning the code is open for you to explore and modify for personal use. However, you may not use it for commercial purposes."},{question:"Is GameVault a tool for piracy?",answer:"No, it isn't. GameVault is designed to manage legally obtained DRM-free games. While it can technically be used with illegally obtained games, we do not endorse or support piracy. We encourage users to comply with copyright laws. Unlawful use is strictly improper and unauthorized."}],[{question:"Does GameVault work with games from Steam, Epic Games, Microsoft, etc.?",answer:"Usually not. GameVault is made for games you own and only works with DRM-free games, either pure game files or installers. Most platforms use DRM, but there are exceptions like GOG and Humble Bundle that don\u2019t."},{question:"Is there a native client for Mac or Linux?",answer:"No, apart from emulation or community-maintained clients, there is currently no native Linux or Mac GameVault client application."},{question:"Does GameVault have anything to do with gambling?",answer:"No, absolutely not. There's just a gambling app with a similar name on the market. If you're struggling with gambling addiction, please seek help."}],[{question:"Does GameVault stream games?",answer:"No, GameVault has nothing to do with streaming. It's simply an app to organize and browse your game library in a Steam-like experience and share it with your community."},{question:"Does GameVault cost any money?",answer:"No, the core features of GameVault are and will always be free. However, we do offer a paid GameVault+ subscription for some additional extra features, which you can subscribe to if you'd like to continuously support our work."},{question:"What was the former name of GameVault?",answer:"The first rule of GameVault is: you do not talk about the former name of GameVault."}]];function F(){return(0,b.jsx)("section",{id:"faq","aria-labelledby":"faq-title",className:"relative overflow-hidden py-16",children:(0,b.jsxs)(z,{className:"relative",children:[(0,b.jsxs)("div",{className:"mx-auto lg:mx-0",children:[(0,b.jsx)("h2",{id:"faq-title",className:"font-display text-3xl tracking-tight sm:text-4xl",children:"Frequently asked questions"}),(0,b.jsxs)("p",{className:"mt-4 text-lg tracking-tight text-text-light",children:["If you can\u2019t find what you\u2019re looking for here, check out the"," ",(0,b.jsx)(B.A,{href:"https://gamevau.lt/docs/intro",children:"Docs"})," or contact us via"," ",(0,b.jsx)(B.A,{href:"https://discord.gg/NEdNen2dSu",children:"Discord"}),","," ",(0,b.jsx)(B.A,{href:"https://github.com/Phalcode/gamevault-app/discussions",children:"GitHub"}),", or ",(0,b.jsx)(B.A,{href:"mailto:contact@phalco.de",children:"Email"})]})]}),(0,b.jsx)("ul",{className:"list-none mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3",children:H.map(((e,t)=>(0,b.jsx)("li",{children:(0,b.jsx)("ul",{className:"list-none flex flex-col gap-y-8",children:e.map(((e,t)=>(0,b.jsxs)("li",{children:[(0,b.jsx)("h3",{className:"font-display text-lg leading-7",children:e.question}),(0,b.jsx)("p",{className:"mt-4 text-sm text-text-light",children:e.answer})]},t)))})},t)))})]})})}var K=a(2736),U=a.n(K);const J={solid:"group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 !no-underline",outline:"group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none"},W={solid:{primary:"bg-primary-default text-white hover:text-white hover:bg-primary-darker active:bg-primary-darkest focus-visible:outline-primary-darkest"}};function Y(e){let{className:t,...a}=e;a.variant??="solid",a.color??="primary";const s=(r=a.variant,o=a.color,"outline"===r?W.outline?.[o]:"solid"===r?W.solid?.[o]:void 0);var r,o;return t=(0,i.A)(J[a.variant],s,t),console.log(t),void 0===a.href?(0,b.jsx)("button",{className:t,...a}):(0,b.jsx)(B.A,{className:t,...a})}Y.propTypes={href:U().string,className:U().string,variant:U().oneOf(["solid","outline"]),color:U().oneOf(["primary"])};const Z=e=>{let{className:t,options:a,...s}=e;const[i,o]=(0,r.useState)(!1),n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=e=>{n.current&&!n.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,b.jsxs)("span",{ref:n,className:"relative inline-block text-left",children:[(0,b.jsx)(Y,{className:t+" w-full",...s,onClick:()=>o(!i)}),i&&(0,b.jsx)("div",{className:"absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-background-dark shadow-lg ring-1 ring-text-light",role:"menu","aria-orientation":"vertical",children:(0,b.jsx)("div",{className:"py-1",role:"none",children:a.map((e=>(0,b.jsx)(B.A,{href:e.link,target:"_blank",className:"font-bold hover:no-underline block px-4 py-2 text-sm hover:bg-background-default text-text-default","aria-label":e.label,children:e.label},e.label)))})})]})};Z.propTypes={className:U().string,options:U().arrayOf(U().shape({label:U().string.isRequired,link:U().string.isRequired})).isRequired};const $=Z;function Q(){const[e,t]=(0,r.useState)(!1);return(0,b.jsxs)(z,{className:"pb-16 pt-20 text-center",children:[(0,b.jsx)("button",{onClick:()=>{e||(t(!e),setTimeout((()=>t(!1)),1e3))},children:(0,b.jsx)("img",{src:"/img/logo.png",className:"h-48 nozoom cursor-pointer "+(e?"animate-spin":""),alt:"Logo"})}),(0,b.jsxs)("h1",{className:"mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl",children:["Create"," ",(0,b.jsxs)("span",{className:"relative whitespace-nowrap text-primary-darker",children:[(0,b.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 418 42",className:"absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-default opacity-30",preserveAspectRatio:"none",children:(0,b.jsx)("path",{d:"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"})}),(0,b.jsx)("span",{className:"relative",children:"your own"})]}),(0,b.jsx)("br",{}),"gaming platform."]}),(0,b.jsxs)("p",{className:"mx-auto mt-6 max-w-2xl text-lg tracking-tight text-text-light",children:["Hoarding video games is fun, but a chaotic list of files on a network share is not. ",(0,b.jsx)("br",{})," Let GameVault organize everything for you and enjoy a selfhosted Steam-like experience for games on your own home server."]}),(0,b.jsxs)("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto",children:[(0,b.jsx)(Y,{href:"/docs/intro",children:"Learn more"}),(0,b.jsxs)($,{options:[{label:"Microsoft Store",link:"https://www.microsoft.com/store/apps/9PCKDV76GL75"},{label:"GitHub",link:"https://github.com/Phalcode/gamevault-app/releases"}],children:["Download Client"," ",(0,b.jsx)("svg",{className:"-mr-1 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",children:(0,b.jsx)("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})]})]})]})}function X(){var e,t;e="K6k7j6GHClhh",_||(_=new A(e,t)),function(e){new Promise((t=>{_?"undefined"==typeof document||"complete"===document.readyState?t(_.trackPageViews(e)):window.addEventListener("load",(()=>{t(_.trackPageViews(e))})):t(M)}))}();const{siteConfig:a}=(0,s.A)();return(0,b.jsxs)(j.A,{title:`${a.title}`,description:"the self-hosted gaming platform for drm-free games",children:[(0,b.jsx)("noscript",{children:(0,b.jsx)("img",{src:"https://api.swetrix.com/log/noscript?pid=K6k7j6GHClhh",alt:""})}),(0,b.jsxs)("main",{children:[(0,b.jsx)("section",{className:"bg-background-dark",children:(0,b.jsx)(Q,{})}),(0,b.jsx)("br",{}),(0,b.jsx)(z,{children:(0,b.jsx)(v,{})}),(0,b.jsx)(F,{}),(0,b.jsx)("p",{className:"text--center text-xs font-bolder tracking-tighter",children:"*In case you're wondering, all depicted games on this website are placeholders and not real"})]})]})}}}]);
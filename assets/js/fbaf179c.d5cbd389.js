"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[6490],{9241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});var n=a(797),i=a(6070),r=a(8591);const l={title:"Temporary Solution to RAWG Woes, IGDB Partnership, and Exciting New Features!",authors:["alfagun74"],tags:["game","metadata","database","videogame","RAWG","IGDB","twitch.tv","API","partnership","community","solution","Steam","backend","update","features","GameVault","GameVault+","easter egg"]},o=void 0,s={authorsImageUrls:[void 0]},u=[{value:"GameVault&#39;s new metadata provider strategy",id:"gamevaults-new-metadata-provider-strategy",level:2},{value:"Temporary solution: Implementing a RAWG replacement",id:"temporary-solution-implementing-a-rawg-replacement",level:2},{value:"Exciting new features",id:"exciting-new-features",level:2},{value:"Supporting GameVault",id:"supporting-gamevault",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Hey everyone!"}),"\n",(0,i.jsxs)(t.p,{children:["In our last post we mentioned the challenges we've been facing with the videogame metadata database we've been using, ",(0,i.jsx)(t.a,{href:"https://rawg.io/",children:"rawg.io"}),". Unfortunately, it's become an unmaintained abandonware, causing frequent downtime and issues like incorrect search results and registration problems.  The situation peaked on May 5th when the service went down completely for a day."]}),"\n",(0,i.jsx)(t.h2,{id:"gamevaults-new-metadata-provider-strategy",children:"GameVault's new metadata provider strategy"}),"\n",(0,i.jsx)(t.p,{children:"To address these issues, we're making significant changes to GameVault's metadata system. Our goal is to make GameVault metadata provider agnostic, allowing users to seamlessly plug in their preferred metadata provider."}),"\n",(0,i.jsx)(t.p,{children:"We're also excited to announce our official partnership with IGDB (twitch.tv), a trusted video game database. Going forward, GameVault will primarily use IGDB's APIs out of the box."}),"\n",(0,i.jsxs)(t.p,{children:["More details on our plans can be found in this ",(0,i.jsx)(t.a,{href:"https://github.com/Phalcode/gamevault-backend/issues/258",children:"GitHub ticket"}),". We also plan to continue supporting the use of your own API keys and other vendors."]}),"\n",(0,i.jsx)(t.p,{children:"However, as decided in our recent poll, we will be removing all support for RAWG."}),"\n",(0,i.jsx)(t.h2,{id:"temporary-solution-implementing-a-rawg-replacement",children:"Temporary solution: Implementing a RAWG replacement"}),"\n",(0,i.jsxs)(t.p,{children:["However, implementing these changes will take time, and we are both currently busy with work commitments and travel plans. So what happens if RAWG suddenly stops working while we're away? To address this concern, ",(0,i.jsx)(t.a,{href:"https://github.com/Toylerrr",children:"Toylerrr"}),", one of our most valuable community members, had a great idea. He began developing a solution that would be a drop-in replacement for RAWG. An application that mimicked the behavior of RAWG, but fetched data from Steam instead. All you have to do is replace the url in the ",(0,i.jsx)(t.code,{children:"RAWG_API_URL"})," environmental variable."]}),"\n",(0,i.jsxs)(t.p,{children:["We loved the idea and built on it. Introducing ",(0,i.jsx)(t.a,{href:"https://github.com/Phalcode/rawg-to-steam-redirect",children:"rawg-to-steam-redirect"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The link above explains how it works and how you can use it today."}),"\n",(0,i.jsx)(t.p,{children:"What we liked most about it is that it required minimal backend changes to integrate. We have already tested this solution on our 667 games server and it works great. The quality of box art for example is much better. One drawback is that Steam does not have a lot of tags in its API."}),"\n",(0,i.jsxs)(t.p,{children:["While ",(0,i.jsx)(t.code,{children:"https://api.rawg.io/api"})," will remain the default ",(0,i.jsx)(t.code,{children:"RAWG_API_URL"})," for now, you can switch between RAWG and the new solution at any time. Just make sure your GameVault backend is updated to at least v12.1.0."]}),"\n",(0,i.jsx)(t.h2,{id:"exciting-new-features",children:"Exciting new features"}),"\n",(0,i.jsx)(t.p,{children:"In addition to these changes, we're excited to introduce you to some new features that were recently released:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\ud83d\udd16 Bookmarking Video Games:"})," You can now bookmark your favorite games within GameVault."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u23ef\ufe0f Download Management:"})," GameVault now supports pausing, auto-resuming, and resuming downloads."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\ud83d\udd12 Encrypted Archives:"})," GameVault now supports password protected archives."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We hope these updates will make your experience with GameVault even better as we move through this transition period."}),"\n",(0,i.jsx)(t.h2,{id:"supporting-gamevault",children:"Supporting GameVault"}),"\n",(0,i.jsx)(t.p,{children:"Finally, we want to thank all of you for making all of this possible. If you have not already done so, please consider upgrading to GameVault+ to flex with animated profile pictures on your server. We would really appreciate it. Bet you can't find the GameVault+ easter egg though... \ud83d\ude09"}),"\n",(0,i.jsx)(t.p,{children:"With love,"}),"\n",(0,i.jsx)(t.p,{children:"Phalcode"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8591:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var n=a(758);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}},797:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/05/07/","editUrl":"https://github.com/phalcode/gamevault-docs/tree/master/blog/2024-05-07.md","source":"@site/blog/2024-05-07.md","title":"Temporary Solution to RAWG Woes, IGDB Partnership, and Exciting New Features!","description":"Hey everyone!","date":"2024-05-07T00:00:00.000Z","tags":[{"inline":true,"label":"game","permalink":"/blog/tags/game"},{"inline":true,"label":"metadata","permalink":"/blog/tags/metadata"},{"inline":true,"label":"database","permalink":"/blog/tags/database"},{"inline":true,"label":"videogame","permalink":"/blog/tags/videogame"},{"inline":true,"label":"RAWG","permalink":"/blog/tags/rawg"},{"inline":true,"label":"IGDB","permalink":"/blog/tags/igdb"},{"inline":true,"label":"twitch.tv","permalink":"/blog/tags/twitch-tv"},{"inline":true,"label":"API","permalink":"/blog/tags/api"},{"inline":true,"label":"partnership","permalink":"/blog/tags/partnership"},{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"solution","permalink":"/blog/tags/solution"},{"inline":true,"label":"Steam","permalink":"/blog/tags/steam"},{"inline":true,"label":"backend","permalink":"/blog/tags/backend"},{"inline":true,"label":"update","permalink":"/blog/tags/update"},{"inline":true,"label":"features","permalink":"/blog/tags/features"},{"inline":true,"label":"GameVault","permalink":"/blog/tags/game-vault"},{"inline":true,"label":"GameVault+","permalink":"/blog/tags/game-vault"},{"inline":true,"label":"easter egg","permalink":"/blog/tags/easter-egg"}],"readingTime":2.525,"hasTruncateMarker":true,"authors":[{"name":"Alper Alkan","title":"Co-Founder of Phalcode","url":"https://github.com/Alfagun74","imageURL":"https://github.com/Alfagun74.png","key":"alfagun74","page":null}],"frontMatter":{"title":"Temporary Solution to RAWG Woes, IGDB Partnership, and Exciting New Features!","authors":["alfagun74"],"tags":["game","metadata","database","videogame","RAWG","IGDB","twitch.tv","API","partnership","community","solution","Steam","backend","update","features","GameVault","GameVault+","easter egg"]},"unlisted":false,"prevItem":{"title":"An update so major, we could have built the product from scratch.","permalink":"/blog/2024/10/20/"},"nextItem":{"title":"GameVault+ out now","permalink":"/blog/2024/04/14/"}}')}}]);
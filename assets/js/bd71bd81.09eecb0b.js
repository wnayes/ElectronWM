"use strict";(self.webpackChunk_electron_wm_docs=self.webpackChunk_electron_wm_docs||[]).push([[387],{6923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(5250),o=t(3274);const r={sidebar_position:3},a="Running",c={id:"getting-started/running",title:"Running",description:"After installation and configuration, you can run the window manager and try it",source:"@site/docs/getting-started/running.md",sourceDirName:"getting-started",slug:"/getting-started/running",permalink:"/electron-wm/getting-started/running",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/electron-wm/getting-started/configuration"}},s={},d=[{value:"Transparency",id:"transparency",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"running",children:"Running"}),"\n",(0,i.jsx)(n.p,{children:"After installation and configuration, you can run the window manager and try it\nout."}),"\n",(0,i.jsxs)(n.p,{children:["As with other X11 window managers, it is common to edit your ",(0,i.jsx)(n.code,{children:".xinitrc"}),"\nfile and add ",(0,i.jsx)(n.code,{children:"electron-wm"})," to the end, making it the last executable invoked\nwhen starting your X server."]}),"\n",(0,i.jsxs)(n.p,{children:["If your configuration package is in a non-default location, specify it via the\n",(0,i.jsx)(n.code,{children:"--config"})," command line parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"electron-wm --config ~/my-desktop-config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you omit ",(0,i.jsx)(n.code,{children:"--config"})," it is assumed that your configuration resides in the\n",(0,i.jsx)(n.code,{children:"electron-wm-config"})," folder that the init script creates by default."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"--config"}),' doesn\'t have to refer to a local folder. This can be any\n"package identifier" that Node.js can ',(0,i.jsx)(n.code,{children:"require"})," at runtime, provided you have\ninstalled the package. For example, if you want the vanilla react template that\nelectron-wm provides, you could ",(0,i.jsx)(n.code,{children:"npm i -g @electron-wm/react-config"})," and then\npass ",(0,i.jsx)(n.code,{children:"--config @electron-wm/react-config"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"transparency",children:"Transparency"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to have rounded frame window edges with transparency, try using an\nX11 compositor. The ",(0,i.jsx)(n.a,{href:"https://github.com/yshui/picom",children:"picom"})," compositor has been\nfound to work well."]}),"\n",(0,i.jsx)(n.p,{children:"As typical with X11 compositors, they are often ran before the WM itself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"picom &\nexec electron-wm\n"})}),"\n",(0,i.jsx)(n.p,{children:"Picom enables several effects by default (shadows, fading) which you may want to\ndisable via picom.conf."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3274:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(79);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
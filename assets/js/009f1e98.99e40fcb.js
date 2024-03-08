"use strict";(self.webpackChunk_bond_wm_docs=self.webpackChunk_bond_wm_docs||[]).push([[436],{902:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(5250),o=t(8805);const r={sidebar_position:2},s="Configuration",c={id:"getting-started/configuration",title:"Configuration",description:"Setting up bond-wm with your own configuration is the first step towards",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/bond-wm/getting-started/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/bond-wm/getting-started/installation"},next:{title:"Running",permalink:"/bond-wm/getting-started/running"}},a={},l=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Optional Git Branch Setup",id:"optional-git-branch-setup",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(e.p,{children:"Setting up bond-wm with your own configuration is the first step towards\ncustomizing your desktop."}),"\n",(0,i.jsx)(e.h2,{id:"quick-setup",children:"Quick Setup"}),"\n",(0,i.jsxs)(e.p,{children:["Use the following setup script to create a new bond-wm config. This script\nrequires a ",(0,i.jsx)(e.code,{children:"git"})," installation."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"npx @bond-wm/init\n"})}),"\n",(0,i.jsx)(e.p,{children:"What does this script do?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["It prompts you for a location to install the configuration.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The default is ",(0,i.jsx)(e.code,{children:"$XDG_CONFIG_HOME/bond-wm-config/"}),", which is typically ",(0,i.jsx)(e.code,{children:"~/.config/bond-wm-config/"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["It prompts you for a template to base your configuration from.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The only template available currently is ",(0,i.jsx)(e.code,{children:"react"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["It performs a ",(0,i.jsx)(e.code,{children:"git clone"})," of the template into the folder chosen earlier.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["For the ",(0,i.jsx)(e.code,{children:"react"})," template, you get a local clone of\n",(0,i.jsx)(e.code,{children:"https://github.com/wnayes/bond-wm/tree/react-config-release"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["At this point, you have a local git repository that configures bond-wm.\nYou'll want to ",(0,i.jsx)(e.a,{href:"./running",children:"get the window manager running"}),", but you're\notherwise free to start making tweaks inside the configuration."]}),"\n",(0,i.jsxs)(e.p,{children:["Be sure to perform an ",(0,i.jsx)(e.code,{children:"npm install"})," within the configuration folder to\nset up dependencies, and repeat any time after you make package.json changes."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"cd ~/.config/bond-wm-config\nnpm install\n"})}),"\n",(0,i.jsx)(e.h2,{id:"optional-git-branch-setup",children:"Optional Git Branch Setup"}),"\n",(0,i.jsx)(e.p,{children:"The working copy in the cloned repository branch is going to be compatible with\nthe latest release of bond-wm. When a new bond-wm release occurs in the\nfuture, it may coincide with upstream updates to the config template branch."}),"\n",(0,i.jsx)(e.p,{children:"To set yourself up to more easily accept future config updates, it is\nrecommended to create a new branch in the git repository."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"cd ~/.config/bond-wm-config\ngit checkout -b config-personal\n"})}),"\n",(0,i.jsx)(e.p,{children:"Then, as you customize your desktop, you can commit to this branch."}),"\n",(0,i.jsxs)(e.p,{children:["When you want to take upstream template changes, you can ",(0,i.jsx)(e.code,{children:"git fetch"})," those and\nrebase your branch, addressing any merge conflicts as needed."]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8805:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var i=t(79);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
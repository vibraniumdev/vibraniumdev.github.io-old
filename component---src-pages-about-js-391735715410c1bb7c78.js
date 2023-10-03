"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[682],{3508:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(4938)),i=n(5893),r=(0,a.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=r},4938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(2112)},2112:function(e,t,n){n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return r.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return d.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return m},setRef:function(){return h},unstable_ClassNameGenerator:function(){return v},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return g},unsupportedProp:function(){return f},useControlled:function(){return y.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return w.Z},useIsFocusVisible:function(){return x.Z}});var o=n(7078),a=n(8216),i=n(9064).Z,r=n(5949),s=n(7144);var l=function(e,t){return()=>null},d=n(8502),c=n(8038),u=n(5340);n(7462);var m=function(e,t){return()=>null},h=n(7960).Z,p=n(8974),g=n(7579).Z;var f=function(e,t,n,o,a){return null},y=n(2893),b=n(2068),w=n(1705),x=n(3511);const v={configure:e=>{o.Z.configure(e)}}},8200:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var o=n(7294),a=n(5487),i=n(8183),r=n(4316);const s=(0,r.Z)("div",{target:"e1lz4zz02"})({name:"w6x6i4",styles:"margin:0 auto;max-width:860px;width:100%;padding:1.45rem 1.0875rem"}),l=(0,r.Z)("h3",{target:"e1lz4zz00"})({name:"vi3k3h",styles:"display:inline;transition:0.4s ease-out;margin-bottom:0;&.active{color:#6c757d;:after{transform:scaleX(1);}}:hover{color:#6c757d;transition:0.1s ease-in;:after{transform:scaleX(1);transform-origin:left;}}"});var d=n(3508),c=n(3366),u=n(7462),m=(n(9864),n(6010)),h=n(4780),p=n(3016),g=n(6122),f=n(8052),y=n(6067),b=n(577),w=n(2734),x=n(1705),v=n(1588),k=n(4867);function j(e){return(0,k.Z)("MuiCollapse",e)}(0,v.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var I=n(5893);const Z=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],S=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,u.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,u.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),M=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,u.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),R=(0,p.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,u.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),C=o.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiCollapse"}),{addEndListener:a,children:i,className:r,collapsedSize:s="0px",component:l,easing:d,in:p,onEnter:v,onEntered:k,onEntering:C,onExit:A,onExited:T,onExiting:E,orientation:L="vertical",style:P,timeout:z=y.x9.standard,TransitionComponent:B=f.ZP}=n,N=(0,c.Z)(n,Z),G=(0,u.Z)({},n,{orientation:L,collapsedSize:s}),D=(e=>{const{orientation:t,classes:n}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,h.Z)(o,j,n)})(G),W=(0,w.Z)(),F=o.useRef(),V=o.useRef(null),$=o.useRef(),O="number"==typeof s?`${s}px`:s,_="horizontal"===L,q=_?"width":"height";o.useEffect((()=>()=>{clearTimeout(F.current)}),[]);const H=o.useRef(null),J=(0,x.Z)(t,H),K=e=>t=>{if(e){const n=H.current;void 0===t?e(n):e(n,t)}},U=()=>V.current?V.current[_?"clientWidth":"clientHeight"]:0,X=K(((e,t)=>{V.current&&_&&(V.current.style.position="absolute"),e.style[q]=O,v&&v(e,t)})),Y=K(((e,t)=>{const n=U();V.current&&_&&(V.current.style.position="");const{duration:o,easing:a}=(0,b.C)({style:P,timeout:z,easing:d},{mode:"enter"});if("auto"===z){const t=W.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,$.current=t}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[q]=`${n}px`,e.style.transitionTimingFunction=a,C&&C(e,t)})),Q=K(((e,t)=>{e.style[q]="auto",k&&k(e,t)})),ee=K((e=>{e.style[q]=`${U()}px`,A&&A(e)})),te=K(T),ne=K((e=>{const t=U(),{duration:n,easing:o}=(0,b.C)({style:P,timeout:z,easing:d},{mode:"exit"});if("auto"===z){const n=W.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,$.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[q]=O,e.style.transitionTimingFunction=o,E&&E(e)}));return(0,I.jsx)(B,(0,u.Z)({in:p,onEnter:X,onEntered:Q,onEntering:Y,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===z&&(F.current=setTimeout(e,$.current||0)),a&&a(H.current,e)},nodeRef:H,timeout:"auto"===z?null:z},N,{children:(e,t)=>(0,I.jsx)(S,(0,u.Z)({as:l,className:(0,m.Z)(D.root,r,{entered:D.entered,exited:!p&&"0px"===O&&D.hidden}[e]),style:(0,u.Z)({[_?"minWidth":"minHeight"]:O},P),ownerState:(0,u.Z)({},G,{state:e}),ref:J},t,{children:(0,I.jsx)(M,{ownerState:(0,u.Z)({},G,{state:e}),className:D.wrapper,ref:V,children:(0,I.jsx)(R,{ownerState:(0,u.Z)({},G,{state:e}),className:D.wrapperInner,children:i})})}))}))}));C.muiSupportAuto=!0;var A=C,T=n(4680);var E=o.createContext({}),L=n(2893);function P(e){return(0,k.Z)("MuiAccordion",e)}var z=(0,v.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const B=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],N=(0,p.ZP)(T.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${z.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${z.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${z.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,u.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${z.expanded}`]:{margin:"16px 0"}})));var G=o.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiAccordion"}),{children:a,className:i,defaultExpanded:r=!1,disabled:s=!1,disableGutters:l=!1,expanded:d,onChange:p,square:f=!1,TransitionComponent:y=A,TransitionProps:b}=n,w=(0,c.Z)(n,B),[x,v]=(0,L.Z)({controlled:d,default:r,name:"Accordion",state:"expanded"}),k=o.useCallback((e=>{v(!x),p&&p(e,!x)}),[x,p,v]),[j,...Z]=o.Children.toArray(a),S=o.useMemo((()=>({expanded:x,disabled:s,disableGutters:l,toggle:k})),[x,s,l,k]),M=(0,u.Z)({},n,{square:f,disabled:s,disableGutters:l,expanded:x}),R=(e=>{const{classes:t,square:n,expanded:o,disabled:a,disableGutters:i}=e,r={root:["root",!n&&"rounded",o&&"expanded",a&&"disabled",!i&&"gutters"],region:["region"]};return(0,h.Z)(r,P,t)})(M);return(0,I.jsxs)(N,(0,u.Z)({className:(0,m.Z)(R.root,i),ref:t,ownerState:M,square:f},w,{children:[(0,I.jsx)(E.Provider,{value:S,children:j}),(0,I.jsx)(y,(0,u.Z)({in:x,timeout:"auto"},b,{children:(0,I.jsx)("div",{"aria-labelledby":j.props.id,id:j.props["aria-controls"],role:"region",className:R.region,children:Z})}))]}))})),D=n(6637);function W(e){return(0,k.Z)("MuiAccordionSummary",e)}var F=(0,v.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const V=["children","className","expandIcon","focusVisibleClassName","onClick"],$=(0,p.ZP)(D.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,u.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${F.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${F.expanded}`]:{minHeight:64}})})),O=(0,p.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,u.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{margin:"20px 0"}}))),_=(0,p.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{transform:"rotate(180deg)"}})));var q=o.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiAccordionSummary"}),{children:a,className:i,expandIcon:r,focusVisibleClassName:s,onClick:l}=n,d=(0,c.Z)(n,V),{disabled:p=!1,disableGutters:f,expanded:y,toggle:b}=o.useContext(E),w=(0,u.Z)({},n,{expanded:y,disabled:p,disableGutters:f}),x=(e=>{const{classes:t,expanded:n,disabled:o,disableGutters:a}=e,i={root:["root",n&&"expanded",o&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,h.Z)(i,W,t)})(w);return(0,I.jsxs)($,(0,u.Z)({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":y,className:(0,m.Z)(x.root,i),focusVisibleClassName:(0,m.Z)(x.focusVisible,s),onClick:e=>{b&&b(e),l&&l(e)},ref:t,ownerState:w},d,{children:[(0,I.jsx)(O,{className:x.content,ownerState:w,children:a}),r&&(0,I.jsx)(_,{className:x.expandIconWrapper,ownerState:w,children:r})]}))}));function H(e){return(0,k.Z)("MuiAccordionDetails",e)}(0,v.Z)("MuiAccordionDetails",["root"]);const J=["className"],K=(0,p.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var U=o.forwardRef((function(e,t){const n=(0,g.Z)({props:e,name:"MuiAccordionDetails"}),{className:o}=n,a=(0,c.Z)(n,J),i=n,r=(e=>{const{classes:t}=e;return(0,h.Z)({root:["root"]},H,t)})(i);return(0,I.jsx)(K,(0,u.Z)({className:(0,m.Z)(r.root,o),ref:t,ownerState:i},a))})),X=n(917);var Y=e=>{let{title:t,children:n,startsExpanded:o}=e;return(0,X.jsx)(G,{sx:{border:"none",boxShadow:"none",padding:"0"},defaultExpanded:o},(0,X.jsx)(q,{sx:{paddingLeft:"0"},expandIcon:(0,X.jsx)(d.Z,null)},(0,X.jsx)(l,null,t)),(0,X.jsx)(U,{sx:{padding:"0.5rem"}},n))};var Q=e=>{let{topicList:t}=e;return t.map((e=>{let{category:t,name:n,link:a,subcategory:i}=e;return(0,X.jsx)(o.Fragment,{key:n+"-"+Math.floor(100*Math.random())},(0,X.jsx)("ul",null,(0,X.jsx)("li",null,(0,X.jsx)("span",null,t),t&&(0,X.jsx)("span",null,": "),(0,X.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n)),i&&i.map((e=>{let{name:t,link:n}=e;return(0,X.jsx)("ul",{key:t+"-"+Math.floor(100*Math.random())},(0,X.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n},(0,X.jsx)("li",null,t)))}))))}))};const ee=[{name:"Strava",link:"https://www.strava.com/athletes/73219146"},{name:"Keybr",link:"https://www.keybr.com/profile/y450zlb"},{name:"TV Time",link:"https://www.tvtime.com/en/user/62634214/profile"}],te=[{name:"I'm left-handed"},{name:"I'm digital minimalist and a low-profile individual on the internet"},{name:"I'm always craving for ways to improve both my productivity and my privacy/security, and that influences all the choices I make when it comes to the software and hardware I use"},{name:"Even though I love to read, currently I stick to articles and papers instead of books most of the time. That started to happen after I joined the college. It seems like it's a common for undergraduate students to lose their interest — or simply their habit — of reading books."},{name:"Usually I don't watch movies and TV series. There are a few exceptions listed in TV Time (listed at the end of this page)"},{name:"I love writing just for the pleasure of it. I have tons of unfinished random essays, articles, poems. Some of them are already published, some are going to be when I finish building my Digital Garden"},{name:"I'm not much into literature, but my favorite writers are:",subcategory:[{name:"J.R.R. Tolkien (the writer who rules them all)"},{name:"João Guimarães Rosa (favorite brazilian writer)"},{name:"Fernando Pessoa (favorite poet)"}]},{name:"I'm agnostic/atheist"}],ne=[{name:"According to my mom, I taught myself to read before completing 4 years of age"},{name:"I'm also a self-taught english speaker"},{name:'When I was a kid, my favorite books were the Listel\'s Phone Directory (better known as the "Páginas Amarelas"), the Brazilian Portuguese dictionary, and the Portuguese-English dictionary'},{name:"My favorite videogames are the Metal Gear series"},{name:"I used to be an Android enthusiast from 2010 to 2020, when I switched to iOS just for the sake of trying. I used custom ROMs in almost all devices I owned during all that time. After giving iOS a try, I realized that the iPhone made me become a person person who pays less attention to — and spends less time with — the smartphone, which was the main goal. It's been a relief since then."},{name:"When I was a kid I was capable of read/write/pronounce words — and even sentences — backwards. Unfortunately it turned out to be a quite useless skill."}],oe=[{name:"I ride my bike every day, religiously "},{name:"I also like rollerblading and basketball, and someday I will try snowboard"}],ae=[{name:"My favorite artists are Dream Theater, Angra, Oficina G3, Pearl Jam, and Kendrick Lamar"},{name:"According to Last.fm, my favorite musical genres are Progressive Metal — plus its subgenres — and Hip hop/Rap. But I enjoy any kind of music, though. Really."},{name:"I can play decently about 10 different musical instruments."}],ie=[{name:"I'm a keyboard person. I use keyboard shortcuts for pretty everything in my workflow, including browsing the web"},{name:"I am a touch typist, averaging +70 WPM according to keybr"},{name:"I am a proud Linux user since 2011. In 2018 I bought a MacBook, and since then I switch between Arch Linux, macOS and Linux Mint. There is an text written in 2018, in the Articles section, about that journey. Another one coming out soon!"}],re=[{name:"Currently I am an undergraduate Linguistics student at UFSCar, the Federal University of São Carlos, one of the main universities in Brazil"},{name:"As a student, my topics of interest are Epistemology of Science, Theoretical Linguistics, mainly Generative Syntax, Formal Semantics, Analytic Philosophy, and Language Acquisition"},{name:"The COVID pandemics messed up with everyone's plans, including mine. My current status is 99% linguist because the only thing left for me to accomplish within college is to finish writing the final paper required to obtain my degree — also known as TCC"},{name:"Even though I love linguistics, and though I'm about to become a linguist, that field of study doesn't suits me anymore"}],se=[{category:"Primary Laptop",name:"Dell Inspiron 7572 (16GB RAM, 128GB SSD + 1TB HDD)",link:""},{category:"Secondary Laptop",name:"MacBook Air early-2015, 8GB RAM, 128GB",link:"https://support.apple.com/kb/SP714?viewlocale=pt_BR&locale=en_KW"},{category:"Mouse",name:"Logitech MX Anywhere 2S",link:"https://www.logitech.com/en-us/eol/mx-anywhere-2s-mouse.910-005132.html"},{category:"Keyboard",name:"Keychron K2 (Hot-Swappable) Wireless Mechanical Keyboard (Version 2)",link:"https://www.keychron.com/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard"},{category:"External Monitor",name:"Dell SE2216H, 21.5, 1920x1080",link:""},{category:"Headphones",name:"Edifier W820BT",link:"https://edifier.com.br/headphone-bluetooth-over-ear-edifier-w820bt.html"},{category:"Earphones",name:"KZ ZS10 PRO",link:"https://kz-audio.com/kz-zs10-pro.html"},{category:"Smartphone",name:"iPhone 11",link:"https://support.apple.com/kb/SP804?locale=pt_BR"}],le=[{category:"Main Operating System",name:"Linux Mint",link:"https://linuxmint.com/"},{category:"Secondary Operating System",name:"Arch Linux ",link:"https://archlinux.org/"},{category:"Fallback Operating System",name:"macOS Monterey",link:"https://www.apple.com/macos/monterey/"},{category:"Terminal",name:"Kitty",link:"https://sw.kovidgoyal.net/kitty/"},{category:"Shell",name:"Zsh",link:"https://www.zsh.org/"},{category:"Browser",name:"Mozilla Firefox",link:"https://www.mozilla.org/en-US/firefox/developer/",subcategory:[{name:"Vimium",link:"https://github.com/philc/vimium"},{name:"uBlock Origin",link:"https://github.com/gorhill/uBlock#ublock-origin"},{name:"React Developer Tools",link:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"},{name:"Auto Tab Discard",link:"https://add0n.com/tab-discard.html"},{name:"Bitwarden",link:"https://bitwarden.com/download/"},{name:"Clockify",link:"https://clockify.me/apps"},{name:"Multi-Account Containers",link:"https://github.com/mozilla/multi-account-containers#readme"},{name:"Tweak New Twitter",link:"https://github.com/insin/tweak-new-twitter/"}]},{category:"Note-taking",name:"Simplenote",link:"https://simplenote.com/"},{category:"Second Brain",name:"Notion",link:"https://www.notion.so/"},{category:"Code Editor",name:"Neovim (LunarVim)",link:"https://www.lunarvim.org/",subcategory:[{name:"Indent Blankline",link:"https://github.com/lukas-reineke/indent-blankline.nvim"},{name:"Onenord Theme",link:"https://github.com/rmehri01/onenord.nvim"},{name:"LunarVimColorschemes",link:"https://github.com/LunarVim/Colorschemes"},{name:"Everforest Theme",link:"https://github.com/sainnhe/everforest"},{name:"Dracula Theme",link:"https://github.com/Mofiqul/dracula.nvim"},{name:"Gruvbox Theme",link:"https://github.com/ellisonleao/gruvbox.nvim"},{name:"Persistence",link:"https://github.com/folke/persistence.nvim"},{name:"Surround",link:"https://github.com/tpope/vim-surround"}]},{category:"Main Font",name:"JetBrains Mono",link:"https://github.com/JetBrains/JetBrainsMono"},{category:"To-do Lists",name:"Todoist",link:"https://todoist.com/"},{category:"E-mail client",name:"Mailspring",link:"https://github.com/Foundry376/Mailspring"},{category:"Time-Tracking",name:"Clockify",link:"https://clockify.me/"},{category:"Pomodoro Timer",name:"Pomodone",link:"https://clockify.me/"},{category:"Journalling",name:"Journey",link:"https://journey.cloud/"},{category:"Read-it-later",name:"Pocket",link:"https://getpocket.com/@09bA4g02d817aT9840phY9cp3cT8d831b23Wa4oc5eY4d6AcU0927c1fN47xqb89?src=navbar"}];var de=()=>(0,X.jsx)(a.Z,null,(0,X.jsx)(i.Z,{title:"About",keywords:["javascript","programming","react","linguistics"]}),(0,X.jsx)(s,null,(0,X.jsx)("h1",null,"About Me"),(0,X.jsx)("h2",null,"Who I Am"),(0,X.jsx)(Y,{title:"Backstory"},(0,X.jsx)("p",null,"I've made my first steps into programming back in 2007, when I learned to build my first websites using HTML and CSS. But it was only in 2016 when I decided to study nonstop until I could call myself a programmer. I started learning Python, R, and Prolog in the college. Less than one year later, I was already doing undergraduate research on Natural Language Processing and Machine Learning, using mainly Python."),(0,X.jsx)("p",null,"One year later, instead of search for jobs within my main area of expertise (i.e. Linguistics), I took the harder path and got my first job as a developer: a Python Software Development Internship, more than 200km away from my college, in a financial market company named Vert Capital."," "),(0,X.jsx)("p",null,"I spent one year working and living in São Paulo city. I worked with amazing devs, learned a lot of new things — both code-related and industry-related —, met the amazing dev community in there, attended to talks, courses, conferences, and more. Some of them you can checkout here"," ",(0,X.jsx)("a",{href:"https://github.com/divertimentos/notes",target:"_blank",rel:"noopener noreferrer"},"in my public personal notes' repository.")," ","After that long year, I decided that it was the time to move back to São Carlos in order to finish my degree, and take the next important step in my career: to become a junior developer."),(0,X.jsx)("p",null,"After sending 30 CVs and being interviewed by 18 companies in three different cities, I received job offers from three of them. Decent ratio."),(0,X.jsx)("ol",null,(0,X.jsx)("li",null,"The first job, Junior Python Developer in a company that was offering less than my monthly expenses at the time;"),(0,X.jsx)("li",null,"the second, a decent-paying Fullstack React/Python job in a company needing a Python developer with both front-end and linguistics background. It was the perfect role for me. I accepted the offer with no time;"),(0,X.jsx)("li",null,"But the third was a job as a Computational Linguist intern."," ")),(0,X.jsx)("p",null,"Even though I already knew that I wanted to work with code, I had to make a strategic decision: Linguist jobs are rare, and that one was a once-in-a-lifetime opportunity that was being given to me, to not only work with the subject I studied fiercely for years, but to work alongside some of the best computational linguists out there. So I changed my mind in the last minute, and decided that I should postpone my career as a developer for exactly one year. No less, no more. And so it went."),(0,X.jsx)("p",null,"I can talk for hours about how Linguistics is one of the most interesting and intriguing sciences we've ever created, I can assure you. But let me be honest, that year taught me that I was 100% right when I decided to switch from a theoretical linguist to a dev, because that job simply wasn't for me."),(0,X.jsx)("p",null,"Lesson learned, it was time to become a software engineer for good. The wait didn't take long, fortunately. In August 2020, after completing 1 year at Redação Nota 1000, I joined Printi as a Junior Front-End Developer. I work there since then."),(0,X.jsx)("p",null,"Printi is one of the biggest online printing companies in Latin America. We dozens of talented people working from three different continents."),(0,X.jsx)("p",null,"Every day they give me the opportunity to improve my knowledge about front-end, and software engineering in general, as well as my english skills, teamwork, leadership, organisation, productivity, decision-making, autonomy, and much, much more.")),(0,X.jsx)(Y,{title:"Coding-Related"},(0,X.jsx)(Q,{topicList:ie})),(0,X.jsx)(Y,{title:"Nerdy/Geeky Facts"},(0,X.jsx)(Q,{topicList:ne})),(0,X.jsx)(Y,{title:"Music-Related"},(0,X.jsx)(Q,{topicList:ae})),(0,X.jsx)(Y,{title:"Fitness/Sports"},(0,X.jsx)(Q,{topicList:oe})),(0,X.jsx)(Y,{title:"Other Facts"},(0,X.jsx)(Q,{topicList:te})),(0,X.jsx)("br",null),(0,X.jsx)("br",null),(0,X.jsx)("h2",null,"What I Use"),(0,X.jsx)(Y,{title:"Gear"},(0,X.jsx)(Q,{topicList:se})),(0,X.jsx)(Y,{title:"Software"},(0,X.jsx)(Q,{topicList:le})),(0,X.jsx)("br",null),(0,X.jsx)("br",null),(0,X.jsx)("h2",null,"What I Study"),(0,X.jsx)(Y,{title:"Linguistics"},(0,X.jsx)(Q,{topicList:re})),(0,X.jsx)("br",null),(0,X.jsx)("h2",null,"What else"),(0,X.jsx)(Y,{startsExpanded:!0,title:"Other Links"},(0,X.jsx)(Q,{topicList:ee}))))}}]);
//# sourceMappingURL=component---src-pages-about-js-391735715410c1bb7c78.js.map
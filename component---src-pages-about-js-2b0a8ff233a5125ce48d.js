"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[682],{3508:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(4938)),a=n(5893),i=(0,o.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},4938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(2112)},2112:function(e,t,n){n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return d.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return f},unsupportedProp:function(){return g},useControlled:function(){return x.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return v.Z}});var r=n(7078),o=n(8216),a=n(9064).Z,i=n(5949),s=n(7144);var l=function(e,t){return()=>null},d=n(8502),c=n(8038),u=n(5340);n(7462);var p=function(e,t){return()=>null},m=n(7960).Z,h=n(8974),f=n(7579).Z;var g=function(e,t,n,r,o){return null},x=n(2893),y=n(2068),b=n(1705),v=n(3511);const w={configure:e=>{r.Z.configure(e)}}},1177:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(7294),o=n(5487),a=n(8183),i=n(4316),s=n(8836);const{palette:l}=s.r,d=(0,i.Z)("div",{target:"e1lz4zz03"})({name:"1up2s0m",styles:"margin:0 auto;max-width:768px;width:100%;padding:0.5rem"}),c=(0,i.Z)("div",{target:"e1lz4zz02"})({name:"1xh7yz7",styles:"justify-content:space-between;align-items:center;margin-bottom:2rem;padding:0.25rem"}),u=(0,i.Z)("h3",{target:"e1lz4zz01"})({name:"vi3k3h",styles:"display:inline;transition:0.4s ease-out;margin-bottom:0;&.active{color:#6c757d;:after{transform:scaleX(1);}}:hover{color:#6c757d;transition:0.1s ease-in;:after{transform:scaleX(1);transform-origin:left;}}"}),p=(0,i.Z)("h2",{target:"e1lz4zz00"})("color:",l.primary.main,";");var m=n(3508),h=n(3366),f=n(7462),g=(n(9864),n(6010)),x=n(4780),y=n(3016),b=n(6122),v=n(8052),w=n(6067),Z=n(577),j=n(2734),k=n(1705),S=n(1588),R=n(4867);function M(e){return(0,R.Z)("MuiCollapse",e)}(0,S.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var I=n(5893);const C=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],z=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,f.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,f.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),E=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,f.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),A=(0,y.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,f.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),N=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiCollapse"}),{addEndListener:o,children:a,className:i,collapsedSize:s="0px",component:l,easing:d,in:c,onEnter:u,onEntered:p,onEntering:m,onExit:y,onExited:S,onExiting:R,orientation:N="vertical",style:P,timeout:T=w.x9.standard,TransitionComponent:W=v.ZP}=n,L=(0,h.Z)(n,C),$=(0,f.Z)({},n,{orientation:N,collapsedSize:s}),G=(e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,x.Z)(r,M,n)})($),F=(0,j.Z)(),D=r.useRef(),_=r.useRef(null),B=r.useRef(),V="number"==typeof s?`${s}px`:s,q="horizontal"===N,O=q?"width":"height";r.useEffect((()=>()=>{clearTimeout(D.current)}),[]);const H=r.useRef(null),K=(0,k.Z)(t,H),U=e=>t=>{if(e){const n=H.current;void 0===t?e(n):e(n,t)}},X=()=>_.current?_.current[q?"clientWidth":"clientHeight"]:0,Y=U(((e,t)=>{_.current&&q&&(_.current.style.position="absolute"),e.style[O]=V,u&&u(e,t)})),J=U(((e,t)=>{const n=X();_.current&&q&&(_.current.style.position="");const{duration:r,easing:o}=(0,Z.C)({style:P,timeout:T,easing:d},{mode:"enter"});if("auto"===T){const t=F.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,B.current=t}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[O]=`${n}px`,e.style.transitionTimingFunction=o,m&&m(e,t)})),Q=U(((e,t)=>{e.style[O]="auto",p&&p(e,t)})),ee=U((e=>{e.style[O]=`${X()}px`,y&&y(e)})),te=U(S),ne=U((e=>{const t=X(),{duration:n,easing:r}=(0,Z.C)({style:P,timeout:T,easing:d},{mode:"exit"});if("auto"===T){const n=F.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,B.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[O]=V,e.style.transitionTimingFunction=r,R&&R(e)}));return(0,I.jsx)(W,(0,f.Z)({in:c,onEnter:Y,onEntered:Q,onEntering:J,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===T&&(D.current=setTimeout(e,B.current||0)),o&&o(H.current,e)},nodeRef:H,timeout:"auto"===T?null:T},L,{children:(e,t)=>(0,I.jsx)(z,(0,f.Z)({as:l,className:(0,g.Z)(G.root,i,{entered:G.entered,exited:!c&&"0px"===V&&G.hidden}[e]),style:(0,f.Z)({[q?"minWidth":"minHeight"]:V},P),ownerState:(0,f.Z)({},$,{state:e}),ref:K},t,{children:(0,I.jsx)(E,{ownerState:(0,f.Z)({},$,{state:e}),className:G.wrapper,ref:_,children:(0,I.jsx)(A,{ownerState:(0,f.Z)({},$,{state:e}),className:G.wrapperInner,children:a})})}))}))}));N.muiSupportAuto=!0;var P=N,T=n(4680);var W=r.createContext({}),L=n(2893);function $(e){return(0,R.Z)("MuiAccordion",e)}var G=(0,S.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const F=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],D=(0,y.ZP)(T.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${G.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${G.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${G.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,f.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${G.expanded}`]:{margin:"16px 0"}})));var _=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordion"}),{children:o,className:a,defaultExpanded:i=!1,disabled:s=!1,disableGutters:l=!1,expanded:d,onChange:c,square:u=!1,TransitionComponent:p=P,TransitionProps:m}=n,y=(0,h.Z)(n,F),[v,w]=(0,L.Z)({controlled:d,default:i,name:"Accordion",state:"expanded"}),Z=r.useCallback((e=>{w(!v),c&&c(e,!v)}),[v,c,w]),[j,...k]=r.Children.toArray(o),S=r.useMemo((()=>({expanded:v,disabled:s,disableGutters:l,toggle:Z})),[v,s,l,Z]),R=(0,f.Z)({},n,{square:u,disabled:s,disableGutters:l,expanded:v}),M=(e=>{const{classes:t,square:n,expanded:r,disabled:o,disableGutters:a}=e,i={root:["root",!n&&"rounded",r&&"expanded",o&&"disabled",!a&&"gutters"],region:["region"]};return(0,x.Z)(i,$,t)})(R);return(0,I.jsxs)(D,(0,f.Z)({className:(0,g.Z)(M.root,a),ref:t,ownerState:R,square:u},y,{children:[(0,I.jsx)(W.Provider,{value:S,children:j}),(0,I.jsx)(p,(0,f.Z)({in:v,timeout:"auto"},m,{children:(0,I.jsx)("div",{"aria-labelledby":j.props.id,id:j.props["aria-controls"],role:"region",className:M.region,children:k})}))]}))})),B=n(6637);function V(e){return(0,R.Z)("MuiAccordionSummary",e)}var q=(0,S.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const O=["children","className","expandIcon","focusVisibleClassName","onClick"],H=(0,y.ZP)(B.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,f.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${q.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${q.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${q.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${q.expanded}`]:{minHeight:64}})})),K=(0,y.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,f.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${q.expanded}`]:{margin:"20px 0"}}))),U=(0,y.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${q.expanded}`]:{transform:"rotate(180deg)"}})));var X=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordionSummary"}),{children:o,className:a,expandIcon:i,focusVisibleClassName:s,onClick:l}=n,d=(0,h.Z)(n,O),{disabled:c=!1,disableGutters:u,expanded:p,toggle:m}=r.useContext(W),y=(0,f.Z)({},n,{expanded:p,disabled:c,disableGutters:u}),v=(e=>{const{classes:t,expanded:n,disabled:r,disableGutters:o}=e,a={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,x.Z)(a,V,t)})(y);return(0,I.jsxs)(H,(0,f.Z)({focusRipple:!1,disableRipple:!0,disabled:c,component:"div","aria-expanded":p,className:(0,g.Z)(v.root,a),focusVisibleClassName:(0,g.Z)(v.focusVisible,s),onClick:e=>{m&&m(e),l&&l(e)},ref:t,ownerState:y},d,{children:[(0,I.jsx)(K,{className:v.content,ownerState:y,children:o}),i&&(0,I.jsx)(U,{className:v.expandIconWrapper,ownerState:y,children:i})]}))}));function Y(e){return(0,R.Z)("MuiAccordionDetails",e)}(0,S.Z)("MuiAccordionDetails",["root"]);const J=["className"],Q=(0,y.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var ee=r.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordionDetails"}),{className:r}=n,o=(0,h.Z)(n,J),a=n,i=(e=>{const{classes:t}=e;return(0,x.Z)({root:["root"]},Y,t)})(a);return(0,I.jsx)(Q,(0,f.Z)({className:(0,g.Z)(i.root,r),ref:t,ownerState:a},o))})),te=n(245),ne=n(917);var re=e=>{let{title:t,children:n,startsExpanded:r}=e;return(0,ne.jsx)(_,{sx:{border:"none",boxShadow:"none",padding:"0"},defaultExpanded:r},(0,ne.jsx)(X,{sx:{paddingLeft:"0"},expandIcon:(0,ne.jsx)(m.Z,null)},(0,ne.jsx)(u,null,t)),(0,ne.jsx)(ee,{sx:{padding:"0"}},(0,ne.jsx)(te.Z,null,n)))};const oe=(0,i.Z)("a",{target:"e1rv8lyz1"})(""),ae=(0,i.Z)("ul",{target:"e1rv8lyz0"})({name:"1ykowef",styles:"margin-bottom:0"});var ie=e=>{let{topicList:t}=e;return t.map((e=>{let{category:t,name:n,link:o,subcategory:a}=e;return(0,ne.jsx)(r.Fragment,{key:n+"-"+Math.floor(100*Math.random())},(0,ne.jsx)(ae,null,(0,ne.jsx)("li",null,(0,ne.jsx)("span",null,t),t&&(0,ne.jsx)("span",null,": "),(0,ne.jsx)(oe,{href:o,target:"_blank",rel:"noopener noreferrer"},n)),a&&a.map((e=>{let{name:t,link:n}=e;return(0,ne.jsx)("ul",{key:t+"-"+Math.floor(100*Math.random())},(0,ne.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n},(0,ne.jsx)("li",null,t)))}))))}))};const se=[{name:"I am a keyboard-driven developer"},{name:"I am a touch typist"},{name:"I am a proud Linux user since 2011. Currently I switch between macOS and Linux"}],le=[{name:"According to my mom, I taught myself to read before I was 4 years old"},{name:"When I was a kid I was capable of read and write backwards. Unfortunately it turned out to be a quite useless skill"}],de=[{name:"My favorite musical genre is progressive metal"},{name:"I can play decently (i.e., poorly) about 10 different musical instruments"}],ce=[{category:"I ride my bike almost every day",name:"check out my Strava profile",link:"https://www.strava.com/athletes/73219146"},{name:"I also enjoy watching NBA"}],ue=[{name:"I'm left-handed"},{name:"I'm a digital minimalist"},{name:"Music is the only form of art I truly enjoy. I usually don't watch TV series or movies"}],pe=[{category:"Work Machine",name:"Dell Inspiron 7572",link:""},{category:"Personal Machine",name:"MacBook Air M2",link:"https://support.apple.com/kb/SP714?viewlocale=pt_BR&locale=en_KW"},{category:"Mouse",name:"Logitech MX Anywhere 2S",link:"https://www.logitech.com/en-us/eol/mx-anywhere-2s-mouse.910-005132.html"},{category:"Keyboard",name:"Keychron K2 (V2)",link:"https://www.keychron.com/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard"},{category:"Primary Headphone",name:"KZ ZS10 Pro X",link:"https://kz-audio.com/kz-zs10-pro-x.html"},{category:"Secondary Headphone",name:"Edifier W820BT",link:"https://edifier.com.br/headphone-bluetooth-over-ear-edifier-w820bt.html"}],me=[{category:"Main OS",name:"Fedora Workstation 39",link:"https://fedoraproject.org/workstation/"},{category:"Secondary OS",name:"macOS",link:"https://www.apple.com/macos/ventura/"},{category:"Code Editor",name:"Neovim",link:"https://www.lazyvim.org/"},{category:"Terminal Emulator",name:"Kitty",link:"https://sw.kovidgoyal.net/kitty/"},{category:"Browser",name:"Mozilla Firefox",link:"https://www.mozilla.org/en-US/firefox/developer/"},{category:"Note-taking",name:"Obsidian",link:"https://obsidian.md/"},{category:"To-do list app",name:"Todoist",link:"https://todoist.com/"},{category:"Journaling",name:"Journey",link:"https://journey.cloud/"},{category:"Read-it-later",name:"Pocket",link:"https://getpocket.com/@09bA4g02d817aT9840phY9cp3cT8d831b23Wa4oc5eY4d6AcU0927c1fN47xqb89?src=navbar"}],he=[{name:"As a linguist, my main interests are Generative Syntax and Formal Semantics"}];var fe=()=>{const e=(new Date).getFullYear()-2018-1,t=(new Date).getFullYear()-2020-1;return(0,ne.jsx)(o.Z,null,(0,ne.jsx)(a.Z,{title:"About",keywords:["javascript","programming","react","linguistics","frontend"]}),(0,ne.jsx)(d,null,(0,ne.jsx)(c,null,(0,ne.jsx)(p,null,"Who I Am"),(0,ne.jsx)(te.Z,null,"I am a software developer based in Brazil, and I have been working in the tech industry for about ",e," years, ",t," of which as a front-end developer. My ultimate goal is to improve people's lives around the globe through technology — and to try to make the World a better place using the resources we have at hand right now")),(0,ne.jsx)(c,null,(0,ne.jsx)(re,{title:"Coding-Related Facts"},(0,ne.jsx)(ie,{topicList:se})),(0,ne.jsx)(re,{title:"Nerdy Facts"},(0,ne.jsx)(ie,{topicList:le})),(0,ne.jsx)(re,{title:"Music Facts"},(0,ne.jsx)(ie,{topicList:de})),(0,ne.jsx)(re,{title:"Sports Facts"},(0,ne.jsx)(ie,{topicList:ce})),(0,ne.jsx)(re,{title:"Other Facts"},(0,ne.jsx)(ie,{topicList:ue})),(0,ne.jsx)("br",null),(0,ne.jsx)("br",null),(0,ne.jsx)(p,null,"What I Use"),(0,ne.jsx)(re,{title:"Gear"},(0,ne.jsx)(ie,{topicList:pe})),(0,ne.jsx)(re,{title:"Software"},(0,ne.jsx)(ie,{topicList:me})),(0,ne.jsx)("br",null),(0,ne.jsx)("br",null),(0,ne.jsx)(p,null,"What I Study"),(0,ne.jsx)(re,{title:"Linguistics"},(0,ne.jsx)(ie,{topicList:he})),(0,ne.jsx)("br",null))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-2b0a8ff233a5125ce48d.js.map
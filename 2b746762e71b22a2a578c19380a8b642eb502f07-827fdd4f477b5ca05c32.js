/*! For license information please see 2b746762e71b22a2a578c19380a8b642eb502f07-827fdd4f477b5ca05c32.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[476],{6808:function(e,t,r){"use strict";r.d(t,{b:function(){return o}});r(758);var n=r(8838);r(6070);function o(e){return(0,n.b)(e)}},8632:function(e,t,r){"use strict";const n=(0,r(1617).A)();t.A=n},2653:function(e,t){"use strict";t.A="$$material"},8865:function(e,t,r){"use strict";var n=r(3829);t.A=e=>(0,n.A)(e)&&"classes"!==e},3829:function(e,t){"use strict";t.A=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}},7461:function(e,t,r){"use strict";var n=r(3092),o=r(8632),s=r(2653),u=r(8865);const c=(0,n.Ay)({themeId:s.A,defaultTheme:o.A,rootShouldForwardProp:u.A});t.Ay=c},9949:function(e,t,r){"use strict";var n=r(4781);t.A=n.A},760:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});r(758);var n=r(5530),o=r(6070);function s(e){const{styles:t,defaultTheme:r={}}=e,s="function"==typeof t?e=>{return t(null==(n=e)||0===Object.keys(n).length?r:e);var n}:t;return(0,o.jsx)(n.Global,{styles:s})}},3577:function(e,t,r){"use strict";r.r(t),r.d(t,{GlobalStyles:function(){return l.A},StyledEngineProvider:function(){return f},ThemeContext:function(){return u.T},css:function(){return s.css},default:function(){return d},internal_processStyles:function(){return p},keyframes:function(){return s.keyframes}});var n=r(3168),o=(r(5976),r(758),r(8976),r(9410),n.A.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){o[e]=o(e)}));var s=r(5530),u=r(9142),c=r(8506),a=r(6070);let i;function f(e){const{injectFirst:t,children:r}=e;return t&&i?(0,a.jsx)(u.C,{value:i,children:r}):r}"object"==typeof document&&(i=(0,c.default)({key:"css",prepend:!0}));var l=r(760);function d(e,t){return o(e,t)}const p=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},3092:function(e,t,r){"use strict";var n=r(920);t.Ay=function(e={}){const{themeId:t,defaultTheme:r=y,rootShouldForwardProp:n=m,slotShouldForwardProp:a=m}=e,f=e=>(0,i.default)((0,o.default)({},e,{theme:b((0,o.default)({},e,{defaultTheme:r,themeId:t}))}));return f.__mui_systemSx=!0,(e,i={})=>{(0,u.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:l,slot:p,skipVariantsResolver:y,skipSx:_,overridesResolver:g=v(h(p))}=i,S=(0,s.default)(i,d),w=void 0!==y?y:p&&"Root"!==p&&"root"!==p||!1,k=_||!1;let j=m;"Root"===p||"root"===p?j=n:p?j=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(j=void 0);const O=(0,u.default)(e,(0,o.default)({shouldForwardProp:j,label:undefined},S)),x=e=>"function"==typeof e&&e.__emotion_real!==e||(0,c.isPlainObject)(e)?n=>A(e,(0,o.default)({},n,{theme:b({theme:n.theme,defaultTheme:r,themeId:t})})):e,P=(n,...s)=>{let u=x(n);const c=s?s.map(x):[];l&&g&&c.push((e=>{const n=b((0,o.default)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[l]||!n.components[l].styleOverrides)return null;const s=n.components[l].styleOverrides,u={};return Object.entries(s).forEach((([t,r])=>{u[t]=A(r,(0,o.default)({},e,{theme:n}))})),g(e,u)})),l&&!w&&c.push((e=>{var n;const s=b((0,o.default)({},e,{defaultTheme:r,themeId:t}));return A({variants:null==s||null==(n=s.components)||null==(n=n[l])?void 0:n.variants},(0,o.default)({},e,{theme:s}))})),k||c.push(f);const a=c.length-s.length;if(Array.isArray(n)&&a>0){const e=new Array(a).fill("");u=[...n,...e],u.raw=[...n.raw,...e]}const i=O(u,...c);return e.muiName&&(i.muiName=e.muiName),i};return O.withConfig&&(P.withConfig=O.withConfig),P}};var o=n(r(5976)),s=n(r(827)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=o?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(n,s,u):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(r(3577)),c=r(2313),a=(n(r(67)),n(r(5234)),n(r(5693))),i=n(r(2386));const f=["ownerState"],l=["variants"],d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function m(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const y=(0,a.default)(),h=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b({defaultTheme:e,theme:t,themeId:r}){return n=t,0===Object.keys(n).length?e:t[r]||t;var n}function v(e){return e?(t,r)=>r[e]:null}function A(e,t){let{ownerState:r}=t,n=(0,s.default)(t,f);const u="function"==typeof e?e((0,o.default)({ownerState:r},n)):e;if(Array.isArray(u))return u.flatMap((e=>A(e,(0,o.default)({ownerState:r},n))));if(u&&"object"==typeof u&&Array.isArray(u.variants)){const{variants:e=[]}=u;let t=(0,s.default)(u,l);return e.forEach((e=>{let s=!0;"function"==typeof e.props?s=e.props((0,o.default)({ownerState:r},n,r)):Object.keys(e.props).forEach((t=>{(null==r?void 0:r[t])!==e.props[t]&&n[t]!==e.props[t]&&(s=!1)})),s&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,o.default)({ownerState:r},n,r)):e.style))})),t}return u}},8838:function(e,t,r){"use strict";r.d(t,{b:function(){return c}});var n=r(758),o=r(8289),s=r(6070);const u=n.createContext(void 0);function c({props:e,name:t}){return function(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const s=t.components[r];return s.defaultProps?(0,o.A)(s.defaultProps,n):s.styleOverrides||s.variants?n:(0,o.A)(s,n)}({props:e,name:t,theme:{components:n.useContext(u)}})}t.A=function({value:e,children:t}){return(0,s.jsx)(u.Provider,{value:e,children:t})}},5693:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.A},private_createBreakpoints:function(){return o.A},unstable_applyStyles:function(){return s.A}});var n=r(2980),o=r(2165),s=r(1575)},7178:function(e,t,r){"use strict";r.d(t,{A:function(){return i}});var n=r(5890),o=r(5045),s=r(8635),u=r(2281);const c=["sx"],a=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:u.A;return Object.keys(e).forEach((t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n};function i(e){const{sx:t}=e,r=(0,o.A)(e,c),{systemProps:u,otherProps:i}=a(r);let f;return f=Array.isArray(t)?[u,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,s.Q)(r)?(0,n.A)({},u,r):u}:(0,n.A)({},u,t),(0,n.A)({},i,{sx:f})}},2386:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.A},extendSxProp:function(){return o.A},unstable_createStyleFunctionSx:function(){return n.k},unstable_defaultSxConfig:function(){return s.A}});var n=r(5260),o=r(7178),s=r(2281)},9109:function(e,t){"use strict";const r=e=>e,n=(()=>{let e=r;return{configure(t){e=t},generate(t){return e(t)},reset(){e=r}}})();t.A=n},67:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.A}});var n=r(4781)},8929:function(e,t,r){"use strict";function n(e,t,r=void 0){const n={};return Object.keys(e).forEach((o=>{n[o]=e[o].reduce(((e,n)=>{if(n){const o=t(n);""!==o&&e.push(o),r&&r[n]&&e.push(r[n])}return e}),[]).join(" ")})),n}r.d(t,{A:function(){return n}})},2313:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.A},isPlainObject:function(){return n.Q}});var n=r(8635)},3911:function(e,t,r){"use strict";r.d(t,{Ay:function(){return s}});var n=r(9109);const o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function s(e,t,r="Mui"){const s=o[t];return s?`${r}-${s}`:`${n.A.generate(e)}-${t}`}},3235:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});var n=r(3911);function o(e,t,r="Mui"){const o={};return t.forEach((t=>{o[t]=(0,n.Ay)(e,t,r)})),o}},5234:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a},getFunctionName:function(){return s}});var n=r(4276);const o=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function s(e){const t=`${e}`.match(o);return t&&t[1]||""}function u(e,t=""){return e.displayName||e.name||s(e)||t}function c(e,t,r){const n=u(t);return e.displayName||(""!==n?`${r}(${n})`:r)}function a(e){if(null!=e){if("string"==typeof e)return e;if("function"==typeof e)return u(e,"Component");if("object"==typeof e)switch(e.$$typeof){case n.ForwardRef:return c(e,e.render,"ForwardRef");case n.Memo:return c(e,e.type,"memo");default:return}}}},8289:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});var n=r(5890);function o(e,t){const r=(0,n.A)({},t);return Object.keys(e).forEach((s=>{if(s.toString().match(/^(components|slots)$/))r[s]=(0,n.A)({},e[s],r[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const u=e[s]||{},c=t[s];r[s]={},c&&Object.keys(c)?u&&Object.keys(u)?(r[s]=(0,n.A)({},c),Object.keys(u).forEach((e=>{r[s][e]=o(u[e],c[e])}))):r[s]=c:r[s]=u}else void 0===r[s]&&(r[s]=e[s])})),r}},6936:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),f=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case c:case u:case d:case p:return e;default:switch(e=e&&e.$$typeof){case f:case i:case l:case y:case m:case a:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference"),t.ForwardRef=l,t.Memo=m},4276:function(e,t,r){"use strict";e.exports=r(6936)},7462:function(e,t,r){"use strict";var n=r(758),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,s={},i=null,f=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:f,props:s,_owner:c.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},6070:function(e,t,r){"use strict";e.exports=r(7462)},827:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},3526:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}t.A=function(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}}}]);
//# sourceMappingURL=2b746762e71b22a2a578c19380a8b642eb502f07-827fdd4f477b5ca05c32.js.map
"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[512],{6784:function(e,t,r){r.d(t,{g:function(){return v}});var n=r(7107),a=r(5556),o=r.n(a),i=r(6540);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var m=["style"];var y=!1;try{y=!0}catch(O){}function g(e){return e&&"object"===f(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}var x=["forwardedRef"];function v(e){var t=e.forwardedRef,r=u(e,x),a=r.icon,o=r.mask,i=r.symbol,s=r.className,f=r.title,d=r.titleId,b=r.maskId,m=g(a),O=h("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,u=e.spinReverse,p=e.pulse,d=e.fixedWidth,b=e.inverse,m=e.border,y=e.listItem,g=e.flip,h=e.size,x=e.rotation,v=e.pull,j=(c(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":d,"fa-inverse":b,"fa-border":m,"fa-li":y,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(h),null!=h),c(t,"fa-rotate-".concat(x),null!=x&&0!==x),c(t,"fa-pull-".concat(v),null!=v),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map((function(e){return j[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),w=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=h("mask",g(o)),A=(0,n.icon)(m,l(l(l(l({},O),w),k),{},{symbol:i,title:f,titleId:d,maskId:b}));if(!A)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var P=A.abstract,I={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(I[e]=r[e])})),j(P[0],I)}v.displayName="FontAwesomeIcon",v.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,f=u(n,m);return o.attrs.style=l(l({},o.attrs.style),s),t.apply(void 0,[r.tag,l(l({},o.attrs),f)].concat(p(a)))}.bind(null,i.createElement)},8137:function(e,t,r){r.d(t,{A:function(){return d}});r(6540);var n=r(644),a=r(6763);const{palette:o}=a.w,i=(0,n.A)("div",{target:"e1xaj3mt3"})({name:"1nktz3g",styles:"padding:2rem 0;margin:0.5rem auto;width:90%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;@media (max-width: 700px){width:90%;grid-template-columns:3fr;}@media (min-width: 701px) and (max-width: 1000px){width:90%;grid-template-columns:2fr 2fr 2fr;}"}),s=(0,n.A)("a",{target:"e1xaj3mt2"})("text-decoration:none;padding:0.5rem;margin:0.5rem;background:",o.neutral.white,";overflow:hidden;box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.11);display:flex;flex-direction:column;justify-content:space-between;transition:0.25s;h4{color:",o.neutral.darker,";transition:0.25s;}p{opacity:0.75;transition:0.25s;}:hover{box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.31);transition:0.25s ease-in;div>svg,span,p{opacity:1;transition:0.25s;color:",o.neutral.darker,";}h4{transform:translate(1%);transition:0.25s;color:",o.neutral.pure,";}}"),l=(0,n.A)("div",{target:"e1xaj3mt1"})("padding:0.25rem;margin-bottom:0.25rem;h4,p{margin-bottom:0.5rem;height:max-content;color:",o.neutral.dark,";}"),f=(0,n.A)("div",{target:"e1xaj3mt0"})("padding:0.25rem;display:flex;align-items:center;justify-content:space-between;margin-bottom:0.25rem;div{color:",o.neutral.darker,";display:flex;flex-direction:row;&:first-of-type{margin-right:0.5rem;}.icon{margin:0;height:auto;color:",o.neutral.darker,";}span,svg{opacity:0.75;transition:0.25s;margin-left:0.5rem;font-size:0.75rem;}}");var c=r(6784),u=r(2630),p=r(7437);var d=e=>{let{reposList:t,isLoading:r}=e;return(0,p.jsx)(i,null,t&&!r&&t.map(((e,t)=>{let{name:r,description:n,language:a,html_url:o,stargazers_count:i,fork:d}=e;return(0,p.jsx)(s,{"aria-current":!0,rel:"noopener noreferrer",target:"_blank",href:o,key:t},(0,p.jsx)(l,null,d?(0,p.jsx)("h4",null,r," ",(0,p.jsx)("span",null,"(forked)")):(0,p.jsx)("h4",null,r),(0,p.jsx)("p",null,n)),(0,p.jsx)(f,null,(0,p.jsx)("div",null,(0,p.jsx)(c.g,{className:"icon",icon:u.jTw,size:"1x",fixedWidth:!0}),(0,p.jsx)("span",null,a)),(0,p.jsx)("div",null,(0,p.jsx)(c.g,{className:"icon",icon:u.yy,size:"1x",fixedWidth:!0}),(0,p.jsx)("span",null,i))))})))}}}]);
//# sourceMappingURL=94ffa1f53857763517897cc0221674d60d550405-c1e51e4135dddfebaf06.js.map
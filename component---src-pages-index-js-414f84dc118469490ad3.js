"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7606:function(t,e,r){r.d(e,{G:function(){return w}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var d=["style"];function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=b(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var h=!1;try{h=!0}catch(j){}function g(t){return t&&"object"===c(t)&&t.prefix&&t.iconName&&t.icon?t:n.parse.icon?n.parse.icon(t):null===t?null:t&&"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function x(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}var v=["forwardedRef"];function w(t){var e=t.forwardedRef,r=u(t,v),o=r.icon,a=r.mask,i=r.symbol,s=r.className,c=r.title,y=r.titleId,b=r.maskId,d=g(o),m=x("classes",[].concat(p(function(t){var e,r=t.beat,n=t.fade,o=t.beatFade,a=t.bounce,i=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,p=t.pulse,y=t.fixedWidth,b=t.inverse,d=t.border,m=t.listItem,h=t.flip,g=t.size,x=t.rotation,v=t.pull,w=(f(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":y,"fa-inverse":b,"fa-border":d,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(g),null!=g),f(e,"fa-rotate-".concat(x),null!=x&&0!==x),f(e,"fa-pull-".concat(v),null!=v),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(r)),p(s.split(" ")))),j=x("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=x("mask",g(a)),z=(0,n.icon)(d,l(l(l(l({},m),j),k),{},{symbol:i,title:c,titleId:y,maskId:b}));if(!z)return function(){var t;!h&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",d),null;var P=z.abstract,I={ref:e};return Object.keys(r).forEach((function(t){w.defaultProps.hasOwnProperty(t)||(I[t]=r[t])})),O(P[0],I)}w.displayName="FontAwesomeIcon",w.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var O=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=m(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[b(e)]=n}return t}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=u(n,d);return a.attrs.style=l(l({},a.attrs.style),s),e.apply(void 0,[r.tag,l(l({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},1250:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});r(7294);var n=r(5444),o=r(1008);var a=(0,o.Z)("div",{target:"e1ky1pz85"})({name:"1t2q54k",styles:"text-align:center;display:flex;justify-content:center;align-content:center"}),i=(0,o.Z)("div",{target:"e1ky1pz84"})({name:"cyvtod",styles:"display:flex;flex-direction:column;max-width:860px;width:100%;padding:1.45rem 1.0875rem"}),s=(0,o.Z)("div",{target:"e1ky1pz83"})({name:"46yi4d",styles:"font-size:2.5rem;width:100%;margin-bottom:1rem;padding:1.5rem 0;line-height:120%;text-align:center"}),l=(0,o.Z)("span",{target:"e1ky1pz82"})({name:"prw92t",styles:"color:#6c757d"}),c=(0,o.Z)("p",{target:"e1ky1pz81"})({name:"9m5j02",styles:"font-size:1.25rem;color:#6c757d;text-align:match-parent;padding:auto"}),f=r(3431),u=function(){return(0,f.jsx)(n.StaticQuery,{query:"2058310547",render:function(t){return(0,f.jsx)(a,null,(0,f.jsx)(i,null,(0,f.jsx)(s,null,t.site.siteMetadata.greeting,t.site.siteMetadata.title,(0,f.jsx)(l,null,t.site.siteMetadata.comma)),(0,f.jsx)(c,null,t.site.siteMetadata.subtitle)))}})},p=r(2684),y=r(6179),b=r(7606),d=r(7190);var m=(0,o.Z)("div",{target:"e2puxoz0"})({name:"13p0euw",styles:"display:flex;justify-content:center;flex-wrap:wrap;text-align:center;padding:1rem 0;svg{margin:0 1.25rem;padding:0;font-size:1.5rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),h=[{href:"https://www.linkedin.com/in/guiatf",icon:d.D9H},{href:"https://github.com/ggteixeira/",icon:d.zhw},{href:"https://dev.to/guiteixeira",icon:d.zOJ},{href:"https://medium.com/blacktech",icon:d.$tD},{href:"https://www.goodreads.com/guiemi",icon:d.ZjG},{href:"https://mastodon.com.br/@gui",icon:d.kyk},{href:"https://twitter.com/teixeiragg",icon:d.mdU},{href:"https://www.twitch.tv/guilhermestreams/",icon:d.z0T}],g=function(){return(0,f.jsx)(m,null,h.map((function(t){return(0,f.jsx)("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",key:t.icon+"-"+Math.floor(100*Math.random())},(0,f.jsx)(b.G,{icon:t.icon}))})))},x=function(){return(0,f.jsx)(p.Z,null,(0,f.jsx)(y.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,f.jsx)(u,null),(0,f.jsx)(g,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-414f84dc118469490ad3.js.map
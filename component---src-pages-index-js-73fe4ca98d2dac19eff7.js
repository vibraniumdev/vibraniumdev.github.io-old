"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7606:function(t,e,r){r.d(e,{G:function(){return O}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var m=["style"];function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=b(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var g=!1;try{g=!0}catch(k){}function h(t){return t&&"object"===c(t)&&t.prefix&&t.iconName&&t.icon?t:n.parse.icon?n.parse.icon(t):null===t?null:t&&"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function v(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}var w=["forwardedRef"];function O(t){var e=t.forwardedRef,r=u(t,w),o=r.icon,a=r.mask,i=r.symbol,l=r.className,c=r.title,y=r.titleId,b=h(o),m=v("classes",[].concat(p(function(t){var e,r=t.beat,n=t.fade,o=t.flash,a=t.spin,i=t.spinPulse,l=t.spinReverse,s=t.pulse,c=t.fixedWidth,u=t.inverse,p=t.border,y=t.listItem,b=t.flip,m=t.size,d=t.rotation,g=t.pull,h=(f(e={"fa-beat":r,"fa-fade":n,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":s,"fa-fw":c,"fa-inverse":u,"fa-border":p,"fa-li":y,"fa-flip-horizontal":"horizontal"===b||"both"===b,"fa-flip-vertical":"vertical"===b||"both"===b},"fa-".concat(m),null!=m),f(e,"fa-rotate-".concat(d),null!=d&&0!==d),f(e,"fa-pull-".concat(g),null!=g),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(h).map((function(t){return h[t]?t:null})).filter((function(t){return t}))}(r)),p(l.split(" ")))),d=v("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=v("mask",h(a)),Z=(0,n.icon)(b,s(s(s(s({},m),d),k),{},{symbol:i,title:c,titleId:y}));if(!Z)return function(){var t;!g&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",b),null;var j=Z.abstract,z={ref:e};return Object.keys(r).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(z[t]=r[t])})),x(j[0],z)}O.displayName="FontAwesomeIcon",O.propTypes={beat:a().bool,border:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=d(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[b(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=u(n,m);return a.attrs.style=s(s({},a.attrs.style),l),e.apply(void 0,[r.tag,s(s({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},1250:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});r(7294);var n=r(5444),o=r(6771);var a=(0,o.Z)("div",{target:"e1ky1pz84"})({name:"1azakc",styles:"text-align:center"}),i=(0,o.Z)("div",{target:"e1ky1pz83"})({name:"n8ur87",styles:"display:flex;align-items:center;justify-content:center;flex-direction:row"}),l=(0,o.Z)("p",{target:"e1ky1pz82"})({name:"132d2uz",styles:"padding:0;margin-bottom:1rem;font-size:1.4rem"}),s=(0,o.Z)("h1",{target:"e1ky1pz81"})({name:"1mwyjpy",styles:"font-size:3.5rem;margin-bottom:1.5rem"}),c=((0,o.Z)("p",{target:"e1ky1pz80"})({name:"1jwcxx3",styles:"font-style:italic"}),r(3431)),f=function(){return(0,c.tZ)(n.StaticQuery,{query:"3139552914",render:function(t){return(0,c.tZ)(i,null,(0,c.tZ)(a,null,(0,c.tZ)(s,null,t.site.siteMetadata.title),(0,c.tZ)(l,null,t.site.siteMetadata.subtitle)))}})},u=r(2684),p=r(6179),y=r(7606),b=r(7190);var m=(0,o.Z)("div",{target:"e2puxoz0"})({name:"13p0euw",styles:"display:flex;justify-content:center;flex-wrap:wrap;text-align:center;padding:1rem 0;svg{margin:0 1.25rem;padding:0;font-size:1.5rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),d=function(){return(0,c.tZ)(m,null,(0,c.tZ)("a",{href:"https://github.com/ggteixeira/",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.zhw})),(0,c.tZ)("a",{href:"https://www.twitch.tv/guilhermestreams/",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.z0T})),(0,c.tZ)("a",{href:"https://dev.to/guiteixeira",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.zOJ})),(0,c.tZ)("a",{href:"https://www.hackerrank.com/guiemi_teixeira",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.UgO})),(0,c.tZ)("a",{href:"https://www.linkedin.com/in/guiatf",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.D9H})),(0,c.tZ)("a",{href:"https://medium.com/blacktech",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(y.G,{icon:b.$tD})),(0,c.tZ)("a",{target:"_blank",rel:"me noopener noreferrer",href:"https://mastodon.com.br/@gui"},(0,c.tZ)(y.G,{icon:b.kyk})),(0,c.tZ)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.goodreads.com/guiemi"},(0,c.tZ)(y.G,{icon:b.ZjG})))},g=function(){return(0,c.tZ)(u.Z,null,(0,c.tZ)(p.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,c.tZ)(f,null),(0,c.tZ)(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-73fe4ca98d2dac19eff7.js.map
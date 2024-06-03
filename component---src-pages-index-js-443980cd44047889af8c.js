"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7814:function(e,t,r){r.d(t,{G:function(){return v}});var n=r(3636),o=r(5697),a=r.n(o),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var d=!1;try{d=!0}catch(k){}function g(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var x=["forwardedRef"];function v(e){var t=e.forwardedRef,r=u(e,x),o=r.icon,a=r.mask,i=r.symbol,s=r.className,c=r.title,b=r.titleId,m=r.maskId,y=g(o),k=h("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,b=e.fixedWidth,m=e.inverse,y=e.border,d=e.listItem,g=e.flip,h=e.size,x=e.rotation,v=e.pull,w=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":b,"fa-inverse":m,"fa-border":y,"fa-li":d,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(h),null!=h),f(t,"fa-rotate-".concat(x),null!=x&&0!==x),f(t,"fa-pull-".concat(v),null!=v),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),j=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),O=h("mask",g(a)),z=(0,n.icon)(y,l(l(l(l({},k),j),O),{},{symbol:i,title:c,titleId:b,maskId:m}));if(!z)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var P=z.abstract,A={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(A[e]=r[e])})),w(P[0],A)}v.displayName="FontAwesomeIcon",v.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=m(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=u(n,y);return a.attrs.style=l(l({},a.attrs.style),s),t.apply(void 0,[r.tag,l(l({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},8480:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});r(7294);var n=r(4854),o=r(4316);const a=(0,o.Z)("div",{target:"e1ky1pz86"})({name:"1bn6d0n",styles:"text-align:center;display:flex;justify-content:center;align-content:center;padding:1rem;margin-bottom:2rem"}),i=(0,o.Z)("div",{target:"e1ky1pz85"})({name:"1x5068p",styles:"display:flex;flex-direction:column;width:100%;padding:1rem"}),s=(0,o.Z)("span",{target:"e1ky1pz84"})({name:"u46kuk",styles:"align-self:center;font-size:2.5rem;margin-bottom:1rem;line-height:120%;text-align:center;max-width:768px;width:100%"}),l=(0,o.Z)("span",{target:"e1ky1pz83"})({name:"prw92t",styles:"color:#6c757d"}),c=(0,o.Z)("p",{target:"e1ky1pz82"})({name:"1ym3oa9",styles:"font-size:1.3rem;color:#6c757d;text-align:match-parent;padding:auto;align-self:center;margin-bottom:1rem;max-width:384px;width:100%"}),f=(0,o.Z)("span",{target:"e1ky1pz80"})({name:"185xsct",styles:"background:linear-gradient(\n    to left,\n    #333333 10%,\n    #6c757d 30%,\n    #6c757d 70%,\n    #333333 90%\n  );background-size:200% auto;background-clip:text;color:transparent;animation:before 2s ease-in-out 1;@keyframes before{from{background-position:-200% center;}to{background-position:0% center;}}&:hover{animation:shine 2s ease-in-out 1;@keyframes shine{from{background-position:200% center;}to{background-position:400%;}}}"});var u=r(917);var p=()=>(0,u.jsx)(n.StaticQuery,{query:"2058310547",render:e=>(0,u.jsx)(a,null,(0,u.jsx)(i,null,(0,u.jsx)(s,null,e.site.siteMetadata.greeting,e.site.siteMetadata.title,(0,u.jsx)(f,null,"Guilherme Teixeira"),(0,u.jsx)(l,null,e.site.siteMetadata.comma)),(0,u.jsx)(c,null,e.site.siteMetadata.subtitle)))}),b=r(5487),m=r(8183),y=r(7814),d=r(3024),g=r(1436);const h=(0,o.Z)("div",{target:"e2puxoz0"})({name:"1y4zek3",styles:"display:flex;justify-content:space-around;flex-wrap:wrap;align-content:center;align-items:center;width:calc(256px * 1.25);margin:0 auto;margin-bottom:1rem;text-align:center;padding:1rem 0;height:calc(100vh - 30rem);svg{font-size:1.75rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),x=[{href:"https://bsky.app/profile/guiteixeira.dev",icon:d.pqv},{href:"https://www.linkedin.com/in/guiatf",icon:d.D9H},{href:"https://github.com/ggteixeira/",icon:d.zhw},{href:"https://github.com/divertimentos/",icon:g.qxT},{href:"https://www.goodreads.com/guiemi",icon:d.ZjG},{href:"https://www.twitch.tv/guilhermestreams/",icon:d.z0T},{href:"https://www.strava.com/athletes/guiatf",icon:d.Ahb},{href:"https://www.last.fm/user/guirgo",icon:d.P0P}];var v=()=>(0,u.jsx)(h,null,x.map((e=>(0,u.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",key:e.icon+"-"+Math.floor(42*Math.random())},(0,u.jsx)(y.G,{icon:e.icon})))));var w=()=>(0,u.jsx)(b.Z,null,(0,u.jsx)(m.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,u.jsx)(p,null),(0,u.jsx)(v,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-443980cd44047889af8c.js.map
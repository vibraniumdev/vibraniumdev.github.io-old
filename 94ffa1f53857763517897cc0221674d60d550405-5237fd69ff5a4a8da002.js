/*! For license information please see 94ffa1f53857763517897cc0221674d60d550405-5237fd69ff5a4a8da002.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[657],{7606:function(t,e,r){"use strict";r.d(e,{G:function(){return w}});var n=r(4694),o=r(5697),i=r.n(o),a=r(7294);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var y=["style"];function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=d(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var v=!1;try{v=!0}catch(O){}function b(t){return t&&"object"===c(t)&&t.prefix&&t.iconName&&t.icon?t:n.parse.icon?n.parse.icon(t):null===t?null:t&&"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?u({},t,e):{}}var x=["forwardedRef"];function w(t){var e=t.forwardedRef,r=f(t,x),o=r.icon,i=r.mask,a=r.symbol,s=r.className,c=r.title,h=r.titleId,d=r.maskId,y=b(o),m=g("classes",[].concat(p(function(t){var e,r=t.beat,n=t.fade,o=t.beatFade,i=t.bounce,a=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,h=t.fixedWidth,d=t.inverse,y=t.border,m=t.listItem,v=t.flip,b=t.size,g=t.rotation,x=t.pull,w=(u(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":h,"fa-inverse":d,"fa-border":y,"fa-li":m,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(b),null!=b),u(e,"fa-rotate-".concat(g),null!=g&&0!==g),u(e,"fa-pull-".concat(x),null!=x),u(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(r)),p(s.split(" ")))),O=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=g("mask",b(i)),L=(0,n.icon)(y,l(l(l(l({},m),O),k),{},{symbol:a,title:c,titleId:h,maskId:d}));if(!L)return function(){var t;!v&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var _=L.abstract,E={ref:e};return Object.keys(r).forEach((function(t){w.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),j(_[0],E)}w.displayName="FontAwesomeIcon",w.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=m(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[d(e)]=n}return t}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,c=f(n,y);return i.attrs.style=l(l({},i.attrs.style),s),e.apply(void 0,[r.tag,l(l({},i.attrs),c)].concat(p(o)))}.bind(null,a.createElement)},382:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});r(7294);var n=r(1008);var o=(0,n.Z)("div",{target:"e1xaj3mt3"})({name:"2kwpyr",styles:"padding:2rem 0;max-width:1280px;margin:0.5rem auto;width:90%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;@media (max-width: 700px){width:90%;grid-template-columns:3fr;}@media (min-width: 701px) and (max-width: 1000px){width:90%;grid-template-columns:2fr 2fr;}"}),i=(0,n.Z)("a",{target:"e1xaj3mt2"})({name:"1j51llh",styles:"text-decoration:none;padding:0.5rem;margin:0.5rem;background:#fff;overflow:hidden;box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.11);h4{color:#212121;}p{color:#696969;}:hover{box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.31);transition-duration:0.2s;}"}),a=(0,n.Z)("div",{target:"e1xaj3mt1"})({name:"19sy9rz",styles:"padding:0.5rem 0.5rem 0 0.5rem;height:75%;h4,p{margin-bottom:0.5rem;height:max-content;}"}),s=(0,n.Z)("div",{target:"e1xaj3mt0"})({name:"1vd05cf",styles:"display:flex;align-items:center;justify-content:space-between;padding:0.5rem;height:25%;div{display:flex;flex-direction:row;&:first-child{margin-right:0.5rem;}h4{margin:0;}.icon{margin:0;height:auto;}span{color:#000;margin-left:0.5rem;margin:0.9rem;}}"}),l=r(7606),c=r(8014),u=r(3431),f=function(t){var e=t.reposList,r=t.isLoading;return(0,u.jsx)(o,null,e&&!r&&e.map((function(t,e){var r=t.name,n=t.description,o=t.language,f=t.html_url,p=t.stargazers_count,h=t.fork;return(0,u.jsx)(i,{"aria-current":!0,rel:"noopener noreferrer",target:"_blank",href:f,key:e},(0,u.jsx)(a,null,h?(0,u.jsx)("h4",null,r," ",(0,u.jsx)("span",null,"(forked)")):(0,u.jsx)("h4",null,r),(0,u.jsx)("p",null,n)),(0,u.jsx)(s,null,(0,u.jsx)("div",null,(0,u.jsx)(l.G,{className:"icon",icon:c.dT$,size:"1x",fixedWidth:!0}),(0,u.jsx)("span",null,o)),(0,u.jsx)("div",null,(0,u.jsx)(l.G,{className:"icon",icon:c.Tab,size:"1x",fixedWidth:!0}),(0,u.jsx)("span",null,p))))})))}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=p(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=f;var h={};function d(){}function y(){}function m(){}var v={};u(v,s,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(E([])));g&&g!==r&&i.call(g,s)&&(v=g);var x=m.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,s,l){var c=p(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,l)}))}l(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=m,u(x,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(j.prototype),u(j.prototype,l,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,c,"Generator"),u(x,s,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,l,"next",t)}function l(t){n(a,o,i,s,l,"throw",t)}s(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=94ffa1f53857763517897cc0221674d60d550405-5237fd69ff5a4a8da002.js.map
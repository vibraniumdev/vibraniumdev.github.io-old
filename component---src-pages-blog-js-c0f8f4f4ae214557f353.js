/*! For license information please see component---src-pages-blog-js-c0f8f4f4ae214557f353.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[7],{9650:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(5861),o=r(4687),i=r.n(o),a=r(7294),u=r(2684),c=r(6179),s=r(1008);var l=(0,s.Z)("div",{target:"e15ov6g25"})({name:"thxjb7",styles:"margin:0 auto;max-width:860px;padding:1.45rem 1.0875rem"}),f=(0,s.Z)("h5",{target:"e15ov6g24"})({name:"vdbku4",styles:"display:inline;color:#606060"}),h=(0,s.Z)("h3",{target:"e15ov6g22"})({name:"1cqmu82",styles:"display:inline;border-radius:1em 0 1em 0;transition:0.4s ease-out;&.active{color:#6c757d;:after{transform:scaleX(1);}}:hover{color:#6c757d;transition:0.1s ease-in;:after{transform:scaleX(1);transform-origin:left;}}"}),p=(0,s.Z)("h5",{target:"e15ov6g21"})({name:"vdbku4",styles:"display:inline;color:#606060"}),d=(0,s.Z)("a",{target:"e15ov6g20"})({name:"o171kl",styles:"text-decoration:none;color:inherit"}),v=r(5666),y=r.n(v),g=r(3431),m=function(){var t=(0,a.useState)([]),e=t[0],r=t[1],o=(0,a.useState)(!1),s=o[0],v=o[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),y().start(),t.next=4,fetch("https://dev.to/api/articles/latest?username=guiteixeira").then((function(t){return t.json()})).then((function(t){r(t)}));case 4:v(!1),y().done();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,g.jsx)(u.Z,null,(0,g.jsx)(c.Z,{title:"Articles"}),(0,g.jsx)(l,null,(0,g.jsx)("h1",null,"Articles"),(0,g.jsx)("div",null,e&&!s&&e.map((function(t,e){var r=t.url,n=t.title,o=t.readable_publish_date,i=t.reading_time_minutes,a=t.description;return(0,g.jsx)("div",{key:e},(0,g.jsx)(d,{href:r,rel:"noopener noreferrer",target:"_blank"},(0,g.jsx)(h,null,n)),(0,g.jsx)("div",null,(0,g.jsx)(f,null,o),(0,g.jsx)(p,null," ","- ",i," min read")),(0,g.jsx)("p",null,a))})))))}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(G){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),u=new S(n||[]);return a(i,"_invoke",{value:L(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}e.wrap=h;var d={};function v(){}function y(){}function g(){}var m={};f(m,c,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==r&&i.call(w,c)&&(m=w);var b=g.prototype=v.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return y.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},_(j.prototype),f(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),f(b,l,"Generator"),f(b,c,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-blog-js-c0f8f4f4ae214557f353.js.map
/*! For license information please see handleJobStatusMessage.js.LICENSE.txt */
!function(){var t={7111:function(t,r,e){var n=e(9859),o=e(6733),i=e(9821),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1176:function(t,r,e){var n=e(9859),o=e(5052),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},9540:function(t,r,e){var n=e(905),o=e(3231),i=e(9646),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},1460:function(t,r,e){var n=e(4229),o=e(95),i=e(6358),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},8760:function(t,r,e){var n=e(9859),o=e(3718),i=e(2359),a=e(5052),u=e(95)("species"),c=n.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===c||o(r.prototype))||a(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?c:r}},7501:function(t,r,e){var n=e(8760);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},7079:function(t,r,e){var n=e(5968),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},1589:function(t,r,e){var n=e(9859),o=e(1601),i=e(6733),a=e(7079),u=e(95)("toStringTag"),c=n.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=c(t),u))?e:s?a(r):"Object"==(n=a(r))&&i(r.callee)?"Arguments":n}},7081:function(t,r,e){var n=e(8270),o=e(4826),i=e(7933),a=e(1787);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||c(t,p,s(r,p))}}},5762:function(t,r,e){var n=e(7400),o=e(1787),i=e(5358);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},5358:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},2324:function(t,r,e){"use strict";var n=e(9310),o=e(1787),i=e(5358);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},7400:function(t,r,e){var n=e(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:function(t,r,e){var n=e(9859),o=e(5052),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},598:function(t,r,e){var n=e(1333);t.exports=n("navigator","userAgent")||""},6358:function(t,r,e){var n,o,i=e(9859),a=e(598),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},3837:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:function(t,r,e){var n=e(9859),o=e(7933).f,i=e(5762),a=e(7487),u=e(2079),c=e(7081),s=e(6541);t.exports=function(t,r){var e,f,p,l,v,h=t.target,d=t.global,y=t.stat;if(e=d?n:y?n[h]||u(h,{}):(n[h]||{}).prototype)for(f in r){if(l=r[f],p=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},4229:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7188:function(t,r,e){var n=e(4229);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:function(t,r,e){var n=e(7188),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},1805:function(t,r,e){var n=e(7400),o=e(8270),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},5968:function(t,r,e){var n=e(7188),o=Function.prototype,i=o.bind,a=o.call,u=n&&i.bind(a,a);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},1333:function(t,r,e){var n=e(9859),o=e(6733),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},5300:function(t,r,e){var n=e(7111);t.exports=function(t,r){var e=t[r];return null==e?void 0:n(e)}},9859:function(t,r,e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},8270:function(t,r,e){var n=e(5968),o=e(2991),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},5977:function(t){t.exports={}},4394:function(t,r,e){var n=e(7400),o=e(4229),i=e(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:function(t,r,e){var n=e(9859),o=e(5968),i=e(4229),a=e(7079),u=n.Object,c=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):u(t)}:u},8511:function(t,r,e){var n=e(5968),o=e(6733),i=e(5353),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},6407:function(t,r,e){var n,o,i,a=e(8694),u=e(9859),c=e(5968),s=e(5052),f=e(5762),p=e(8270),l=e(5353),v=e(4399),h=e(5977),d="Object already initialized",y=u.TypeError,_=u.WeakMap;if(a||l.state){var m=l.state||(l.state=new _),S=c(m.get),g=c(m.has),b=c(m.set);n=function(t,r){if(g(m,t))throw new y(d);return r.facade=t,b(m,t,r),r},o=function(t){return S(m,t)||{}},i=function(t){return g(m,t)}}else{var E=v("state");h[E]=!0,n=function(t,r){if(p(t,E))throw new y(d);return r.facade=t,f(t,E,r),r},o=function(t){return p(t,E)?t[E]:{}},i=function(t){return p(t,E)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}}}},3718:function(t,r,e){var n=e(7079);t.exports=Array.isArray||function(t){return"Array"==n(t)}},6733:function(t){t.exports=function(t){return"function"==typeof t}},2359:function(t,r,e){var n=e(5968),o=e(4229),i=e(6733),a=e(1589),u=e(1333),c=e(8511),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),h=!l.exec(s),d=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},y=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!v(l,c(t))}catch(t){return!0}};y.sham=!0,t.exports=!p||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?y:d},6541:function(t,r,e){var n=e(4229),o=e(6733),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},5052:function(t,r,e){var n=e(6733);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},4231:function(t){t.exports=!1},9395:function(t,r,e){var n=e(9859),o=e(1333),i=e(6733),a=e(1321),u=e(6969),c=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&a(r.prototype,c(t))}},9646:function(t,r,e){var n=e(4237);t.exports=function(t){return n(t.length)}},3839:function(t,r,e){var n=e(6358),o=e(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8694:function(t,r,e){var n=e(9859),o=e(6733),i=e(8511),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},1787:function(t,r,e){var n=e(9859),o=e(7400),i=e(4394),a=e(7137),u=e(1176),c=e(9310),s=n.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;r.f=o?a?function(t,r,e){if(u(t),r=c(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=p(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return f(t,r,e)}:f:function(t,r,e){if(u(t),r=c(r),u(e),i)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},7933:function(t,r,e){var n=e(7400),o=e(266),i=e(9195),a=e(5358),u=e(905),c=e(9310),s=e(8270),f=e(4394),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=c(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},8151:function(t,r,e){var n=e(140),o=e(3837).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:function(t,r){r.f=Object.getOwnPropertySymbols},1321:function(t,r,e){var n=e(5968);t.exports=n({}.isPrototypeOf)},140:function(t,r,e){var n=e(5968),o=e(8270),i=e(905),a=e(9540).indexOf,u=e(5977),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},9195:function(t,r){"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},2914:function(t,r,e){var n=e(9859),o=e(266),i=e(6733),a=e(5052),u=n.TypeError;t.exports=function(t,r){var e,n;if("string"===r&&i(e=t.toString)&&!a(n=o(e,t)))return n;if(i(e=t.valueOf)&&!a(n=o(e,t)))return n;if("string"!==r&&i(e=t.toString)&&!a(n=o(e,t)))return n;throw u("Can't convert object to primitive value")}},4826:function(t,r,e){var n=e(1333),o=e(5968),i=e(8151),a=e(894),u=e(1176),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},7487:function(t,r,e){var n=e(9859),o=e(6733),i=e(8270),a=e(5762),u=e(2079),c=e(8511),s=e(6407),f=e(1805).CONFIGURABLE,p=s.get,l=s.enforce,v=String(String).split("String");(t.exports=function(t,r,e,c){var s,p=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet,y=c&&void 0!==c.name?c.name:r;o(e)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==y)&&a(e,"name",y),(s=l(e)).source||(s.source=v.join("string"==typeof y?y:""))),t!==n?(p?!d&&t[r]&&(h=!0):delete t[r],h?t[r]=e:a(t,r,e)):h?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||c(this)}))},8885:function(t,r,e){var n=e(9859).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},2079:function(t,r,e){var n=e(9859),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},4399:function(t,r,e){var n=e(3036),o=e(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:function(t,r,e){var n=e(9859),o=e(2079),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},3036:function(t,r,e){var n=e(4231),o=e(5353);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.20.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},3231:function(t,r,e){var n=e(3329),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},905:function(t,r,e){var n=e(9337),o=e(8885);t.exports=function(t){return n(o(t))}},3329:function(t){var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},4237:function(t,r,e){var n=e(3329),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:function(t,r,e){var n=e(9859),o=e(8885),i=n.Object;t.exports=function(t){return i(o(t))}},2066:function(t,r,e){var n=e(9859),o=e(266),i=e(5052),a=e(9395),u=e(5300),c=e(2914),s=e(95),f=n.TypeError,p=s("toPrimitive");t.exports=function(t,r){if(!i(t)||a(t))return t;var e,n=u(t,p);if(n){if(void 0===r&&(r="default"),e=o(n,t,r),!i(e)||a(e))return e;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),c(t,r)}},9310:function(t,r,e){var n=e(2066),o=e(9395);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1601:function(t,r,e){var n={};n[e(95)("toStringTag")]="z",t.exports="[object z]"===String(n)},9821:function(t,r,e){var n=e(9859).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},1441:function(t,r,e){var n=e(5968),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},6969:function(t,r,e){var n=e(3839);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:function(t,r,e){var n=e(7400),o=e(4229);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},95:function(t,r,e){var n=e(9859),o=e(3036),i=e(8270),a=e(1441),u=e(3839),c=e(6969),s=o("wks"),f=n.Symbol,p=f&&f.for,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var r="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=c&&p?p(r):l(r)}return s[t]}},8178:function(t,r,e){"use strict";var n=e(3103),o=e(9859),i=e(4229),a=e(3718),u=e(5052),c=e(2991),s=e(9646),f=e(2324),p=e(7501),l=e(1460),v=e(95),h=e(6358),d=v("isConcatSpreadable"),y=9007199254740991,_="Maximum allowed index exceeded",m=o.TypeError,S=h>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),b=function(t){if(!u(t))return!1;var r=t[d];return void 0!==r?!!r:a(t)};n({target:"Array",proto:!0,forced:!S||!g},{concat:function(t){var r,e,n,o,i,a=c(this),u=p(a,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(b(i=-1===r?a:arguments[r])){if(l+(o=s(i))>y)throw m(_);for(e=0;e<o;e++,l++)e in i&&f(u,l,i[e])}else{if(l>=y)throw m(_);f(u,l++,i)}return u.length=l,u}})},7609:function(t,r,e){var n=e(7425).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v={};function h(){}function d(){}function y(){}var _={};f(_,u,(function(){return this}));var m=Object.getPrototypeOf,S=m&&m(m(w([])));S&&S!==e&&i.call(S,u)&&(_=S);var g=y.prototype=h.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,a,u,c){var s=l(t[o],t,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"==n(p)&&i.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function w(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=y,f(g,"constructor",y),f(y,"constructor",d),d.displayName=f(y,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},r.awrap=function(t){return{__await:t}},b(E.prototype),f(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),f(g,s,"Generator"),f(g,u,(function(){return this})),f(g,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=w,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:w(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),v}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},7425:function(t){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},2841:function(t,r,e){var n=e(7609)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){"use strict";function t(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function u(r){t(a,o,i,u,c,"next",r)}function c(r){t(a,o,i,u,c,"throw",r)}u(void 0)}))}}var n,o=e(2841),i=e.n(o);e(8178),function(t){t.ASSET_STATUS="_dbupdate/_monitor/_asset/+/status",t.ASSET_STATUS_PLATFORM="_dbupdate/_monitor/_asset/+/status/_platform",t.ASSET_LOCATION="_dbupdate/_monitor/_asset/+/location",t.ASSET_LOCATION_PLATFORM="_dbupdate/_monitor/_asset/+/location/_platform",t.ASSET_LOCATION_AND_STATUS="_dbupdate/_monitor/_asset/+/locationAndStatus",t.ASSET_LOCATION_AND_STATUS_PLATFORM="_dbupdate/_monitor/_asset/+/locationAndStatus/_platform",t.AREA_STATUS="_dbupdate/_monitor/_area/+/status",t.AREA_STATUS_PLATFORM="_dbupdate/_monitor/_area/+/status/_platform",t.AREA_LOCATION="_dbupdate/_monitor/_area/+/location",t.AREA_LOCATION_PLATFORM="_dbupdate/_monitor/_area/+/location/_platform",t.EVENTS="_dbupdate/_monitor/_events",t.EVENTS_PLATFORM="_dbupdate/_monitor/_events/_platform",t.ASSET_COMMENTS="_dbupdate/_monitor/_asset_comments"}(n||(n={}));var a,u,c,s,f,p;!function(t){t.FATAL="fatal",t.ERROR="error",t.WARN="warn",t.INFO="info",t.DEBUG="debug",t.TRACE="trace"}(a||(a={})),function(t){t.ACTIONS="actions",t.ACTION_HISTORY="action_history",t.ACTION_TYPES="action_types",t.AREAS="areas",t.AREA_HISTORY="area_history",t.AREA_TYPES="area_types",t.ASSETS="assets",t.ASSET_COMMENTS="asset_comments",t.ASSET_HISTORY="_asset_history",t.ASSET_IMAGE_HISTORY="asset_image_history",t.ASSET_TREES="asset_trees",t.ASSET_TYPES="asset_types",t.ASSET_TYPE_TREE="asset_type_tree",t.EVENTS="events",t.EVENT_HISTORY="event_history",t.EVENT_TYPES="event_types",t.FORGOT_PASSWORD_REQUESTS="forgot_password_requests",t.GROUPS="groups",t.HEATMAP_REPORTS="heatmap_reports",t.LOGS="logs",t.MIGRATIONS="migrations",t.MODELS="models",t.JOBS="jobs",t.NIMBELINK_DATA_AUDIT_TRAIL="nimbelink_data_audit_trail",t.REPORTS="reports",t.DASHBOARDS="dashboards",t.RULES="rules",t.RULE_TYPES="rule_types",t.SUBSCRIPTIONS="subscriptions",t.ROLES="roles",t.ACTION_TYPES_GROUPS="action_types_groups",t.AREA_TYPES_GROUPS="area_types_groups",t.ASSET_TYPES_GROUPS="asset_types_groups",t.EVENT_TYPES_GROUPS="event_types_groups",t.RULE_TYPES_GROUPS="rule_types_groups",t.DASHBOARDS_GROUPS="dashboards_groups",t.SYSTEM_INFO="system_info",t.NEW_USER_ONBOARDING_REQUESTS="new_user_onboarding_requests",t.ADAPTER_CONFIG="adapter_config",t.CUSTOM_SETTINGS="custom_settings",t.PIPELINES="pipelines"}(u||(u={})),function(t){t.ACCESS_TOKEN_CACHE="AccessTokenCache",t.AREA_TYPE_SCHEMA_CACHE="AreaTypeSchemaCache",t.ASSET_TYPE_CACHE="AssetTypeCache",t.USER_INFO_CACHE="UserInfoCache",t.USER_ROLES_CACHE="UserRolesCache"}(c||(c={})),function(t){t.OVERWRITE="overwrite",t.MERGE="merge"}(s||(s={})),function(t){t.NO="no",t.ALL="all",t.CUSTOM="custom"}(f||(f={})),a.DEBUG,a.DEBUG,a.DEBUG,a.DEBUG,a.DEBUG,s.MERGE,a.DEBUG,function(t){t.UNDERGOING="undergoing",t.ERROR="error",t.SUCCESS="success",t.IDLE="idle"}(p||(p={}));e.g.handleJobStatusMessage=function(t,e){function n(){return(n=r(i().mark((function t(r,n){var o,a,c,s,f,l,v,h,d,y,_,m,S,g,b;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,o=JSON.parse(n.payload),a=o.state,c=o.name,s=o.timestamp,f=ClearBladeAsync.Collection({collectionName:u.JOBS}),l=ClearBladeAsync.Collection({collectionName:u.MODELS}),t.t0=a,t.next=t.t0===p.ERROR||t.t0===p.UNDERGOING||t.t0===p.IDLE?8:t.t0===p.SUCCESS?11:32;break;case 8:return t.next=10,f.update(ClearBladeAsync.Query().equalTo("name",c),{status:o});case 10:return t.abrupt("break",34);case 11:return v=o.model_name,h=o.id,d=o.evaluations,t.next=14,f.fetch(ClearBladeAsync.Query().equalTo("name",c)).then((function(t){return t.DATA[0]}));case 14:return y=t.sent,_=y.update_existing_model,m=y.trained_model_ids,S=y.base_model_id,t.next=20,f.update(ClearBladeAsync.Query().equalTo("name",c),{status:{timestamp:s,state:a},trained_model_ids:m.concat([h]),last_trained:(new Date).toISOString()});case 20:if(!_){t.next=29;break}return g=ClearBladeAsync.Query().equalTo("id",S),t.next=24,l.fetch(g);case 24:return b=t.sent.DATA[0].edges,t.next=27,l.update(g,{is_history:!0}).then((function(){return l.create({name:v,id:h,edges:b,job_name:c,evaluations:d,is_history:!0,to_deploy:!1,created_at:(new Date).toISOString()})}));case 27:t.next=31;break;case 29:return t.next=31,l.create({name:v,id:h,edges:[],job_name:c,evaluations:d,is_history:!1,to_deploy:!1,created_at:(new Date).toISOString()});case 31:return t.abrupt("break",34);case 32:return log("Error: Didn't match any state."),t.abrupt("break",34);case 34:e.success("Handled ".concat(a," update")),t.next=40;break;case 37:t.prev=37,t.t1=t.catch(0),e.error(t.t1);case 40:case"end":return t.stop()}}),t,null,[[0,37]])})))).apply(this,arguments)}ClearBlade.init({request:t}),ClearBlade.isEdge()&&e.error("Service must run on the platform, awaiting job status update signal from edges"),(new MQTT.Client).subscribe("ml-job-status/_platform",(function(t,r){return n.apply(this,arguments)}))}}()}();
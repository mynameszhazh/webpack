!function(){"use strict";var n={7:function(n,e,t){var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".size {\n  font-size: 50px;\n}\n",""]),e.Z=i},554:function(n,e,t){var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".content {\n  color: rgba(18,52,86,0.47059);\n}\n",""]),e.Z=i},662:function(n,e,t){var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":-webkit-full-screen {\n}\n\n:fullscreen {\n}\n\n.content {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n",""]),e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:function(n){n.exports=function(n){return n[1]}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var v=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:v,references:1})}i.push(f)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.nc=void 0,function(){var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),l=t.n(u),f=t(589),d=t.n(f),p=t(554),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;var m=t(662),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var y=t(7),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,function(){const n=document.createElement("div");n.innerHTML=["create","erleet"].join(),n.className="content size",document.body.appendChild(n)}(),console.log("123","sum")}()}();
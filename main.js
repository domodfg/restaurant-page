(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,l,u,p,f,h={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(482),t.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);"]);var u=s()(d);l.push([e.id,":root {\n    font-family: 'Oswald', sans-serif;\n}\n\nbody {\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    background-image: url("+u+");\n    background-size: cover;\n}\n\n.middle {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 57vw;\n    background-color: rgba(255, 251, 235, 0.8);\n    border-radius: 20px;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 10vh;\n    width: 100%;\n    gap: 40px;\n    background-color: rgba(90, 204, 255, 0.5);\n    border-radius: 20px;\n}\n\nbutton {\n    background-color: #ffef63;\n    padding: 0.8vh 2.5vw;\n    border: none;\n    border-radius: 15px 15px 0px 0px;\n    font-size: 1.8vw;\n    font-family: 'Oswald', sans-serif;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    font-size: 2vw;\n    gap: 30px;\n}\n\n.info h1 {\n    font-size: 5vw;\n}\n\n.info h2 {\n    font-size: 3vw;\n    font-weight: 500;\n}\n\n.info p {\n    margin: 0;\n}\n\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},482:(e,n,t)=>{e.exports=t.p+"fd3e508d645591535eb6.jpg"}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("middle");const t=document.createElement("div");t.classList.add("header");const r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button");r.textContent="Home",o.textContent="Menu",a.textContent="Contact",t.appendChild(r),t.appendChild(o),t.appendChild(a),n.appendChild(t),e.appendChild(n)})(),(()=>{const e=document.querySelector(".middle"),n=document.createElement("div");n.classList.add("info");const t=document.createElement("h1");t.textContent="Pog Fish";const r=document.createElement("h2");r.textContent="Fish and Chips Only. Tasty, delicous and crispy";const o=document.createElement("p");o.textContent="Opening hour:";const a=document.createElement("p");a.textContent="Monday - Sunday: 8am - 10pm",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),e.appendChild(n)})()})();
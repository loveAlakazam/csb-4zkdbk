parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gLwk":[function(require,module,exports) {
var e=document.querySelector("#setting-background"),t=["0.jpeg","1.jpeg","2.jpeg","3.jpeg"],c=t[Math.floor(Math.random()*t.length)],n=document.createElement("img"),r=document.querySelector("body");n.src="./src/imgs/".concat(c),r.style.backgroundImage='url("./src/imgs/'.concat(c,'")'),r.style.backgroundSize="cover";var o=document.querySelector("#setting-background-container");function g(e){o.classList.toggle("hidden")}e.addEventListener("click",g);
},{}]},{},["gLwk"], null)
//# sourceMappingURL=/csb-4zkdbk/background_settings.7dbbdc89.js.map
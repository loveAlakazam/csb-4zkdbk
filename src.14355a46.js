parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"iCbj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openLoginUserInfoOrLoginFormWrapper=void 0;var e=document.querySelector("#user-info-container"),n=document.querySelector("#login-user"),t=e.querySelector("#login-user-form-wrapper"),r=e.querySelector("#login-user-form"),o=r.querySelector("#input-user-name"),i=r.querySelector("#input-user-name-submit-btn"),s=e.querySelector("#login-user-info"),l=document.getElementById("sign-out-btn"),d="login-user",c=function(){var e=localStorage.getItem(d),r=document.getElementById("greetings"),o=r.innerText;null===e?(n.classList.remove("hidden"),l.classList.add("hidden"),s.classList.add("hidden"),t.classList.remove("hidden")):(n.classList.add("hidden"),l.classList.remove("hidden"),s.classList.remove("hidden"),t.classList.add("hidden"),r.innerText="".concat(o," ").concat(e,"님"))};function a(t){e.classList.toggle("hidden");var r=n.innerText;n.innerText="로그인 하기"===r?"로그인 취소하기":"로그인 하기"}function u(e){e.preventDefault();var n=o.value;n.length<2||n.length>20?alert("이름 글자수는 최소 2자, 최대 20자 입니다."):(localStorage.setItem(d,n),c())}function g(e){localStorage.removeItem(d),a()}exports.openLoginUserInfoOrLoginFormWrapper=c,n.addEventListener("click",a),i.addEventListener("click",u),l.addEventListener("click",g);
},{}],"Wd8A":[function(require,module,exports) {
"use strict";var e=require("./loginLocal.js"),t=document.querySelector("#time-container"),a=["일","월","화","수","목","금","토"];function c(){var t=new Date,c=t.getFullYear(),n=1+t.getMonth(),r=t.getDate(),o=a[t.getDay()],s=Math.ceil(t.getHours()),i=Math.ceil(t.getMinutes()),g=Math.ceil(t.getSeconds()),S=document.querySelector("#greetings");switch(s){case 0:case 1:case 2:case 3:case 4:case 5:S.innerText="다음날을 위해 충전을 해봐요~";break;case 6:case 7:case 8:case 9:case 10:case 11:S.innerText="좋은 아침입니다~ 오늘도 힘을 내봐요!";break;case 12:case 13:case 14:S.innerText="맛있는 점심시간 잘보내세요~";break;case 15:case 16:S.innerText="커피한잔 마시면서 산책을 해보아요~";break;case 17:case 18:case 19:case 20:S.innerText="나를 위한 시간을 가져볼까요~?";break;case 21:case 22:case 23:S.innerText="오늘 하루도 수고많으셨습니다~"}(0,e.openLoginUserInfoOrLoginFormWrapper)();var u="오전",d=s;s>=12&&(u="오후",s>12&&(d=s-12));var l=document.querySelector("#today-date-info"),p=document.querySelector("#today-time-info"),x=n.toString().padStart(2,"0"),T=r.toString().padStart(2,"0"),m=i.toString().padStart(2,"0"),y=g.toString().padStart(2,"0");d=d.toString().padStart(2,"0"),l.innerText="".concat(c,"년 ").concat(x,"월 ").concat(T,"일 (").concat(o,")"),p.innerText="".concat(u," ").concat(d,"시 ").concat(m,"분 ").concat(y,"초")}c(),setInterval(c,1e3);
},{"./loginLocal.js":"iCbj"}],"UKGC":[function(require,module,exports) {
var e=document.querySelector("#timer"),t=document.querySelector("#timer-container"),n=document.getElementById("add-timer-form-btn"),d=document.getElementById("stop-timer-btn"),m=document.getElementById("timer-form"),i=document.getElementById("add-timer-btn"),r=document.getElementById("timer-user-form-btn"),c=document.getElementById("timer-user-form"),o=m.querySelector("#timer-default-form"),l=document.getElementById("timer-hours"),u=document.getElementById("timer-minutes");function s(e){t.classList.toggle("hidden")}function g(){m.classList.toggle("hidden")}function a(){c.classList.toggle("hidden")}function E(){}e.addEventListener("click",s),n.addEventListener("click",g),r.addEventListener("click",a),i.addEventListener("click",E);
},{}],"gLwk":[function(require,module,exports) {
var e=document.querySelector("#setting-background"),t=document.querySelector("#setting-background-container");function n(e){t.classList.toggle("hidden")}e.addEventListener("click",n);
},{}],"BzzN":[function(require,module,exports) {
var e=document.querySelector("#todo-list-container"),t=document.querySelector("#todo-list");function o(t){e.classList.toggle("hidden")}t.addEventListener("click",o);
},{}],"vY5e":[function(require,module,exports) {
var e=document.querySelector("#setting-bookmark"),t=document.querySelector("#bookmark-list-container");function o(e){t.classList.toggle("hidden")}e.addEventListener("click",o);
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css"),require("./loginLocal.js"),require("./nowtime.js"),require("./timer.js"),require("./background_settings.js"),require("./todolist.js"),require("./bookmark.js");
},{"./styles.css":"D9Nj","./loginLocal.js":"iCbj","./nowtime.js":"Wd8A","./timer.js":"UKGC","./background_settings.js":"gLwk","./todolist.js":"BzzN","./bookmark.js":"vY5e"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-4zkdbk/src.14355a46.js.map
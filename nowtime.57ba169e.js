parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iCbj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openLoginUserInfoOrLoginFormWrapper=void 0;var e=document.querySelector("#user-info-container"),n=document.querySelector("#login-user"),t=e.querySelector("#login-user-form-wrapper"),r=e.querySelector("#login-user-form"),o=r.querySelector("#input-user-name"),i=r.querySelector("#input-user-name-submit-btn"),s=document.getElementById("login-user-info"),d=document.getElementById("sign-out-btn"),l="login-user",c=function(){var e=localStorage.getItem(l),r=document.getElementById("greetings"),o=r.innerText;null===e?(n.classList.remove("hidden"),d.classList.add("hidden"),s.classList.add("hidden"),t.classList.remove("hidden")):(n.classList.add("hidden"),d.classList.remove("hidden"),s.classList.remove("hidden"),t.classList.add("hidden"),r.innerText="".concat(e,"님, ").concat(o))};function a(t){e.classList.toggle("hidden");var r=n.innerText;n.innerText="로그인 하기"===r?"로그인 취소하기":"로그인 하기",c()}function u(e){e.preventDefault();var n=o.value;n.length<2||n.length>20?alert("이름 글자수는 최소 2자, 최대 20자 입니다."):(localStorage.setItem(l,n),c())}function g(e){localStorage.removeItem(l),a()}exports.openLoginUserInfoOrLoginFormWrapper=c,n.addEventListener("click",a),i.addEventListener("click",u),d.addEventListener("click",g);
},{}],"Wd8A":[function(require,module,exports) {
"use strict";var e=require("./loginLocal.js"),t=["일","월","화","수","목","금","토"];function a(){var a=new Date,c=a.getFullYear(),n=1+a.getMonth(),r=a.getDate(),o=t[a.getDay()],s=Math.ceil(a.getHours()),i=Math.ceil(a.getMinutes()),g=Math.ceil(a.getSeconds()),S=document.querySelector("#greetings");switch(s){case 0:case 1:case 2:case 3:case 4:case 5:S.innerText="다음날을 위해 충전을 해봐요~";break;case 6:case 7:case 8:case 9:case 10:case 11:S.innerText="좋은 아침입니다~ 오늘도 힘을 내봐요!";break;case 12:case 13:case 14:S.innerText="맛있는 점심시간 잘보내세요~";break;case 15:case 16:S.innerText="커피한잔 마시면서 산책을 해보아요~";break;case 17:case 18:case 19:case 20:S.innerText="나를 위한 시간을 가져볼까요~?";break;case 21:case 22:case 23:S.innerText="오늘 하루도 수고많으셨습니다~"}(0,e.openLoginUserInfoOrLoginFormWrapper)();var d="오전",u=s;s>=12&&(d="오후",s>12&&(u=s-12));var l=document.querySelector("#today-date-info"),p=document.querySelector("#today-time-info"),x=n.toString().padStart(2,"0"),T=r.toString().padStart(2,"0"),y=i.toString().padStart(2,"0"),b=g.toString().padStart(2,"0");u=u.toString().padStart(2,"0"),l.innerText="".concat(c,"년 ").concat(x,"월 ").concat(T,"일 (").concat(o,")"),p.innerText="".concat(d," ").concat(u,"시 ").concat(y,"분 ").concat(b,"초")}a(),setInterval(a,1e3);
},{"./loginLocal.js":"iCbj"}]},{},["Wd8A"], null)
//# sourceMappingURL=/csb-4zkdbk/nowtime.57ba169e.js.map
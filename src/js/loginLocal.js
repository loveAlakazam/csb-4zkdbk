const userInfoContainer = document.querySelector("#user-info-container");
const loginUserBtn = document.querySelector("#login-user");

const loginUserFormWrapper = userInfoContainer.querySelector(
  "#login-user-form-wrapper"
);
const inputUserForm = userInfoContainer.querySelector("#login-user-form");
const inputUserName = inputUserForm.querySelector("#input-user-name");
const inputUserNameSubmitBtn = inputUserForm.querySelector(
  "#input-user-name-submit-btn"
);

const loginUserInfo = document.getElementById("login-user-info");
const signOutBtn = document.getElementById("sign-out-btn");

const LOCAL_STORAGE_USER_KEY = "login-user";

const openLoginUserInfoOrLoginFormWrapper = () => {
  const savedUserName = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  let greetings = document.getElementById("greetings");
  let _greetings = greetings.innerText;

  if (savedUserName === null) {
    // 로그아웃된 상태
    loginUserBtn.classList.remove("hidden"); //로그인버튼 드러내기
    signOutBtn.classList.add("hidden"); //로그아웃버튼 숨기기
    loginUserInfo.classList.add("hidden");
    loginUserFormWrapper.classList.remove("hidden");
  } else {
    // 로그인된 상태 - 로컬스토리지에 등록된 상태
    loginUserBtn.classList.add("hidden"); //로그인버튼 숨기기
    signOutBtn.classList.remove("hidden"); //로그아웃버튼 드러내기
    loginUserInfo.classList.remove("hidden");
    loginUserFormWrapper.classList.add("hidden");
    greetings.innerText = `${savedUserName}님, ${_greetings}`;
  }
};

// 로그인 컨테이너 열기
function openUserInfoContainer(event) {
  userInfoContainer.classList.toggle("hidden");
  let _userLoginBtnInnerText = loginUserBtn.innerText;
  if (_userLoginBtnInnerText === "로그인 하기") {
    loginUserBtn.innerText = "로그인 취소하기";
  } else {
    loginUserBtn.innerText = "로그인 하기";
  }
  openLoginUserInfoOrLoginFormWrapper();
}

// 유저정보를 로컬스토리지에 등록합니다.
function handleLoginUserInfo(event) {
  event.preventDefault();
  let _userName = inputUserName.value;
  if (_userName.length < 2 || _userName.length > 20) {
    alert("이름 글자수는 최소 2자, 최대 20자 입니다.");
    return;
  }

  localStorage.setItem(LOCAL_STORAGE_USER_KEY, _userName);
  openLoginUserInfoOrLoginFormWrapper();
}

// 로그아웃 합니다.
function handleSignOut(event) {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  openUserInfoContainer();
}

loginUserBtn.addEventListener("click", openUserInfoContainer);
inputUserNameSubmitBtn.addEventListener("click", handleLoginUserInfo);
signOutBtn.addEventListener("click", handleSignOut);

const userInfoContainer = document.querySelector("#user-info-container");

// 버튼패널 로그인버튼 누르기
const loginUserBtn = document.querySelector("#login-user");

const loginUserFormWrapper = userInfoContainer.querySelector(
  "#login-user-form-wrapper"
);
const loginUserForm = userInfoContainer.querySelector("#login-user-form");
const loginUserName = loginUserForm.querySelector("#input-user-name");

const loginUserInfo = document.getElementById("login-user-info");
const signOutBtn = document.getElementById("sign-out-btn");

const LOCAL_STORAGE_USER_KEY = "login-user";
const greetings = document.querySelector("#greetings");


        
// 로그아웃 합니다.
function logOutUser(event) {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  initCheckLogin();
}

function loginUser(event) {
  event.preventDefault();
  let _userName = loginUserName.value;
  if (_userName.length < 2 || _userName.length > 20) {
    alert("이름 글자수는 최소 2자, 최대 20자 입니다.");
    return;
  }
  
  // 유저정보를 로컬스토리지에 등록합니다.
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, _userName);
  initCheckLogin();
}


function getGreetings() {
  const now = new Date();
  const hour = now.getHours();
  // 시간 문구
  let _greetings =""
 
  switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      _greetings = "다음날을 위해 충전을 해봐요~";
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      _greetings= "좋은 아침입니다~ 오늘도 힘을 내봐요!";
      break;
    case 12:
    case 13:
    case 14:
      _greetings = "맛있는 점심시간 잘보내세요~";
      break;
    case 15:
    case 16:
      _greetings = "커피한잔 마시면서 산책을 해보아요~";
      break;
    case 17:
    case 18:
    case 19:
    case 20:
      _greetings = "나를 위한 시간을 가져볼까요~?";
      break;
    case 21:
    case 22:
    case 23:
      _greetings = "오늘 하루도 수고많으셨습니다~";

      break;
    default:
      break;
  }
  return _greetings
}

function signInStatus() {
  const savedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
  const _greetings = getGreetings(); // 시간대별 인사문구를 구합니다.
  loginUserBtn.classList.add("hidden"); //로그인버튼을 숨긴다.
  signOutBtn.classList.remove("hidden"); //로그아웃버튼을 드러낸다.
  userInfoContainer.classList.add("hidden"); //로그인 컨테이너를 숨긴다.
  greetings.classList.remove("hidden"); // greetings를 보여줍니다.
  greetings.innerText = `${savedUser}님, ${_greetings}` 
}

function signOutStatus() {
  
  signOutBtn.classList.add("hidden"); //로그아웃버튼을 숨긴다.
  loginUserBtn.classList.remove("hidden"); //로그인버튼을 보여준다.
  greetings.classList.add("hidden"); // greetings를 숨깁니다.
}


// 로그인 상태 체크
function checkLogin() {
  return localStorage.getItem(LOCAL_STORAGE_USER_KEY) !== null;
}

// 로그인 컨테이너 열기
function openUserInfoContainer() {
  // 버튼패널의 '로그인' 버튼을 누를 때 입니다.
  // 로그인이 되어있는 상태인지 체크.
  if(!checkLogin()){
    // 로그인이 안된 상태 
    userInfoContainer.classList.toggle("hidden");//로그인 컨테이너를 드러낸다.
    let loginBtnInnerText = loginUserBtn.innerText;
    
    if(loginBtnInnerText === "로그인"){
      loginUserBtn.innerText="로그인 취소"
    } else if(loginBtnInnerText === "로그인 취소"){
      loginUserBtn.innerText="로그인"
    }
  }
}

loginUserForm.addEventListener("submit", loginUser)
// inputUserForm.addEventListener("submit", handleLoginUserInfo);

loginUserBtn.addEventListener("click", openUserInfoContainer);
signOutBtn.addEventListener("click", logOutUser);


// 시작할때 체크합니다.
function initCheckLogin() {
  if(checkLogin()){
    // 로그인이 되어있는 상태
    signInStatus();
  } else{
    signOutStatus();
  }
}

initCheckLogin()
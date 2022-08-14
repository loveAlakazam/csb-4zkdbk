// const timeContainer = document.querySelector("#time-container");

// 시계
const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

function getNowDateTimeInfo() {
  const now = new Date();
  const nowYear = now.getFullYear(); // 년도
  const nowMonth = 1 + now.getMonth(); // 월
  const nowDay = now.getDate(); // 일
  const nowDayOfWeek = dayOfWeek[now.getDay()]; // 요일

  const hour = Math.ceil(now.getHours()); // 시
  const minute = Math.ceil(now.getMinutes()); // 분
  const second = Math.ceil(now.getSeconds());

  // 시간 문구
  let greetings = document.querySelector("#greetings");
  switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      greetings.innerText = "다음날을 위해 충전을 해봐요~";
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      greetings.innerText = "좋은 아침입니다~ 오늘도 힘을 내봐요!";
      break;
    case 12:
    case 13:
    case 14:
      greetings.innerText = "맛있는 점심시간 잘보내세요~";
      break;
    case 15:
    case 16:
      greetings.innerText = "커피한잔 마시면서 산책을 해보아요~";
      break;
    case 17:
    case 18:
    case 19:
    case 20:
      greetings.innerText = "나를 위한 시간을 가져볼까요~?";
      break;
    case 21:
    case 22:
    case 23:
      greetings.innerText = "오늘 하루도 수고많으셨습니다~";

      break;
    default:
      break;
  }

  // 로그인되어있는지 확인
  openLoginUserInfoOrLoginFormWrapper();

  // 오전/오후
  let AmPm = "오전";
  let _hour = hour;
  if (hour >= 12) {
    AmPm = "오후";
    if (hour > 12) {
      _hour = hour - 12;
    }
  }
  // 오늘날짜정보
  let todayDateInfo = document.querySelector("#today-date-info");

  // 오늘 시각정보
  let todayTimeInfo = document.querySelector("#today-time-info");

  let _nowMonth = nowMonth.toString().padStart(2, "0");
  let _nowDay = nowDay.toString().padStart(2, "0");
  let _minute = minute.toString().padStart(2, "0");
  let _second = second.toString().padStart(2, "0");
  _hour = _hour.toString().padStart(2, "0");

  todayDateInfo.innerText = `${nowYear}년 ${_nowMonth}월 ${_nowDay}일 (${nowDayOfWeek})`;

  todayTimeInfo.innerText = `${AmPm} ${_hour}시 ${_minute}분 ${_second}초`;
}

// 1분간격으로 업데이트
getNowDateTimeInfo();
setInterval(getNowDateTimeInfo, 1000);

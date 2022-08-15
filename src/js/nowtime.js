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

  

  // 오전/오후
  let AmPm = "AM";
  let _hour = hour;
  if (hour >= 12) {
    AmPm = "PM";
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
  _hour = _hour.toString().padStart(2, "0");

  todayDateInfo.innerText = `${nowYear}년 ${_nowMonth}월 ${_nowDay}일 (${nowDayOfWeek})`;

  todayTimeInfo.innerText = `${AmPm} ${_hour}:${_minute}`;
}

// 1분간격으로 업데이트
getNowDateTimeInfo();
setInterval(getNowDateTimeInfo, 1000* 60);

const timerBtn = document.querySelector("#timer");
const timerContainer = document.querySelector("#timer-container");

const startTimerBtn = document.getElementById("start-timer-btn"); //타이머 시작하기
const stopTimerBtn = document.getElementById("stop-timer-btn"); // 타이머 정지 버튼
const pauseTimerBtn = document.getElementById("pause-timer-btn");
const jsTimer = document.getElementById("js-timer"); //

const HOUR = 60 * 60;
const MINUTE = 60;
let TIME = 0;
let cron;

// 타이머 컨테이너를 엽니다.
function openTimerContainer(event) {
  timerContainer.classList.toggle("hidden");
}

// 타이머 실행
const updateTimer = () => {
  const hours = Math.floor(TIME / HOUR);
  const minutes = Math.floor(TIME / MINUTE);
  const seconds = TIME % MINUTE;

  let _diffHour = hours.toString().padStart(2, "0");
  let _diffMin = minutes.toString().padStart(2, "0");
  let _diffSec = seconds.toString().padStart(2, "0");
  jsTimer.innerText = `${_diffHour}:${_diffMin}:${_diffSec}`;
  TIME++;
};

// 타이머 등록하기 버튼 누를때
function startTimer() {
  updateTimer();
  stopTimer();
  cron = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(cron);
}

// 타이머 정지
function stopTimer() {
  clearInterval(cron);
  jsTimer.innerText = "00:00:00";
  pauseTimer();

  return (TIME = 0);
}

function init() {
  timerBtn.addEventListener("click", openTimerContainer); // 타이머컨테이너 열기
  startTimerBtn.addEventListener("click", startTimer);
  stopTimerBtn.addEventListener("click", stopTimer);
  pauseTimerBtn.addEventListener("click", pauseTimer);
  // createUserTimerSelectOptions();
}

init();

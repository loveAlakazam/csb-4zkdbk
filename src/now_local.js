const API_KEY = "dd30fd5b3770abea0c586a537a1e68e3";

function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metrics`;

  //javascript가 알아서 url을 호출.
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const localInfo = document.getElementById("local-info");
      const tempInfo = document.getElementById("temp-info");
      localInfo.innerText = data.name;
      tempInfo.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert(
    "지역정보와 날씨정보를 찾을수 없습니다. 브라우저에서 위치권한을 허용해주세요."
  );
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

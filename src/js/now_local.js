const API_KEY = "dd30fd5b3770abea0c586a537a1e68e3";
const LOCAL_INFO_KEY = "location"
const TEMP_INFO_KEY = "local_temp"
const localInfo = document.getElementById("local-info");
const tempInfo = document.getElementById("temp-info");


function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metrics`;

  //javascript가 알아서 url을 호출.
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      let _localData =data.name;
      let _tempData = data.weather[0].main
      localInfo.innerText = _localData
      tempInfo.innerText = _tempData;

      localStorage.setItem(LOCAL_INFO_KEY, _localData)
      localStorage.setItem(TEMP_INFO_KEY, _tempData);
    });
}

function onGeoError() {
  alert(
    "지역정보와 날씨정보를 찾을수 없습니다. 브라우저에서 위치권한을 허용해주세요."
  );
}


const _localInfo = localStorage.getItem(LOCAL_INFO_KEY)
const _tempInfo = localStorage.getItem(TEMP_INFO_KEY)
if(_localInfo === null || _tempInfo === null){
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
} else {
  localInfo.innerText = _localInfo
  tempInfo.innerText = _tempInfo;

}

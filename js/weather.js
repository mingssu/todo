const API_KEY = "f9ae06495bb91dd45409b5fe0ad49d5c";
const weatherIconBox = document.querySelector(".weather .iconbox .status");
const weather = document.querySelector(".weather .iconbox .status .text");
const city = document.querySelector(".weather .iconbox .city");
const noWeather = "Can't check weather of there";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather .iconbox .status .text");
      const city = document.querySelector(".weather .iconbox .city");
      const weatherIcon = document.querySelector(
        ".weather .iconbox .status .icon"
      );

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;

      const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherIcon.src = weatherIconUrl;
      weatherIcon.classList.remove(HIDDEN_CLASSNAME);
    });
}

function onGeoError() {
  city.innerText = noWeather;
  weather.innerText = noWeather;
}

navigator.geocity.getCurrentPosition(onGeoOk, onGeoError);
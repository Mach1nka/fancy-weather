import getForecast from "./get-forecast";
import createForecast from "./create-forecast";
import getImage from "./get-image";
import realTime from "./realtime";
import { checkCurrentDegree } from "./type-of-temperature";
import script from "./index";

export default function renderForecast(value) {
  const VALUE = value;
  return getForecast(VALUE)
    .then((res) => {
      getImage(res);
      document.getElementById("new_image").onclick = () => getImage(res);
      return res;
    })
    .then((res) => {
      const parent = document.querySelector(".coordinates");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      window.initMap = () => {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: res.location.lat, lng: res.location.lon },
          zoom: 8,
          disableDefaultUI: true,
        });
        const marker = new google.maps.Marker({
          position: { lat: res.location.lat, lng: res.location.lon },
          map,
        });
      };
      document.head.appendChild(script);
      document.querySelector(".coordinates").insertAdjacentHTML("beforeend",
        `<p class="coordinate">Latitude: ${res.location.lat}</p><p class="coordinate">Longitude: ${res.location.lon}</p>`);
      return [createForecast([res.location.name, res.location.country],
        res.location.tz_id,
        [res.current.temp_c, res.current.temp_f],
        res.current.condition.icon,
        res.current.condition.text,
        [res.current.feelslike_c, res.current.feelslike_f],
        res.current.wind_kph,
        res.current.humidity,
        res.forecast.forecastday[0].date,
        [res.forecast.forecastday[0].day.avgtemp_c, res.forecast.forecastday[0].day.avgtemp_f],
        res.forecast.forecastday[0].day.condition.icon,
        res.forecast.forecastday[1].date,
        [res.forecast.forecastday[1].day.avgtemp_c, res.forecast.forecastday[0].day.avgtemp_f],
        res.forecast.forecastday[1].day.condition.icon,
        res.forecast.forecastday[2].date,
        [res.forecast.forecastday[2].day.avgtemp_c, res.forecast.forecastday[0].day.avgtemp_f],
        res.forecast.forecastday[2].day.condition.icon), res];
    })
    .then((data) => {
      const block = document.getElementById("main_forecast");
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
      document.getElementById("main_forecast").insertAdjacentHTML("afterbegin", data[0]);
      return window.timerID = setInterval(() => realTime(data[1].location.tz_id), 1000);
    })
    .then((timer) => {
      checkCurrentDegree();
      try {
        initMap();
      } catch (e) {
        if (e instanceof ReferenceError) {
          return false;
        }

        throw new Error(`Error Google Maps ${e}`);
      }
      return timer;
    })
    .catch(() => {
      document.getElementById("search-field").value = "";
      return alert("Something went wrong");
    });
}

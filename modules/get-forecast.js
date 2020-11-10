import { WEATHER_API_KEY } from "./Api";

export default function getForecast(geoloc) {
  if (geoloc instanceof Promise) {
    return geoloc.then((response) => fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${response}&days=3`)
      .then((res) => res.json())
      .catch((e) => alert(e.error.message)));
  }
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${geoloc}&days=3`)
    .then((res) => res.json())
    .catch((e) => alert(e.error.message));
}

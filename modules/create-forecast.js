import dateOptions from "./date-options";

export default function createForecast(geoloc,
  timezone,
  currrentTemp,
  icon,
  review,
  feelsL,
  wind,
  humidity,
  firstDay,
  firstDayTemp,
  firstDayIcon,
  secondDay,
  secondDayTemp,
  secondDayIcon,
  thirdDay,
  thirdDayTemp,
  thirdDayIcon) {
  const DATE = dateOptions(timezone);
  const FORECAST = `<h3 class='location'>${geoloc[0]}, ${geoloc[1]}</h3>
  <span id='time'>${new Date().toLocaleString("en", DATE)}</span>
  <div class="section_forecast">
    <span class="section_forecast_temperature" data-degree="C">${Math.round(currrentTemp[0])}<span>°</span></span>
    <span class="section_forecast_temperature" data-degree="F">${Math.round(currrentTemp[1])}<span>°</span></span>
    <img src="${icon}" alt="cloud">
    <ul class="section_forecast_description">
      <li>${review}</li>
      <li data-degree="C">feels like: ${feelsL[0]}°</li>
      <li data-degree="F">feels like: ${Math.round(feelsL[1])}°</li>
      <li>wind: ${Math.round(wind / 3.6)} m/s</li>
      <li>humidity: ${humidity}%</li>
    </ul>
  </div>
  <div class="section_forecast_for-days">
    <div class="section_forecast-day">
      <span class="day-of-week">${new Date(firstDay).toLocaleString("en", { weekday: "long" })}</span>
      <span class="day-temperature" data-degree="C">${Math.round(firstDayTemp[0])}°</span>
      <span class="day-temperature" data-degree="F">${Math.round(firstDayTemp[1])}°</span>
      <img src="${firstDayIcon}" alt="cloud">
    </div>
    <div class="section_forecast-day">
      <span class="day-of-week">${new Date(secondDay).toLocaleString("en", { weekday: "long" })}</span>
      <span class="day-temperature" data-degree="C">${Math.round(secondDayTemp[0])}°</span>
      <span class="day-temperature" data-degree="F">${Math.round(secondDayTemp[1])}°</span>
      <img src="${secondDayIcon}" alt="cloud">
    </div>
    <div class="section_forecast-day">
      <span class="day-of-week">${new Date(thirdDay).toLocaleString("en", { weekday: "long" })}</span>
      <span class="day-temperature" data-degree="C">${Math.round(thirdDayTemp[0])}°</span>
      <span class="day-temperature" data-degree="F">${Math.round(thirdDayTemp[1])}°</span>
      <img src="${thirdDayIcon}" alt="cloud">
    </div>
  </div>`;
  return FORECAST;
}

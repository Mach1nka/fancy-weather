import "../css/styles.css";
import { GOOGLE_MAPS_API } from "./Api";
import getSearchValue from "./get-search-value";
import getGeolocation from "./get-geolocation";
import renderForecast from "./render-forecast";
import { handlerCels, handlerFah } from "./type-of-temperature";
import { VOICE_BUTTON, voiceSeacrh } from "./voice-search";
import speechForecast from "./SpeechSynthesis";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API}&callback=initMap`;
script.defer = true;
script.async = true;

export default script;

document.getElementById("Fahrenheit").addEventListener("click", handlerFah);
document.getElementById("Celsius").addEventListener("click", handlerCels);

document.getElementById("speech-forecast").addEventListener("click", speechForecast);


document.getElementById("search-button").onclick = async () => {
  clearInterval(timerID);
  await renderForecast(getSearchValue());
};

document.getElementById("header_form-search").addEventListener("submit", async (event) => {
  event.preventDefault();
  clearInterval(timerID);
  await renderForecast(getSearchValue());
});

VOICE_BUTTON.addEventListener("click", () => {
  if (VOICE_BUTTON.classList.contains("choosen")) {
    VOICE_BUTTON.classList.remove("choosen");
    window.recognition.abort();
  } else {
    VOICE_BUTTON.classList.add("choosen");
    voiceSeacrh();
  }
});


renderForecast(getGeolocation());

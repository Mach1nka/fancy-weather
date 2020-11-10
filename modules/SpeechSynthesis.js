export default function speechForecast() {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(`Forecast for:${document.querySelector(".location").innerText}.
		 Current temperature ${document.querySelector(".section_forecast_temperature").innerText}
		 Today: ${document.querySelector(".section_forecast_description").innerText}`);
  utter.lang = "en-US";
  synth.speak(utter);
}

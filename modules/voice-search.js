import renderForecast from "./render-forecast";
import speechForecast from "./SpeechSynthesis";

const VOICE_BUTTON = document.getElementById("voice-search");

function voiceSeacrh() {
  const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

  window.recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = (event) => {
    const WORD = event.results[0][0].transcript;
    if (WORD === "forecast") {
      speechForecast();
      VOICE_BUTTON.classList.remove("choosen");
    } else {
      document.getElementById("search-field").value = WORD;
	    VOICE_BUTTON.classList.remove("choosen");
	    clearInterval(timerID);
	    renderForecast(WORD);
    }
  };
}
export { VOICE_BUTTON, voiceSeacrh };

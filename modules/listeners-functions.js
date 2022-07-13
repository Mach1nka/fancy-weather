import MY_SWIPER from "./carousel";
import search from "./search";
import { ERROR_FIELD } from "./get-search-data";
import { SEARCH_FILED, getName } from "./get-name-movie";


document.querySelector(".search-icon.cross").onclick = () => {
  SEARCH_FILED.value = "";
};

let i = 2;
document.getElementById("slider-next_button").onclick = async () => {
  if (MY_SWIPER.realIndex % 6 === 0) {
    try {
      await search(i += 1);
    } catch (e) {
      document.querySelector(".loading").style.visibility = "hidden";
    }
  }
};

export default async function handler() {
  try {
    await search();
    MY_SWIPER.removeAllSlides();
  } catch (e) {
    const name = getName(SEARCH_FILED);
    SEARCH_FILED.value = "";
    ERROR_FIELD.innerText = "";
    ERROR_FIELD.insertAdjacentHTML("beforeend", `No results for ${name}`);
    document.querySelector(".loading").style.visibility = "hidden";
  }
}

function keyHandler(e) {
  return e.code === "Enter" ? handler() : null;
}

SEARCH_FILED.addEventListener("keypress", keyHandler);

document.getElementById("search-button").addEventListener("click", handler);

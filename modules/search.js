import { getMovieData, ERROR_FIELD } from "./get-search-data";
import createSlide from "./create-slides";
import MY_SWIPER from "./carousel";
import { getName, SEARCH_FILED } from "./get-name-movie";



export default async function search(page = 1) {
  document.querySelector(".loading").style.visibility = "visible";
  ERROR_FIELD.innerText = "";
  const MOVIES = await getMovieData(getName(SEARCH_FILED), page);
  function prepareData() {
    const preparedData = MOVIES.map((el) => el.then(
      (res) => createSlide(res.Title, res.Poster, res.Year, res.imdbID, res.imdbRating),
    ));
    return preparedData;
  }

  Promise.all(prepareData()).then((val) => val.forEach((el) => {
    document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend", el);
    MY_SWIPER.update();
  }));

  document.querySelector(".loading").style.visibility = "hidden";
}

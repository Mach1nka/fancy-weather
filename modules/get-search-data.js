import { OMDb, YANDEX_TRANSLATE } from "./ApiKeys";


export const ERROR_FIELD = document.getElementById("main__error-field");

export async function getMovieData(title, page = 1) {
  let translate = fetch(`https://translate.yandex.net/api/v1.5/tr.json/detect?key=${YANDEX_TRANSLATE}&text=${title}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.lang !== "en") {
        return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${YANDEX_TRANSLATE}&text=${title}&lang=en`)
          .then((resp) => resp.json())
          .then((dataTrans) => {
            ERROR_FIELD.innerText = "";
            ERROR_FIELD.insertAdjacentText("afterbegin", `Showing results for ${dataTrans.text.join()}`);
            return dataTrans.text.join();
          });
      } return translate = title;
    });

  const translateWord = await translate.then((results) => results);


  const URL = `https://www.omdbapi.com/?apikey=${OMDb}&s=${translateWord}&type=movie&page=${page}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const IDes = data.Search.map((el) => el.imdbID);

    return IDes.map(async (el) => {
      const dataFromId = await fetch(`https://www.omdbapi.com/?apikey=${OMDb}&i=${el}&type=movie`);
      const dataFromIToJSON = await dataFromId.json();
      return dataFromIToJSON;
    });
  } catch (e) { return null; }
}

import { IMAGES_API } from "./Api";

export default function getImage(place) {
  console.log(`${place.location.name} ${place.location.country} ${place.current.condition.text} nature`);
  return fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${place.location.name} ${place.location.country} ${place.current.condition.text}&client_id=${IMAGES_API}`)
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundImage = `linear-gradient(rgba(8, 15, 26, 0.59), rgba(17, 17, 46, 0.46)),
      url(${data.urls.full})`;
    })
    .catch((err) => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundImage = `linear-gradient(rgba(8, 15, 26, 0.59), rgba(17, 17, 46, 0.46)),
      url(../dist/img/default.jpg)`;
      return err;
    });
}

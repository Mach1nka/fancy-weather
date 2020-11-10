import { GEOLOCATION } from "./Api";

export default function getGeolocation() {
  return fetch(GEOLOCATION)
    .then((response) => response.json())
    .then((data) => [data.city, data.country])
    .catch((err) => alert(`error = ${err}`));
}

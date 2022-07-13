import search from "./search";
import "./listeners-functions";
import "../node_modules/@fortawesome/fontawesome-free/js/all";


(async function firstRender() {
  document.querySelector(".loading").style.visibility = "visible";
  await search();
  document.querySelector(".loading").style.visibility = "hidden";
}());

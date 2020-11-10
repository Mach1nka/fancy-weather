function handlerCels() {
  document.querySelectorAll("[data-degree=\"C\"]").forEach((el) => {
    el.classList.remove("disabled");
  });
  document.querySelectorAll("[data-degree=\"F\"]").forEach((elem) => {
    elem.classList.add("disabled");
  });
  document.getElementById("Celsius").classList.add("choosen");
  document.getElementById("Fahrenheit").classList.remove("choosen");
  return localStorage.setItem("degree", "Cels");
}


function handlerFah() {
  document.querySelectorAll("[data-degree=\"C\"]").forEach((el) => {
    el.classList.add("disabled");
  });
  document.querySelectorAll("[data-degree=\"F\"]").forEach((elem) => {
    elem.classList.remove("disabled");
  });
  document.getElementById("Celsius").classList.remove("choosen");
  document.getElementById("Fahrenheit").classList.add("choosen");
  return localStorage.setItem("degree", "Fah");
}

function checkCurrentDegree() {
  const CURRENT_DEGREE = localStorage.getItem("degree");
  if (CURRENT_DEGREE === "Fah") {
    handlerFah();
  } else if (CURRENT_DEGREE === "Cels") {
    handlerCels();
  } else {
    handlerCels();
  }
}

export { checkCurrentDegree, handlerFah, handlerCels };

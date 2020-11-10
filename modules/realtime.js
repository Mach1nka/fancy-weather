import dateOptions from "./date-options";

export default function realTime(timezone) {
  const CURRENT_TIME = new Date().toLocaleString("en", dateOptions(timezone));
  return document.getElementById("time").innerText = CURRENT_TIME;
}

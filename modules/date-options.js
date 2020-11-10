export default function dateOptions(timezone) {
  const DATE_OPTIONS = {
    hour12: false,
    day: "numeric",
    month: "long",
    weekday: "short",
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return DATE_OPTIONS;
}

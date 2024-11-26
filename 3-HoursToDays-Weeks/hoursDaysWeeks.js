function hoursToDays(hours) {
    if (typeof hours !== "number" || isNaN(hours) || hours < 0) {
        return "Error";
    }
  const days = hours / 24;
  return days;
}

function hoursToWeeks(hours) {
  if (typeof hours !== "number" || isNaN(hours) || hours < 0) {
    return "Error";
  }
  const weeks = hours / 24 / 7;
  return weeks;
}

module.exports = { hoursToDays, hoursToWeeks };

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(time) {
  let hours = parseInt(time.substring(0, 2));
  let minutes = parseInt(time.substring(3, 5));
  let seconds = parseInt(time.substring(6, 8));
  let period = time.substring(8);

  if (hours == 12) {
    hours = 0;
  }

  if (period === "PM") {
    hours += 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

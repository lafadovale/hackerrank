/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  // Write your code here
  const capitalizedS = s.toUpperCase(); // just in case
  const stringArr = capitalizedS.split("");
  let changed = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if ((i + 1) % 3 === 0) {
      if (stringArr[i - 2] !== "S") changed++;
      if (stringArr[i - 1] !== "O") changed++;
      if (stringArr[i] !== "S") changed++;
    }
  }
  return changed;
}

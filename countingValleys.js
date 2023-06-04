/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  const pathArr = path.split("");
  const levels = pathArr.map((str) => (str === "U" ? 1 : -1));
  const seaLevel = 0;
  let currentLevel = 0;
  let valleys = 0;
  for (let i = 0; i < levels.length; i++) {
    currentLevel += levels[i];
    // if the last step is an uphill he's returned from a valley
    if (currentLevel === seaLevel && pathArr[i] === "U") valleys++;
  }
  return valleys;
}

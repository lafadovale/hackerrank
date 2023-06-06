/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const ascArr = arr.sort((a, b) => a - b);
  const lowestArr = ascArr.slice(0, 4);
  const lowestSum = lowestArr.reduce((a, b) => a + b, 0);
  const decArr = ascArr.reverse();
  const highestArr = decArr.slice(0, 4);
  const highestSum = highestArr.reduce((a, b) => a + b, 0);

  console.log(`${lowestSum} ${highestSum}`);
}

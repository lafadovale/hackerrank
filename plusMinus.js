/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const pos = arr.filter((n) => n > 0);
  const negs = arr.filter((n) => n < 0);
  const zeros = arr.filter((n) => n === 0);

  console.log(parseFloat(pos.length / arr.length).toFixed(6));
  console.log(parseFloat(negs.length / arr.length).toFixed(6));
  console.log(parseFloat(zeros.length / arr.length).toFixed(6));
}

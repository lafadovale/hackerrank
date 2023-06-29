/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  a.sort((a, b) => a - b);
  let freqs = new Array(100).fill(0);

  for (let number of a) {
    freqs[number]++;
  }

  let result = freqs[0];
  for (let i = 0; i < freqs.length - 1; i++) {
    let two = freqs[i] + freqs[i + 1];
    if (two > result) result = two;
  }

  return result;
}

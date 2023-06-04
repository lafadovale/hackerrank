/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  const freqArr = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freqArr[arr[i]] += 1;
  }
  return freqArr;
}

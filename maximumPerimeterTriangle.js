/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
  // Write your code here
  const arr = sticks.sort((a, b) => a - b);
  let answer = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let current = 0;
        if (arr[i] + arr[j] > arr[k]) current = arr[i] + arr[j] + arr[k]; // condition to be a triangle
        if (current > ans) {
          answer = current;
          result = [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  if (answer === 0) return [-1];
  return result;
}

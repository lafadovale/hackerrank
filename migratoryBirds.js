/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let newArr = {};
  const uniqueVal = [...new Set(arr)];
  uniqueVal.forEach((el) => {
    const filterVal = arr.filter((val) => val === el);
    const totalVal = filterVal.length;
    newArr[el] = totalVal;
  });

  // Estudar os métodos do Object
  let result = Object.entries(newArr).sort(([, a], [, b]) => b - a);
  let final = result[0][0];
  return final;
}

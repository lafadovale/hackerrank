/*
 * Complete the 'lonelyInteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyInteger(a) {
  const [lonely] = a
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      } else {
        acc.pop();
      }
      return acc;
    }, []);
  return lonely;
}

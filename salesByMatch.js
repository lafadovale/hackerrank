/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  const uniques = [...new Set(ar)];
  let pairs = 0;
  uniques.forEach((value) => {
    const filtered = ar.filter((el) => el === value);
    const count = Math.floor(filtered.length / 2);
    pairs += count;
  });
  return pairs;
}

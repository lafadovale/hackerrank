/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  let totalsArr = [];
  for (let i = 0; i < queries.length; i++) {
    let queryCount = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        totalsArr[i] = queryCount += 1;
      } else {
        totalsArr[i] = queryCount;
      }
    }
  }
  return totalsArr;
}

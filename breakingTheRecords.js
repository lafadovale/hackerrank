/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxBreaks = 0;
  let minBreaks = 0;

  scores.forEach((score) => {
    if (score > maxScore) {
      maxScore = score;
      maxBreaks++;
    }
    if (score < minScore) {
      minScore = score;
      minBreaks++;
    }
  });
  const maxMin = [maxBreaks, minBreaks];
  return maxMin;
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  const lowerCasePhrase = s.toLowerCase();
  const regex = /[a-z]/g;
  const uniqueLetters = [...new Set(lowerCasePhrase.match(regex))];
  return uniqueLetters.length === 26 ? "pangram" : "not pangram";
}

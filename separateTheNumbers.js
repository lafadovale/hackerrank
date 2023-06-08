/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
  // Write your code here
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const start = s.slice(0, i);
    let num = BigInt(start);
    let built = "";
    while (built.length < s.length) built += num++;
    if (built === s) return console.log("YES", start);
  }
  console.log("NO");
}

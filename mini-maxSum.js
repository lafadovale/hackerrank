"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const ascArr = arr.sort((a, b) => a - b);
  const lowestArr = ascArr.slice(0, 4);
  const lowestSum = lowestArr.reduce((a, b) => a + b, 0);
  const decArr = ascArr.reverse();
  const highestArr = decArr.slice(0, 4);
  const highestSum = highestArr.reduce((a, b) => a + b, 0);

  console.log(`${lowestSum} ${highestSum}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}

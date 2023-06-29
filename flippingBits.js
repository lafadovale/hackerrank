/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  // Write your code here
  const binary = n.toString(2);
  const paddedBinary = binary.padStart(32, "0");
  const flippedBinary = paddedBinary.replace(/0|1/g, (bit) => (bit === "0" ? "1" : "0"));
  const flippedDecimalNumber = parseInt(flippedBinary, 2);
  return flippedDecimalNumber;
}

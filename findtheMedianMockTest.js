const arr = [1, 3, 4, 5, 7, 2, 6];

// only if the median is an odd number
function arrMedium(arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted[Math.floor(sorted.length / 2)]);
}

arrMedium(arr);

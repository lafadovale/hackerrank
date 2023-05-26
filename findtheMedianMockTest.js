const arr = [1, 3, 4, 5, 7, 2, 6];

function findMedian(arr) {
  arr.sort((a, b) => a - b);
  let middleIndex = Math.floor(arr.length / 2);
  // if the median is an odd number
  if (arr.length % 2 !== 0) {
    console.log(arr[middleIndex / 2]);
  } else {
    // if the median is an even number
    console.log((arr[middleIndex] + arr[middleIndex - 1]) / 2);
  }
}

findMedian(arr);

'use strict';

let sortedArray = [4, 8, 15, 16, 23, 42];


function binarySearch(sortedArray, key) {
  let L = 0;
  let R = sortedArray.length - 1;
  while (L <= R) {
    var m = Math.floor((L + R) / 2);
    if (sortedArray[m] < key) {
      L = m + 1;
    } else if (sortedArray[m] > key) {
      R = m - 1;
    } else {
      return m;
    }
  }
  return -1;
}
binarySearch(sortedArray, 43);
binarySearch(sortedArray, 15);

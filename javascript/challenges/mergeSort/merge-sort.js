'use strict';


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  let resArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      resArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

}

module.exports = mergeSort;

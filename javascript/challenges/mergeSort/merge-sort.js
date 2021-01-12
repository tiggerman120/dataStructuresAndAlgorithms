'use strict';


function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    console.log(mid);
    let left = arr.slice(0, mid + 1);
    let right = arr.slice(mid, n - 1);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i = i + 1;
      } else {
        arr[k] = right[j];
        j = j + 1;
      }
      k = k + 1;
    }
  }
  return arr;
}

module.exports = mergeSort;

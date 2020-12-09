'use strict';

function BinarySearch(sortedArray, key) {
  for (let i = 0; i < sortedArray.length; i++) {
    if (key === sortedArray[i]) {
      return i;
    } else {
      return -1;
    }
  }
}

'use strict';

let testArr = [1, 2, 3, 4];
let testNum = 0;
function insertShiftArray(arr, num) {
  let middleIndex = Math.ceil(arr.length / 2)
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < middleIndex) {
      newArr[newArr.length] = arr[i]
    } else if (i === middleIndex) {
      newArr[newArr.length] = num
      newArr[newArr.length] = arr[i]
    } else if ( i > middleIndex) {
      newArr[newArr.length] = arr[i]
    }
  }
  console.log(newArr);
  return newArr;
}
insertShiftArray(testArr, testNum);

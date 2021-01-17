'use strict';

const { quickSort, swap, partition } = require('./quick-sort');

describe('a quicksorting method', () => {
  it('quicksorts an array and returns the result', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let sortedArr = [4, 8, 15, 16, 23, 42];
    let fnSort = quickSort(arr, 0, arr.length - 1);
    console.log(fnSort);
    expect(quickSort(fnSort)).toEqual(sortedArr);
  });
});

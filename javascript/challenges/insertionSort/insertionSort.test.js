'use strict';
const insertionSort = require('./insertionSort.js');

describe('insertion sort function', () => {
  it('inserts the current lowest integer into the proper array index position', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let sortedArray = [4, 8, 15, 16, 23, 42];
    console.log(insertionSort(arr));
    expect(insertionSort(arr)).toEqual(sortedArray);
  });
});

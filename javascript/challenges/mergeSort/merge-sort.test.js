'use strict';
const mergeSort = require('./merge-sort');

let array = [4, 3, 5, 6, 1, 2];
describe('a merged sort', () => {
  it('splits an array in half and sorts it', () => {
    let sortedArr = [1, 2, 3, 4, 5, 6];
    let leftHalf = [1, 2, 3];
    expect(mergeSort(array)).toEqual(sortedArr);
  });
});

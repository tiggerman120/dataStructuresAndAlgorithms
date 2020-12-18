'use strict';

const LL = require('../linked-list.js');
const ziplist = require('./ll-zip');
describe('returns the head of two linked lists zipped together into one linked list', () => {
  it('returns the head of a single linked list made from two linked lists', () => {
    const list1 = new LL();
    const list2 = new LL();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    list2.insert(4);
    list2.insert(5);
    list2.insert(6);
    console.log(list1, list2);
    expect(ziplist(list1, list2).toEqual(1));
  });
});

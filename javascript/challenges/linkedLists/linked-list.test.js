'use strict';

let LL = require('./linked-list.js');

describe('empty list', () => {
  it('checks to see if an empty list is instantiated', () => {
    const list = new LL();
    expect(list.head).toEqual(null);
  });
});



describe('linked List', () => {
  it('inserts a node at the beginning of an empty list', () => {
    const list = new LL();
    list.insert('bananas');
    expect(list.head.value).toEqual('bananas');
  });
});

describe('head is at the beginning of the linked list', () => {
  it('has head at the beginning of the linked list', () => {
    const list = new LL();
    list.insert('bananas');
    list.insert('apples');
    list.insert('chocolate');
    expect(list.head.value).toEqual('chocolate');
    let next = list.head.next;
    expect(next.value).toEqual('apples');
    next = next.next;
    expect(next.value).toEqual('bananas');
  });
});

describe('inserts multiple nodes into the linked list', () => {
  it('inserts multiple nodes into the linked list', () => {
    const list = new LL();
    list.insert('bananas');
    list.insert('apples');
    expect(list.includes());
  });
});

describe('value exists in the linked list', () => {
  it('will return true when finding a value within the linked list that exists', () => {
    const list = new LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value === 3).toBeTruthy();
    let next = list.head.next;
    expect(next.value === 2).toBeTruthy();

  });
});

describe('value does not exist in the linked list', () => {
  it('will return false when searching for a value that does not exist in the linked list', () => {
    const list = new LL();
    list.insert(1);
    expect(list.head.value === 3).toBeFalsy();
  });
});

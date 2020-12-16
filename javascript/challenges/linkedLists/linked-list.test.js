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
    expect(list.includes('bananas', 'apples'));
    //expect(list.includes('bananas))
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

describe('returns a collection of values that exist in the linked list', () => {
  it('will properly return a collection of all the values that exist in the linked list', () => {
    const list = new LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.toString()).toEqual('3 -> 2 -> 1 -> NULL');
  });
});

describe('inserts a node at the end of a linked list', () => {
  it('inserts a node at the end of a linked list', () => {
    const list = new LL();
    list.insert(1);
    list.append(2);
    let tail = list.head.next;
    expect(tail.value).toEqual(2);
  });
});

describe('inserts a node at the beginning of a linked list', () => {
  it('inserts a node at the beginning of a linked list', () => {
    const list = new LL();
    list.insertBefore(1, 2);
    expect(list.head.value).toEqual(2);
  });
});

describe('inserts a node after the first node in a linked list', () => {
  it('inserts a node immediately following the head in a linked list', () => {
    const list = new LL();
    
    list.insertAfter(1, 2);
    expect(list.head.next.value).toEqual(2);
  });
});

describe('returns a node that is kth from the end of a linked list', () => {
  it('returns a node that is kth from the end of a ll where k is a number', () => {
    const list = new LL();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(2)).toEqual(3);
  });
});


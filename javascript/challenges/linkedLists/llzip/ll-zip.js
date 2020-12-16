'use strict';

const Node = require('../node.js');
const LinkedList = require('../linked-list');

let list1 = new LinkedList;
let list2 = new LinkedList;

list1.insert(1).insert(2).insert(3).insert(4);
list2.insert(5).insert(6).insert(7).insert(8);
console.log(list1);

function ziplist(list1, list2) {
  let current = list1.head;
  while (list1.head !== null) {
    list1.insertAfter(list2.head);
    current.next;
  }
  return list1;
}
ziplist(list1, list2);

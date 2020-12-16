'use strict';

const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    //if (this.head.value === value) { return true; } else { return false; }
    return this.head.value === value ? true : false;
  }

  toString() {
    let arr = [];
    let current = this.head;//represents each item in LL as step through LL
    //temp variable to reference each node
    while (current !== null) {
      arr.push(current.value);
      current = current.next;//current changes its reference point here each iteration of the while loop
    }
    return `${arr.join(' -> ')} -> NULL`;
  }

  append(value) {
    let newNode = new Node(value);//create a new LL with value
    if (!this.head) {//if there is no head
      this.head = newNode;//assign the head to the new node
      return this.head;//return
    } else {
      let tail = this.head;//move the reference point to the tail
      while (tail.next !== null) {//while (looping) tail doesn't have a value of null
        tail = tail.next;//move to the next node in the list
      }
      tail.next = newNode;//assign the new node with a value to the end of the list
      return this.head;//return
    }

  }

  insertBefore(value, newValue) {
    let newNode = new Node(value);//create new list with value and assign it to variable
    this.head = newNode;//assign the node to the head
    let current = this.head;//assign the head to the current node
    current.next = new Node(newValue);//assign the new node with new value to the next node
    this.head = current.next;//assign the new node to the head(puts it in the front)
    current.next = this.head;
    //return newNode;//return
  }


  insertAfter(value, newValue) {
    let newNode = new Node(value);//create a new node
    newNode.next = new Node(newValue);//create a second node linked to the first node with a new value
    this.head = newNode;//assign the first node to the head
    console.log(newNode);
    return newNode;
  }

  // kthFromEnd(k) {
  //   let node = new Node;
  //   let current = this.head;
  //   let length = 0;
  //   while (this.head !== null) {
  //     if (this.head === null) {
  //       return;
  //     }
  //     length = length++;
  //     node.next;
  //     if (length === k) {
  //       return node;
  //     }
  //   }
  // }

}
//assigning data to a variable is called capturing
let LL = new LinkedList();
LL.insert(1);
LL.insert(2);
LL.insert(3);
LL.includes(1);
LL.toString();

module.exports = LinkedList;



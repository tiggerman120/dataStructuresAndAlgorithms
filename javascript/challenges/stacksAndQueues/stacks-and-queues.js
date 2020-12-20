'use strict';

const Node = require('../linkedLists/node.js');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);//create a new node
    node.next = this.top;//assign the top to the next node
    this.top = node;//assign the node to the top
  }

  pop() {
    if (this.top === null) {
      throw new Error('empty stack');
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.top === null) {
      throw new Error('empty stack');
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null ? true : false;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      return this.front = node;
    }
    let currentNode = this.front;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    //node.next = this.front;
    //this.front = node;

  }

  dequeue() {
    if (this.front === null) {
      throw new Error('empty queue');
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.front === null) {
      throw new Error('empty queue');
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null ? true : false;
  }
}



module.exports = { Stack, Queue };


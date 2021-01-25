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
    if (this.top === null) {//if the top node is empty
      throw new Error('empty stack');
    } else {
      let temp = this.top;//assign a variable to the top node
      this.top = this.top.next;//assign the top to the next node
      temp.next = null;//remove any existing references to the traversed node
      return temp.value;//return the value
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
    let node = new Node(value);//create a new node
    if (this.front === null) {//if there is no front node
      return this.front = node;//assign the node to the front
    }
    let currentNode = this.front;//capture the front
    while (currentNode.next) {//while there is a next node
      currentNode = currentNode.next;//traverse to the next node
    }
    currentNode.next = node;//when you're at the end assign the node to the next position(the end)

  }

  dequeue() {
    if (this.front === null) {
      throw new Error('empty queue');
    }
    let temp = this.front;//capture the front
    this.front = this.front.next;//traverse to the next node
    temp.next = null;//remove any existing references to the front node
    return temp.value;//return the front value
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


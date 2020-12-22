'use strict';

const Node = require('../linkedLists/node.js');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);//create a new node
    node.top = this.top;//assign the top to the next node
    this.top = node;//assign the node to the top
    console.log(node);
  }
}


module.exports = Stack;

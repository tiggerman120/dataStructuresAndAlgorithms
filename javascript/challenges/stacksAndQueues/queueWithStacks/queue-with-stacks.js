'use strict';

const Node = require('../../linkedLists/node.js');
const { Stack, Queue } = require('../stacks-and-queues.js');
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    //push into stack A
    console.log(this.Stack1.push(value));
  }

  dequeue() {
    //take value out of stack A and push it into stack B
    let value = Stack.pop();
    Stack.push(value);
  }
}

module.exports = PseudoQueue;

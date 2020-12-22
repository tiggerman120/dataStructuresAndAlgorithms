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
    this.Stack1.push(value);
  }

  dequeue() {
    //take value out of stack A and push it into stack B
    if (this.stack1.value) {
      let poppedObj = this.stack1.pop();
      this.stack2.push(poppedObj);
    } else if (!this.stack1.value) {
      return null;
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;

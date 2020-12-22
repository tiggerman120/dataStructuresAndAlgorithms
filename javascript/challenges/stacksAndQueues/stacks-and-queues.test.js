'use strict';
const Stack = require('./stacks-and-queues');
const Node = require('../linkedLists/node.js');

describe('a stack', () => {
  it('pushes a new node with a value into a stack', () => {
    const stack = new Stack();
    stack.push(new Node(1));
    expect(stack.top.value).toEqual(1);
  });
});

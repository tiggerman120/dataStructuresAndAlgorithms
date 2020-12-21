'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

describe('pseudoqueue', () => {
  it('inserts a node with a value', () => {
    const pseudoqueue = new PseudoQueue();
    expect(pseudoqueue.enqueue(1).toEqual(1));
  });
});

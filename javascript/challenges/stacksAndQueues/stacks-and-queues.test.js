'use strict';

const { Stack, Queue } = require('./stacks-and-queues.js');
const Node = require('../linkedLists/node.js');

describe('a stack', () => {
  it('pushes a new node with a value into a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  it('can push multiple nodes onto the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('pops a node off of the top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });
  it('can clear a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top === null).toBeTruthy();
  });
  it('raises exception if pop or peek is called on an empty stack', () => {
    const stack = new Stack();
    expect(() => { stack.pop(); }).toThrow(new Error('empty stack'));
    expect(() => { stack.peek(); }).toThrow(new Error('empty stack'));
  });
  it('returns the value of the node without removing the node from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek() === 1).toBeTruthy();
  });
  it('can instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toEqual(null);
  });
  it('returns true if the stack is empty, else it returns false', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });
});



describe('a queue', () => {
  it('adds a node to the rear of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
  });
  it('adds multiple nodes to the rear of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
  });
  it('removes the node from the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.front.value).toEqual(2);
  });
  it('returns the value of the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek() === 1).toBeTruthy;
  });
  it('can empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front === null).toBeTruthy();
  });
  it('will return true is the list is empty false if it is not', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('can create an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(null);
  });
  it('will raise exception if calling peek or dequeue on an empty queue', () => {
    const queue = new Queue();
    expect(() => { queue.peek(); }).toThrow(new Error('empty queue'));
    expect(() => { queue.dequeue(); }).toThrow(new Error('empty queue'));
  });
});

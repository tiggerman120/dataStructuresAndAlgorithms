'use strict';

const {BinaryTree, BinarySearchTree, Node} = require('./tree');

describe('Binary Tree', () => {
  it('returns the highest value in a binary tree', () => {
    let bt = new BinarySearchTree();
    bt.add(1);
    bt.add(3);
    bt.add(5);
    bt.add(7);
    bt.add(9);
    expect(bt.findMaximumValue()).toEqual(9);
  });

  it('does not return the not highest value in a binary tree', () => {
    let bt = new BinarySearchTree();
    bt.add(1);
    bt.add(3);
    bt.add(5);
    bt.add(7);
    bt.add(9);
    expect(bt.findMaximumValue()).toNotEqual(5);
  });
});

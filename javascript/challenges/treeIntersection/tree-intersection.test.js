'use strict';

const treeIntersection = require('./tree-intersection');
const { BinarySearchTree } = require('../tree/tree');

describe('tree intersection', () => {
  it('returns something', () => {
    let value = {key: 1};
    let tree1 = new BinarySearchTree(value);
    let tree2 = new BinarySearchTree(value);
    console.log(tree1);

    expect(treeIntersection(tree1, tree2)).toEqual({key: 1});
  });
});

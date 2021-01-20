'use strict';

const treeIntersection = require('./tree-intersection');
const { BinaryTree, BinarySearchTree } = require('../tree/tree');

describe('tree intersection', () => {
  it('returns something', () => {
    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree1.add('pizza');
    tree1.add('chicken');
    tree1.add('taco');
    tree2.add('cat');
    tree2.add('chicken');
    tree2.add('horse');

    expect(treeIntersection(tree1, tree2)).toEqual({key: 1});
  });
});

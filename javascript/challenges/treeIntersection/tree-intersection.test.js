'use strict';

const treeIntersection = require('./tree-intersection');
const HashTable = require('../hashtable/hashtable');

describe('tree intersection', () => {
  it('returns something', () => {
    let tree1 = new HashTable();
    let tree2 = new HashTable();
    tree1.set('pizza');
    tree1.set('chicken');
    tree1.set('taco');
    tree2.set('cat');
    tree2.set('chicken');
    tree2.set('horse');

    expect(treeIntersection(tree1, tree2)).toEqual({key: 1});
  });
});

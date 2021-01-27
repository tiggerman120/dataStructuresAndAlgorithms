'use strict';

const HashTable = require('../hashtable/hashtable');

function treeIntersection(tree1, tree2) {
  let results = [];
  let hashTable = new HashTable(1024);
  console.log(hashTable);
  let _walk = (node) => {
    if(node.left) {
      _walk(node.left);
      let hashedNode = hashTable(node.value);
      console.log(hashedNode);
    }
    if(node.right) {
      _walk(node.right);
      let hashedNode = hashTable(node.value);
      console.log(hashedNode);
    }

  };
  _walk(tree1.root);

  _walk = (node) => {
    console.log(node.value);
    if(node.left) {
      _walk(node.left);
      let hashedNode = stringToHash(node.value);
      console.log(hashedNode);
    }
    if(node.right) {
      _walk(node.right);
      let hashedNode = stringToHash(node.value);
      console.log(hashedNode);
    }

  };
  _walk(tree2.root);
}

module.exports = treeIntersection;

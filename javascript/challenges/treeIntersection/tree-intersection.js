'use strict';

const { stringToHash } = require('../repeatedWord/repeated-word');

function treeIntersection(tree1, tree2) {
  let _walk = (node) => {
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

'use strict';

function treeIntersection(tree1, tree2) {
  let current = tree1.root;
  console.log(current);
  while (tree1 !== null) {
    current = current.left;
  }
}

module.exports = treeIntersection;

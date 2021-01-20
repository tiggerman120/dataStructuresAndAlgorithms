'use strict';

class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let arr = [];
    let _walk = (node) => {
      arr.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
  }

  inOrder() {
    let arr = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      arr.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
  }

  postOrder() {
    let arr = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      arr.push(node.value);
    };
    _walk(this.root);
  }

  findMaximumValue() {

    let tally = 0;
    let current = this.root;
    while (current !== null) {
      if (current.value >= tally) {
        tally = current.value;
        current = current.right;
      } else {
        return tally;
      }
    }
    return tally;
  }

//   breadthFirst(BinaryTree) {
//   let array = [];
//   let final
//   let current = this.root;
//   let level = 0;
//   let valueRead = false
//   if (!current) {
//     throw new error('the tree is empty');
//   } else {
//     while (current !== null)
//     array.push(current);
//     current.valueRead = true;
//     if (current.valueRead =)
//   }
  
// }
}
class BinarySearchTree extends BinaryTree {
  super() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);

    // if (typeof value !== 'number') {
    //   return null;
    // }

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else if (node.left !== null) {
          return _insert(node.left);
        }
      }
      else if (value >= node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else if (node.right !== null) {
          return _insert(node.right);
        }
      }
    };
    // if (this.root === null) {
    //   this.root = newNode;
    // } else if (newNode.value < Node.value) {
    //   while (Node.left !== null) {
    //     if (Node.left === null) {
    //       Node.left = newNode;
    //     }
    //   } while (Node.right !== null) {
    //     if (Node.right === null) {
    //       Node.right = newNode;
    //     }
    //   }
    _insert(this.root);

  }

  contains(value) {
    try {
      if (value === true) {
        return true;
      } else {
        return false;
      }
    }
    catch (e) {
      console.error(e.message, e.name);
    }
  }
}

module.exports = { BinaryTree, BinarySearchTree, Node };

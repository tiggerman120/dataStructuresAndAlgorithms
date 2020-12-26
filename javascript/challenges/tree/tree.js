'use strict';

class Node {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {

  }

  preOrder() {
    let newNode = new Node();
    let arr = [];
    let current = newNode;
    arr.push(current.value);
    while (current.left !== null) {
      arr.push(current.value);
      current = current.left;
    }
    while (current.right !== null) {
      arr.push(current.value);
      current = current.right;
    }
    return arr;
  }

  inOrder() {
    let newNode = new Node();
    let arr = [];
    let current = newNode;
    try {
      while (current.left !== null) {
        arr.push(current.value);
        current = current.left;
      }
      arr.push(current.value);
      while (current.right !== null) {
        arr.push(current.value);
        current = current.right;
      }
      return arr;
    }
    catch (e) {
      console.error(e.message, e.name);
    }
  }

  postOrder() {
    let newNode = new Node();
    let arr = [];
    let current = newNode;
    try {
      while (current.left !== null) {
        arr.push(current.value);
        current = current.left;
      }
      while (current.right !== null) {
        arr.push(current.value);
        current = current.right;
      }
      arr.push(current.value);
      return arr;
    }
    catch (e) {
      console.error(e.message, e.name);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    try {
      if (this.root === null) {
        this.root = newNode;
      } else if (newNode.value < Node.value) {
        while (Node.left !== null) {
          if (Node.left === null) {
            Node.left = newNode;
          }
        } while (Node.right !== null) {
          if (Node.right === null) {
            Node.right = newNode;
          }
        }
      }
    }
    catch (e) {
      console.error(e.message, e.name);
    }
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

module.exports = {BinaryTree, BinarySearchTree, Node}
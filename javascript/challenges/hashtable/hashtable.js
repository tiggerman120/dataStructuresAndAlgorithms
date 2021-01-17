'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}



class HashTable {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((anwserSoFar, value) => {
      return anwserSoFar + value.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    const entry = { [key]: value };
    if (!this.map[hash]) { this.map[hash] = new LinkedList(); }
    this.map[hash].add(entry);
  }

  get(key) {
    let index = this.hash(key);
    if (this.map[index]) {
      let current = this.map[index].head;
      while (current) {
        let objkey = Object.keys(current.value);
        let objval = Object.values(current.value);
        // console.log(`objkey ${objkey}`);
        // console.log(`objval ${objval}`);
        if (objkey[0] === key) {
          // console.log('in if statement', current.value[key]);
          return objval[0];
        }
        current = current.next;
      }
    }
  }

  contains(key) {
    let index = this.hash(key);
    let current = this.map[index].head;
    while (current) {
      let objkey = Object.keys(current.value);
      if (objkey[0] !== key) {
        console.log(`hitting if 1`);
        return false;
      } if (objkey[0] === key) {
        console.log(`hitting if 2`);
        return true;
      }
      current = current.next;
    }
  }
}

module.exports = HashTable;

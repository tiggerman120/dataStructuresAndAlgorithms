'use strict';

'use strict';

const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value)
    node.next = this.head;
    console.log(node.next);
    this.head = node;
  }

  includes(value) {
    if (this.head.value === value) { return true } else { return false }
  }

  toString() {
    let arr = [];
    let current = this.head;//represents each item in LL as step through LL
    //temp variable to reference each node
    while (current !== null) {
      arr.push(current.value)
      current = current.next;//current changes its reference point here each iteration of the while loop
    }
    console.log(arr);
    return `${arr.join(' -> ')} -> NULL`
  }
}
//assigning data to a variable is called capturing
let LL = new LinkedList();
LL.insert(1);
LL.insert(2);
LL.insert(3);
LL.includes(1);
LL.toString();

module.exports = LinkedList;



'use strict';

function leftJoin(hash1, hash2) {
  let resultsArray = [];
  let current = hash1.root;
  while (current) {
    for (let i = 0; i <= resultsArray.length; i++) {
      resultsArray[i].push(current.value);
    }
    current = current.next;
  }
  let hash2current = hash2.root;
  while (hash2current) {
    for (let i = 0; i <= resultsArray.length; i++)
      if (resultsArray.includes(hash2current.value)) {
        resultsArray.push(hash2current.value);
      }
    hash2current = hash2current.next;
  }
}

module.exports = leftJoin;

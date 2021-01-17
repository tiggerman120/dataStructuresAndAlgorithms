'use strict';

const Hashtable = require('./hashtable');

describe('a hash table', () => {
  it('adds a key value pair to the data structure', () => {
    let hashmap = new Hashtable(599);
    hashmap.set('x', 'y');
    hashmap.set('shark', 'soup');
    expect(hashmap.get('shark')).toEqual('soup');
  });

  it('returns true if the key exists in the table already', () => {
    let hashmap = new Hashtable(599);
    //hashmap.set('x', 'y');
    hashmap.set('shark', 'soup');
    expect(hashmap.contains('shark')).toBeTruthy();
  });
});

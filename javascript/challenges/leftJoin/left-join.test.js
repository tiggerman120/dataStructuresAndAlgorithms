'use strict';

const HashTable = require('../hashtable/hashtable');
const join = require('./left-join');

describe('a left join', () => {
  it('returns something', () => {
    let x = new HashTable();
    let y = new HashTable();
    x.set({'string': 'thread'});
    y.set({'string': 'ball'});
    expect(join(x, y)).toEqual(false);
  });
});

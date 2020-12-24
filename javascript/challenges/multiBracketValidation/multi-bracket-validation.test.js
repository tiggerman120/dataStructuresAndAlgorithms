'use strict';
const mvb = require('multi-bracket-validation');

describe('multi bracket validation', () => {
  it('returns true if the counter is 0', () => {
    expect(mvb('[]{}()')).toEqual(true);
  });
  it('returns false is the counter is not 0', () => {
    expect(mvb('[]{}()((({{{[[[')).toEqual(false);
  });
});

'use strict';
const { repeatedWord, splitter } = require('./repeated-word');


describe('repeatedwords', () => {
  it('console logs value', () => {
    let str = 'ipsum lorem this big dog ate ate red crayons because he\'s a marine pupper hoorah lorem ipsum';
    expect(repeatedWord(str)).toEqual(false);
  });

  it('has a working split method', () => {
    let str = 'ipsum lorem this big dog ate ate red crayons because he\'s a marine pupper hoorah lorem';
    let strArr = ['ipsum', 'lorem', 'lorem', 'ipsum'];
    expect(splitter(str, ' ')).toEqual(strArr);
  });
});

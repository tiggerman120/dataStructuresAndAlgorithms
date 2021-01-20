'use strict';
const { repeatedWord, splitter, stringToHash } = require('./repeated-word');


describe('repeatedwords', () => {
  it('console logs value', () => {
    let str = 'this big dog ate ate red crayons because he\'s a marine pupper hoorah';
    expect(repeatedWord(str)).toEqual(false);
  });

  it('has a working split method', () => {
    let str = 'ipsum lorem this big dog ate ate red crayons because he\'s a marine pupper hoorah lorem';
    let strArr = ['ipsum', 'lorem', 'lorem', 'ipsum'];
    expect(splitter(str, ' ')).toEqual(strArr);
  });

  it('has a working push method', () => {
    let str = 'this big dog ate ate red crayons because he\'s a marine pupper hoorah';
    expect(push(str)).toEqual(false);
  });

  it('s2h', () => {
    let str = 'this big dog ate ate red crayons because he\'s a marine pupper hoorah';
    //expect(stringToHash(str)).toEqual(false);
    expect(repeatedWord(str)).toEqual(false);
  });
});

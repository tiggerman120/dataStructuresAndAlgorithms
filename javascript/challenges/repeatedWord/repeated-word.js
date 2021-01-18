'use strict';

function splitter(string, seperator) {
  let cache = [];
  let cacheInt = 0;
  let lastWord = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === seperator) {
      cacheInt++;
      lastWord = '';
    }
    else {
      lastWord = lastWord + string[i];
      cache[cacheInt] = lastWord;
    }
  }
  console.log(cache);
  return cache;
}


function repeatedWord(string) {
  let str = splitter(string, ' ');
  console.log(str);
  let j = 0;

  let wordCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[j]) {
      console.log(str[i]);
      console.log(str[j]);
      wordCounter++;
      console.log(wordCounter);
      j++;
      console.log(j);
      console.log(`in if statement ${wordCounter}`);
      if (wordCounter === 2) {
        console.log(str[i]);
        return str[i];
      }
    }
  }
}

module.exports = { repeatedWord, splitter };

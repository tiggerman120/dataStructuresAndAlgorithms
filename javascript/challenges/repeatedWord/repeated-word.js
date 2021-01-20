'use strict';

function splitter(string, seperator) {
  let cache = [];
  let cacheInt = 0;
  let lastWord = '';
  console.log(string);
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
  return cache;
}

// function push(string) {
//   console.log(string);
//   let str = splitter(string, ' ');
//   console.log(str);
//   let checkArr = [];
//   let j = 0;
//   for(let i = 0; str.length; i++) {
//     // checkArr[j] = str[i];
//     // j++;
//     // checkArr[j];
//   }
// }

// function repeatedWord(string) {
//   let str = splitter(string, ' ');
//   console.log(str);
//   let wordCounter = 0;
//   for (let i = 0; i < str.length; i++) {
//     //console.log(str[i]);
//     let j = 0;
//     if (str[i] === str) {
//       console.log(str[i]);
//       console.log(str[j]);
//       wordCounter++;
//       j += 1;
//       if (wordCounter === 2) {
//         console.log(str[i]);
//         return str[i];
//       }
//     }
//   }
// }

function stringToHash(string) {
  var hash = 0;

  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash;
}

function repeatedWord(string) {
  let str = splitter(string, ' ');//splitting the string into an array of ind words
  let arr = [];//instantiate arr
  for (let i = 0; i < str.length; i++) {
    let hashedString = (stringToHash(str[i]));//hashing the ind words and capturing the result
    if (arr.includes(hashedString)) {//if the arr includes the hashed string
      console.log(str[i]);
      return str[i];//return the string at index
    } else {
      arr[i] = hashedString;//else put the words into the array at their index position
    }
  }
}


module.exports = { repeatedWord, splitter, stringToHash };

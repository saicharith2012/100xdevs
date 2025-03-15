/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // let sortedString1 = str1.toLowerCase().split("").sort();
  // let sortedString2 = str2.toLowerCase().split("").sort();

  // if (sortedString1.length !== sortedString2.length) {
  //   return false;
  // }

  // for (let i = 0; i < sortedString1.length; i++) {
  //   if (sortedString1[i] !== sortedString2[i]) {
  //     return false;
  //   }
  // }

// split() takes a delimeter as an input (the symbol where the string needs to split each time.)

  let sortedString1 = str1.toLowerCase().split("").sort().join("");
  let sortedString2 = str2.toLowerCase().split("").sort().join("");

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;

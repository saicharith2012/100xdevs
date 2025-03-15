/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const letters = str.toLowerCase().split("");
  let finalString = ""
  for(let i = 0; i<letters.length; i++) {
    if(letters[i] >= 'a' && letters[i] <= 'z') {
      finalString += letters[i]
    }
  }
  let start = 0;
  let end = finalString.length - 1;
  while (start <= end) {
    if (finalString[start] != finalString[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;

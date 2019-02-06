// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let arr = str.split("");
  let rev = arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== rev[i]) {
      debugger;
      return false;
    }
  }
  return true;
}
palindrome("Fish hsif");
module.exports = palindrome;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  debugger;
  let max = 0;
  let maxchar = "";
  let obj = {};
  for (let ele of str) {
    obj[ele] = obj[ele] + 1 || 1;
  }
  for (let val in obj) {
    if (obj[val] > max) {
      max = obj[val];
      maxchar = val;
    }
  }
  return maxchar;
}

maxChar("aaa");
module.exports = maxChar;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// best solution
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB) ? true : false;
}

function cleanString(string) {
  return string
    .replace(/[^\w]/, "")
    .split("")
    .sort()
    .join("");
}
// function anagrams(stringA, stringB) {
//   let obj1 = map(stringA);
//   let obj2 = map(stringB);
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (let val in obj1) {
//     if (obj1[val] !== obj2[val]) {
//       return false;
//     }
//   }
//   return true;
// }

// function map(string) {
//   let obj = {};
//   let a = string.replace(/[^\w]/g, "").toLowerCase();
//   for (let val of a) {
//     obj[val] = obj[val] + 1 || 1;
//   }
//   return obj;
// }

module.exports = anagrams;

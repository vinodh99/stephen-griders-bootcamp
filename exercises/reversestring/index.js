// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	debugger;
//   return str.split("").reduce((rev, val) => val + rev, "");
// }
function reverse(str) {
  let reversed = "";
  for (let element of str) {
    reversed = element + reversed;
    debugger;
  }
  return reversed;
}

reverse("abcd");
module.exports = reverse;

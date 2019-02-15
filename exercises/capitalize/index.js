// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(" ").map(word => {
    // let cap = word.split("");
    // cap[0] = cap[0].toUpperCase();
    // return cap.join("");
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

module.exports = capitalize;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let stairs = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}
// function steps(n) {
//   let k = n;
//   while (k !== 0) {
//     let str = "";
//     for (let j = 0; j < n - k + 1; j++) {
//       str += "#";
//     }
//     for (let i = 0; i < k - 1; i++) {
//       str += " ";
//     }
//     console.log(str);

//     k--;
//     debugger;
//     str = "";
//   }
// }
module.exports = steps;

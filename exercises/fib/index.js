// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoization solution
function memoize(fn) {
  let values = {};
  return function(...args) {
    if (values[args]) {
      return values[args];
    }
    let result = fn.apply(this, args);
    values[args] = result;
    return result;
  };
}
function slowfib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(slowfib);
// recursive solution
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   let sum = fib(n - 1) + fib(n - 2);
//   debugger;
//   return sum;
// }
// fib(5);
// iterative solution
// function fib(n) {
//   let result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     let a = result[i - 1];
//     let b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }
// function fib(n, i = 0, j = 1) {
//   let temp = j;
//   debugger;
//   if (n === 1) {
//     debugger;
//     return j;
//   } else {
//     j = j + i;
//     i = temp;
//     debugger;
//   }
//   n--;
//   fib(n, i, j);
// }
// fib(9);

module.exports = fib;

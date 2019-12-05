// ES6

const sum = ((...args) => args.reduce((a,b) => a + b));

function applyAll(func,...args) {
  return func.call(this, ...args);
}

applyAll(sum,1,2,3,4,5);

// Without ES6:

// function sum() {
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }
//
// function applyAll(func) {
//   return func.apply(this, [].slice.call(arguments, 1));
// };
//
// console.log(applyAll(sum, 10, 2, 3));
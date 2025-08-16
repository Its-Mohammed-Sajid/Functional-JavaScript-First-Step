// Definition - Currying is the process of
// transforming a function that takes multiple 
// arguments into a sequence of functions that
// each takes only one argument.


// // 1. Example without currying :

// function add(a, b){
//   return a + b;
// }

// console.log(add(2, 3)); // 5
// // Here, add takes two arguments at once.

// // 2. Example with currying

// function add(a){
//     return function(b){
//         return a + b;
//     }
// }

// console.log(add(2)(3)) // 5

// // Now, instead of passing both arguments
// // together, we pass them one by one. 


// 3. Example with currying using modern way (Arrow function) 

const add = a => b => a + b;

console.log(add(2)(3)); // 5

// Currying breaks a function into smaller functions,
// each taking a single argument

// This is Useful in functional programming for reusability,
// compostion and cleaner code.


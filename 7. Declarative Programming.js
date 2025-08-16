// Definition - Declarative programming means you
// describe what you want to do, not how to do it
// step by step. 

// We focus on the result instead of process

// // 1. Example (Imperative - how to do it)

// const numbers = [1, 2, 3, 4];
// let doubled = [];

// for(let i = 0; i < numbers.length; i++){
//   doubled.push(numbers[i] * 2); 
// }

// console.log(doubled); // [2, 4, 6, 8]

// // Here, we tell the computer step by step how to 
// // loop and push values.


// 2. Example (Declarative - what to do)

const number = [1, 2, 3, 4];
const doubled = number.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]

// Here, we just declare that we want to map each numbet
// to its double.
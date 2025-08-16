// Function Composition in Functional JavaScript :
// Combining two or more functions together
// to make a new function, where the output of one
// function become the input of the next.

// It’s like chaining functions in a pipeline.

const add5 = (x) => x + 5;
const double = (x) => x * 2;

// Compose functions manually
const add5ThenDouble = (x) => double(add5(x));

console.log(add5ThenDouble(10)); 
// step 1. add5(10) - 15
// step 2. double(15) - 30
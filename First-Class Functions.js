// In Functional JavaScript, First-Class Function means
// that functions are treated like values.

// That means :
// 1. We can store functions in variables.
// 2. We can pass functions as arguments to other functions.
// 3. We can return functions from other functions.
// 4. We can store them in arrays/objects just like numbers or strings.

// Example 

// Store function in variable
const greet = function(name){
  return "Hello " + name;
};

// Pass function as argument
function callMe(fn){
  return fn("Sajid"); 
}

console.log(callMe(greet)); // "Hello Sajid"
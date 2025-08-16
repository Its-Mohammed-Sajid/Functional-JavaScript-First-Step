// // 1. Function as an Argument (Callback Example)

// function greet(name){
//    return "Hello " + name;
// }

// function processUserInpur(fn){
//    return fn("Sajid");
// }

// console.log(processUserInput(greet));
// // Output : Hello Sajid

// Here, processUserInput is a higher-order function
// because it takes another function (greet) as input.




// // 2. Function Returning Another Function

// function multiplier(x){
//    return function(y){
//       return x * y;
//    };
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

// const triple = multiplier(3);
// console.log(triple(5)); // 15

// Here, multiplier  is a higher-order function 
// because it returns another function.


// 3. Another Example of HOFs

function operate(fn, x, y){
  return fn(x, y);
}

function add(a, b){
  return a + b;
}

console.log(operate(add, 3, 4));
// Output : 7
// Here, operate is higher order function


// A Higher-Order Function is any function that 
// works with functions (by taking them in, returning them, or both). 
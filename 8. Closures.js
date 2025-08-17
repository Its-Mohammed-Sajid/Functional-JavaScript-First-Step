// A closure is a function that carries its
// lexical environment and can access those variables
// later as well.

// // Example 1

// function outer() {
//   let count = 0; // outer scope variable (lexical environment) of inner function
  
//   function inner() {
//     count++;
//     return count;
//   }
  
//   return inner;
// }

// const counter = outer();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// Here , `outer` finished execution, but `inner`
// still access to `count`  because of closure,

// That’s why `counter()` keeps updating the same `count`.



// // Example 2

// function outer() {
//   let name = "SAJID"; // Outer Variable (Lexical Scope of inner function)
  
//   function inner() {
//     console.log("Hello " + name);
//   }
  
//   return inner
// }

// const greet = outer();
// greet(); // Hello SAJID

// // Here, `outer` finished execution, but `inner` still
// // access to `name` because of closure.



// 3. Last Example with full Explanation

// Normal case (without closure)

function test() {
  let x = 10;
  console.log(x);
}

test(); 
// Output: 10

// When `test()` runs:

// - A variable `x = 10` is created in memory.
// - It prints `10`.
// - As soon as the function finishes → its
//  **local scope is destroyed**, meaning `x` is removed from memory.
//  So you can’t access `x` later.


// Closure case

function outer() {
  let name = "Shajid";  // outer variable

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer(); // call outer()
greet(); // Hello Shajid

// Here:

// - `outer()` runs, and `name = "Shajid"` is created.
// - Normally, when `outer()` finishes, `name` should be deleted.
// - But here, `outer()` **returns `inner` function**.
// - Because of **closure**, the `inner` function still remembers the variable `name`.
// - So when you call `greet()`, it can still access `name`.



// Short theory of this example :
//  When a function finishes, its local variables are
//  usually deleted from memory. But with a closure,
//  those variables stay alive because the inner 
//  function keeps a reference to them.
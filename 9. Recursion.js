// Recursion is way to do repetition without loops, by making a function
// call itself until the task is done.


// Example :

function factorial(n){
  if(n === 0) return 1;  // This is Base Case
  
  return n * factorial(n-1); // This is Recursive Case
}

console.log(factorial(5)); // 120


// ## How it works

// A recursive function keeps calling itself until the base case is reached. Each call adds to the call stack, and once the base case returns, the stack unwinds in reverse, combining results step by step.

// ### 1. Recursion uses the call stack

// - Every function call is stored in a structure called the call stack.
// - Think of it like pile of plates : the last plate you put on top will be the first you take off.
// - Every time a recursive function calls itself, a new plate is added on top of the stack.

// ### 2. Each call waits for the next one

// - When `factorial(5)`  calls `factorial(4)` , it cannot finish until `factorial(4)`  gives an answer.
// - Similarly, `factorial(4)` waits for `factorial(3)` .
// - So all the calls are waiting in the stack until the base case is reached.

// ### 3. When the base case returns

// - The base case is the stopping point ( `n === 0` ).
// - Once we reach it, the function start returning values instead of making new calls.

// ### 4. The Stack unwind and combines results

// - The process of returning back step by step is called **stack unwinding**.

// Explanation of example :

// Values added in call stack

// 1st call - `factorial(5)` = `5 * factorial(4)`

// 2nd call - `factorial(4)` = `4 * factorial(3)`

// 3rd call - `factorial(3)` = `3 * factorial(2)`

// 4th call - `factorial(2)` = `2 * factorial(1)`

// 5th call - `factorial(1)` = `1 * factorial(0)` - on 5th call the base case is reached - `factorial(0)` = 1 (we return 1 on hitting base case)

// Then Stack unwind and combines result :
// returning back step by step after hitting base case.

// `factorial(1) = 1 * 1 = 1`

// `factorial(2) = 2 * 1 = 2`

// `factorial(3) = 3 * 2 = 6`

// `factorial(4) = 4 * 6 = 24`

// `factorial(5) = 5 * 24 = 120`
// // Not-Pure Function :

// let name = "Alonzo";

// function greet(){
//     console.log(`Hello, ${name}!`)
// }

// greet();
// // Hello, Alonzo!

// name = "Alan"; // Name Changed

// greet()
// // Hello, Alan!


// // Pure Function :

// function greet(name){
//     return `Hello, ${name}!`
// }

// greet("Alanzo");
// // Hello, Alonzo!

// console.log(greet("Alan")); 
// // Hello, Alan!



// Imperative Programming and Functional Programming
// See The DIffrence

// Imperative :

// let name = "Alonzo";
// let greeting = "Hi";

// console.log(`${greeting}, ${name}!`);
// // Hi, Alonzo!

// greeting = "Howdy";

// console.log(`${greeting}, ${name}!`);
// // Howdy, Alonzo!


// Functional :

function greet(greeting, name){
    return `${greeting}, ${name}`;
}

greet("Hi,", "Alonzo!");
// Hi, Alonzo!

greet("Howdy,", "Alonzo!");
// Howdy, Alonzo!


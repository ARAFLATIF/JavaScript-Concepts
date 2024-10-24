Destructuring Function Parameters
Destructuring can also be used directly in function parameters to extract values from objects or arrays passed as arguments.


  EXAMPLE WITH OBJECTS : 

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet({ name: "Peter", age: 50 });
// Output: Hello, Peter. You are 50 years old.



EXAMPLE WITH ARRAYS:

function sum([a, b]) {
    return a + b;
}

console.log(sum([5, 10])); // Output: 15



Destructuring simplifies the process of extracting values from arrays and objects, 
  making code more readable and concise. It is particularly useful when dealing with complex data structures 
  or when you only need specific parts of an object or array.


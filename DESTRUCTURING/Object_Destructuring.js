Object Destructuring
Object destructuring extracts properties from objects and assigns them to variables.

  BASIC SYNTAX : 

const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25


Features
Renaming Variables: You can rename variables during destructuring.

  const { name: firstName } = person;
console.log(firstName); // Output: Alice



Default Values: Provide default values for properties that might be undefined.

const { height = "unknown" } = person;
console.log(height); // Output: unknown



Nested Objects: Destructure nested objects by using nested braces.

  const user = { address: { city: "New York" } };
const { address: { city } } = user;
console.log(city); // Output: New York


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


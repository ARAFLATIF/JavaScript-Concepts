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



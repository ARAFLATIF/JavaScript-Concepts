Dot Notation
This is a common way to access object properties using the dot (.) operator.

  const person = { name: 'John', age: 30 };
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

Dot notation is useful when the property name is known ahead of time


Square Bracket Notation
This method uses square brackets [] to access properties. It is particularly useful when the property name is dynamic or not a valid identifier.

  const person = { name: 'John', age: 30 };
const propName = 'name';
console.log(person[propName]); // Output: John
console.log(person['age']); // Output: 30

Square bracket notation allows for accessing properties using variables or strings



Object Destructuring
This syntax allows you to extract properties from an object into separate variables.

  const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30

Object destructuring is a concise way to extract multiple properties at once

Nested Objects
Objects can contain other objects as properties, creating nested structures.

const person = {
  name: 'John',
  contact: {
    phone: '987-654-3210',
    email: 'john123@xyz.com',
    address: {
      city: 'Berlin',
      country: 'Germany'
    }
  }
};
console.log(person.contact.address.city); // Output: Berlin

Accessing nested properties involves chaining dot or square bracket notation


Nested Arrays
Arrays can contain objects or other arrays as elements.

const students = [
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 22 },
  [
    { name: 'Alice', age: 21 },
    { name: 'Charlie', age: 19 }
  ]
];
console.log(students[2][0].name); // Output: Alice

Accessing elements in nested arrays involves using multiple sets of square brackets




Summary Example
Here is a summary example that covers creating an object, accessing its properties, modifying it, and nesting arrays and objects:


// Creating an object literal
const person = {
  name: 'John',
  age: 30,
  contact: {
    phone: '987-654-3210',
    email: 'john123@xyz.com',
    address: {
      city: 'Berlin',
      country: 'Germany'
    }
  },
  friends: [
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 22 }
  ]
};

// Accessing properties
console.log(person.name); // Output: John
console.log(person.contact.address.city); // Output: Berlin
console.log(person.friends[0].name); // Output: Jane

// Modifying properties
person.age = 31;
console.log(person.age); // Output: 31

// Adding new properties
person.occupation = 'Developer';
console.log(person); // Output: { name: 'John', age: 31, contact: {...}, friends: [...], occupation: 'Developer' }

// Deleting properties
delete person.age;
console.log(person); // Output: { name: 'John', contact: {...}, friends: [...], occupation: 'Developer' }

// Nesting arrays and objects
const nestedArray = [
  { name: 'Alice', age: 21 },
  [
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 25 }
  ]

  

Adding Properties
You can add new properties to an object at any time.

const person = { name: 'John', age: 30 };
person.occupation = 'Developer';
console.log(person); // Output: { name: 'John', age: 30, occupation: 'Developer' }


Updating Properties
Existing properties can be updated by reassigning a new value.

const person = { name: 'John', age: 30 };
person.age = 31;
console.log(person); // Output: { name: 'John', age: 31 }



Deleting Properties
Properties can be removed using the delete operator.

const person = { name: 'John', age: 30 };
delete person.age;
console.log(person); // Output: { name: 'John' }


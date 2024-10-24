Spread syntax can also be used with objects to create shallow copies or merge objects:

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { x: 1, y: 2, z: 3 }


This creates a new object containing all properties from obj1 and obj22.
Key points about spread syntax:
It provides a concise way to pass multiple arguments to functions.
It's useful for combining arrays or creating shallow copies.
With objects, it creates a new object with properties from the spread objects.
It only performs a shallow copy, so nested objects or arrays are still referenced, not duplicated3.
Spread syntax enhances JavaScript's expressiveness, making it easier to work with arrays and objects in various contexts.

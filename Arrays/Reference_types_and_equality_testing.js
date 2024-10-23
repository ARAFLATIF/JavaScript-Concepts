Reference Types
Arrays are reference types, meaning they are stored and passed by reference.

  let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]


Equality Testing
When comparing arrays using == or ===, it checks for reference equality, not deep equality.

  let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false

You can use spread syntax to expand elements of one array into another:

const fruits = ["Apple", "Banana"];
const moreFruits = ["Orange", ...fruits, "Mango"];

console.log(moreFruits); // Output: ["Orange", "Apple", "Banana", "Mango"]


This creates a new array that includes all elements from fruits, plus additional elements

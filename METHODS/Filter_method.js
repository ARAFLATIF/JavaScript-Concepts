The Filter Method
Overview
The filter method is a powerful tool in JavaScript that allows you to create a new array with all elements that pass the test implemented by a provided function. It does not modify the original array but returns a new one.
Syntax
The syntax of the filter method is as follows:

array.filter(callback(element[, index[, array]]), thisArg)

callback: A function to be executed on each element of the array. It takes three arguments:
element: The current element being processed.
index: The index of the current element (optional).
array: The array filter was called upon (optional).
thisArg: An optional object to which this can refer in the callback function.

  EXAMPLE : 

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


Key Points
New Array: The filter method creates a new array with elements that pass the test.
Callback Function: The callback function is executed for each element in the array.
Optional Arguments: The callback function can take index and array as optional arguments.
thisArg: An optional value can be passed as the context for the callback function.
No Modification: The original array is not modified



Filter Exercise
Example Exercise
Here is an example exercise where you practice using the filter method:

const cars = ["Bentley", "BMW", "Bertone", "Toyota", "Honda"];
const filteredCars = cars.filter(function(car) {
    return car.startsWith("B");
});
console.log(filteredCars); // Output: ["Bentley", "BMW", "Bertone"]

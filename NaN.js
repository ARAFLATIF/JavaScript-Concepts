In JavaScript, NaN stands for "Not a Number" and is a special value that indicates the result of an operation that cannot produce a meaningful numerical result.
  Here are the key aspects of NaN in JavaScript:


Definition and Scope
NaN is a property of the global object, making it a variable in global scope. 
  It is non-configurable and non-writable in modern browsers


How NaN is Generated
NaN is returned in several scenarios:
Failed number conversion: When a string or other non-numeric value cannot be converted to a number, such as parseInt("blabla"), Number(undefined), or implicit conversions like Math.abs(undefined)135.
Math operations with invalid results: Operations that result in an invalid or undefined mathematical result, such as Math.sqrt(-1) or 0 * Infinity135.
Indeterminate forms: Operations involving NaN itself, except for bitwise operations, will usually result in NaN1.
Operations on non-numeric values: Performing arithmetic operations (except addition) on numeric values and strings, such as 4 - "hello"25.



Properties of NaN
Type: Despite its name, NaN is of type number. Using the typeof operator on NaN returns "number"27.
Comparison: NaN compares unequal to any other value, including another NaN value, using ==, !=, ===, and !== operators. Relational comparisons (>, <, >=, <=) involving NaN always return false137.
Falsiness: NaN is one of the falsy values in JavaScript, meaning it will behave as false in a boolean context1.



  Checking for NaN
isNaN() function: This function determines whether a value is NaN after converting it to a number if necessary. 
  However, it can be confusing because it coerces non-numeric values to numbers before testing6.

  console.log(isNaN(4 - "hello")); // true
console.log(isNaN("123ABC")); // true



Number.isNaN() method: Introduced in ECMAScript 2015 (ES6), this method is more precise as it only returns true if the value is already a NaN and does not perform any coercion46.


  console.log(Number.isNaN(4 - "hello")); // true
console.log(Number.isNaN("123ABC")); // false



Propagation of NaN
NaN propagates through mathematical operations, meaning that if NaN is involved in any arithmetic operation (except exponentiation with an exponent of 0), the result will usually be NaN15.

  console.log(5 + NaN); // NaN
console.log(NaN ** 0); // 1 (exception)



Practical Use
NaN is useful for detecting error conditions in numerical computations. It is often sufficient to test for NaN once at the end of a calculation to ensure that no invalid operations occurred15.



  In summary, NaN is an essential concept in JavaScript for handling invalid or undefined numerical results, and understanding its behavior and how to check for it is crucial for robust numerical computations.

  

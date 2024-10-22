In JavaScript, undefined and null are two distinct concepts that indicate the absence of a value, 
  but they serve different purposes and have different behaviors.


  Undefined
Definition
undefined is a primitive value that represents a variable that has not been assigned a value or has been declared but not initialized


Examples
Undeclared Variable:

console.log(y); // ReferenceError: y is not defined


If a variable is not declared, attempting to access it will throw a ReferenceError.
Declared but Not Initialized:

let x;
console.log(x); // undefined

If a variable is declared but not initialized, it will have the value undefined.


  
Function Return:

function sayHi(name) {
  console.log(`Hi, ${name}`);
}
let result = sayHi('John');
console.log(result); // undefined

A function that does not explicitly return a value will return undefined



Checking for Undefined
You can check if a variable is undefined using the strict equality operator (===) or the typeof operator:

let x;
if (x === undefined) {
  console.log("x is undefined");
}
if (typeof x === "undefined") {
  console.log("x is undefined");
}

Using typeof is safer because it does not throw an error if the variable has not been declared




Null
Definition
null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value


Examples
Explicit Assignment:

let x = null;
console.log(x); // null

You can explicitly assign null to a variable to indicate the absence of a value.



  Clearing a Reference:

let obj = { name: "John" };
obj = null;
console.log(obj); // null

Assigning null to an object reference can be used to clear the previous value.




  Typeof Null
Despite being a primitive, typeof null returns "object", which is a historical anomaly:

console.log(typeof null); // "object"



Comparison Between Null and Undefined


Loose Equality
null and undefined are loosely equal but not strictly equal:

console.log(null == undefined); // true
console.log(null === undefined); // false

The loose equality operator (==) coerces operands to boolean values, making both null and undefined equal to false.
  However, the strict equality operator (===) considers them unequal because they are of different types


Purpose
Null: Represents an intentional absence of any object value.
Undefined: Represents a lack of any assigned value or an uninitialized variable.



  Best Practices
Avoid Overwriting Undefined: In non-global scopes, avoid using undefined as an identifier to prevent unexpected behavior and confusion16.
Use Null Intentionally: Use null when you intentionally want to indicate the absence of an object value.
Check for Undefined Safely: Use typeof x === "undefined" to safely check if a variable is undefined without risking a ReferenceError if the variable is not declared




HERE IS A SUMMARY EXAMPLE : 


let x; // declared but not initialized
console.log(x); // undefined

let y = null; // explicitly assigned null
console.log(y); // null

if (x === undefined) {
  console.log("x is undefined");
}

if (typeof x === "undefined") {
  console.log("x is undefined");
}

console.log(null == undefined); // true
console.log(null === undefined); // false



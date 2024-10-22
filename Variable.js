In JavaScript, variables are containers used to store and manipulate data. 
  Here’s a comprehensive overview of how variables are declared, their scopes, and the differences between the various declaration keywords.



  Declaring Variables
JavaScript variables can be declared using three main keywords: var, let, and const.



  var
Scope: var declares function-scoped or globally-scoped variables. This means that a variable declared with var is accessible throughout the function or the entire script if declared outside any function5.
Hoisting: Variables declared with var are "hoisted" to the top of their scope, meaning their declarations are moved to the top, but their initializations are not. This can lead to unexpected behavior if accessed before their initialization5.
Redeclarations: Duplicate declarations using var do not trigger an error and do not lose their value unless the declaration has an initializer5.

  EXAMPLE : 

var x = 10;
var x = 20; // This will overwrite the previous value
console.log(x); // 20



let
Scope: let declares block-scoped variables, meaning they are only accessible within the block they are declared in (e.g., inside an if statement, for loop, or any block defined by curly braces)34.
No Hoisting: Unlike var, let variables are not hoisted in the same way. They are in a "temporal dead zone" until they are declared, meaning accessing them before declaration will result in a ReferenceError3.
No Redeclarations: You cannot redeclare a variable with the same name in the same scope using let4.

  EXAMPLE : 

if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined



const
Scope: Like let, const declares block-scoped variables34.
Immutable: The value of a const variable cannot be changed once it is assigned. However, if the value is an object or array, its properties or elements can still be modified4.
Initializer Required: const variables must be initialized at the time of declaration. It is a syntax error to declare a const variable without an initializer3.

  EXAMPLE :

const x = 10;
x = 20; // TypeError: Assignment to constant variable.


Declaration and Initialization
Declaration: This is the part where you specify the variable name and the keyword (var, let, or const).
Initialization: This is the part where you assign a value to the variable. For var and let, initialization is optional, but for const, it is mandatory3.

  EXAMPLE : 

let x; // Declaration without initialization
x = 10; // Initialization



Variable Scope
Global Scope: Variables declared outside any function or block are in the global scope and are accessible from anywhere in the script3.
Function Scope: Variables declared inside a function are in the function scope and are only accessible within that function3.
Block Scope: Variables declared with let or const inside a block (defined by curly braces) are in the block scope and are only accessible within that block3.




  Best Practices
Always Declare Variables: It is good practice to always declare variables before using them to avoid creating global variables unintentionally13.
Use const for Constants: Use const for values that should not change14.
Use let for Variables: Use let for variables that may need to be reassigned14.
Avoid var: Unless you need to support older browsers, it is generally recommended to avoid using var due to its potential for confusion and errors14.

  EXAMPLES : 


Single Variable Declaration

let name = "John Doe";
console.log(name); // "John Doe"



Multiple Variable Declaration

let name = "John Doe", age = 30, isAdmin = true;
console.log(name, age, isAdmin); // "John Doe" 30 true


Block Scope Example

if (true) {
  let message = "Hello";
  console.log(message); // "Hello"
}
console.log(message); // ReferenceError: message is not defined



Const Example

const PI = 3.14159;
console.log(PI); // 3.14159
PI = 2.5; // TypeError: Assignment to constant variable.



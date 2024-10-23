Syntax
If Statement


if (condition) {
  // Code to be executed if the condition is true
}


If-Else Statement

if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}


If-Else If Statement

if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else {
  // Code to be executed if both conditions are false
}


EXAMPLES : 

Simple If Statement

let temperature = 25;
if (temperature > 20) {
  console.log("It's a warm day!");
}


If-Else Statement

let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}



If-Else If Statement

let time = 10;
if (time < 10) {
  console.log("Good morning!");
} else if (time < 20) {
  console.log("Good day!");
} else {
  console.log("Good evening!");
}




Key Points
Condition Evaluation: The condition inside the if statement must evaluate to a boolean value (true or false).
Truthy and Falsy Values: Any value that is not defined as falsy (e.g., false, 0, "", null, undefined) is considered truthy5.
Multiple Conditions: Use else if to check multiple conditions sequentially.
Logical Operators: You can use logical operators (&&, ||, !) within the condition to make more complex decisions5.
Best Practices
Readability: Keep the conditions and the code blocks clear and readable.
Nesting: Avoid deep nesting of if statements; instead, use functions or other control structures to simplify the code.
Type Coercion: Be aware of type coercion when comparing values, especially when using == instead of ===.


  Here is a summary example:

let age = 25;

// Simple if statement
if (age > 18) {
  console.log("You are an adult.");
}

// If-else statement
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// If-else if statement
let grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("D");
}




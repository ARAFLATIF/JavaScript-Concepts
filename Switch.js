The switch statement in JavaScript is a powerful tool for executing different blocks of code based on the value of an expression. Here’s a detailed overview of its syntax, how it works, and some key points to consider.


  Syntax
The basic syntax of a switch statement is as follows:

switch (expression) {
  case value1:
    // code block 1
    break;
  case value2:
    // code block 2
    break;
  //...
  case valueN:
    // code block N
    break;
  default:
    // default code block
    break;
}


How it Works
Expression Evaluation: The expression inside the switch statement is evaluated once.
Comparison: The value of the expression is compared with each case label using strict equality (===).
Execution: If a match is found, the execution starts from the corresponding case label and continues until a break statement is encountered or the end of the switch block is reached.
Default Clause: If no match is found, the code in the default clause is executed, if present125.



  Key Points
Break Statement
The break statement is used to terminate the execution of the switch block. Without it, the execution will continue into the next case clause, a phenomenon known as "fall-through."


const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0:
    console.log(0);
    // Forgotten break! Execution falls through
  case 1:
    console.log(1);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1


Default Clause
The default clause specifies the code to run if there is no match with any of the case labels. It does not have to be the last clause in the switch block, but it must be ended with a break if it is not the last clause.

  switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
    break;
}


Grouping Cases
Multiple case labels can share the same code block, allowing for more concise code when different values should trigger the same action.


  switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


Strict Comparison
The comparison between the expression and the case labels is strict (===), meaning the types must match exactly.


  let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
// No match because "0" (string) is not strictly equal to 0 (number)

EXAMPLES :

BASIC EXAMPLE : 

let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday


EXAMPLE WITH USER INPUT :


let favDrink = prompt("What's your favorite cocktail drink?");
let text;

switch (favDrink) {
  case "Martini":
    text = "Excellent choice! Martini is good for your soul.";
    break;
  case "Daiquiri":
    text = "Daiquiri is my favorite too!";
    break;
  case "Cosmopolitan":
    text = "Really? Are you sure the Cosmopolitan is your favorite?";
    break;
  default:
    text = "I have never heard of that one..";
}

console.log(text);


Best Practices
Use Break Statements: Always use break statements to avoid fall-through behavior unless it is intentionally desired.
Use Default Clause: Include a default clause to handle unexpected cases and improve code robustness.
Group Cases: Group multiple case labels to share the same code block when necessary.
Strict Comparison: Be aware of the strict comparison (===) used in switch statements to avoid type mismatch issues.

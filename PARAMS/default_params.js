Default parameters in JavaScript provide a convenient way to set default values for function arguments. Here's a simple explanation:

  What are Default Parameters?

    Default parameters allow you to specify default values for function arguments. These values are used when the function is called without an argument or with an undefined argument.

    How to Use Default Parameters

To set a default parameter, you assign a value to the parameter in the function declaration using the = operator.


  function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!


Key Points
When Default Values are Used:
The default value is used when no argument is provided
The default value is also used when undefined is explicitly passed

greet(undefined); // Output: Hello, Guest!



Multiple Default Parameters:
You can have multiple default parameters in a function:

function createUser(name = "Anonymous", age = 30, isAdmin = false) {
  // Function body
}



Default Parameters with Expressions:
Default values can be expressions or even function calls:

function getRandomGreeting() {
  const greetings = ["Hi", "Hello", "Howdy"];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function greet(name = "Guest", greeting = getRandomGreeting()) {
  console.log(`${greeting}, ${name}!`);
}


Benefits of Default Parameters
Cleaner Code: Eliminates the need for checks inside the function body
Improved Readability: Makes the function's expected inputs clearer
Flexibility: Allows functions to work with fewer arguments when needed



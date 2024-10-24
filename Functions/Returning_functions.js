Returning Functions
What Does it Mean to Return Functions?
Returning functions involves a function that, instead of returning a value, returns another function. This is a common pattern in JavaScript and is used to create closures and higher order functions5.

  EXAMPLE : 

function outer() {
    let x = 10;
    return function inner() {
        console.log(x); // Accesses x from the outer function
    };
}

const innerFunc = outer();
innerFunc(); // Logs 10

Key Points
Returning functions allows for the creation of closures.
The returned function has access to the variables of the outer function even after the outer function has completed execution


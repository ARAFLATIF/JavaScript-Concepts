What is Lexical Scope?
Lexical scope, also known as static scope, refers to the scope that is determined by the placement of variables within the source code. It means that a variable's scope is defined by its position in the code, and inner functions have access to the variables of their outer functions

EXAMPLE : 

function outer() {
    let x = 10;
    function inner() {
        console.log(x); // Accesses x from the outer function
    }
    inner();
}

outer(); // Logs 10

Key Points
Lexical scope is based on the source code structure.
Inner functions can access variables from their outer functions, creating a scope chain

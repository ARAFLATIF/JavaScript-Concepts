What is Function Scope?
Function scope in JavaScript refers to the scope created by a function. Variables declared inside a function are only accessible within that function and are not visible from outside the function

EXAMPLE : 

function myFunction() {
    let carName = "Volvo";
    // code here can use carName
}

// code here can NOT use carName

In this example, carName is a local variable to myFunction and cannot be accessed outside the function.
Key Points
Variables declared with var, let, and const inside a function all have function scope.
Local variables are created when a function starts and deleted when the function is completed.
Variables with the same name can be used in different functions without conflicts

Higher Order Functions
What are Higher Order Functions?
Higher order functions are functions that take other functions as arguments or return functions as their results. They are a key concept in functional programming and are used extensively in JavaScript


EXAMPLE : 

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function(x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

Key Points
Higher order functions can take functions as arguments.
They can also return functions as results.
They are useful for abstracting and composing functions

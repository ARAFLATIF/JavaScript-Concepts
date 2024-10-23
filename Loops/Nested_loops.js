What are Nested Loops?
Nested loops involve a loop inside another loop. The inner loop runs for each iteration of the outer loop.
Example: Nested For Loops

let adj = ["red", "big", "tasty"];
let fruits = ["apple", "banana", "cherry"];
for (let x of adj) {
    for (let y of fruits) {
        console.log(x, y);
    }
}

Output :

red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry



Real-World Analogies
Library Example: Imagine looking through each row of books in a library. The outer loop represents going through each row, and the inner loop represents looking at each book in that row.
Classroom Example: Distributing a document to every student in multiple classes. The outer loop iterates over the classes, and the inner loop iterates over the students in each class.


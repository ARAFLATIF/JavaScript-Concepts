Syntax
The basic syntax for creating an object literal involves using curly braces {} and defining properties and methods inside.


  const car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  start: function() { console.log('The car is starting.'); }
};

EXAMPLE : 

Here is an example of creating an object literal:

const student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 20,
  grades: [90, 85, 95],
  calculateAverageGrade: function() {
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
};
console.log(student.calculateAverageGrade()); // Output: 90



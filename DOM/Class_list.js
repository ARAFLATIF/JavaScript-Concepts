The classList property provides a convenient way to manipulate CSS classes on HTML elements using JavaScript. Here are the key points about classList:
Accessing classList:

const element = document.getElementById('myElement');
const classes = element.classList;


Main methods:
Add class(es):

element.classList.add('newClass');
element.classList.add('class1', 'class2');



Remove class(es):

  element.classList.remove('oldClass');
element.classList.remove('class1', 'class2');




TOGGLE CLASS :

element.classList.toggle('active');





Check if class exists:

const hasClass = element.classList.contains('myClass');




Replace class:

element.classList.replace('oldClass', 'newClass');




Iterating over classes:

element.classList.forEach(className => {
  console.log(className);
});




Getting number of classes:

const classCount = element.classList.length;




Getting class at specific index:

const secondClass = element.classList.item(1);




Converting to array:

const classArray = Array.from(element.classList);



Key benefits of using classList:
Provides a cleaner API compared to manipulating the className string directly
Automatically handles adding/removing duplicate classes
Offers methods for common class manipulation tasks
Returns a live DOMTokenList, reflecting real-time changes to the element's classes
classList is widely supported in modern browsers and offers a powerful way to dynamically modify an element's CSS classes.

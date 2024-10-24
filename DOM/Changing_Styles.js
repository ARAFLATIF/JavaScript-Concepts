To change styles of HTML elements using JavaScript, you have several options:
Modifying the style property directly:

element.style.color = "red";
element.style.fontSize = "20px";


Adding or removing CSS classes:

// Add a class
element.classList.add("highlight");

// Remove a class 
element.classList.remove("hidden");

// Toggle a class
element.classList.toggle("active");



Setting the className property:

element.className = "new-class another-class";



Using setAttribute to set the style attribute:

element.setAttribute("style", "color: blue; font-size: 18px;");



Modifying CSS custom properties (variables):

document.documentElement.style.setProperty("--main-color", "purple");



Key points to remember:
Style property names use camelCase in JavaScript (e.g., backgroundColor instead of background-color).
Adding/removing classes is often preferred for maintainability.
Inline styles (using style property) have high specificity and may override other styles.
For complex style changes, consider modifying a stylesheet or using CSS custom properties.
When changing styles, it's important to consider performance. Batch your style changes when possible, 
  and avoid repeatedly accessing or modifying styles in tight loops.



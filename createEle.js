// Create a new paragraph element
let newParagraph = document.createElement("p");

// Set the text content of the new paragraph
newParagraph.textContent = "This is a newly created paragraph.";

// Append the new paragraph to the 'container' div
let container = document.getElementById("container");
container.appendChild(newParagraph);
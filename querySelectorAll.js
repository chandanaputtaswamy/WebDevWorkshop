// Select all elements with the class 'text'
let paragraphs = document.querySelectorAll(".text");

// Add a click event to the button to change text for all paragraphs
document.getElementById("changeText").addEventListener("click", () => {
  paragraphs.forEach((paragraph, index) => {
    // Update the text content of each paragraph
    paragraph.textContent = `Updated paragraph ${index + 1}`;
  });
});
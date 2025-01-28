let button = document.getElementById("changeButton");

button.addEventListener("click", function() {
  // When the button is clicked, change the text of the paragraph
  let message = document.getElementById("message");
  message.textContent = "The text has been changed!";
});
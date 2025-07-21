// Event listener for greet button or event handler
document
  .getElementById("greenButton")
  .addEventListener("click", displayGreeting);
//   Event listener for change text button or event handler
document
  .getElementById("changeTextButton")
  .addEventListener("click", changeText);

function displayGreeting() {
  let displayGreeting = document.getElementById("greeting");
  displayGreeting.textContent = "Hello!, Welcome to ABC Technologies";
}
function changeText() {
  let changedText = document.getElementById("textParagraph");
  changedText.textContent = "Text has been changed";
}

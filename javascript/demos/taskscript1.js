function displayWelcomeMessage() {
  let enteredName = document.getElementById("name").value;
  let enteredColor = document.getElementById("color").value;

  //   enteredName.style.color = enteredColor;
  let resultElement = document.getElementById("result");
  resultElement.style.color = enteredColor;
  resultElement.innerHTML = "Welcome " + "<b>" + enteredName + "</b>!";
}

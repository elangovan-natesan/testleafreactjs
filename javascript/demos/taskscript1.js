function displayWelcomeMessage() {
  let enteredName = document.getElementById("name").value;
  let enteredColor = document.getElementById("color").value;

  //   enteredName.style.color = enteredColor;
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Welcome <b>" + enteredName + "</b>!";
  resultDiv.style.color = enteredColor;
}

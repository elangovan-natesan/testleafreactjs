// console.log("hello world!");
// alert("Hi");

function greeting() {
  var name = prompt("Enter Your Name");
  console.log("name : " + name);
}

function displayName() {
  var name = document.getElementById("inputName").value;
  console.log("entered name  : " + name);
  document.getElementById("inputValue").innerText = "entered name is : " + name;
  document.getElementById("inputHtml").innerHTML = "hello <b>world</b>!";
  document.writeln("Hello Ram!");
}

// greeting();

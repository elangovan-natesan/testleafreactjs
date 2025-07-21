function addNumbers() {
  console.log(
    "type of num1 before parseInt : " +
      typeof document.getElementById("num1").value
  );

  let num1 = parseInt(document.getElementById("num1").value); //<input> element will always return the value as a string so we need to parse.
  let num2 = parseInt(document.getElementById("num2").value); //<input> element will always return the value as a string so we need to parse.
  console.log("type of num1 after parseInt : " + typeof num1);

  let addedValue = parseInt(num1 + num2);
  document.getElementById("operationResult").innerText =
    "Result is : " + addedValue;
}

function load() {
  document.getElementById("num1").focus();
  //   document.getElementById("div1").style.background = "pink";
  document.getElementById("div1").style.border = "1px solid black";
  //   document.getElementById("div1").style.padding = "50px";
}

function performOperation() {
  console.log(
    "type of num1 before parseInt : " +
      typeof document.getElementById("num1").value
  );
  let num1 = parseInt(document.getElementById("num1").value); //<input> element will always return the value as a string so we need to parse.
  let num2 = parseInt(document.getElementById("num2").value);
  let result;
  console.log("type of num1 after parseInt : " + typeof num1);
  let selectedOperation = document.getElementById("operation").value;
  console.log("selected dropdown value : " + selectedOperation);
  if (selectedOperation == "addition") {
    result = num1 + num2;
  } else if (selectedOperation == "subtraction") {
    result = num1 - num2;
  } else if (selectedOperation == "multiplication") {
    result = num1 * num2;
  } else {
    if (num2 != 0) {
      result = num1 / num2;
    } else {
      result = "cannot divide by zero";
    }
  }

  let bold = document.getElementById("bold").checked; //returns boolean whether it is true or false (i.e) checked or not
  let italic = document.getElementById("italic").checked; //returns boolean whether it is true or false (i.e) checked or not
  let underline = document.getElementById("underline").checked; //returns boolean whether it is true or false (i.e) checked or not

  let resultPara = document.getElementById("operationResult");
  resultPara.style.fontWeight = bold ? "bold" : "normal";
  resultPara.style.fontStyle = italic ? "italic" : "normal";
  resultPara.style.textDecoration = underline ? "underline" : "none";

  document.getElementById("operationResult").innerText =
    "result is : " + result;

  console.log("checkbox value bold : " + document.getElementById("bold").value);
  console.log(
    "radio button value red : " + document.getElementById("red").value
  );

  let selectedColor = document.getElementsByName("color"); //returns list of radio button elements which has name attribute value as color.

  for (let i = 0; i < selectedColor.length; i++) {
    if (selectedColor[i].checked) {
      resultPara.style.color = selectedColor[i].value;
      break;
    }
  }
  console.log("type of : " + selectedColor);
  console.log("value of : " + selectedColor);
}

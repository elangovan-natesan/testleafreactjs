document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); //stops the form from submitting and stops reloading
  alert("form submitted");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMessage = document.getElementById("errorMessage");

  try {
    if (!name || !email || !password || !confirmPassword) {
      //checks whether the values are empty or not
      throw new Error("All fields are required!");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      throw new Error("Name should only contains letters & spaces");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      //{2,} --> two or more chars, + --> one or more chars
      throw new Error("Invalid email format");
    } else if (password.length < 8) {
      throw new Error("Password must be atleast 8 characters length");
    } else if (password !== confirmPassword) {
      throw new Error("Password doesn't match");
    } else {
      errorMessage.style.color = "green";
      errorMessage.textContent = "Form Submitted Successfully!";
    }
  } catch (error) {
    errorMessage.style.color = "red";
    errorMessage.textContent = error.message; //textContent or innerText
  }
});

function handleReset() {
  document.getElementById("errorMessage").innerText = ""; //textContent or innerText
}

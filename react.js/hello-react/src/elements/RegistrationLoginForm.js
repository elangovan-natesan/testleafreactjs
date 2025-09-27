import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";

export default function RegistrationLoginForm() {
  const styles = {
    color: "red",
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setError] = useState({});

  useEffect(() => {
    console.log("useEffect formData : " + JSON.stringify(formData));
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //getting name pty & value pty from e.target (or) object destructuring
    setFormData({ ...formData, [name]: value }); //setting the key:value pair in formData object with spread operator & setFormData
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //does not reload (or) rrefresh the page (or) prevents from submitting
    const { username, email, password, confirmPassword } = formData; //object destructuring
    const validationErrors = {}; //creating an empty object
    if (!username.trim()) {
      validationErrors.username = "name required!";
    }
    if (!email.trim()) {
      validationErrors.email = "Email Required!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      validationErrors.email = "enter proper email id";
    }
    if (!password.trim()) {
      validationErrors.password = "password Required!";
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
        password
      )
    ) {
      validationErrors.password =
        "password should contain atleast one special character, one letter, one digit & length should be minimum 8 characters";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "password did not match";
    }
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //Object.keys(validationErrors) - Returns an array of all the keys in the validationErrors object
      // //.length === 0 - Checks whether the array has zero keys, meaning the object has no properties.
      alert("form submitted successfully!");
      console.log("username :", username);
      console.log("email :", email);
      console.log("password :", password);
      console.log("confirmPassword :", confirmPassword);
    }
  };

  const handleReset = (e) => {
    console.log("form data : ", formData);
    // formData = {//didnt work
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // };
    // setFormData(formData);
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    setError({}); //setting empty object to setter function
  };

  return (
    <div>
      <h1>Registration Login form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="username"
            placeholder="enter name"
            value={
              formData.username
            } /*controlled component - react is handling*/
            onChange={handleChange}
          />
        </div>
        {errors.username && <p style={styles}>{errors.username}</p>}
        {/* This is called conditional rendering */}

        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email} /*controlled component - react is handling*/
            onChange={handleChange}
          />
        </div>
        {errors.email && <p style={styles}>{errors.email}</p>}
        {/* This is called conditional rendering */}
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={
              formData.password
            } /*controlled component - react is handling*/
            onChange={handleChange}
          />
        </div>
        {errors.password && <p style={styles}>{errors.password}</p>}
        {/* This is called conditional rendering */}
        <div>
          <label>Confirm Password : </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={
              formData.confirmPassword
            } /*controlled component - react is handling*/
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <p style={styles}>{errors.confirmPassword}</p>
        )}
        {/* This is called conditional rendering */}
        <div>
          <button type="submit">Submit</button>
          <input
            type="reset"
            value="Reset"
            onClick={
              handleReset
            } /*controlled component - react is handling the reset*/
          />
          {/* it will do default html reset for input fields ,type="reset" resets DOM inputs, It resets the native HTML form fields (only works on uncontrolled inputs or default values). & now with onClick={handleReset} it will reset via react state*/}
          {/* {/* <input type="button" value="Reset" onClick={handleReset} /> */}
          {/* DO NOT USE type="reset" unless inputs are uncontrolled (i.e) if you do not handle reset via react state */}
          {/* resetting via state - controlled component*/}
        </div>
      </form>
    </div>
  );
}

//Controlled Elements
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("xyz"); // State to store username
  const [password, setPassword] = useState("zyx"); // State to store password

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    if (!username || !password) {
      alert("Please fill in all fields");
    } else {
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div>
      <h1>Login Form - Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        {/* here onSubmit attribute work is when we press enter button then the form will get submitted */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

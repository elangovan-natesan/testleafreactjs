import React from "react";
import { Activity } from "./Activity";
import Hobbies from "./Hobbies";
import Greeting from "./Greeting";

function App() {
  //Here App is a component

  const role = "Software Developer";
  const nameList = ["ramesh", "suresh", "pankaj", "shankar"];
  const employees = [
    { id: 1, name: "ramesh", age: 25 },
    { id: 2, name: "suresh", age: 26 },
    { id: 3, name: "pankaj", age: 27 },
    { id: 4, name: "shankar", age: 28 },
  ];
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        <h1>Welcome to React!</h1>
      </header>
      <p>
        This is a simple react app created using CRA uses JSX syntax extension.
      </p>
      <hr />
      <Activity />
      <Hobbies />
      <Greeting
        name="elangovan"
        role={role}
        nameList={nameList}
        employees={employees}
      />
    </div>
  );
}

export default App; //then we should import as import App from ./App

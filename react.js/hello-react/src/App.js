import React, { useState } from "react";
import { Activity } from "./Activity";
import Hobbies from "./Hobbies";
import Greeting from "./Greeting";
import Counter from "./states/Counter";
import Inputdynamic from "./states/Inputdynamic";
import Employee from "./passing-data-from-child-to-parent/Employee";
import Student from "./passing-data-from-child-to-parent/Student";
import DataFetchingComponent from "./effects/DataFetchingComponent";

function App() {
  //Here App is a component. It is a primary component or parent component or root component

  const role = "Software Developer";
  const nameList = ["ramesh", "suresh", "pankaj", "shankar"];
  const employees = [
    { id: 1, name: "ramesh", age: 25 },
    { id: 2, name: "suresh", age: 26 },
    { id: 3, name: "pankaj", age: 27 },
    { id: 4, name: "shankar", age: 28 },
  ];
  const [empCount, setEmpCount] = useState(0); //its scope Is visible to only this component
  const [stdCount, setStdCount] = useState(0); //its scope Is visible to only this component
  const empHandler = (data) => {
    setEmpCount(data);
  };
  const stdHandler = (data) => {
    setStdCount(data);
  };
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
      Total Employees : {empCount} | Total Students : {stdCount}
      <hr />
      <Activity />
      <Hobbies />
      <Greeting
        name="elangovan"
        role={role}
        nameList={nameList}
        employees={employees}
      />
      <Counter />
      <Inputdynamic />
      <Employee empCount={empCount} empHandler={empHandler} />
      <Student stdCount={stdCount} stdHandler={stdHandler} />
      <DataFetchingComponent />
    </div>
  );
}

export default App; //then we should import as import App from ./App

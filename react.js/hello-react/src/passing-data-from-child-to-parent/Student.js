import React from "react";

export default function Student({ stdCount, stdHandler }) {
  //here stdHandler is a callback function
  const stdAddHandler = () => {
    stdCount++;
    stdHandler(stdCount);
  };
  return (
    <div>
      Student Count : {stdCount}
      <button onClick={stdAddHandler}>Add Student</button>
    </div>
  );
}

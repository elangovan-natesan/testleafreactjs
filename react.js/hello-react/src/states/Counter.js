import React, { useState } from "react";

//hooks - useState,useEffect, useContext & custom hooks.//hooks are introduced for functional component and hooks dont work in class
export default function Counter() {
  //   let purchased = false;//without useState
  const [count, setCount] = useState(1); //state //model//value can be object, string or number//Is visible to only this component
  //   banana is a variable and its name can be anything
  //   setBana is an updater fucntion and its name can be anything, when this fucntion is called it will re-renders the component
  //   parameter inside useState is the initial value of count
  const [purchased, setPurchased] = useState(false); //Is visible to only this component
  //   controller
  const incrementCount = () => {
    //first class function
    setCount(count + 1);
    // purchased = true;//without useState
    // console.log(purchased);//without useState
    setPurchased(true);
  };

  return (
    <div>
      Counter-{count}
      <br />
      <button onClick={incrementCount}>Increase Count</button>
      {/* <button onclick={incrementCount()}></button> JS button tag*/}
      <br />
      <p>{purchased ? "Already purchased" : "Get it now"}</p>
    </div> //view
  );
}

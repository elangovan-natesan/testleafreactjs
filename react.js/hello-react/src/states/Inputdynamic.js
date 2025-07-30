import React, { useState } from "react";

export default function Inputdynamic() {
  const [dynamicText, setDynamicText] = useState("");
  const dynamicTextChanged = (event) => {
    //first way
    // alert("dynamicTextChanged");
    // dynamicText = document.getElementById("name").value;
    // setDynamicText(dynamicText); //after this the Inputdynamic component will re-rendered
    //second way //best way
    setDynamicText(event.target.value); //the onChange event will get triggered & the browser passes the event object to the handler function
  };
  return (
    <div>
      <label htmlFor="name">Enter Name : </label>
      {/* In react instead of for we should use htmlFor */}
      <input
        type="text"
        name="name"
        id="name"
        required
        onChange={dynamicTextChanged}
      />
      <p>{dynamicText}</p>
    </div>
    // onChange is an event handler
  );
}

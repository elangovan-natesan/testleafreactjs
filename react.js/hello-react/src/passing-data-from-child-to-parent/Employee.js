import React from "react";

export default function Employee({ empCount, empHandler }) {
  //here empHandler is a callback function
  //{empCount, empHandler} is called object de-structuring
  const empAddHandler = () => {
    empCount++; //empCount=empCount+1;
    // console.log(empCount);//updates empCount but to re-render the component we need to call setEmpCount(empCount); since empCount & setEmpCount are declared in parent component, In parent component only we can use setEmpCount(empCount) and then empCount will get updated. so to update from child we are using empHandler function
    empHandler(empCount);
  };
  return (
    <div>
      Employee count : {empCount}
      <button onClick={empAddHandler}>Add Employee</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function DataFetchingComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //when the component is loaded this function will be called by default.
    console.log("loading");
    fetch("https://jsonplaceholder.typicode.com/posts") //fetch return a promise
      .then((response) => {
        // console.log(response);
        // console.log(response.json());

        return response.json(); //for further chaining we need return keyword
      })
      .then((jsonData) => {
        // console.log(jsonData);

        setData(jsonData); //setting fetched json data to data state variable
        setLoading(false); //setting loading state variable to false
        //suggest not to use state variable setter method inside useEffect as it will result it infinite loop if no empty dependency array or this setter method state variable is not mentioned in the depednency array.
      })
      .catch((error) => {
        console.log("something went wrong : " + error.message);
      });

    return () => {
      console.log("component unloaded");
    };
  }, []); //if [] is passed as an second argument then the useEffect hook is not dependent on any of the state variable.
  // if [x,y] is passed as an second argument then the useEffect hook is dependent on x & y state variable.
  // if no empty array is passed as second argument then the useEffect hook is dependent on all the state variable.

  return (
    <div>
      DataFetchingComponent
      <button
        onClick={() => {
          return setA(a + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          return setB(b + 1);
        }}
      >
        B
      </button>
      {a} - {b} - {JSON.stringify(data)}
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((datam) => {
            return (
              <li key={datam.id}>
                {datam.userId}-{datam.title}-{datam.body}
              </li>
            );
          })}
        </ul>
        // data.map((datam) => {
        //   return (
        //     <p key={datam.id}>
        //       {datam.userId} - {datam.id} - {datam.title} - {datam.body}
        //     </p>
        //   );
        // })
      )}
    </div>
  );
}

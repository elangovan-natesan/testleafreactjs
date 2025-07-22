import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //only one deafult component is present in the "./App" so no curly brackets needed
// index.js is the starting point (or) entry point of the application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //loads the app component in this element, which is a div with id="root" present in ./public/index.html
);

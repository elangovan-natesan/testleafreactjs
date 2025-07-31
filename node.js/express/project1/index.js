// import express from "express"; // to use import statement we need to use "type":"module" in package.json file (or) use .mjs extension instead of .js for the entry point file.
// import { employeeDetails } from "./data/employees.mjs"; // import employee details from data/employees.mjs file
const express = require("express"); //CJS syntax //to use this we need to install express package (or) library (or) dependency
const { employeeDetails } = require("./data/employees.js"); //CJS syntax //import employee details from data
console.log("node project is working");

// get post put delete - CRUD operations
const app = express(); //create an express application

const mw1 = (req, res, next) => {
  //middle ware function
  console.log(req.method);
  next(); //next() is used to call the next middleware function in the stack
};

const mw2 = (req, res, next) => {
  //middle ware function
  console.log(req.url);
  next(); //next() is used to call the next middleware function in the stack
};

const mw3 = (req, res, next) => {
  //middle ware function
  console.log(req.url);
  next();
};

app.use(mw1); //after calling first endpoint it will call first middleware function
app.use(mw2); //after calling first middleware function it will call second middleware function

app.get("/", (req, res) => {
  //   res.write("hello world xyz zyx"); //if you are using write then we need to use end method(for http module)
  //   res.end();
  // (or)
  res.send("Home Page"); //send method is used to send the response to the client(for express.js module)
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", mw3, (req, res) => {
  //mw3 will be called only for /contact endpoint
  res.send("Contact Us");
});

app.get("/employees", (req, res) => {
  const data = employeeDetails;
  res.json(data);
});

app.listen(4000, () => {
  //if you did not give this then server will not started & Node.js will run the file,nothing will listen for incoming HTTP requests
  console.log("server is running on port http://localhost:4000");
});

// const express = require("express"); //CJS syntax //to use this we need to install express package (or) library (or) dependency
import express from "express"; //ES6 syntax or module syntax //to use this we need to install express package (or) library (or) dependency
// const { router, routes } = require("./routes/employeeRoutes.js"); //import employee routes
import { router, routes } from "./routes/employeeRoutes.js"; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"
import bodyParser from "body-parser"; //import body-parser to parse the request body
const app = express(); //creating a app
const port = 5000;
app.use(bodyParser.json()); // parse the request body as JSON

// app.use("/api", router);way 1

routes(app); //way 2

app.listen(port, () => {
  //create a server and listen on port 5000
  console.log("Server is started on port http://localhost:" + port);
});

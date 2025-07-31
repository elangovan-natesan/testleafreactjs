// const { getEmployees,enterValidUrl,getEmployeeById,addEmployee,updateEmployee,deleteEmployee } = require("../controller/employeeController.js");
import {
  getEmployees,
  enterValidUrl,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js"; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"

// const express = require("express"); //this is CJS syntax (or) CommonJS syntax which is used in node.js by default
import express from "express"; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"
const router = express.Router();

// router.get("/employees", getEmployees); // Route to get employee details//way 1
const routes = (app) => {
  //way2
  app.get("/", enterValidUrl); // Route to handle invalid URL//browser supports get request & through curl command(curl http://localhost:5000/) in terminal we can get it & through postman
  app.get("/employees", getEmployees); //browser supports get request & through curl command(curl http://localhost:5000/employees) in terminal we can get it & through postman
  app.get("/employees/:id", getEmployeeById); //browser supports get request & through curl command(curl http://localhost:5000/employees/4) we can get it & through postman
  app.post("/employees", addEmployee); //note: record can be created only with postman or curl command in terminal & browser dont supports post method
  app.put("/employees/:id", updateEmployee); //note: record can be updated only with postman or curl command in terminal & browser dont supports put method
  app.delete("/employees/:id", deleteEmployee); //note: record can be deleted only with postman or curl command in terminal & browser dont supports delete method
};

export { router, routes }; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"

// module.exports = { router,routes }; // Export the router to use in other files if we use require//commonJS syntax

// const { employeeDetails } = require("../data/employeeData.js"); //CJS syntax //import employee details from data
import { employeeDetails } from "../data/employeeData.js"; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"

const enterValidUrl = (req, res) => {
  console.log(req.url);
  res.send("Please enter a valid URL");
}; //function to handle invalid URL

const getEmployees = (req, res) => {
  console.log(req.url); //log the request URL
  // return res.send(employeeDetails); //send employee details as response
  res.status(200).send(employeeDetails); //send employee details as response
}; //function to handle get employees URL

const getEmployeeById = (req, res) => {
  // req.params.id by default its data type is string
  const id = parseInt(req.params.id); //get the id from the request parameters//using parse int its data type will be converted to integer
  // console.log("id type is : " + typeof id); //log the type of id

  const employee = employeeDetails.find((employee) => {
    //find the employee with the given id
    if (employee.id === id) {
      //== is called equality operator which checks the value only
      return employee; //send the employee details as response
    }
  }); //returns the element not an array
  if (employee) {
    return res.status(200).send(employee);
  } else {
    return res.status(404).json({ message: "Employee not found" }); //if employee is not found then send 404 status code with message
  }

  // const employee = employeeDetails.map((employee) => {
  //   if (employee.id == id) {
  //     return employee; //send the employee details as response
  //   }
  // });
  // return res.send(employee);

  // employeeDetails.forEach((employee) => {
  //   if (employee.id == id) {
  //     return res.send(employee);
  //   }
  // });//just does the operation but does not return anything

  // const employee = employeeDetails.filter((employee) => {
  //   if (employee.id == id) {
  //     return employee;
  //   }
  // }); //returns the array of elements
  // return res.send(employee);
};

const addEmployee = (req, res) => {
  const id = employeeDetails.length + 1; //generate a new id for the employee
  // console.log(req.body.json());
  // const newEmployee = { id: 5, name: "elangovan", salary: 50000 };
  const newEmployee = { id: id, ...req.body }; //or { id: id, name: req.body.name, salary: req.body.salary }; //get the employee details from the request body//we need to install dependency body-parser toparse the request body.
  employeeDetails.push(newEmployee); //add the employee details to the employeeDetails array
  res.status(201).send(newEmployee);
};

const updateEmployee = (req, res) => {
  const id = parseInt(req.params.id); //get the id from the request parameters

  const updatedEmployee = { id: id, ...req.body };
  const indexOfEmployee = employeeDetails.indexOf(
    employeeDetails.find((employee) => employee.id === id)
  ); //indexOf returns the index of first ocuurence if present else it will return -1.
  // console.log("index of : " + indexOfEmployee);//prints the index

  employeeDetails.splice(indexOfEmployee, 1, updatedEmployee); //update the employeeDetails array with the updated employee details
  return res.status(200).send(updatedEmployee);
};

const deleteEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  const indexOfEmployee = employeeDetails.indexOf(
    employeeDetails.find((employee) => {
      if (employee.id === id) {
        return employee;
      }
    })
  );
  console.log("index of : " + indexOfEmployee); //prints the index

  employeeDetails.splice(indexOfEmployee, 1);

  return res.status(200).send("Record Deleted Successfully");
};

export {
  getEmployees,
  enterValidUrl,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
}; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"
// module.exports = { getEmployees, enterValidUrl, getEmployeeById, addEmployee, updateEmployee, deleteEmployee }; //export getEmployees function to use in other files if we use require

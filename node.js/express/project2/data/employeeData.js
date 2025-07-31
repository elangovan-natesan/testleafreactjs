let employeeDetails = [
  {
    id: 1,
    name: "John Doe",
    salary: 50000,
  },
  {
    id: 2,
    name: "Jane Doe",
    salary: 40000,
  },
  {
    id: 3,
    name: "Sam Smith",
    salary: 80000,
  },
  {
    id: 4,
    name: "Lisa jolie",
    salary: 90000,
  },
];

export { employeeDetails }; // this is ES6 module syntax (or) module syntax introduced from ES6 for using this we need package.json file with "type": "module"

// module.exports = { employeeDetails }; //this is CJS syntax (or) CommonJS syntax //export employee details to use in other files if we use require
// if we use import statement then we need to use export statement in this file which is module syntax (or) ES module syntax

const employeeDetails = [
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
    name: "Lisa Ray",
    salary: 90000,
  },
];

module.exports = { employeeDetails }; //export employee details to use in other files if we use require
// if we use import statement then we need to use export statement in this file

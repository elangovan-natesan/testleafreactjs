// functional programming means dont disturb the existing pty & Functional programming makes heavy use of pure functions first-class functions and HOFs.
// a)Immutability
// In FP, data is immutable, meaning once a value is set, it cant be changed. Instead of modifying an array, we create a new array.
let arr = [1, 2, 3];
newArray = [...arr, 4, 5, 6]; //spread operator
console.log("array : ", newArray); ///proper way to log array in the console

let person = {
  name: "elango",
  age: 28,
  isStudent: false,
}; //Js object
person.age = 29; //this is mutability means mutates or changes the original object.
console.log("person : ", person); //changed or mutated object.

let updatedPerson = { ...person, age: 30 }; //updates the age pty in person object//this is immutablity, not disturbing the original object by using spread operator//functional programming
console.log("updated person : ", updatedPerson);

// b)first class function
// Definition: In JavaScript, functions are first-class citizens. That means:
// Functions can be assigned to variables.
// Functions can be passed as arguments to other functions.
// Functions can be returned from other functions.
function f1() {}
function f2(f1) {}

const greet = (f1) => f1(f2); //ES6 //first class function allows to assign a function to a variable and allows to pass function as an argument and able to return a function

// c)Higher Order Function
// Definition: A Higher-Order Function is a function that does one or both of:
// Takes another function as an argument
// Returns another function

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function doMath(fn, x, y) {
  return fn(x, y);
}

console.log(doMath(add, 5, 20));

//c)1. pure function
function multiply(a, b) {
  return a + b;
}

//c)2.hof
function applyOperation(arr, operation) {
  return arr.map(operation); //returns a new array
}

let numbers = [1, 2, 3, 4, 5];
let doubled = applyOperation(numbers, (num) => multiply(num, 2));

console.log(doubled);

//c)3.ex. of hof
let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers2.map((num) => {
  return num * num;
}); //returns a new array
console.log("squared : ", squaredNumbers);

//c)4.ex. of hof
let ages = [14, 15, 18, 20, 21];
let adults = ages.filter((age) => {
  return age >= 18;
}); //returns a new array
console.log("age : ", adults);

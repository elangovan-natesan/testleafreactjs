//object
let person = {
  name: "elango",
  age: 29,
};
console.log(person);

let person2 = {
  ...person,
  city: "chennai",
};
console.log(person2);

let person3 = { person, city: "chennai" };
console.log(person3); //object within an object

//Array
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);

let numbers2 = [...numbers1, 6, 7];
console.log(numbers2);

let numbers3 = [numbers1, 6, 7];
console.log(numbers3); //array within an array

// destructuring
//1. array destructuring
const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const [first, , third] = numbers;
console.log(third);

//2. object destructuring
const student = {
  name: "elango",
  age: 29,
  city: "chennai",
};

const { name, city } = student;
console.log(name);
console.log(city);

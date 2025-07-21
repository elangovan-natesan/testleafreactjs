let data1 = 35;
console.log(typeof data1); //number

const data2 = 35.5;
console.log(typeof data2); //number

let data3 = "elangovan";
console.log(typeof data3); //string

// objects in js or js object

let person = {
  name: "elango",
  age: 28,
  isStudent: false,
  greet: function () {
    console.log("hello");
    return "hello";
  },
};

// accessing the object properties
console.log(person.age);
console.log(person.greet());

// array | list in js

// let numbers1=[];
// let numbers2 = new Array();

let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Mango", "Orange"];
let mixedArray = [11, "orange", true, null];

let courses = ["Frontend", "Backend", "Fullstack"]; //Array or List of values
console.log("courses : ", courses); //proper way to log in console for arrays
console.log("courses : " + courses); //not proper way to log in console for arrays & better for simple strings//string concatenation
console.log(`courses : ${courses}`); //not proper way to log in console for arrays & better for simple strings//template literals
console.log(courses); //proper way to log in console for arrays

function displayCourses() {
  document.getElementById("course-list").innerHTML = ""; //clears the existing list item in the div with id course-list
  let listItem;
  for (let i = 0; i < courses.length; i++) {
    listItem = document.createElement("li"); //creates <li></li>

    listItem.textContent = courses[i]; //adding text content to the created element
    console.log(listItem);
    document.getElementById("course-list").appendChild(listItem); //appending created element with text content as a child element.
  }
}

function addCourse() {
  let newCourse = document.getElementById("newCourse").value;
  let courseExists = false;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i] == newCourse) {
      courseExists = true;
      break; //Is an unconditional statement only exit from the loop.
    }
  }
  if (courseExists) {
    alert("course already exists!");
    return; //Is an unconditional statement exit from the function
  }

  if (newCourse) {
    //this means other than false or "" this block will get executed
    // let newCourseListItem = document.createElement("li"); //creates <li></li>
    // newCourseListItem.textContent = newCourse; //adding text content to the created element
    // document.getElementById("course-list").appendChild(newCourseListItem); //appending created element with text content as a child element.
    // or
    courses.push(newCourse); //appends new element to the end of an array
    // courses.unshift(newCourse); //inserts new element to the start of an array
  } else {
    alert("please entre a course name");
  }
  displayCourses();
}

function removeCourse() {
  let removeCourse = document.getElementById("removeCourse").value;

  console.log(removeCourse);

  let index = courses.indexOf(removeCourse); //if value is not found then it will return -1
  if (index != -1) {
    console.log(index);
    courses.splice(index, 1); //splices the first element from specified index number i.e the specified index element is removed
  } else {
    alert("No Course Found!");
  }
  //   courses.pop(); //removes last element from the array
  //   courses.shift(); //removes first element from the array
  displayCourses();
}

displayCourses();

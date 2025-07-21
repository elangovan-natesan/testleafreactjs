let courses = [
  { title: "Frontend", instructor: "Alice", duration: "4 weeks" },
  { title: "Backend", instructor: "John", duration: "2 weeks" },
  { title: "Fullstack", instructor: "Charlie", duration: "3 weeks" },
]; //Array or List of JS objects

function displayCourses() {
  document.getElementById("course-list").innerHTML = ""; //clears the existing list item in the div with id course-list
  //   courses.forEach((course) => {
  //     let listItem = document.createElement("li");
  //     listItem.textContent = `${course.title} by ${course.instructor} within ${course.duration}`;
  //     document.getElementById("course-list").appendChild(listItem);
  //   });

  courses.forEach((course, index) => {
    //forEach does not return anything
    let listItem = document.createElement("li");
    listItem.innerHTML = `${course.title} by ${course.instructor} within ${course.duration}
    <button type="button" onclick="editCourse(${index})">Edit</button>
    <button type="button" onclick="deleteCourse(${index})">Delete</button>`;
    document.getElementById("course-list").appendChild(listItem);
  }); //call back function
}

function addOrUpdateCourse() {
  let title = document.getElementById("courseName").value;
  let instructor = document.getElementById("instructorName").value;
  let duration = document.getElementById("durationTime").value;
  let index = document.getElementById("courseIndex").value; //hidden index element

  if (index == "" || index == -1) {
    if (title && instructor && duration) {
      // let newCourse = {
      //   title: courseName,
      //   instructor: instructorName,
      //   duration: durationTime,
      // };

      // courses.push(newCourse); //appends new element to the end of an array
      //or
      courses.push({ title, instructor, duration }); //it will push the object with the mentioned pty name
      // console.log("new course : ", newCourse);
      // console.log(`new course : ${newCourse}`);
      // console.log(newCourse);

      // console.log("courses : ", courses); //proper way to log in console for arrays
      // console.log("courses : " + courses); //not proper way to log in console for arrays & better for simple strings//string concatenation
      // console.log(`courses : ${courses}`); //not proper way to log in console for arrays & better for simple strings//template literals
      // console.log(courses); //proper way to log in console for arrays

      // document.getElementById("courseName").value = "";
      // document.getElementById("instructorName").value = "";
      // document.getElementById("durationTime").value = "";
    } else {
      alert("Please enter all the fields!");
    }
  } else {
    courses[index] = { title, instructor, duration };
    // document.getElementById("courseName").value = "";
    // document.getElementById("instructorName").value = "";
    // document.getElementById("durationTime").value = "";
    // document.getElementById("courseIndex").value = "";
  }
  document.getElementById("courseName").value = "";
  document.getElementById("instructorName").value = "";
  document.getElementById("durationTime").value = "";
  document.getElementById("courseIndex").value = "";

  displayCourses();
}

function removeCourse() {
  courses.pop();
  displayCourses();
}

function editCourse(index) {
  let editCourse = courses[index];
  document.getElementById("courseName").value = editCourse.title;
  document.getElementById("instructorName").value = editCourse.instructor;
  document.getElementById("durationTime").value = editCourse.duration;
  document.getElementById("courseIndex").value = index;
}

function deleteCourse(index) {}

displayCourses();
// function display(a) {
// return a + 10;
// }

// const displayFn = (a) => {
//   return a + 10;
// };

// const fn3 = (a) => a + 10;
//console.log(fn3(10));//calling the function

// (a) => {
//   console.log(a);
// };

// a => console.log(a);

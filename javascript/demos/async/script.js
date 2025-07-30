// callback //old
// console.log("start");
// setTimeout(() => {
//   //passing function as an argument to anotheer function is called callback function
//   console.log("task completed");
// }, 2000);

// console.log("end");

// promises //suggested
// console.log("start");
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("task completed");
//   }, 2000);
// });
// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("end");

//async/await //suggested
console.log("start");

async function myAsyncFunction() {
  let message = await new Promise((resolve, reject) => {
    console.log("123"); //synchronous line
    setTimeout(() => {
      //asynchronous line and goes out of async function and executes the next line of code.
      resolve("task completed");
    }, 2000);
  });
  console.log(message);

  //   return message;
}
myAsyncFunction(); //way to call an async function if it does not returns value

// async function normalFunction() {
//   let returned = await myAsyncFunction();
//   console.log(returned);
// }
// normalFunction(); //way to call an async funtion if it returns a value

// console.log(returned);

console.log("end");

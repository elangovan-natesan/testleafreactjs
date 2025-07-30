// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
console.log("nodejs working");

//using callback function without promises
// const fs = require("fs");
// fs.readdir("../../javascript", (error, files) => {
//   // . (or) ./ represents current directory
//   if (error) {
//     console.log("Error in reading directory :", error);
//     console.log("type of error is :", typeof error);
//   } else {
//     console.log(files);
//   }
// });

// using then/catch promises
// const fs = require("fs").promises;
// fs.readdir("../")
//   .then((files) => {
//     console.log(files);
//     // return files; //passes data to next then block if any
//   })
//   .catch((error) => {
//     console.log("Error in reading directory :", error);
//     console.log("type of error is :", typeof error);
//   });

// using async/await promises
// const fs = require("fs").promises;
// async function readDirAsync() {
//   try {
//     //try block throws the error
//     const files = await fs.readdir("../"); //resolving the promise using await keyword
//     console.log(files);
//     files.forEach((file) => {
//       console.log(file);
//     });
//   } catch (error) {
//     //catch block catches the error
//     console.log("Error in reading directory :", error);
//   }
// }
// readDirAsync();

// fs.stat
// const fs = require("fs");
// fs.stat("./index.js", (error, files) => {
//   if (files) {
//     console.log(files.isFile());
//     console.log(files.isDirectory());
//     console.log(files.size);
//   } else {
//     console.log("Error in reading file :", error);
//   }
// });

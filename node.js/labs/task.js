// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
// Task
const fs = require("fs").promises; //way to import if we dont have package.json file (or) node.js project

async function readFiles() {
  try {
    let files = await fs.readdir("../");
    console.log(files);
    // for (let i = 0; i < files.length; i++) {//for loop can handle async/await & promises
    for (const file of files) {
      // const readedFile = await fs.stat("../" + files[i]);//for for loop & for loop can handle async/await & promises
      console.log("file : " + file);

      const readedFile = await fs.stat("../" + file); //for for-of loop & for-of loop can handle async/await & promises
      if (readedFile.isFile()) {
        // console.log(`${files[i]} is a file`);//for for loop
        console.log(`${file} is a file`);
      } else if (readedFile.isDirectory()) {
        // console.log(`${files[i]} is a directory`);//for for loop
        console.log(`${file} is a directory`);
      }
    }
    // }//for loop can handle async/await & promises
  } catch (error) {
    console.log("Error in reading directory:", error);
  }
}

async function readedFiles(file) {
  const eachFileType = await fs.stat(files[i]);
  return eachFileType;
}

readFiles();

// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
const fs = require("fs"); //way to import if we dont have package.json file (or) node.js project

const writableStream = fs.createWriteStream("output.txt"); //create a writable stream to output.txt//creates a new or override the existing file.
writableStream.write("hello world \n"); //write data to the stream//this will overrides
writableStream.write("this is a writable stream \n"); //write data to the stream//this will overrides

//end of stream
writableStream.end();

writableStream.on("finish", () => {
  //here event listener name is finish
  //event listener since we dont have event handler as like in browser ex. click events
  //event listener to create & write to the file
  console.log("writing completed");
});

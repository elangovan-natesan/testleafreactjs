// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
const fs = require("fs"); //way to import if we dont have package.json file (or) node.js project

const readableStream = fs.createReadStream("output.txt", { encoding: "utf-8" });
const writableStream = fs.createWriteStream("pipe.txt"); //creates a new or override the existing file.
readableStream.pipe(writableStream); // pipe method is used to read data from the readable stream and write it to the writable stream//this will overrides

readableStream.on("end", () => {
  console.log("Reading completed");
  writableStream.end();
});

writableStream.on("finish", () => {
  console.log("Writing completed");
});

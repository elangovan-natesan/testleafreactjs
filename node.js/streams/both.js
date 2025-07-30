// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
const fs = require("fs"); //way to import if we dont have package.json file (or) node.js project

const readableStream = fs.createReadStream("input.txt", { encoding: "utf-8" });
const writableStream = fs.createWriteStream("output.txt"); //creates a new or override the existing file.

// readableStream.on("data", (data) => {//one way to read data from the stream
//   writableStream.write(data);
//   writableStream.end();
// });

readableStream.on("readable", () => {
  // another way to read data from the stream
  const readedStream = readableStream.read();

  if (readedStream) {
    writableStream.write(readedStream); //this will overrides
  } else {
    return; //exits the function
  }
});

readableStream.on("end", () => {
  console.log("Reading completed");
  writableStream.end();
});

writableStream.on("finish", () => {
  console.log("Writing completed");
});

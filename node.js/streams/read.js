// import { fs } from "fs"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
const fs = require("fs"); //way to import if we dont have package.json file (or) node.js project
const readableStream = fs.createReadStream("input.txt", { encoding: "utf-8" });

readableStream.on("readable", () => {
  //event listener since we dont have event handler as like in browser ex. click events
  const data = readableStream.read(); //if event type is readable then read the data from the stream
  //if event type is data then it will automatically read the data from the stream, we need to passs the argument as data
  if (!data) {
    return; //exits the function
  } else {
    console.log(`${data}`);
  }
  //   !data ? return; : console.log(`${data}`); //ternary operator cannot have return statement
});

readableStream.on("end", () => {
  console.log("reading completed");
});

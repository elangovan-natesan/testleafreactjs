// import { http } from "http"; //we can use this if we have package.json file/node.js project (or) change the extension from .js to .mjs in the .js file
const http = require("http");

const options = {
  hostname: "www.google.com",
  path: "/",
  method: "GET",
};

const client = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      console.log(data);
    } catch (e) {
      console.log("error");
    }
  });
});
client.on("error", (err) => console.log("error : " + err));
client.end();

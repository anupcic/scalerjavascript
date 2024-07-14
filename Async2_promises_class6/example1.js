const fs = require("fs");
console.log("start");

const data = fs.readFile("f1.txt", function (err, data) {
  if (err2) {
    console.log("Error read file");
  } else {
    console.log(data.toString());
  }
});

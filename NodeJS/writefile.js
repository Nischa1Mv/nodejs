const fs = require("fs");
fs.writeFile("file.txt", "Hello, world!", (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  console.log("File written successfully");
});

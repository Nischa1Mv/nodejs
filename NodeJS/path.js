const path = require("path");
const filePath = "/path/to/file.txt";

const dirname = path.dirname(filePath);
console.log("Directory:", dirname);

const basename = path.basename(filePath);
console.log("File Name:", basename);

const fullPath = path.join(__dirname, "files", "example.txt");
console.log("Full Path:", fullPath);

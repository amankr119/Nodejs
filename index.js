const fs = require("fs");
//fs.writeFileSync("read.txt", "wlecome");
fs.writeFileSync("read.txt", "welcome to my channel aman kumar");
fs.appendFileSync("read.txt", "  Hello world! welcome 😘");
const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
org_data=buf_data.toString();
console.log(org_data);
fs.renameSync("read.txt", "readwrite.txt");
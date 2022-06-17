const path = require("path");
console.log(path.dirname("D:/Nodejs/pathModule/path.js"));
console.log(path.extname("D:/Nodejs/pathModule/path.js"));
console.log(path.basename("D:/Nodejs/pathModule/path.js"));
//console.log(path.parse("D:/Nodejs/pathModule/path.js"));

const myPath= path.parse("D:/Nodejs/pathModule/path.js");
console.log(myPath.root);
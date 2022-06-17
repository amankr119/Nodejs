const fs = require("fs");
/*fs.writeFile("read.txt","welcome to hello world", (err)=>{
    console.log("File is created");
    console.log(err);
});*/

fs.appendFile("read.txt", "\nit is a asynchronus file system", (err)=>{
    console.log("task completed");
});

fs.readFile("read.txt","utf-8", (err,data)=>{
    console.log(data);
    //console.log(err);
});
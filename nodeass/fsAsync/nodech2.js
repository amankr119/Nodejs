const fs = require("fs");
/*fs.mkdir("amankr", (err)=>{
    console.log("folder created");
});*/

/*fs.writeFile("./amankr/bio.txt","this is nodechallenge 2", (err)=>{
    console.log("txt file created");
});*/

/*fs.appendFile("./amankr/bio.txt","\n hi hello world welcome to coding duniya!", (err)=>{
    console.log("data appended");
});*/

/*fs.readFile("./amankr/bio.txt", "utf-8" ,(err, data)=>{
    console.log(data);
});*/

/*fs.rename("./amankr/bio.txt", "./amankr/mybio.txt", (err)=>{
    console.log("file rename");
});*/

/*fs.unlink("./amankr/mybio.txt", (err)=>{
    console.log("file deleted");
});*/

fs.rmdir("./amankr",(err)=>{
    console.log("folder deleted");
});


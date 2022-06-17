const fs = require("fs");
const bioData = {
  name: "aman kumar",
  age: 23,
  email: "amankumar@gmail.com",
  phone: "8252199908",
  branch: "CSE",
};
const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
    const objData=JSON.parse(data)
    console.log(objData);
});

const express = require("express");
const app = express();

app.use("/user", (req, res, next) => {
    console.log("send dummy responce");
  res.send("<h2>This is user!</h2>");
});

app.use("/", (req, res, next) => {
  console.log("this is assignment 2");
  res.send("<h2>This is Home!</h2>");
});
app.listen(3000);

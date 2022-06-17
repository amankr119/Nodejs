const express = require("express");
const app = express();
app.use("/about", (req, res, next) => {
  console.log("In the middlware!");
  res.send("<h1> Hello from about! </h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the another middlware!");
  res.send("<h1> Hello from express! </h1>");
});
app.listen(3000);

const chalk = require("chalk");

var validator = require("validator");

//console.log(chalk.blue("Hello world!"));
//console.log(chalk.red.underline.inverse("false"));

//console.log(chalk.green.underline.inverse("false"));

const res = validator.isEmail("aman@gmail.com");
//console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

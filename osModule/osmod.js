const os = require("os");
console.log(os.arch());

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());

console.log(os.type());

const freememo = os.freemem();
//console.log(freememo);
console.log(`${freememo / 1024 / 1024 / 1024}`);

const totalmemo = os.totalmem();
console.log(`${totalmemo / 1024 / 1024 / 1024}`);


const os = require('os');
console.log('os: ', os.arch());
console.log('os: ', os.cpus());
console.log('freemem: ', os.freemem()/1000/1024/1024);

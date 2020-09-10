const fs = require('fs')
fs.stat('/Users/chengheai/code/heai/inter-web-front/nodejs/fs.js', (err, stats) => {
    console.log('stats: ', stats);
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.size)
//   console.info(
    //       stats.isFile() //true
    //       stats.isDirectory() //false
    //       stats.isSymbolicLink() //false
    //       stats.size //1024000 //= 1MB

//   )
})
const fs = require('fs');
const folderName = '/Users/chengheai/code/heai/inter-web-front/nodejs/mkdir'
try {
  if(!fs.existsSync(folderName)){
    fs.mkdirSync(folderName)
  }
} catch (error) {
  console.error(error)
}
const fs = require('fs')

try {
  const fd = fs.openSync('/Users/chengheai/code/heai/inter-web-front/nodejs/fs.js', 'r')
} catch (err) {
  console.error(err)
}
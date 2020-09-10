const path = require('path')
const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt
console.log(path.dirname(notes))
console.log(path.basename(notes))
console.log(path.extname(notes))
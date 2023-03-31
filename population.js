const fs = require ("fs")
const util = require ('util')


const writeFile = util.promisify(fs.writeFile)

writeFile('./file.txt', 'Hello World', {encoding: 'utf-8'}).then(()=>{
    console.log("File Created!")
}).catch((error)=>{
    console.log(error);
    
})
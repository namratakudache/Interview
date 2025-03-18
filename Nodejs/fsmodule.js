const fs = require('node:fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })
const a = fs.readFileSync('file.txt')//to intentially block the nodejs use Sync
console.log(a)//<Buffer 48 69 69 69 69 69 69 69 69 69 69 69>
console.log(a.toString())
// Hiiiiiiiiiii
// Finished reading file

fs.writeFile('file2',"this is data",()=>{
    console.log('data written in file2')
})

const b=fs.writeFileSync('file2',"this is data22")
console.log(b)
console.log("Finished reading file")
const path=require('path')
const a=path.basename('/foo/bar/baz/asdf/index.html');
const b=path.dirname('/foo/bar/baz/asdf/quux');
console.log(a,b)//index.html , /foo/bar/baz/asdf
const c=path.extname(__filename)
console.log(c)//.js
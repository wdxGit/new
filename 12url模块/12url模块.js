const url = require('url')

const obj = url.parse('http://127.0.0.1:3000/pinglun?name=1111111111&message=111111111111111111', true)

console.log(obj.query.name)
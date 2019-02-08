const http = require('http')
const fs = require('fs')

const wwwDir = 'C:/inetpub/wwwroot/'

//创建server
const server = http.createServer()

//监听server的request请求事件，设置请求处理参数
//  请求
//  响应
server.on('request', function(req, res) {
    const url = req.url;
    // .index.html
    // a.txt
    // /apple/login.html
    if (url === '/' || url === '/index.html') {
        fs.readFile(`${wwwDir}index.html`, function(err, data) {
            console.log(data)
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else if (url === '/a.txt') {
        fs.readFile(`${wwwDir}a.txt`, function(err, data) {
            //console.log(data)
            if (err) {
                return res.end('404 Not Found')
            }
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end(data)
        })
    } else if (url === '/apple/login.html') {
        fs.readFile(`${wwwDir}login.html`, function(err, data) {
            //console.log(data)
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else {
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('server is runing')
})
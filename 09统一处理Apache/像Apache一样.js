const http = require('http')
const fs = require('fs')

//定义固定路径
const wwwDir = 'C:/inetpub/wwwroot/'

const server = http.createServer()

server.on('request', function(req, res) {
    const url = req.url
    let filePath = 'index.html' //定义默认
    if (url !== '/') { //判断如果不是直接进入
        filePath = url //重新定义文件路径
    }
    fs.readFile(wwwDir + filePath, function(err, data) { //读文件
        if (err) {
            return res.end('404 Not Found')
        }
        res.end(data) //成功渲染数据
    })

    //console.log(filePath, wwwDir + filePath)
})

server.listen(3000, function() {
    console.log('runing.....')
})
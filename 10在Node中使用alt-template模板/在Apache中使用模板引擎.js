const http = require('http')
const fs = require('fs')
const template = require('art-template')

const server = http.createServer()

//const roowUrl = 'C:/inetpub/wwwroot/'
//如果有需要联动加

server.on('request', function(req, res) {
    fs.readFile('./在模板引擎中使用art-template.html', function(err, data) {
        if (err) {
            return console.log('读取失败')
        }
        //data是二进制数据，而模板引擎的render方法是字符串
        data = template.render(data.toString(), {
            name: 'name'
        })
        res.end(data)
    })
}).listen(3000, function() {
    console.log('runing.....')
})
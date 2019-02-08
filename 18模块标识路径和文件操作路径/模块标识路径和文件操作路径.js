const fs = require('fs')

//文件操作中的相对路径可以省 ./
//      ./data/a.txt 相当于当前路径
//      data/a.txt 相当于当前路径
//      /data/a.txt 相当于绝对路径，当前文件所处磁盘根目录
//      c:/xxx/xx...
fs.readFile('data/a.txt', function(err, data) {
    if (err) {
        return console.log('读取失败')
    }
    console.log(data.toString())
})

//在文件模块中，相对路径的./不可以省略
//这里忽略了./也是相当于磁盘根目录
require('./data/foo.js')
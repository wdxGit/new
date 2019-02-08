const fs = require('fs');

//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
//  error
//      成功：
//          文件写入成功，error是null
//      失败：
//          error是错误对象
fs.writeFile('./你好.md', '大家好,我给大家介绍一下node.js', function(error) {
    if (error) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
})
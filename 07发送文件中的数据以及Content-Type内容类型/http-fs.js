const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', function(req, res) {
    const url = req.url;
    //url统一资源定位符
    //一个URL定位到一个资源
    if (url === '/') {
        fs.readFile('../resource/index.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败');
            } else {
                //data默认是二进制数据，toString转为可识别字符串
                //res.end()支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url === '/jpg') {
        fs.readFile('../resource/2345_image_file_copy_1.jpg', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败');
            } else {
                //data默认是二进制数据，toString转为可识别字符串
                //res.end()支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })
    }
});
server.listen(3000, function() {
    console.log('server is runing');
})
const http = require('http');

// 1.创建Server
const server = http.createServer();

// 2.监听request请求事件，设置请求处理函数
server.on('request', function(req, res) {
    //在服务端默认发送的数据，是utf-8编码内容的
    //但是浏览器不知道你是utf-8编码的内容，所以会按照当前操作系统的默认编码去解析
    //中文的默认是gbk
    //解决方法是正确告诉浏览器发送内容是什么编码
    //Content-Type 数据内容类型  text/plain;charset=utf-8普通文本 编码方式是utf-8
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    //res.end('hello 世界');
    console.log('收到请求，请求端口号是' + req.url);

    // res.write('hello');
    // res.end();

    //上面的方式比较麻烦，推荐使用更简单的方式，直接end()的同时发送数据
    //res.end('hello word');

    //根据不同的请求路径发送不同的响应结果
    //1.获取请求路径
    //  req.url获取到的是端口号之后的那一部分路径；所有的url都是以/开始的
    //2.判断路径处理响应

    var url = req.url;
    // if (url === '/') {
    //     res.end('index page');
    // } else if (url === '/login') {
    //     res.end('login page');
    // } else {
    //     res.end('404 Not Found.');
    // }

    const products = [{
                name: '苹果',
                price: 8888
            },
            {
                name: '菠萝',
                price: 5000
            }, {
                name: '辣椒',
                price: 3000
            }
        ]
        //响应数据只能是二进制数据或者字符串
    switch (url) {
        case '/':
            res.end('index page');
            break;
        case '/login':
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end("<p>123<a href='#'>点我</a></p>");
            break;
        case '/products':
            //JSON.stringify()转换成字符串
            res.end(JSON.stringify(products));
            break;
        default:
            res.end('404 Not Found.');
            break;
    }
})

// 3.绑定端口号启动服务
// 注：端口号为80，可以直接输入http://127.0.0.1；否则http://127.0.0.1：+ 端口号
server.listen(2000, function() {
    console.log('服务器启动成功，可以访问')
})
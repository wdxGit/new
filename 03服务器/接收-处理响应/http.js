//在Node中提供了一个核心模块：http
//http这个模块的职责就是帮你创建编写服务器的

// 1.加载http核心模块
const http = require('http');

// 2.使用http.createServer()方法创建一个web服务器
//  返回一个server实例
const server = http.createServer()

// 3.服务器要干嘛
//      提供对数据的服务
//      发请求
// 接收请求
// 处理请求
// 给反馈（发送响应）
// 注册request请求事件
// 当客户端请求过来时，就会自动触发服务器的request请求事件，然后执行第二个参数；回调处理
server.on('request', function(request, response) {
    // request请求事件处理函数，需要接受两个参数：
    //     Request 请求对象
    //         请求对象可以用来获取客户端的一些请求信息，例如请求路径
    //     Response 响应数据
    //         响应对象可以用来给客户端发送响应信息
    //         request.url返回一个favicon.ico  浏览器默认行为收藏夹图标例如百度logo
    console.log('收到客户端的请求了,请求路径是' + request.url);
    // response对象有一个方法：write可以用来给客户端发送响应数据；
    // write可以使用多次，但最后一定要使用end来结束响应，否则客户端会一直等待
    response.write("hello node.js");

    //告诉客户端结束，可以呈递给用户了
    response.end();
})

// 4.绑定端口号，启动服务器cl
server.listen(3000, function() {
    console.log('服务器启动成功，可通过http://127.0.0.1:3000/来进行访问呢');
})
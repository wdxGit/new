//app application应用程序
//把当前模块所有的依赖项都声明在文件模块最上面
//为了让目录结构更加清晰，所以把所有HTML文件都放在view(视图)文件夹中
//我们为了方便的统一处理这些静态资源，所以我们约定所有的静态资源都存放在public目录中
// /index.html
// /public整个public目录中的资源都允许被访问

const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

//定义渲染列表数组，里面包裹对象
//例：let comments = [{
//     name : '张三',
//     message:'...',
//     dateTime:'1212-5555-666'
// }]
//数组unshift添加，name，message 对应post.html里面from表单的name名称
let comments = []

//对于表单提交的请求路径，由于其中有用户动态的填写内容
//所以不能通过判断url路径来处理请求

//结论：只需要判定如果请求路径是/pinglun的时候，就认为请求提交表单的请求过来了

//封装404页面跳转函数
function notServer(err = null) {
    if (err) {
        fs.readFile('./views/404.html', function(err, data) {
            res.end(data)
        })
    }
}

http.createServer(function(req, res) {
    //使用url.parse方法将路径解析成一个方便操作的对象，第二个参数为true表示直接将参数转化为一个对象（通过query属性访问）
    let parseObj = url.parse(req.url, true)
    console.log('传送的数据', parseObj)

    //单独获取不包含查询字符串的路径部分（该路径不包括？之后的内容）
    let pathName = parseObj.pathname
    console.log('请求的路径', pathName)

    if (pathName === '/') {
        fs.readFile('./views/index.html', function(err, data) {
            notServer(err)
            const strHtml = template.render(data.toString(), {
                comments: comments
            })
            res.end(strHtml)
        })
    } else if (!pathName.indexOf('/public/')) {
        //统一处理
        //  如果请求路径是以/public/开头的，则我认为你要获取public中某个资源
        //  所以我们就直接把请求路径当做文件路径来直接读取
        fs.readFile('.' + pathName, function(err, data) {
            res.end(data)
        })
    } else if (pathName === '/post') { //index.html a连接  省html后缀
        fs.readFile('./views/post.html', function(err, data) {
            res.end(data)
        })
    } else if (pathName === '/pinglun') {
        //注意这个时候无论/pinglun?后面是什么，都不用担心，因为pathName不包含？之后的路径
        //一个请求对应一个相应，响应结束请求也就结束
        //res.end(JSON.stringify(parseObj.query))
        //url的query方法把请求路径的查询字符串解析成一个对象
        //所以接下来要做的就是：
        //  1.获取parseObj.query
        //  2.生成当前日期到数据对象中，然后存储到数组
        //  3.让用户重定向跳转到首页
        //      当用户重新请求/的时候，我数组中的数据已经发生变化了，所以用户看到的页面就是服务器的
        let comment = parseObj.query
        var myDate = new Date();
        //console.log(myDate.toLocaleDateString())
        comment.dateTime = myDate.toLocaleDateString()
        comments.unshift(comment)
            //服务端已经处理好了，接下来就是重新请求/首页，就可以看到最新的留言内容

        //如何通过服务器让客户端重定向
        //  1.状态码设置为302临时重定向（301是永久重定向）
        //      临时重定向 访问会询问服务器 访问a会请求a访问b 永久重定向 从浏览器缓存中直接跳转 访问a直接跳转b  例：输入xxx.com跳转到xxx.com.cn  控制台Network查看
        //      statucCode
        //  2.在响应头中通过location告诉客户端往哪重定向
        //      setHeater
        //如果客服端发现收到服务器的响应状态码是302，就会自动去响应请求头中找Location
        //所以就能看到客户端自动跳转
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    } else { //其他网页都处理成404
        notServer()
    }
}).listen(3000, function() {
    console.log('runing.....')
})

//createServer返回值是server所以可以直接.listen（）

//案例流程
// 1. / index.html
// 2. 开放public目录中的静态资源
//      当请求 / public / xxx的时候，读取响应public目录中的具体资源
// 3./post post.html
// 4./pinglun
//      4.1接收表单提交数据
//      4.2存储表单提交数据
//      4.3让表单重定向到/（首页）
//      statusCode
//      setHeader
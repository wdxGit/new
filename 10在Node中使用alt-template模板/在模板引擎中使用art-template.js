// art-template

//模板引擎起源于服务器领域，后来发展到前端
// 1.安装，查官网
// 2.在需要使用的文件模板中加载art-template
//      只需要require方法；参数中art-template就是下载包的名字
// 3.查文档，使用模板引擎的API

const template = require('art-template')
const fs = require('fs')

//浏览器方法
// template('script标签ID',{对象})

// Node方法
// 将模板源代码编译成函数并立刻执行
//template.render('模板对象', {替换内容}, options)

fs.readFile('./在模板引擎中使用art-template.html', function(err, data) {
    if (err) {
        return console.log('读取失败')
    }
    //data是二进制数据，而模板引擎的render方法是字符串
    const res = template.render(data.toString(), {
        name: 'name'
    })
    console.log(res)
})
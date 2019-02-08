/*
app.js入口模块
职责：
    启动服务
    做一些服务相关配置
        模板引擎
        body-parse解析表单中的post请求
        提供静态资源服务
    挂载路由
    监听端口启动服务
*/


const express = require('express')
const router = require('./router')
const app = express()
    //配置模板引擎和body-parser 一定要在app.use(router)挂载路由之前
const bodyParser = require('body-parser')

//解析应用程序 application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 配置 application/json
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))

app.use('/node_mofules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

//把路由容器挂载到APP服务中
app.use(router)

app.listen(3000, () => {
    console.log('running....')
})
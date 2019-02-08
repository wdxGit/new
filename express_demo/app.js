const express = require('express')
const app = express()

//当以/public/开头时，去/public/目录中查找对应的资源
.use('/public/', express.static('./public/')) // 推荐

//当省掉第一个参数时，直接访问具体资源的路径  输入/public/反而会报错
.use(express.static('./public/'))

//表示public的别名
.use('/a/', express.static('./public/'))


.get('/login', (req, res) => {
    res.send('login')
})

.listen(3000, () => {
    console.log('running...')
})
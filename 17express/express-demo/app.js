const express = require('express')
const app = express()

//得到路径一个一个  根据名字走
app
    .get('/', (req, res) => res.send('你好 World!'))
    .get('/about', (req, res) => res.send('你好 World!'))


//公开指定目录，提供静态资源
//只要这样做了你就可以通过/public/xx 的方式向public目录访问所有的资源了
.use('/public/', express.static('./public/'))

.use('/static/', express.static('./static/')) //开放static文件资源



.listen(3000, () => console.log('Example app listening on port 3000!'))
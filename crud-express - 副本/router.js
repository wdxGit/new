/**
 * router.js路由模块
 * 职责：
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一
 * 我们划分模块的目的就是为了增强项目代码可读性
 * 提升开发效率
 */

const fs = require('fs')

//Express提供了一种更好地方式
//专门用来包装路由
const express = require('express')
    //引入students
const Student = require('./students')

//1.创建一个路由容器
const router = express.Router()

//2.把路由都挂载到router路由容器中

/*
 * 渲染学生列表界面
 */
router.get("/", (req, res) => {
    //readFile的第二个参数是可选的，传入utf8就是告诉他把读取的文件直接进行编码转换
    //也可以使用data.toString()方式转换
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         return res.status(500).send('Server error.')
    //     }
    //     console.log(data)
    //         //从文件中获取的数据一定是字符串
    //         //所以这里要手动转成对象
    //     let students = JSON.parse(data).students
    //     res.render('index.html', {
    //         fruits: [
    //             '苹果',
    //             '香蕉',
    //             '橘子'
    //         ],
    //         students: students
    //     })
    // })

    //students.js封装方法
    Student.find(function(err, students) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

/*
 * 渲染学生页面
 */
router.get("/students/new", (req, res) => {
    res.render('new.html');
})

/*
 * 处理添加学生
 */
router.post("/students/new", (req, res) => {
    //1.获取表单数据
    //2.处理
    //3.发送数据
    // console.log(req.body)
    //先读取出来然后转成对象，在对象中push数据，然后对象转为字符串，把字符串再次写入文件
    new Student(req.body).save((err) => {
        if (err) {
            return res.status(500).send('error')
        }
        res.redirect('/');
    })
})

/*
 * 渲染编辑学生页面
 */
router.get("/students/edit", (req, res) => {
    //1.在客户端列表页处理链接问题（需要id参数）
    //2.获取需要编辑的学生id
    //3.渲染页面
    Student.findById(id.replace(/"/g, ''), (err, student) => {
        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }
        // console.log(student)
        res.render('edit.html', {
            student: student
        });
    })
})

/*
 *处理编辑学生
 */
router.post("/students/edit", (req, res) => {
    //1.获取表单数据
    //2.更新
    //      Student.updata()
    //3.发送响应
    console.log(req.body)
    Student.updateById(req.body, function(err) {
        if (err) {
            return res.status(500).send('error')
        }
        res.redirect('/');
    })
})

/*
 * 删除学生
 */
router.get("/students/delete", (req, res) => {
    // 1.获取要删除的id
    // 2.根据id执行删除操作
    // 3.根据操作结果发送响应数据
    Student.deleteByid(parseInt(req.query.id), err => {
        if (err) {
            return res.status(500).send('error')
        }
        res.redirect('/');
    })
})

//3.把router导出
module.exports = router

//也不方便

// module.exports = function(app) {
//     app.get("/", (req, res) => {
//         //readFile的第二个参数是可选的，传入utf8就是告诉他把读取的文件直接进行编码转换
//         //也可以使用data.toString()方式转换
//         fs.readFile('./db.json', 'utf8', (err, data) => {
//             if (err) {
//                 return res.status(500).send('Server error.')
//             }
//             console.log(data)
//                 //从文件中获取的数据一定是字符串
//                 //所以这里要手动转成对象
//             let students = JSON.parse(data).students
//             res.render('index.html', {
//                 fruits: [
//                     '苹果',
//                     '香蕉',
//                     '橘子'
//                 ],
//                 students: students
//             })
//         })

//     })
// }
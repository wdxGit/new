/*
 * students.js
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
const fs = require('fs')
const dbPath = './db.json'
    /**
     * 获取所有学生列表
     * callback 中的参数
     *      第一个参数err
     *          成功是null，错误是错误对象
     *      第二个data
     *          成功时数组对象，错误是underfind
     */
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/*
 * 添加保存学生
 */
exports.save = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        //读取到的db.json中的students
        let students = JSON.parse(data).students

        //处理id唯一，不重复   用户输入的学生信息
        student.id = students[students.length - 1].id + 1
        students.push(student)
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                //错误就传递错误对象
                return callback(err)
            }
            //成功就没错，所以错误对象是null
            callback(null)
        })
    })
}

/*
 * 更新学生
 */
exports.updateById = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        //读取到的db.json中的students
        let students = JSON.parse(data).students

        // 注意：这里记得把 id 统一转换为数字类型
        student.id = parseInt(student.id)
        console.log(student)
            //es6 方法接收一个函数作为参数，返回一个条件
            //当某个便利项符合就会返回
        let stu = students.find((item) => {
            return item.id === student.id //输出的是字符串，转成数字
        })
        for (let key in student) {
            stu[key] = student[key]
        }
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                //错误就传递错误对象
                return callback(err)
            }
            //成功就没错，所以错误对象是null
            callback(null)
        })
    })
}

/*
 * 编辑学生
 * 根据id获取学生对象
 */
exports.findByid = function(id, callback) {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        let student = students.find((item) => {
            return item.id === parseInt(id)
        })

        // console.log(students)
        callback(null, student)
    })
}

/*
 * 删除学生
 */
exports.deleteByid = (id, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students

        //findIndex根据元素寻找下标
        let deleteId = students.findIndex(item => {
            return item.id === id
        })
        students.splice(deleteId, 1)

        //重写进去
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                //错误就传递错误对象
                return callback(err)
            }
            //成功就没错，所以错误对象是null
            callback(null)
        })
    })
}
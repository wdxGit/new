const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//1.链接MongoDB数据库
//指定连接的数据库不需要存在，当连接时会自动创建出来
mongoose.connect('mongodb://localhost:27017/itcast', { useNewUrlParser: true });

//2.设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//值
//约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    // title:  String,
    // auents: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // metathor: String,
    // body:   String,
    // comm: {
    //   votes: Number,
    //   favs:  Number
    // }
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

//3.将文档结构发布为模型
//  mongoose.model方法就是用来讲一个架构发布为model
//  第一个参数：传入一个大写单数字字符串来表示你的数据库名称
//      mongoose会自动将大写名词的字符串生成小写附属的集合名称
//      例如这里的User最终会变成users集合名称
//  第二个参数：架构Schema

//  返回值：模型构造函数
var User = mongoose.model('User', userSchema);

/*
 * 新增数据
 */

var admin = new User({
    username: 'admin',
    password: '123456',
    email: 'admin@123.com'
})

admin.save(function(err, ret) {
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存成功')
            //console.log(ret)
    }
})

/*
 * 查询数据
 */

//全部查询
User.find(function(err, ret) {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})

//按照条件查询
// User.find({
//     username: 'admin'
// }, function(err, ret) {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log(ret)
//     }
// });

//查询单个
// User.findOne({
//     username: 'admin'
// }, function(err, ret) {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret)
//     }
// });

/*
 * 删除数据
 */
// User.remove({
//     username: 'admin'
// }, function(err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('删除成功')
//     }
// })

/*
 * 更新数据
 */
User.findByIdAndUpdate('5c5bd871b815f81c1c3aab20', {
    password: '123'
}, function(err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log('更新成功')
    }
})
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/itcast', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1], //枚举  约束
        default: 0 //默认是0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
})

//简写
// mongoose.model('Comment', new Schema({

// }))

//直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema)
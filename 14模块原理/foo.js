//在Node中，每个模块内部都有一个自己的module对象
//在module对象中，有一个成员叫：exports
//也就是说如果你需要对外导出成员，至于要把对外导出的成员挂载到module.exports

// var module = {
//     exports: {

//     }
// }

//当一个模块需要导出单个成员时
//直接给exports赋值是不管用的
exports = 'hello'


module.exports.foo = 'bar'

//谁来require我，谁就得到
//默认在代码最后一句
// return module.exports


//重新赋值会断开
module.exports = 'hello'
exports.foo = 'word' //会返回hello

//这里导致exports ！== module.exports
module.exports = {
    foo: 'bar'
}

//但是这里又重新建立了两者的引用关系
exports = modul.exports

exports.foo = 'hello' //foo 会改变

//return 不是exports
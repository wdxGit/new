var foo = 'bar'

function add(x, y) {
    return x + y
}

//只能得到我想要给你的成员
//这样做的目的是为了解决变量命名冲突的问题
//exports.add = add

//exports 是一个对象
//我们可以通过多次为对象添加成员实现对外导出多个成员

//exports.str = 'hello'

//如果模块需要导出摸个成员而非整个函数
//那这个时候必须使用下面的方式
module.exports = {
    foo: foo,
    add: add
}
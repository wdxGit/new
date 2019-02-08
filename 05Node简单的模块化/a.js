// require是一种方法
// 它的作用就是用来加载模块的
// 在Node中，模块有三种：
//    具名的核心模块，例如fs、http
//    用户自己编写的文件模块；相对路径必须加./
//    可以省略后缀名

// 在Node中没有全局作用域，只有模块作用域
//   外部访问不到内部，内部也访问不到外部;默认都是封闭的
//      例：在a.js中定义函数方法；b.js无法调用；
//          在a.js和b.js中都定义一个同名变量不会被重新赋值


var foo = 'aaa';
console.log('a start');

require('./b.js');

console.log('a end');

console.log(foo);

function add(x, y) {
    return x + y;
}
console.log(add(1, 2))
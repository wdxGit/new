//require方法有两个作用：
//  1.加载文件模块并执行里面的代码
//  2.拿到被加载文件模块导出的接口对象

//  每个文件模块中都提供了一个对象exports
//  exports默认是一个空对象

//    模块与模块之间通信
var res = require('./b');

console.log(res);
//如果b.js没有module.exports活exports内容 返回{}
//exports:首先对于本身来讲是一个变量（对象），它不是module的引用，它是{}的引用，它指向module.exports的{}模块
//module.exports:首先，module是一个变量，指向一块内存，exports是module中的一个属性，存储在内存中，然后exports属性指向{}模块
//module.exports操作的不是同一个内存块的话，exports就不起作用了，所以不管怎么样，使用module.exports是万无一失的。

//console.log(res.fn(1, 2))
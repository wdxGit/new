#Node中的模块系统
    使用Node编写程序主要就是在使用：
+ EcamScript语言
    -  和浏览器不一样，在Node中没有Bom、Dom
+ 核心模块
    - 文件操作的fs
    - url路径处理模块
    - path路径处理模块
    - os操作系统信息
+ 第三方模块
    - art-template
    - 必须通过自己下载才能使用
+  自己写的模块
  
##什么是模块化
+ 文件作用域
+ 通信规则
  - 加载require
  - 导出

##CommonJs 模块规范
在Node中的js还有一个重要概念，模块系统
+ 模块作用域
+ 使用require方法加载模块
+ 使用exports接口对象来导出模块中的成员

##加载`require`
语法：
1.`var 自定义变量名称 = require('模块')`
两个作用：
+ 执行被加载模块中的代码
+ 得到被加载模块中的`exports`导出接口对象

##导出`exports module.exports`
+ Node中是模块作用域，默认文件中所有的成员只能在当前文件夹模块有效
+ 对于希望可以被其它模块访问的成员，我们就与要把这些公开的成员都挂载到`exports`接口对象中
  

导出多个成员（必须在对象中）：
```javascript
exports.a = 'aaa'
exports.b = 123
exports.c = function () {
    console.log('ccc')
}
```

导出单个成员（拿到的就是函数，字符串）：
```javascript
module.exports = 'hello'
```
以下情况会覆盖：
```javascript
module.exports = 'hello'

//以这个为准后者会覆盖前者
module.exports = function(x, y){
    return x + y
}
```
你可以这样导出多个成员：
```javascript
module.exports = {
    foo: foo,
    add: add
}
```
##原理解析
`exports`和`module.exports`的一个引用
```javascript
console.log(exports === module.exports)//=>true

export.foo = 'bar'

//等价于
module.exports.foo = 'bar'
```
##exports 和 module.exports的区别
+ 每个对象都有一个module对象
+ module对象有一个exports对象
+ 我们可以把需要导出的成员都挂载到module.exports接口对象中
+ 也就是`module.exports.xxx = xxx`的方式
+ 但是每次都`module.exports.xxx = xxx`很麻烦，点太多了
+ 所以Node为了方便，同时在每一个模块都提供了一个成员叫：`exports`
+ `exports === module.exports`控制台输出结果为`true`
+ 所以对于：`module.exports.xxx = xxx`的方式 完全可以：`exports.xxx = xxx`
+ 当模块需要导出单个成员时，这个时候必须使用：`module.exports = xxx`的方式
+ 不要使用`exports = xxx` 不管用
+ 因为模块最终向外`return`的是`module.exports`
+ 而`exports`只是·module.exports`的一个引用
+ 所以即使称为`exports = xx`重新赋值也不会影响`module.exports`
+ 但是有一种赋值方式比较特殊：`exports = module.exports`这个用来重新建立引用关系的
  
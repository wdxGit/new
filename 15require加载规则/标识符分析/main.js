//路径形式模块
// require('模块标识')
// ./本级目录 
// ../上级目录
// d:a/b 几乎不用
// 首位的/在这里表示当前文件模块所属磁盘根路径
// .js后缀可以省

//核心模块
//核心模块的本质也是文件
//核心模块已经被编译到二进制文件中了，我们只需要按照名字加载
//require('fs')

//第三方模块
// 凡是第三方模块都需要通过npm来下载
// 使用的时候就可以通过require('包名')的方式来进行加载
// 既不是核心模块也不是路径形式的模块
//      先找到当前文件夹所处目录中的node_modules 目录
//      node_modules/art-template
//      node_modules/art-template/package.json文件
//      node_modules/art-template/package.json文件中的main属性
//      main属性中就记录了art-template的入口模块（最终引入加载的）

//      如果package.json文件不存在或main的属性是空无法加载，node会自动加载main属性对应的文件
//      如果main属性为空或者是错的那么index.js就会变成一个默认备选项

//      如果以上所有任何一个条件都不成立，则会向上一级目录中的node_modules目录中查找
//      如果上一级还没有，则会继续向上一级寻找
//      ....
//      如果直到当前磁盘根目录还找不到，最后报错：can not find module xxx
// const template = require('art-template')

//注意：我们一个项目只有一个node_mofules,放在项目根目录中，这样的话项目中所有子目录中的代码都可以加载到
//不会出现多个node_modules

//模块查找机制
//  优先从缓存加载
//  核心模块
//  路径形式的文件模块
//  第三方模块
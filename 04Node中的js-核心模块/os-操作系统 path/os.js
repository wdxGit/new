//用来获取机器信息
const os = require('os');

// 用来操作路径
const path = require('path');

// 获取当前机器的cpu信息
//console.log(os.cpus());

//以整数的形式回空闲系统内存 的字节数.
console.log(os.freemem());
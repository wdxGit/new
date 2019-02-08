require('./a')

//优先加载缓存
//由于 在a中已经加载过b 会拿到接口对象，不会重复加载，提高加载效率

var fn = require("./b")
console.log(fn)
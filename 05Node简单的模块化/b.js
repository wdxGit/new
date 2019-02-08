console.log('b.js被执行了');

var foo = 'bbb';
require('./c.js');
console.log("b end");
console.log(foo)
    //console.log(add(1, 2));报错未定义
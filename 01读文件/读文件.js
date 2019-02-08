//1.加载js核心模块
var fs = require('fs');

//2.读取文件
//第一个参数就是要读取的文件路径
//  第二个参数是一个回调函数，里面有两个参数data，error；
//      成功时 data是数据 error为null
//      失败时 data是null error为错误对象
fs.readFile('./helllo.txt', function(error, data) {
    console.log(error);
    //data <Buffer 68 65 6c 6c 6f>
    //通过toString转化
    console.log(data.toString()); //"123"
    if (error) {
        console.log('读取失败')
        return;
    } else {
        console.log(data.toString());
    }
})
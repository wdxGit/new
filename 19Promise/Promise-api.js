import { forStatement } from "babel-types";

//promise是一个构造函数

//1.创建promise容器
var p1 = new Promise((resolve, reject) => {
    //成功resolve
    resolve(data);
    //失败
    reject('123')
})

//.then()成功后;接受的就是resolve函数;可接受两个参数1是成功，2是失败
p1
    .then((data) => {
        console.log(data)
    }, data => {
        console.log(data)
    })
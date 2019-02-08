# MongoDB

## 1.MongoDB数据库的基本概念

+ 数据库 可有多个数据库
+ 集合 一个数据库可以有多个集合
+ 文档 一个集合中可以有多个文档
+ MongoDB非常灵活，不许奥像MySQL一样先创建数据库设计表结构
  
  - 在这里只需要当你需要插入数据时，只需要指定那个数据库那个集合操作就可以了
  - 一切都有MongoDB来帮助自动完成

```js
{//存储结构 可有多个数据库
    qq:{//数据库
        users:[//文档
            {name：'...'},//对象
        ],
        products:[

        ]
    },
    taobao:{

    },
    baidu:{

    }
}
```

## 安装下载

    1.登陆网址下载
    2.右键安装盘符，属性-->环境变量-->Path-->新建-->mongodb路径

## 启动和关闭服务器

启动：

```js
    //mongodb默认执行mogodb所处盘符目录下的/data/db作为自己的数据存储目录
    //所以在第一次执行命令之前手动/data/db目录
    mongod
```

如果想要修改默认的数据存储目录，可以：

    1.  mongod --dbpath=数据存储目录路径
停止：

    1.  在开启服务器的控制台直接Ctrl+c
    2.  或者直接关闭

## 连接和退出数据库

链接：

```js
//该命令默认链接本机mogodb服务
打开的命令行不要关，重新打开输入mongo
```

退出：

```js
//在连接状态输入exit断开连接
exit
```

## 基本命令

+ `show dbs`

  - 查看显示所有的数据库

+ `db`
  
  - 查看当前操作的数据库

+ `use数据库名称`

  - 切换到指定的数据库，如果没有会新建

+ 新建表

    - db.名字.insertOne({"...":"..."})

## 在Node中怎么操作MongoDB数据

使用官方的MongoDB包:

`npmjs.com 搜索mongodb `

第三方包mongoose来操作

第三方包，`mongoose`基于MongoDB官方的`mongodb`包进行了再一次的封装。

+ 网址https://mongoosejs.com/
  
## 官方指南

设计Scheme发布Model

mongoose-demo-->`demo2.js`

增加数据

mongoose-demo-->`demo2.js`

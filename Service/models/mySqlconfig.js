var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',       //主机
    user     : 'root',               //MySQL认证用户名
    password : '123456',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database: 'ctrip',
});
module.exports = pool;
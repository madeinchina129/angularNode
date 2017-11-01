var express = require('express');
var router = express.Router();
var goodsOperation = require('../models/goodsOperation')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'trainTicket' });
});
var s=goodsOperation.FindByNum('select * from trainTicket',function (err, rows) {
    if (err) {
        console.log("查询失败");
    } else {
        // console.log(rows);
        s = rows;
    }
    //connection.destroy();
});
//火车票信息
router.get("/trainTicketApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    res.jsonp(s)
})
var a=goodsOperation.FindByNum('select * from ptrips',function (err, rows) {
    if (err) {
        console.log("查询失败");
    } else {
        // console.log(rows);
        a = rows;
    }
    //connection.destroy();
});
//飞机票信息
router.get("/airTicketApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    res.jsonp(a)
})
var c=goodsOperation.FindByNum('select * from users',function (err, rows) {
    if (err) {
        console.log("查询失败");
    } else {
        // console.log(rows);
        c = rows;
    }
    //connection.destroy();
});
//乘客信息
router.get("/customerApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    res.jsonp(c)
})

module.exports = router;

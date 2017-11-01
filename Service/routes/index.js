var express = require('express');
var router = express.Router();
var goodsOperation = require('../models/goodsOperation')
var usersSqlCollection = require("../models/usersSql.js");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//register
router.get("/RigisterApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-Type", "application/json;charset=utf-8");

    let person = req.query;
    // console.log(person)

    usersSqlCollection.AddSql(person, (err,results)=>{

        if(err==null){
            res.jsonp(1);
        }else {
            res.jsonp(0);
        }
    });
});
//login
router.post("/LoginApi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log(111)
    let person = req.query;

    usersSqlCollection.FindSql(person, (err,results)=>{

        if(results.length>0){
            let passWord = results[0].passWord;
            if(passWord == person.passWord){
                res.jsonp(1);
            }else{
                res.jsonp(0);
            }
        }else{
            res.jsonp(0);
        }
    });

});

router.post("/updateUserInfoApi", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-Type", "application/json;charset=utf-8");
    var person = req.query;
    usersSqlCollection.UpdateSql(person, (err,results)=>{

        if(err==null){
            res.jsonp(1);
        }else {
            res.jsonp(0);
        }
    })
});



module.exports = router;

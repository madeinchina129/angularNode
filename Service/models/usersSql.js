var connection = require("./mysqlCollection.js");
function addSql(person, cb) {
// user.userName,user.userAccount,user.userAge,user.userSex, user.userPassword,user.mobile,user.email,user.address,user.vip
//     var sql = 'insert into users(userId,userAccount,userName,userAge,userSex,userPassword,mobile,email,address,vip) values(0,"'+person.userAccount+'","'+person.userName+'","'+person.userAge+'","'+person.userSex+'","'+person.userPassword+'","'+person.mobile+'","'+person.email+'","'+person.address+'","'+person.vip+'",)';
    var sql = 'insert into users(name,passWord) values("'+person.userName+'","'+person.passWord+'")';
    connection.query(sql, cb);
}
function findSql(person, cb) {

    var sql = 'select * from users where name="'+person.userName+'"';
    connection.query(sql, cb);
}
function updateSql(person, cb) {

    var sql = 'UPDATE goodsInfo SET name = "'+person.userName+'" WHERE userId="'+person.userId+'"';
    connection.query(sql, cb);
}

module.exports={
    AddSql:addSql,
    FindSql:findSql,
    UpdateSql:updateSql
};
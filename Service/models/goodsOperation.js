var mySqlPool = require("./mySqlconfig");


function findbyNum(sql,cb) {
    mySqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log("建立连接失败");
        } else {


            connection.query(sql, cb);
            connection.release();

        }
        // mySqlPool.end();
    });
};
/*function findbyNumpro(sql,cb) {
    mySqlPool.getConnection(function (err1, connection) {
        if (err1) {
            console.log("建立连接失败");
        } else {
            console.log("建立连接成功");
            console.log(mySqlPool._allConnections.length);//1
            connection.query(sql, cb);
            connection.release();

        }
        // mySqlPool.end();
    });
};*/


function add(addSql,cb) {
    mySqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log("建立连接失败");
        } else {
            // console.log("建立连接成功");
            connection.query(addSql,cb);

            connection.release();

        }
        mySqlPool.end();
    });
};


// update();
function update(updateSql,cb) {
    mySqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log("建立连接失败");
        } else {



            /*var addSql = 'UPDATE goodsInfo SET price =400 WHERE title=?';
            var addSql_Params = ['Tianan2017夏季新款韩版短袖宽松中长款'];*/
            connection.query(updateSql, cb);
            connection.release();
        }
        mySqlPool.end();
    });
};


// del();
function del() {
    mySqlPool.getConnection(function (err, connection) {
        if (err) {
            console.log("建立连接失败");
        } else {


            var addSql = 'DELETE FROM goodsInfo WHERE title=?';
            var addSql_Params = ['Tianan2017夏季新款韩版短袖宽松中长款'];
            connection.query(addSql, addSql_Params, function (err, rows) {
                if (err) {
                    console.log("删除失败");
                } else {

                }
                //connection.destroy();

                connection.release();
            });

        }
        mySqlPool.end();
    });
};

//分页查询: skip((pageIndex-1)*pageSize) limit(pageSize)
/*function findByPager(pageIndex,pageSize,cb) {
    userModel.find().skip((pageIndex-1)*pageSize).limit(pageSize).exec(cb)
}*/



module.exports = {
    Add: add,
    Del: del,
    Update: update,
    FindByNum: findbyNum,
    // findbyNumpro:findbyNumpro
    // Pager: findByPager
}
var mysql = require('mysql');
var conn = {};
var con  = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'store_manage',
    debug : false,
    port : 3306
});
con.connect();
conn.query = function(queryStr,callback){
    con.query(queryStr,function(err,result,field){
        if(err) throw err;
        callback(result);
    });

};
module.exports = conn;


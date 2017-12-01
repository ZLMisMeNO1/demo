var con = require('../connection/connection.js');

var userDao = {};

userDao.listAllUser = function(callback){
    var queryStr = 'select * from t_user ';
    con.query(queryStr,function(result){
        callback(result);
    });
};
userDao.showUser = function(userId,callback){
    var query = 'select * from t_user where 1=1 and user_id = ' + userId;
    con.query(query,function(result){
        callback(result[0]);
    });
};
module.exports = userDao;
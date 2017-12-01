
var con = require('../connection/connection.js');
var userDeptLeaderDao = {};

var userDeptLeaderData ;
userDeptLeaderDao.listUserDeptLeader = function(callback){
    var query = 'select * from user_dept_leader ';
    con.query(query,function(data){
      callback(data);
    });
};

module.exports = userDeptLeaderDao ;
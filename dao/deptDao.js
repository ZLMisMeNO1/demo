var con = require('../connection/connection.js');

var deptDao = {};

deptDao.listAllDept = function(callback) {
    var query = "select * from t_dept ";
    con.query(query,function(result){
        callback(result);
    });
};
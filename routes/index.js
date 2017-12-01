var express = require('express');
var router = express.Router();

var userDeptLeaderDao = require('../dao/userDeptLeaderDao.js')
/* GET home page. */
router.get('/', function(req, res, next) {
   
   userDeptLeaderDao.listUserDeptLeader(function(data){
    // res.render('index', { title: '数据',data :   data})
    res.json(data);
  });
 
});

module.exports = router;

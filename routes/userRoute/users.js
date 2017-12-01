var express = require('express');
var router = express.Router();

var userDao = require('../../dao/userDao.js');
var deptDao = require('../../dao/deptDao.js');
/* GET users listing. */
router.get('/listUsers', function(req, res, next) {
  userDao.listAllUser(function(data){
    res.render('user/listUser',{userData : data});
  });
});

router.get('/showUser',function(req,res,next){
  var userid = req.query.userid;
  console.log('userid',userid );
  userDao.showUser(userid,function(data){
    res.render('user/showUser',{user : data});
  });

  
});

module.exports = router;

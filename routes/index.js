var express = require('express');
var router = express.Router();
var db = require('../model/database');
/* GET home page. */
router.get('/', function(req, res, next) {
  var result = db.getCoord().then((data)=>{
    res.json(data);
  }).catch((error) => {
    return error;
  });

});

module.exports = router;

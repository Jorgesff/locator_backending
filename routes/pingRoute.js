var express = require('express');
var router = express.Router();
var ping = require('../model/pingModel.js');
/* GET home page. */
router.get('/get', function(req, res, next) {
  // console.log(req.query);
  // res.send('hi');
  ping.getCoord(req.query.env,req.query.route,req.query.pkg).then((data) => {
    res.send(data);
  }).catch((error) => {
    res.send(error);
  })
});

router.post('/post', (req,res) => {
  ping.setCoord(req.query.route, req.query.pkg,req.query.coord_x, req.query.coord_y, req.query.coord_z).
  then((data) => {
    res.send('posted');
  }).catch((error) => {
    res.send(error);
  })
});
router.patch('/patch', (req,res) => {
res.send('patch');
})
router.delete('/delete', (req,res) => {
res.send('delete');
})
module.exports = router;

var express = require('express');
var router = express.Router();
var route = require('../model/routeModel');

router.get('/get', (req,res) => {

})
router.post('/post', (req,res) => {

})
router.patch('/patch', (req,res) => {
  var result = route.setStatusRoute(req.query.route,req.query.status).then((data)=>{
    res.json(data);
  }).catch((error)=>{
    res.json(error);
  })
})
router.delete('/delete', (req,res) => {

})

module.exports = router;

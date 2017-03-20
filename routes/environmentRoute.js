var express = require('express');
var router = express.Router();
var env = require('../model/environmentModel');

router.get('/get', (req,res) => {
res.send('get');
})
router.get('/get/id', (req,res) => {
  env.getEnvById(req.query.id).then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
  })
})
router.get('/get/name', (req,res) => {
  env.getEnvByName(req.query.name).then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error);
  })
})
router.post('/post', (req,res) => {
res.send('post');
})
router.patch('/patch', (req,res) => {
res.send('patch');
})
router.delete('/delete', (req,res) => {
res.send('delete');
})
module.exports = router;

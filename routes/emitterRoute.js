var express = require('express');
var router = express.Router();
var route = require('../model/emitterModel');

router.get('/get', (req,res) => {
res.send('get');
});
router.get('/get/id', (req,res) => {
  route.getEmitterById(req.query.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    })
});
router.get('/get/name', (req,res) => {
  route.getEmitterByMAC(req.query.mac)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    })
});
router.post('/post', (req,res) => {
res.send('post');
});
router.patch('/patch', (req,res) => {
res.send('patch');
});
router.delete('/delete', (req,res) => {
res.send('delete');
});

module.exports = router;

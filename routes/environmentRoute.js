var express = require('express');
var router = express.Router();
var env = require('../model/environmentModel');

router.get('/get', (req,res) => {
res.send('get');
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
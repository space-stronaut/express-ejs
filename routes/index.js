var express = require('express');
var router = express.Router();
var fs = require('fs');
const { loadData } = require('/home/ronald916/Documents/express-ejs/public/javascripts/data.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , body : 'Ronald Abel'});
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/user', function(req, res, next) {
  const users = loadData()
  res.render('user', {
    name : users
  });
});

router.get('*', function(req, res, next) {
  res.render('error');
});

module.exports = router;

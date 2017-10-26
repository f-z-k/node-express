var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var router = express.Router();
var fs = require('fs')
var path = require('path');
/* GET users listing. */
router.get('/info', function(req, res, next) {
  fs.readFile(path.join(__dirname, "/../public/data/user.json"), function(err, data) {
    if (err)
      throw err;
      // console.log(JSON.parse(data.toString()))
      // var obj = JSON.parse(data.toString())
      // // cb(JSON.parse(data.toString()));
      // // console.log(req)
      // var _callback = req.query.callback
      // res.send(_callback + '(' + JSON.stringify(obj) + ')');
      res.jsonp(JSON.parse(data.toString()))
    });
});
router.get('/pachong', function(req, res, next) {
  superagent.get('http://2017.talkmate.com/scdt/mtbd.html')
  .end(function (err, sres) {
    if (err) {
      return next(err);
    }
    var $ = cheerio.load(sres.text);
    var items = [];
    $('.textContent a').each(function (idx, element) {
      var $element = $(element);
      items.push({
        // title: $element.attr('title'),
        href: $element.attr('href')
      });
    });
    res.send(items);
  });
});
module.exports = router;

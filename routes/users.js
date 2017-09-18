var express = require('express');
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

module.exports = router;

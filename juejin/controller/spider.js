/**
 * Created by azoth on 2019/4/9.
 */
var http = require("http");
var request = require('superagent')
var fetchData = function (url, callback) {
  request.get(url)
    .set('Referer','https://www.google.com')
    .set('Accept','image/webp,image/*,*/*;q=0.8')
    .end(function (err, sres) {
      callback(sres.text)
    });
}
exports.fetchData = fetchData;
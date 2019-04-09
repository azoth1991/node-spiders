/**
 * Created by azoth on 2019/4/9.
 */
var cheerio = require("cheerio");
var server = require("./controller/spider");

var url = "https://github.com/azoth1991";
// var url = 'http://www.edri.net.cn/';
server.fetchData(url, function(data) {
  if (data) {
    //console.log(data);

    var $ = cheerio.load(data);
    $("a").each(function(i, e) {
      console.log(i,e.attribs.href);
    });

    console.log("done");
  } else {
    console.log("error");
  }
});
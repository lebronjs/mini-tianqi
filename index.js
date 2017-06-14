/**
 * Created by tangxu on 2017/6/14.
 */
var request = require("request");
var config = require("./config");
var print = require("./print");

module.exports = function (word) {
  if (word) {
    getDataByCityName(word);
  } else {//没有输入城市名则默认根据读取当前城市的天气
    request.get(config.ip.url, function (error, response, body) {
      var ipResult = JSON.parse(body);
      getDataByCityName(ipResult.ip);
    });
  }
};

function getDataByCityName(word) {
  word = encodeURIComponent(word);//可把字符串作为 URI 组件进行编码
  var options = {
    url: config.weather.url + word,
  };
  request.get(options.url, function (error, response, body) {
    //console.log(body);
    if (!error && response.statusCode == 200) {
      print.print(JSON.parse(body));
    }
  });
}
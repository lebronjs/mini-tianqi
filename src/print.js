/**
 * Created by tangxu on 2017/6/14.
 */
exports.print = function (data) {
  if (data) {
    //console.log(data.results[0].location);
    printToday(data.results[0].location, data.results[0].daily[0]);
    printForecast(data.results[0].daily);
  } else {
    console.log(data.errMsg.red);
  }
};
function printToday(city,today) {
  console.log("\n " + city.name.cyan.bold+"今日天气".cyan.bold)
  var todayStr = "\n "+today.date.bold + ":  白天 ".bold + today.text_day.green + "   晚上 ".bold + today.text_night.green;
  todayStr += "  最低温度 " + today.low.cyan;
  todayStr += "  最高温度 " + today.high.red;
  todayStr += "  风力 " + today.wind_scale.yellow;
  todayStr += "\n";
  console.log(todayStr);
}
function printForecast(forecast) {
  console.log( "\n"+" 未来两天预报~".cyan.bold);
  forecast.forEach(function (data,index) {
    if(index<1){return false};
    var str =  "\n " + data.date.bold + ":  白天 ".bold + data.text_day.green + "   晚上 ".bold + data.text_night.green;
    str += " 最低温度 " + data.low.cyan;
    str += "  最高温度 " + data.high.red;
    str += "  风力 " + data.wind_scale.yellow;
    str += "\n";
    console.log(str);
  });
}

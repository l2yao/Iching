this["JST"] = this["JST"] || {};

this["JST"]["app/templates/bazi"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"hero-unit\">\n      <label>时间</label>\n      <div class=\"input-prepend\">   \n      <select>\n      <option>公历</option>\n      <option>农历</option>\n      </select>\n      <span class=\"add-on\">日期</span>\n      <input class=\"input-medium\" type=\"date\" id=\"input-date\">\n      <span class=\"add-on\">时间</span>\n      <input class=\"input-medium\" type=\"time\" id=\"input-time\">\n      <button class=\"btn btn-primary\" id=\"getCurtime\">此时</button>\n      </div>\n      <label>地点</label>\n      <div class=\"input-prepend\">\n      <span class=\"add-on\">经度</span>\n      <input class=\"input-small\" type=\"number\" id=\"input-longitude\">\n      <span class=\"add-on\">纬度</span>\n      <input class=\"input-small\" type=\"number\" id=\"input-latitude\">\n      <button class=\"btn btn-primary\" id=\"getCurlocation\">此地</button>\n      </div>\n\n      <div>\n      <button class=\"btn btn-large btn-primary\" id=\"getBazi\">排卦</button>\n      </div>\n      <div id=\"guaxiang\"></div>\n</div>";
  });
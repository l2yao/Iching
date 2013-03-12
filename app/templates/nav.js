this["JST"] = this["JST"] || {};

this["JST"]["app/templates/nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"container\">\n    <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n    </a>\n    <a id='nav-title' class=\"brand\">易经风水</a>\n    <div class=\"nav-collapse collapse\">\n        <ul class=\"nav\">\n            <li><a id='nav-bazi'>八字</a></li>\n            <li><a id='nav-zhanbu'>占卜</a></li>\n            <li><a id='nav-fengshui'>风水</a></li>\n            <li><a id='nav-calendar'>万年历</a></li>\n        </ul>\n    </div>\n</div>";
  });
this["JST"] = this["JST"] || {};

this["JST"]["app/templates/bagua-table"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <tr>\n                <td align=\"center\" width=\"10%\"><h1>"
    + escapeExpression(((stack1 = depth0.gong),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1></td>\n                ";
  stack2 = helpers.each.call(depth0, depth0.gua, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </tr>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <td align=\"center\" width=\"10%\"><h1>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</h1></td>\n                ";
  return buffer;
  }

  buffer += "<div class=\"hero-unit\">\n    <table class=\"table table-bordered\">\n        <tbody>\n        <tr>\n            <td align=\"center\" width=\"10%\">八宫</td>\n            <td align=\"center\" width=\"10%\">六冲卦</td>\n            <td align=\"center\" width=\"10%\">动初爻</td>\n            <td align=\"center\" width=\"10%\">动二爻</td>\n            <td align=\"center\" width=\"10%\">动三爻</td>\n            <td align=\"center\" width=\"10%\">动四爻</td>\n            <td align=\"center\" width=\"10%\">动五爻</td>\n            <td align=\"center\" width=\"10%\">游魂卦</td>\n            <td align=\"center\" width=\"10%\">归魂卦</td>\n        </tr>\n        ";
  stack1 = helpers.each.call(depth0, depth0.bagong, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n</div>";
  return buffer;
  });
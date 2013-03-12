define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/zhanbu','iching'], 
	function ($, _, Backbone,Handlebars, templOne) {
	'use strict';

	var zhanbuView = Backbone.View.extend({
		el: '#zhanbu',
		template: templOne,
		render: function(){
			var self = this;
			var html = self.template();
			self.$el.html(html);
		}
	});

	return zhanbuView;
});
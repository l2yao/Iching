define(['jquery','underscore','backbone', 'handlebars','../../templates/zhanbu','iching'], 
	function ($, _, Backbone,Handlebars) {
	'use strict';

	var zhanbuView = Backbone.View.extend({
		el: '#zhanbu',
		template: JST['app/templates/zhanbu'],
		render: function(){
			var self = this;
			var html = self.template();
			self.$el.html(html);
		}
	});

	return zhanbuView;
});
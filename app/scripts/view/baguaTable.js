define(['jquery','underscore','backbone', 'handlebars','../../templates/bagua-table','iching'], 
	function ($, _, Backbone,Handlebars) {
	'use strict';

	var baguaTableView = Backbone.View.extend({
		el: '#content',
		template: JST['app/templates/bagua-table'],
		render: function(){
			var self = this;
			var html = self.template({'bagong': Iching.bagong_bagua});
			self.$el.html(html);
		}
	});

	return baguaTableView;
});
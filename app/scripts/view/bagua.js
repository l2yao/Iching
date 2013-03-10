define(['jquery','underscore','backbone', 'handlebars','../../templates/bagua','iching'], 
	function ($, _, Backbone,Handlebars) {
	'use strict';

	var baguaView = Backbone.View.extend({
		el: '#bagua',
		template: JST['app/templates/bagua'],
		render: function(){
			var self = this;
			var html = self.template({'bagong': Iching.bagong_bagua});
			self.$el.html(html);
		}
	});

	return baguaView;
});
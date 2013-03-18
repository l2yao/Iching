define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/bagua','iching'], 
	function ($, _, Backbone,Handlebars,templOne, iching) {
	'use strict';

	var baguaView = Backbone.View.extend({
		el: '#bagua',
		template: templOne,
		render: function(){
			var self = this;
			var html = self.template({'bagong': iching.bagong_bagua});
			self.$el.html(html);
		}
	});

	return baguaView;
});
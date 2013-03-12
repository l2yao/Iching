define(['jquery','underscore','backbone', 'handlebars','../../templates/nav'], 
	function ($, _, Backbone,Handlebars) {
	'use strict';

	var navView = Backbone.View.extend({
		el: '#nav',
		template: JST['app/templates/nav'],
		render: function(){
			var html = this.template();
			this.$el.html(html);
		}
	});

	return navView;
});
define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/nav'], 
	function ($, _, Backbone,Handlebars, templOne) {
	'use strict';

	var navView = Backbone.View.extend({
		el: '#nav',
		template: templOne,
		render: function(){
			var html = this.template();
			this.$el.html(html);
		}
	});

	return navView;
});
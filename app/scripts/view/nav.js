define(['jquery','underscore','backbone', 'handlebars','../../templates/nav'], 
	function ($, _, Backbone,Handlebars) {
    'use strict';
    // use app here
    var navView = Backbone.View.extend({
		el: '#nav',
		template: JST['app/templates/nav'],
		render: function() {
			var self = this;
			var data = self.model.fetch({
				dataType: 'json',
				success: function(data){
		            self.$el.html(self.template(data.attributes));
		        }
			});
		}
	});

	return navView;
});
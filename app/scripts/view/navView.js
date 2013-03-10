define([], function () {
    'use strict';
    // use app here
    var navView = Backbone.View.extend({
		el: 'nav',
		template: JST['app/templates/nav'],
		render: function() {
			var self = this;
			var data = this.model.fetch({
				dataType: 'json',
				success: function(data){
		            self.$el.html(self.template(data));
		        }
			});
		    return this;
		}
	});
});
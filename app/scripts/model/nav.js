define(['underscore','backbone'], function (_, Backbone) {
	var navModel = Backbone.Model.extend({
		url: 'json/nav.json'
	});
	return navModel;
});
define(['jquery','underscore','backbone'], function ($, _, Backbone) {
    'use strict';

    var appRouter = Backbone.Router.extend({
    	routes: {
    		"" : "bagua",
    		"bagua": "bagua",
	    	"bazi" : "bazi",
	        "zhanbu": "zhanbu",
	        "fengshui": "fengshui",
	        "calendar": "calendar"
    	},
    	hideAllViews: function() {
    		$('#pages .container').hide();
    	},
    	openNav: function(view) {
    		this.hideAllViews();
    		$(view).show();
    	},
    	deselectAllNav: function() {
    		$('ul.nav li').removeClass('active');
    	},
    	selectNav: function(view) {
    		this.deselectAllNav();
    		$(view).addClass('active');
    	},
    	bagua: function() {
    		this.openNav('div#bagua');
    		this.selectNav('a#nav-title');
    	},
    	bazi: function() {
    		this.openNav('div#bazi');
    		this.selectNav('li#nav-bazi');
    	},
    	zhanbu: function() {
    		this.openNav('div#zhanbu');
    		this.selectNav('li#nav-zhanbu');
    	},
    	fengshui: function() {
    		this.openNav('div#fengshui');
    		this.selectNav('li#nav-fengshui');
    	},
    	calendar: function() {
    		this.openNav('div#calendar');
    		this.selectNav('li#nav-calendar');
    	}
    });

    return appRouter;
});
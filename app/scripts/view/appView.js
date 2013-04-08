define(['jquery','underscore','backbone', 'model/appRouter',
	'view/bagua', 'view/zhanbu', 'view/fengshui', 'view/bazi', 'view/calendar'], 
	function ($, _, Backbone, appRouter, baguaView, zhanbuView, fengshuiView, baziView, calendarView) {
	'use strict';

	var appView = Backbone.View.extend({
		el: '#wrap',
		views: [],
		events: {
			"click #nav-title": "clickTitle",
			"click #nav-bazi": "clickBazi",
			"click #nav-zhanbu": "clickZhanbu",
			"click #nav-fengshui": "clickFengshui",
			"click #nav-calendar": "clickCalendar"
		},
		initialize: function() {

		    var baguaview = new baguaView;
		    baguaview.render();

		    var baziview = new baziView;
		    baziview.render();

		    var zhanbuview = new zhanbuView;
		    zhanbuview.render();

		    var fengshuiview = new fengshuiView;
		    fengshuiview.render();

		    var calendarview = new calendarView;
		    calendarview.render();

		    this.router = new appRouter;

		    Backbone.history.start({pushState: true});
		},
		clickTitle: function(ev){
			this.router.navigate('bagua', true);
		},
		clickBazi: function(ev) {
			this.router.navigate('bazi', true);
		},
		clickZhanbu:function(ev){
			this.router.navigate('zhanbu', true);
		},
		clickFengshui:function(ev){
			this.router.navigate('fengshui', true);
		},
		clickCalendar:function(ev){
			this.router.navigate('calendar', true);
		}
	});

	return appView;
});


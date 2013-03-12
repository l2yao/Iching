define(['jquery','underscore','backbone',
	'view/nav','view/bagua', 'view/zhanbu', 'view/fengshui', 'view/bazi', 'view/calendar'], 
	function ($, _, Backbone, navView, baguaView, zhanbuView, fengshuiView, baziView, calendarView) {
	'use strict';

	var appView = Backbone.View.extend({
		views: [],
		events: {
			"click #nav-title": "clickTitle",
			"click #nav-bazi": "clickBazi",
			"click #nav-zhanbu": "clickZhanbu",
			"click #nav-fengshui": "clickFengshui",
			"click #nav-calendar": "clickCalendar"
		},
		initialize: function() {
			var navview = new navView;
	    	navview.render();

		    var baguaview = new baguaView;
		    this.views.push(baguaview);

		    var baziview = new baziView;
		    this.views.push(baziview);

		    var zhanbuview = new zhanbuView;
		    this.views.push(zhanbuview);

		    var fengshuiview = new fengshuiView;
		    this.views.push(fengshuiview);

		    var calendarview = new calendarView;
		    this.views.push(calendarview);

		    this.render();
		},
		render: function() {
			for(var i=0;i<this.views.length;i++){
				this.views[i].render();
			}
		},
		hideAll: function() {
			for(var i=0;i<this.views.length;i++){
				this.views[i].$el.hide();
			}
		},
		clickTitle: function(ev){
			this.hideAll();
			this.views[0].$el.show();
			console.log('clickTitle');
		},
		clickBazi: function(ev) {
			this.hideAll();
			this.views[1].$el.show();
			console.log('clickBazi');
		},
		clickZhanbu:function(ev){
			this.hideAll();
			this.views[2].$el.show();
			console.log('clickZhanbu');
		},
		clickFengshui:function(ev){
			this.hideAll();
			this.views[3].$el.show();
			console.log('clickFengshui');
		},
		clickCalendar:function(ev){
			this.hideAll();
			this.views[4].$el.show();
			console.log('clickCalendar');
		}
	});

	return appView;
});


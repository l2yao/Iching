define(['jquery','underscore','backbone',
	'view/nav','view/bagua', 'view/zhanbu', 'view/fengshui', 'view/bazi', 'view/calendar'], 
	function ($, _, Backbone, navView, baguaView, zhanbuView, fengshuiView, baziView, calendarView) {
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
		    this.hideAll();
		    this.showView(0);
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
		showView: function(index) {
			this.views[index].$el.show();
		},
		clickTitle: function(ev){
			this.hideAll();
			this.showView(0);
		},
		clickBazi: function(ev) {
			this.hideAll();
			this.showView(1);
		},
		clickZhanbu:function(ev){
			this.hideAll();
			this.showView(2);
		},
		clickFengshui:function(ev){
			this.hideAll();
			this.showView(3);
		},
		clickCalendar:function(ev){
			this.hideAll();
			this.showView(4);
		}
	});

	return appView;
});


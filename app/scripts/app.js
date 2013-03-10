/*global define */
define(['view/bagua', 'view/zhanbu', 'view/fengshui', 'view/bazi', 'view/calendar'], 
	function (baguaView, zhanbuView, fengshuiView, baziView, calendarView) {
    'use strict';

    var init = function (){
	    var baguaview = new baguaView;
	    baguaview.render();

	    var zhanbuview = new zhanbuView;
	    zhanbuview.render();

	    var fengshuiview = new fengshuiView;
	    fengshuiview.render();

	    var baziview = new baziView;
	    baziview.render();

	    var calendarview = new calendarView;
	    calendarview.render();
	};
    
    return {
    	init: init
    };
});
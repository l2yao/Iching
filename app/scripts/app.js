/*global define */
define(['view/baguaTable'], function (baguaTableView) {
    'use strict';

    var init = function (){
	    var bagongview = new baguaTableView;
	    bagongview.render();
	};
    
    return {
    	init: init
    };
});
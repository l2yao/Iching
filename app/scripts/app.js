/*global define */
define(['model/nav','view/nav','view/baguaTable'], function (navModel, navView, baguaTableView) {
    'use strict';

    var init = function (){
	    var navmodel = new navModel;
	    var navview = new navView({
	    	model: navmodel
	    });
	    var bagongview = new baguaTableView;

	    navview.render();
	    bagongview.render();
	};
    
    return {
    	init: init
    };
});
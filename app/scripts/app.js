/*global define */
require(['../templates/nav', '../templates/bagua-table', 'iching'], function () {
    'use strict';

    $.ajax({
	  url: "json/nav.json",
	  dataType: "json"
	}).done(function(data) {
		var template = JST['app/templates/nav'];
		var html = template(data);
		$('#nav').html(html);

		template = JST['app/templates/bagua-table'];
		console.log(Iching.bagong_bagua);
		html = template({'bagong': Iching.bagong_bagua});

		$('#content').html(html);
	}).fail(function(jqXHR, textStatus) {
	  	console.log( "Request failed: " + textStatus );
	});
    
});
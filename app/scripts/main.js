require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        raphael: '../components/raphael/raphael',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore/underscore',
        handlebars: '../components/handlebars/handlebars'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'bootstrap', 'underscore','backbone', 'handlebars','app'], function (app, $) {
    'use strict';
    // use app here
    app;
});
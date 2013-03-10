require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        raphael: '../components/raphael/raphael',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        handlebars: '../components/handlebars.js/dist/handlebars'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    app.init();
});
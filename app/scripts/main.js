require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        raphael: '../components/raphael/raphael'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
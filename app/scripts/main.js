require.config({
    hbs : {
        templateExtension : 'handlebars',
        disableI18n : true
    },
    paths: {
        jquery: '../components/sass-bootstrap/docs/assets/js/jquery',
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        bootstraptab: '../components/sass-bootstrap/docs/assets/js/bootstrap-tab',
        raphael: '../components/raphael/raphael',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        handlebars: '../components/require-handlebars-plugin/Handlebars',
        hbs: '../components/require-handlebars-plugin/hbs',
        json2: '../components/require-handlebars-plugin/hbs/json2',
        i18nprecompile: '../components/require-handlebars-plugin/hbs/i18nprecompile'
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
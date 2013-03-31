require.config({
    hbs : {
        templateExtension : 'handlebars',
        disableI18n : true
    },
    paths: {
        d3: '../components/d3/d3',
        jquery: '../components/sass-bootstrap/docs/assets/js/jquery',
        bootstrap: '../components/sass-bootstrap/docs/assets/js/bootstrap',
        bootstraptab: '../components/sass-bootstrap/docs/assets/js/bootstrap-tab',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        handlebars: '../components/require-handlebars-plugin/Handlebars',
        hbs: '../components/require-handlebars-plugin/hbs',
        json2: '../components/require-handlebars-plugin/hbs/json2',
        i18nprecompile: '../components/require-handlebars-plugin/hbs/i18nprecompile',
        datejs: '../components/datejs/build/date',
        calendar: 'lunar/calendar',
        eph: 'lunar/eph',
        eph0: 'lunar/eph0',
        ephB: 'lunar/ephB',
        lunar: 'lunar/lunar',
        JW: 'lunar/JW',
        page_gj: 'lunar/page_gj',
        tools: 'lunar/tools'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        d3: {
            exports: 'd3'
        },
        calendar: {
            deps: ['lunar']
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    app.init();
});
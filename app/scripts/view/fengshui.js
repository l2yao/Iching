define(['jquery','underscore','backbone', 'handlebars','../../templates/fengshui'], 
    function ($, _, Backbone,Handlebars) {
    'use strict';

    var fengshuiView = Backbone.View.extend({
        el: '#fengshui',
        template: JST['app/templates/fengshui'],
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
        }
    });

    return fengshuiView;
});
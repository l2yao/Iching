define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/fengshui'], 
    function ($, _, Backbone,Handlebars,templOne) {
    'use strict';

    var fengshuiView = Backbone.View.extend({
        el: '#fengshui',
        template: templOne,
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
        }
    });

    return fengshuiView;
});
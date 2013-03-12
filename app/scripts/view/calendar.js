define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching'], 
    function ($, _, Backbone,Handlebars,templOne) {
    'use strict';

    var calendarView = Backbone.View.extend({
        el: '#calendar',
        template: templOne,
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
        }
    });

    return calendarView;

});

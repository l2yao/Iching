define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching','bootstraptab'], 
    function ($, _, Backbone,Handlebars,templOne) {
    'use strict';

    var calendarView = Backbone.View.extend({
        el: '#calendar',
        template: templOne,
        events: {
        },
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
        }
    });

    return calendarView;

});

define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching','bootstraptab',
    'lunar/lunar','lunar/eph','lunar/eph0','lunar/ephB','lunar/page_gj','lunar/calendar'], 
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

            // render this month calendar
            changeMonth(2);
        }
    });

    return calendarView;

});

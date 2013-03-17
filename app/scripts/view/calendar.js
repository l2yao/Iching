define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching'], 
    function ($, _, Backbone,Handlebars,templOne) {
    'use strict';

    var calendarView = Backbone.View.extend({
        el: '#calendar',
        template: templOne,
        events: {
            'click .nav a': 'showtab'
        },
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
        },
        showtab: function(ev){
            var tabindex = $(ev.target).data('tab');
            
            $(function () {
                $(ev.target).tab('show');
            });
        }
    });

    return calendarView;

});

define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching','bootstraptab',
    'lunar','eph','eph0','ephB','page_gj','JW','calendar'], 
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

            // 显示恒星库 
            showHXK0();
            showHXK(0);

            // init current date time
            set_date_screen(0);

            for(var i=0;i<SQv.length;i++) {
                addOp(document.all.Sel_zhou,i,SQv[i][0]);
            }
            change_zhou();

            for(var i=0;i<JWv.length;i++) {
                addOp(document.all.Sel1,i,JWv[i][0]);
            }

            var seI1=getCookie('Sel1');
            var seI2=getCookie('Sel2');
            Sel1.selectedIndex = seI1; 
            change();
            Sel2.selectedIndex = seI2; 
            change2();

            getLunar(); //调用月历页面生成函数

            setInterval(function(){
                var now = new Date();
                show_clock(now);
                zb_calc();
            }, 1000);
        }
    });

    return calendarView;

});

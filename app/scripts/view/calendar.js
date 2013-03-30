define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/calendar','iching','bootstraptab',
    'lunar','eph','eph0','ephB','page_gj','JW','calendar'], 
    function ($, _, Backbone,Handlebars,templOne) {
    'use strict';

    var calendarView = Backbone.View.extend({
        el: '#calendar',
        template: templOne,
        events: {
            'click #page1-enter' : 'page1enter',
            'click #page1-yearup' : 'page1yearup',
            'click #page1-yeardown' : 'page1yeardown',
            'click #page1-monthup' : 'page1monthup',
            'click #page1-monthdown' : 'page1monthdown',
            'click #page1-today' : 'page1today',
            'click #page2-enter' : 'page2enter',
            'click #page2-yearup' : 'page2yearup',
            'click #page2-yeardown' : 'page2yeardown',
            'click #page2-multiyear' : 'page2multiyear',
            'click #page3-today' : 'page3today',
            'click #page3-su' : 'page3su',
            'click #page3-sudown' : 'page3sudown',
            'click #page3-suup' : 'page3suup',
            'click #page3-wang' : 'page3wang',
            'click #page3-wangup' : 'page3wangup',
            'click #page3-wangdown' : 'page3wangdown',
            'click #page3-enter' : 'page3enter',
            'click #page3-buup' : 'page3buup',
            'click #page3-budown' : 'page3budown',
            'click #page3-clear' : 'page3clear',
            'click #page4-sudown' : 'page4sudown',
            'click #page4-su' : 'page4su',
            'click #page4-suup' : 'page4suup',
            'click #page5-enter' : 'page5enter',
            'click #page5-help' : 'page5help',
            'click #page6-help' : 'page6help',
            'click #page6-moonnear' : 'page6moonnear',
            'click #page6-moonfar' : 'page6moonfar',
            'click #page6-moonup' : 'page6moonup',
            'click #page6-moondown' : 'page6moondown',
            'click #page6-earthnear' : 'page6earthnear',
            'click #page6-earthfar' : 'page6earthfar',
            'click #page6-watereast' : 'page6watereast',
            'click #page6-waterwest' : 'page6waterwest',
            'click #page6-goldeast' : 'page6goldeast',
            'click #page6-goldwest' : 'page6goldwest',
            'click #page6-redwater' : 'page6redwater',
            'click #page6-redgold' : 'page6redgold',
            'click #page6-redfire' : 'page6redfire',
            'click #page6-redwood' : 'page6redwood',
            'click #page6-redearth' : 'page6redearth',
            'click #page6-redsky' : 'page6redsky',
            'click #page6-redsea' : 'page6redsea',
            'click #page6-togetherwater' : 'page6togetherwater',
            'click #page6-togethergold' : 'page6togethergold',
            'click #page6-togetherfire' : 'page6togetherfire',
            'click #page6-togetherwood' : 'page6togetherwood',
            'click #page6-togetherearth' : 'page6togetherearth',
            'click #page6-togethersky' : 'page6togethersky',
            'click #page6-togethersea' : 'page6togethersea',
            'click #page6-starwater' : 'page6starwater',
            'click #page6-stargold' : 'page6stargold',
            'click #page6-starfire' : 'page6starfire',
            'click #page6-starwood' : 'page6starwood',
            'click #page6-starearth' : 'page6starearth',
            'click #page6-starsky' : 'page6starsky',
            'click #page6-starsea' : 'page6starsea',
            'click #page6-oppositewater' : 'page6oppositewater',
            'click #page6-oppositegold' : 'page6oppositegold',
            'click #page6-oppositefire' : 'page6oppositefire',
            'click #page6-oppositewood' : 'page6oppositewood',
            'click #page6-oppositeearth' : 'page6oppositeearth',
            'click #page6-oppositesky' : 'page6oppositesky',
            'click #page6-oppositesea' : 'page6oppositesea',
            'click #page6-backwater' : 'page6backwater',
            'click #page6-backgold' : 'page6backgold',
            'click #page6-backfire' : 'page6backfire',
            'click #page6-backwood' : 'page6backwood',
            'click #page6-backearth' : 'page6backearth',
            'click #page6-backsky' : 'page6backsky',
            'click #page6-backsea' : 'page6backsea',
            'change #Cf_xk' : 'page7changeXK',
            'click #page7-help' : 'page7help',
            'click #page7-enter' : 'page7enter',
            'click #page8-dingsu' : 'page8dingsu',
            'click #page8-dingwang': 'page8dingwang',
            'click #page8-upstring': 'page8upstring',
            'click #page8-downstring': 'page8downstring',
            'click #page8-any': 'page8any',
            'click #page8-dingqi': 'page8dingqi',
            'click #page8-dinghou': 'page8dinghou',
            'click #page9-enter': 'page9enter',
            'click #page9-sun': 'page9sun',
            'click #page9-timediff': 'page9timediff',
            'click #page10-search': 'page10search',
            'click #page10-accuratesearch': 'page10accuratesearch',
            'click #page10-borderdown': 'page10borderdown',
            'click #page10-border': 'page10border',
            'click #page10-borderup': 'page10borderup',
            'click #page10-enter': 'page10enter',
            'click #page10-clear': 'page10clear',
            'click #page10-longitudeup': 'page10longitudeup',
            'click #page10-longitudedown': 'page10longitudedown',
            'click #page10-latitudeup': 'page10latitudeup',
            'click #page10-latitudedown': 'page10latitudedown',
            'click #page10-xzenter': 'page10xzenter',
            'click #page10-shadowdown': 'page10shadowdown',
            'click #page10-shadow': 'page10shadow',
            'click #page10-shadowup': 'page10shadowup',
            'change #page10-step': 'page10step',
            'click #page11-enter': 'page11enter',
            'click #page11-now': 'page11now',
            'click #page11-here': 'page11here',
            'click #page12-enter': 'page12enter',
            'click #page12-convertday': 'page12convertday',
            'click #page12-removeup': 'page12removeup',
            'click #page12-addday': 'page12addday',
            'click #page12-rowminus': 'page12rowminus',
            'click #page12-6c': 'page126c',
            'click #page12-4c': 'page124c',
            'click #page12-6s': 'page126s',
            'click #page12-4s': 'page124s',
            'click #page12-6fast': 'page126fast',
            'click #page12-4fast': 'page124fast',
            'click #page12-zuchongzhi': 'page12zuchongzhi',
            'click #page12-morden': 'page12morden',
            'click #page12morden2': 'page12morden2',
            'click #page12clear': 'page12clear',
            'change #Sel_dq': 'seldq',
            'change #Sel_zhou': 'selzhou',
            'change #Sel1': 'sel1',
            'change #Sel2': 'sel2'
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
        },
        page1enter : function() {
            getLunar();
        },
        page1yearup : function() {
            changeYear(0);
        },
        page1yeardown : function() {
            changeYear(1);
        },
        page1monthup : function() {
            changeMonth(0);
        },
        page1monthdown : function() {
            changeMonth(1);
        },
        page1today : function() {
            changeMonth(2);
        },
        page2enter : function() {
            getNianLi(0);
        },
        page2yearup : function() {
            getNianLi(-1);
        },
        page2yeardown : function() {
            getNianLi(1);
        },
        page2multiyear : function() {
            getNianLiN();
        },
        page3today : function() {
            tu_calc(1);
        },
        page3su : function() {
            tu_calc(5);
        },
        page3sudown : function() {
            tu_calc(4);
        },
        page3suup : function() {
            tu_calc(6);
        },
        page3wang : function() {
            tu_calc(8);
        },
        page3wangup : function() {
            tu_calc(9);
        },
        page3wangdown : function() {
            tu_calc(7);
        },
        page3enter : function() {
            tu_calc(0);
        },
        page3buup : function() {
            tu_calc(3);
        },
        page3budown : function() {
            tu_calc(2);
        },
        page3clear : function() {
            tu_cls_path();
        },
        page4su : function() {
            dfRS(0);
        },
        page4suup : function() {
            dfRS(2);
        },
        page4sudown : function() {
            dfRS(1);
        },
        page5enter : function() {
            pCalc();
        },
        page5help: function() {
            showHelp(4);
        },
        page6help: function() {
            showHelp(5);
        },
        page6moonnear: function() {
            tianXiang(1,0);
        },
        page6moonfar: function() {
            tianXiang(2,0);
        },
        page6moonup: function() {
            tianXiang(3,0);
        },
        page6moondown: function() {
            tianXiang(4,0);
        },
        page6earthnear: function() {
            tianXiang(5,0);
        },
        page6earthfar: function() {
            tianXiang(6,0);
        },
        page6watereast: function() {
            tianXiang(7,0);
        },
        page6waterwest: function() {
            tianXiang(8,0);
        },
        page6goldeast: function() {
            tianXiang(9,0);
        },
        page6goldwest: function() {
            tianXiang(10,0);
        },
        page6redwater: function() {
            tianXiang(11,1);
        },
        page6redgold: function() {
            tianXiang(11,2);
        },
        page6redfire: function() {
            tianXiang(11,3);
        },
        page6redwood: function() {
            tianXiang(11,4);
        },
        page6redearth: function() {
            tianXiang(11,5);
        },
        page6redsky: function() {
            tianXiang(11,6);
        },
        page6redsea: function() {
            tianXiang(11,7);
        },
        page6togetherwater: function() {
            tianXiang(12,1);
        },
        page6togethergold: function() {
            tianXiang(12,2);
        },
        page6togetherfire: function() {
            tianXiang(12,3);
        },
        page6togetherwood: function() {
            tianXiang(12,4);
        },
        page6togetherearth: function() {
            tianXiang(12,5);
        },
        page6togethersky: function() {
            tianXiang(12,6);
        },
        page6togethersea: function() {
            tianXiang(12,7);
        },
        page6starwater: function() {
            tianXiang(14,1);
        },
        page6stargold: function() {
            tianXiang(14,2);
        },
        page6starfire: function() {
            tianXiang(14,3);
        },
        page6starwood: function() {
            tianXiang(14,4);
        },
        page6starearth: function() {
            tianXiang(14,5);
        },
        page6starsky: function() {
            tianXiang(14,6);
        },
        page6starsea: function() {
            tianXiang(14,7);
        },
        page6oppositewater: function() {
            tianXiang(13,1);
        },
        page6oppositegold: function() {
            tianXiang(13,2);
        },
        page6oppositefire: function() {
            tianXiang(13,3);
        },
        page6oppositewood: function() {
            tianXiang(13,4);
        },
        page6oppositeearth: function() {
            tianXiang(13,5);
        },
        page6oppositesky: function() {
            tianXiang(13,6);
        },
        page6oppositesea: function() {
            tianXiang(13,7);
        },
        page6backwater: function() {
            tianXiang(15,1);
        },
        page6backgold: function() {
            tianXiang(15,2);
        },
        page6backfire: function() {
            tianXiang(15,3);
        },
        page6backwood: function() {
            tianXiang(15,4);
        },
        page6backearth: function() {
            tianXiang(15,5);
        },
        page6backsky: function() {
            tianXiang(15,6);
        },
        page6backsea: function() {
            tianXiang(15,7);
        },
        page7changeXK: function() {
            showHXK(this.options[this.selectedIndex].value);
        },
        page7help: function() {
            showHelp(6);
        },
        page7enter: function() {
            aCalc();
        },
        page8dingsu: function() {
            suoCalc(0);
        },
        page8dingwang: function() {
            suoCalc(180);
        },
        page8upstring: function() {
            suoCalc(90);
        },
        page8downstring: function() {
            suoCalc(270);
        },
        page8any: function() {
            suoCalc(-1);
        },
        page8dingqi: function() {
            qiCalc();
        },
        page8dinghou: function() {
            houCalc();
        },
        page9enter: function() {
            shengjiang();
        },
        page9sun: function() {
            shengjiang2();
        },
        page9timediff: function() {
            shengjiang3();
        },
        page10search: function() {
            tuGL_search(0);
        },
        page10accuratesearch: function() {
            tuGL_search(1);
        },
        page10borderdown: function() {
            tu2_calc(3);
        },
        page10border: function() {
            tu2_calc(2);
        },
        page10borderup: function() {
            tu2_calc(4);
        },
        page10enter: function() {
            tu2_calc(5);
        },
        page10clear: function() {
            tu2_cls_path();
        },
        page10longitudeup: function() {
            tu3_xz(0);
        },
        page10longitudedown: function() {
            tu3_xz(1);
        },
        page10latitudeup: function() {
            tu3_xz(2);
        },
        page10latitudedown: function() {
            tu3_xz(3);
        },
        page10xzenter: function() {
            tu3_xz(4);
        },
        page10shadowdown: function() {
            tu3_yingzi(1);
        },
        page10shadow: function() {
            tu3_yingzi(0);
        },
        page10shadowup: function() {
            tu3_yingzi(2);
        },
        page10step: function() {
            Cp10_step.value=this.options[this.selectedIndex].value;
        },
        page11enter: function() {
            ML_calc();
        },
        page11now: function() {
            ML_settime();
        },
        page11here: function() {
            ML_setlocation();
        },
        page12enter:function() {
            GJ1_calc1();
        },
        page12convertday: function() {
            GJ1_calc2(0);
        },
        page12removeup: function() {
            GJ1_calc2(1);
        },
        page12addday: function() {
            GJ1_calc2(2);
        },
        page12rowminus: function() {
            GJ1_calc2(3);
        },
        page126c: function() {
            GJ2_pi1(0);
        },
        page124c: function() {
            GJ2_pi1(1);
        },
        page126s: function() {
            GJ2_pi1(2);
        },
        page124s: function() {
            GJ2_pi1(3);
        },
        page126fast: function() {
            GJ2_pi1(4);
        },
        page124fast: function() {
            GJ2_pi1(5);
        },
        page12zuchongzhi: function() {
            GJ2_pi2();
        },
        page12morden: function() {
            GJ2_pi();
        },
        page12morden2: function() {
            GJ2_machin.pi();
        },
        page12clear: function() {
            GJ2_cls();
        },
        seldq: function() {
            change_dq();
        },
        selzhou: function() {
            change_zhou();
        },
        sel1: function() {
            change(0);
        },
        sel2: function() {
            change2();
        }
    });

    return calendarView;

});

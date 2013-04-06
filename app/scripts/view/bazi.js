define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/bazi','iching',
    'lunar','eph0','eph','ephB', 'tools', 'datejs'], 
    function ($, _, Backbone,Handlebars,templOne, iching) {
    'use strict';

    var baziView = Backbone.View.extend({
        el: '#bazi',
        template: templOne,
        events: {
            'click #getCurlocation': 'clickCurLocation',
            'click #getCurtime': 'clickCurTime',
            'click #getBazi': 'clickBazi',
        },
        render: function(){
            var self = this;
            var html = self.template();
            self.$el.html(html);
            this.clickCurLocation();
            this.clickCurTime();
        },
        clickCurLocation: function(){
            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function(position){
                    $('#input-latitude').val(position.coords.latitude);
                    $('#input-longitude').val(position.coords.longitude);
                });
            }
        },
        clickCurTime: function() {
            var now=new Date();
            curTZ = now.getTimezoneOffset()/60; //时区 -8为北京时
            curJD = now/86400000-10957.5 - curTZ/24; //J2000起算的儒略日数(当前本地时间)
            JD.setFromJD(curJD+J2000);

            $('#input-date').val(now.toString('yyyy-MM-dd'));
            $('#input-time').val(now.toString('HH:mm:ss'));
        },
        clickBazi: function() {
            var ob = new Object();
            var date = $('#input-date').val();
            var time = $('#input-time').val();

            var datetime = Date.parse(date+' '+time);
            JD.Y = datetime.getFullYear();
            JD.M = datetime.getMonth() + 1;
            JD.D = datetime.getDate();
            var t = timeStr2hour(time);
            var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
            var longitude = new Number($('#input-longitude').val());
            obb.mingLiBaZi(jd + curTZ/24-J2000, longitude/radd, ob );
            
            $('#sizhu').html('<h2>'+ob.bz_jn+'年 '+ob.bz_jy+'月 '+ob.bz_jr+'日 '+ob.bz_js+'时</h2>');
            
            var d0 = int2(JD.toJD()) - J2000;
            if(!SSQ.ZQ.length || d0<SSQ.ZQ[0] || d0>=SSQ.ZQ[24]) {
                SSQ.calcY(d0);
            }
            var mk = int2( (d0-SSQ.HS[0])/30 );  
            if(mk<13 && SSQ.HS[mk+1]<=d0) mk++; //农历所在月的序数
            var nlr = d0 - SSQ.HS[mk];
            
            if(mk <2) {
                mk += 11;
            }else{
                mk -= 1;
            }
            var nongli_yue = (mk-1) % 8;
            var nongli_ri = (nlr+1) % 8;
            
            var ri_index = iching.Trigram.indexOf(iching.xiantian_bagua[nongli_ri]);
            var ri_symbol = iching.Trigram_symbol[ri_index];
            var yue_index = iching.Trigram.indexOf(iching.xiantian_bagua[nongli_yue]);
            var yue_symbol = iching.Trigram_symbol[yue_index];
            var hexagram_symbol = iching.Hexagram_name[ri_index+yue_index*8];
            var gong_name = iching.getGongName(iching.Hexagram[ri_index+yue_index*8]);
            var gong_index = iching.Trigram_name.indexOf(gong_name);
            $('#gua-name').html('<h2>'+ri_symbol+yue_symbol+hexagram_symbol+' '+gong_name+'宫 属'+iching.Trigram_wuxing[gong_index]+'</h2>');
            $('#gua').empty();
            iching.drawTrigrams('#gua', iching.xiantian_bagua[nongli_ri], iching.xiantian_bagua[nongli_yue], ob.bz_jr.substr(0,1));    
        }
    });

    return baziView;
});
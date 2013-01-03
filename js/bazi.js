$(document).ready(function() {
    $('#getCurlocation').click(function(){
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(position){
                $('#input-latitude').attr('value', position.coords.latitude);
                $('#input-longitude').attr('value', position.coords.longitude);
            });
        }
    });

    $('#getCurtime').click(function(){
     var now=new Date();
     curTZ = now.getTimezoneOffset()/60; //时区 -8为北京时
     curJD = now/86400000-10957.5 - curTZ/24; //J2000起算的儒略日数(当前本地时间)
     JD.setFromJD(curJD+J2000);

     $('#input-date').attr('value', JD.Y+'-'+JD.M+'-'+JD.D);
     $('#input-time').attr('value', JD.h+':'+JD.m+':'+Math.floor(JD.s));
    });

    $('#getBazi').click(function(){
        var ob = new Object();
        var date = $('#input-date').attr('value');
        var array = date.split('-');
        JD.Y = Number(array[0]);
        JD.M = Number(array[1]);
        JD.D = Number(array[2]);
        var t = timeStr2hour($('#input-time').attr('value'));
        var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
        var longitude = new Number($('#input-longitude').attr('value'));
        obb.mingLiBaZi(jd + curTZ/24-J2000, longitude/radd, ob );
        
        var bazi = '<table class="table table-bordered"><thead><tr><td><h2>八字</h2></td><td><h2>'+ob.bz_jn+'年 '+ob.bz_jy+'月 '+ob.bz_jr+'日 '+ob.bz_js+'时</h2></td></tr></thead><tbody><tr><td><h2>卦名</h2></td><td><div id="gua-name"></div></td></tr><tr><td><h2>卦象</h2></td><td><div id="gua"></div></td></tr></tbody></table>';
        
        $('#guaxiang').html(bazi);
        
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
        var nongli_ri = nlr % 8;
        
        var ri_index = Iching.Trigram.indexOf(Iching.xiantian_bagua[nongli_ri]);
        var ri_symbol = Iching.Trigram_symbol[ri_index];
        var yue_index = Iching.Trigram.indexOf(Iching.xiantian_bagua[nongli_yue]);
        var yue_symbol = Iching.Trigram_symbol[yue_index];
        var hexagram_symbol = Iching.Hexagram_name[ri_index+yue_index*8];
        var gong_name = Iching.getGongName(Iching.Hexagram[ri_index+yue_index*8]);
        var gong_index = Iching.Trigram_name.indexOf(gong_name);
        $('#gua-name').html('<h2>'+ri_symbol+yue_symbol+hexagram_symbol+' '+gong_name+'宫 属'+Iching.Trigram_wuxing[gong_index]+'</h2>');
        Iching.drawTrigrams('gua', Iching.xiantian_bagua[nongli_ri], Iching.xiantian_bagua[nongli_yue], ob.bz_jr.substr(0,1));
    });
    
    $('#getCurlocation').click();
    $('#getCurtime').click();
});
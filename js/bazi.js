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
        var t = timeStr2hour($('#input-time').attr('value'));
        var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
        var longitude = new Number($('#input-longitude').attr('value'));
        obb.mingLiBaZi(jd + curTZ/24-J2000, longitude/radd, ob );
        
        var bazi = '<table class="table table-bordered"><thead><tr><td><h2>八字</h2></td><td><h2>'+ob.bz_jn+'年 '+ob.bz_jy+'月 '+ob.bz_jr+'日 '+ob.bz_js+'时</h2></td></tr></thead><tbody><tr><td><h2>卦象</h2></td><td><div id="gua"></div></td></tr></tbody></table>';
        
        $('#guaxiang').html(bazi);
        
        Iching.drawHexagram('gua', Iching.Hexagram[0]);
    });
    
    $('#getCurlocation').click();
    $('#getCurtime').click();
});
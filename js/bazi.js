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
     $('#input-time').attr('value', JD.h+':'+JD.m);
    });

    $('#getBazi').click(function(){
        var ob = new Object();
        var t = timeStr2hour($('#input-time').attr('value'));
        var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
        obb.mingLiBaZi(jd + curTZ/24-J2000, $('#input-longitude').attr('value')/radd, ob );
        
        var bazi = '<table class="table"><tbody><tr class="info"><td><h2>'+ob.bz_jn+'年</h2></td><td><h2>'+ob.bz_jy+'月</h2></td><td><h2>'+ob.bz_jr+'日</h2></td><td><h2>'+ob.bz_js+'时</h2></td></tr></tbody>';
        bazi += '</table>';
        $('#guaxiang').html(bazi);
    });
    
    $('#getCurlocation').click();
    $('#getCurtime').click();
});
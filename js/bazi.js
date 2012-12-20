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

    });
});
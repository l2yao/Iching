'use strict';

angular.module('ichingApp')
  .controller('bazi', function ($scope, $filter) {

  	$scope.getCurLocation = function(){
  		if (navigator.geolocation)
	    {
	        navigator.geolocation.getCurrentPosition(function(position){
	            $scope.latitude = position.coords.latitude;
	            $scope.longitude = position.coords.longitude;
	        });
	    }
  	}

  	$scope.getCurTime = function(){
  		var now=new Date();
        curTZ = now.getTimezoneOffset()/60; //时区 -8为北京时
        curJD = now/86400000-10957.5 - curTZ/24; //J2000起算的儒略日数(当前本地时间)
        JD.setFromJD(curJD+J2000);

        $scope.curDatetime = now;
        $scope.curDateString = $filter("date")(now, 'yyyy-MM-dd');
        $scope.curTimeString = $filter("date")(now, 'HH:mm:ss');;
  	}

  	$scope.getCurTime();
  	$scope.getCurLocation();

  	$scope.getBaZi = function(){
  		$scope.sizhu = new Object();
  		var dateArry = $scope.curDateString.split('-');
  		var timeArry = $scope.curTimeString.split(':');
  		$scope.curDatetime = new Date(dateArry[0],dateArry[1]-1,dateArry[2],timeArry[0],timeArry[1],timeArry[2]);

        JD.Y = $scope.curDatetime.getFullYear();
        JD.M = $scope.curDatetime.getMonth() + 1;
        JD.D = $scope.curDatetime.getDate();
        JD.h = $scope.curDatetime.getHours();
        JD.m = $scope.curDatetime.getMinutes();
        JD.s = $scope.curDatetime.getSeconds();
        var t = JD.h + JD.m/60 + JD.s/3600 + 4;
        var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
        obb.mingLiBaZi(jd -J2000, $scope.longitude/radd, $scope.sizhu );
        
        $scope.curDatetime.setHours($scope.curDatetime.getHours() - 12);
        JD.D = $scope.curDatetime.getDate();
        JD.h = $scope.curDatetime.getHours();

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
        $scope.nongli_yue = (mk-1) % 8;
        $scope.nongli_ri = (nlr+1) % 8;
        
        $scope.ri_index = iching.Trigram.indexOf(iching.xiantian_bagua[$scope.nongli_ri]);
        $scope.ri_symbol = iching.Trigram_symbol[$scope.ri_index];
        $scope.yue_index = iching.Trigram.indexOf(iching.xiantian_bagua[$scope.nongli_yue]);
        $scope.yue_symbol = iching.Trigram_symbol[$scope.yue_index];
        $scope.hexagram_symbol = iching.Hexagram_name[$scope.ri_index+$scope.yue_index*8];
        $scope.gong_name = iching.getGongName(iching.Hexagram[$scope.ri_index+$scope.yue_index*8]);
        $scope.gong_index = iching.Trigram_name.indexOf($scope.gong_name);
        $scope.wuxing = iching.Trigram_wuxing[$scope.gong_index];
        iching.drawTrigrams('#gua-bazi', iching.xiantian_bagua[$scope.nongli_ri], iching.xiantian_bagua[$scope.nongli_yue], $scope.sizhu.bz_jr.substr(0,1));
  	}
});
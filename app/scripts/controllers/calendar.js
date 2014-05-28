'use strict';

angular.module('ichingApp')
  .controller('calendar', function ($scope) {
  	// render this month calendar
    changeMonth(2);

    // 显示恒星库 
    showHXK0();
    showHXK(0);

    // init current date time
    set_date_screen(0);

    getLunar(); //调用月历页面生成函数
    
    $scope.page1yearup= function() {
        changeYear(0);
    },
    $scope.page1yeardown = function() {
        changeYear(1);
    },
    $scope.page1monthup = function() {
        changeMonth(0);
    },
    $scope.page1monthdown = function() {
        changeMonth(1);
    },
    $scope.page1today = function() {
        changeMonth(2);
    },
    $scope.page2enter = function() {
        getNianLi(0);
    },
    $scope.page2yearup = function() {
        getNianLi(-1);
    },
    $scope.page2yeardown = function() {
        getNianLi(1);
    },
    $scope.page2multiyear = function() {
        getNianLiN();
    },
    $scope.page3today = function() {
        tu_calc(1);
    },
    $scope.page3su = function() {
        tu_calc(5);
    },
    $scope.page3sudown = function() {
        tu_calc(4);
    },
    $scope.page3suup = function() {
        tu_calc(6);
    },
    $scope.page3wang = function() {
        tu_calc(8);
    },
    $scope.page3wangup = function() {
        tu_calc(9);
    },
    $scope.page3wangdown = function() {
        tu_calc(7);
    },
    $scope.page3enter = function() {
        tu_calc(0);
    },
    $scope.page3buup = function() {
        tu_calc(3);
    },
    $scope.page3budown = function() {
        tu_calc(2);
    },
    $scope.page3clear = function() {
        tu_cls_path();
    },
    $scope.page4su = function() {
        dfRS(0);
    },
    $scope.page4suup = function() {
        dfRS(2);
    },
    $scope.page4sudown = function() {
        dfRS(1);
    },
    $scope.page5enter = function() {
        pCalc();
    },
    $scope.page5help= function() {
        showHelp(4);
    },
    $scope.page6help= function() {
        showHelp(5);
    },
    $scope.page6moonnear= function() {
        tianXiang(1,0);
    },
    $scope.page6moonfar= function() {
        tianXiang(2,0);
    },
    $scope.page6moonup= function() {
        tianXiang(3,0);
    },
    $scope.page6moondown= function() {
        tianXiang(4,0);
    },
    $scope.page6earthnear= function() {
        tianXiang(5,0);
    },
    $scope.page6earthfar= function() {
        tianXiang(6,0);
    },
    $scope.page6watereast= function() {
        tianXiang(7,0);
    },
    $scope.page6waterwest= function() {
        tianXiang(8,0);
    },
    $scope.page6goldeast= function() {
        tianXiang(9,0);
    },
    $scope.page6goldwest= function() {
        tianXiang(10,0);
    },
    $scope.page6redwater= function() {
        tianXiang(11,1);
    },
    $scope.page6redgold= function() {
        tianXiang(11,2);
    },
    $scope.page6redfire= function() {
        tianXiang(11,3);
    },
    $scope.page6redwood= function() {
        tianXiang(11,4);
    },
    $scope.page6redearth= function() {
        tianXiang(11,5);
    },
    $scope.page6redsky= function() {
        tianXiang(11,6);
    },
    $scope.page6redsea= function() {
        tianXiang(11,7);
    },
    $scope.page6togetherwater= function() {
        tianXiang(12,1);
    },
    $scope.page6togethergold= function() {
        tianXiang(12,2);
    },
    $scope.page6togetherfire= function() {
        tianXiang(12,3);
    },
    $scope.page6togetherwood= function() {
        tianXiang(12,4);
    },
    $scope.page6togetherearth= function() {
        tianXiang(12,5);
    },
    $scope.page6togethersky= function() {
        tianXiang(12,6);
    },
    $scope.page6togethersea= function() {
        tianXiang(12,7);
    },
    $scope.page6starwater= function() {
        tianXiang(14,1);
    },
    $scope.page6stargold= function() {
        tianXiang(14,2);
    },
    $scope.page6starfire= function() {
        tianXiang(14,3);
    },
    $scope.page6starwood= function() {
        tianXiang(14,4);
    },
    $scope.page6starearth= function() {
        tianXiang(14,5);
    },
    $scope.page6starsky= function() {
        tianXiang(14,6);
    },
    $scope.page6starsea= function() {
        tianXiang(14,7);
    },
    $scope.page6oppositewater= function() {
        tianXiang(13,1);
    },
    $scope.page6oppositegold= function() {
        tianXiang(13,2);
    },
    $scope.page6oppositefire= function() {
        tianXiang(13,3);
    },
    $scope.page6oppositewood= function() {
        tianXiang(13,4);
    },
    $scope.page6oppositeearth= function() {
        tianXiang(13,5);
    },
    $scope.page6oppositesky= function() {
        tianXiang(13,6);
    },
    $scope.page6oppositesea= function() {
        tianXiang(13,7);
    },
    $scope.page6backwater= function() {
        tianXiang(15,1);
    },
    $scope.page6backgold= function() {
        tianXiang(15,2);
    },
    $scope.page6backfire= function() {
        tianXiang(15,3);
    },
    $scope.page6backwood= function() {
        tianXiang(15,4);
    },
    $scope.page6backearth= function() {
        tianXiang(15,5);
    },
    $scope.page6backsky= function() {
        tianXiang(15,6);
    },
    $scope.page6backsea= function() {
        tianXiang(15,7);
    },
    $scope.page7changeXK= function() {
        showHXK(this.options[this.selectedIndex].value);
    },
    $scope.page7help= function() {
        showHelp(6);
    },
    $scope.page7enter= function() {
        aCalc();
    },
    $scope.page8dingsu= function() {
        suoCalc(0);
    },
    $scope.page8dingwang= function() {
        suoCalc(180);
    },
    $scope.page8upstring= function() {
        suoCalc(90);
    },
    $scope.page8downstring= function() {
        suoCalc(270);
    },
    $scope.page8any= function() {
        suoCalc(-1);
    },
    $scope.page8dingqi= function() {
        qiCalc();
    },
    $scope.page8dinghou= function() {
        houCalc();
    },
    $scope.page9enter= function() {
        shengjiang();
    },
    $scope.page9sun= function() {
        shengjiang2();
    },
    $scope.page9timediff= function() {
        shengjiang3();
    },
    $scope.page10search= function() {
        tuGL_search(0);
    },
    $scope.page10accuratesearch= function() {
        tuGL_search(1);
    },
    $scope.page10borderdown= function() {
        tu2_calc(3);
    },
    $scope.page10border= function() {
        tu2_calc(2);
    },
    $scope.page10borderup= function() {
        tu2_calc(4);
    },
    $scope.page10enter= function() {
        tu2_calc(5);
    },
    $scope.page10clear= function() {
        tu2_cls_path();
    },
    $scope.page10longitudeup= function() {
        tu3_xz(0);
    },
    $scope.page10longitudedown= function() {
        tu3_xz(1);
    },
    $scope.page10latitudeup= function() {
        tu3_xz(2);
    },
    $scope.page10latitudedown= function() {
        tu3_xz(3);
    },
    $scope.page10xzenter= function() {
        tu3_xz(4);
    },
    $scope.page10shadowdown= function() {
        tu3_yingzi(1);
    },
    $scope.page10shadow= function() {
        tu3_yingzi(0);
    },
    $scope.page10shadowup= function() {
        tu3_yingzi(2);
    },
    $scope.page10step= function() {
        Cp10_step.value=this.options[this.selectedIndex].value;
    },
    $scope.page11enter= function() {
        ML_calc();
    },
    $scope.page11now= function() {
        ML_settime();
    },
    $scope.page11here= function() {
        ML_setlocation();
    },
    $scope.page12enter=function() {
        GJ1_calc1();
    },
    $scope.page12convertday= function() {
        GJ1_calc2(0);
    },
    $scope.page12removeup= function() {
        GJ1_calc2(1);
    },
    $scope.page12addday= function() {
        GJ1_calc2(2);
    },
    $scope.page12rowminus= function() {
        GJ1_calc2(3);
    },
    $scope.page126c= function() {
        GJ2_pi1(0);
    },
    $scope.page124c= function() {
        GJ2_pi1(1);
    },
    $scope.page126s= function() {
        GJ2_pi1(2);
    },
    $scope.page124s= function() {
        GJ2_pi1(3);
    },
    $scope.page126fast= function() {
        GJ2_pi1(4);
    },
    $scope.page124fast= function() {
        GJ2_pi1(5);
    },
    $scope.page12zuchongzhi= function() {
        GJ2_pi2();
    },
    $scope.page12morden= function() {
        GJ2_pi();
    },
    $scope.page12morden2= function() {
        GJ2_machin.pi();
    },
    $scope.page12clear= function() {
        GJ2_cls();
    },
    $scope.seldq= function() {
        change_dq();
    },
    $scope.selzhou= function() {
        change_zhou();
    },
    $scope.sel1= function() {
        change(0);
    },
    $scope.sel2= function() {
        change2();
    }
});
'use strict';

angular.module('ichingApp')
  .controller('calendar', function ($scope) {
    $scope.init = function() {
        // render this month calendar
        changeMonth(2);
        getLunar(); //调用月历页面生成函数
    },
    $scope.init();
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
    }
});
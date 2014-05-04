'use strict';

angular.module('ichingApp')
  .controller('fengshui', function ($scope) {
  	$scope.degree = 0;

  	$scope.feixing = function(){
  		$scope.xiang = fengshui.getMountain($scope.degree);
  		$scope.shan = fengshui.getOppositeMountain($scope.xiang);
  	}
});
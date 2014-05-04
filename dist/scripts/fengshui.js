'use strict';

var fengshui = {
	mountains: ['子','癸','丑','艮','寅','甲','卯','乙','辰','巽','巳','丙','午','丁','未','坤','申','庚','酉','辛','戌','乾','亥','壬'],

	getMountain: function(degree){
		var index = Math.floor((degree + 7.5) % 360 / 15);
		return this.mountains[index];
	},

	getOppositeMountain: function(mountain){
		var index = this.mountains.indexOf(mountain);
		return this.mountains[(index+12) % 24];
	}
};
'use strict';

var fengshui = {
	mountains: ['子','癸','丑','艮','寅','甲','卯','乙','辰','巽','巳','丙','午','丁','未','坤','申','庚','酉','辛','戌','乾','亥','壬'],
	yang: ['甲','庚','壬','丙','乾','坤','艮','巽','寅','申','巳','亥'],
	yin: ['辰','戌','丑','未','子','午','卯','酉','癸','丁','乙','辛'],
	tianyuanlong: ['乾','坤','艮','巽','子','午','卯','酉'],
	diyuanlong: ['甲','庚','壬','丙','辰','戌','丑','未'],
	renyuanlong: ['寅','申','巳','亥','癸','丁','乙','辛'],
	yuanyunpan: [[1,2],[2,0],[0,1],[0,0],[1,1],[2,2],[2,1],[0,2],[1,0]],

	getMountain: function(degree){
		var index = Math.floor((degree + 7.5) % 360 / 15);
		return this.mountains[index];
	},

	getOppositeMountain: function(mountain){
		var index = this.mountains.indexOf(mountain);
		return this.mountains[(index+12) % 24];
	},

	getPan: function(yun) {
		if( yun == 5){
			return this.yuanyunpan;
		}
	}
};
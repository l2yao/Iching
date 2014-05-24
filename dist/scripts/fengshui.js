'use strict';

var fengshui = {
	mountains: ['子','癸','丑','艮','寅','甲','卯','乙','辰','巽','巳','丙','午','丁','未','坤','申','庚','酉','辛','戌','乾','亥','壬'],
	yang: ['甲','庚','壬','丙','乾','坤','艮','巽','寅','申','巳','亥'],
	yin: ['辰','戌','丑','未','子','午','卯','酉','癸','丁','乙','辛'],
	tianyuanlong: ['乾','坤','艮','巽','子','午','卯','酉'],
	diyuanlong: ['甲','庚','壬','丙','辰','戌','丑','未'],
	renyuanlong: ['寅','申','巳','亥','癸','丁','乙','辛'],
	yuanyunpan: [7,2,3,0,4,8,5,6,1],

	getMountain: function(degree){
		var index = Math.floor((degree + 7.5) % 360 / 15);
		return this.mountains[index];
	},

	getOppositeMountain: function(mountain){
		var index = this.mountains.indexOf(mountain);
		return this.mountains[(index+12) % 24];
	},

	getYun: function(year) {
		var yun = Math.floor((year - 64) % 180 / 20) + 1;
		return yun;
	},

	getPan: function(yun) {
		var shift = yun - 5;
		if( shift == 0){
			return this.yuanyunpan;
		}else if(shift < 0) {
			var firsthalf = this.yuanyunpan.slice(0, Math.abs(shift));
			var secondhalf = this.yuanyunpan.slice(Math.abs(shift), this.yuanyunpan.length);
			return secondhalf.concat(firsthalf);
		}else {
			var firsthalf = this.yuanyunpan.slice(0, this.yuanyunpan.length - Math.abs(shift));
			var secondhalf = this.yuanyunpan.slice(this.yuanyunpan.length - Math.abs(shift), this.yuanyunpan.length);
			return secondhalf.concat(firsthalf);
		}
	},

	drawPan: function(div, yun) {
		var pan = this.getPan(yun);

		d3.select("svg").remove();
		var svgContainer = d3.select(div).append("svg")
                                 .attr("width", 450)
                                 .attr("height", 450);

        for(var x = 0; x<=450; x+= 150){
        	for(var y =0; y<=450; y+= 150){
        		svgContainer.append("rect")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("width", 150)
                        .attr("height", 150)
                        .attr('fill', 'rgba(0,0,0,0)')
                        .attr('stroke', 'black')
                        .attr('stroke-width', 3);
        	}
        }
        for(var i=0; i<pan.length; i++){
        	var pos = pan[i];
        	var x = pos % 3;
        	var y = Math.floor(pos / 3);
        	svgContainer.append("text")
        				.text(i+1)
        				.attr('x', x * 150 + 150/2 - 18/2)
                        .attr('y', y * 150 + 150/2 + 18/2)
                        .attr('font-size', 36);
        }
	}
};
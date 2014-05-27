'use strict';

var fengshui = {
	mountains: ['子','癸','丑','艮','寅','甲','卯','乙','辰','巽','巳','丙','午','丁','未','坤','申','庚','酉','辛','戌','乾','亥','壬'],
	yang: ['甲','庚','壬','丙','乾','坤','艮','巽','寅','申','巳','亥'],
	yin: ['辰','戌','丑','未','子','午','卯','酉','癸','丁','乙','辛'],
	tianyuanlong: ['乾','坤','艮','巽','子','午','卯','酉'],
	diyuanlong: ['甲','庚','壬','丙','辰','戌','丑','未'],
	renyuanlong: ['寅','申','巳','亥','癸','丁','乙','辛'],
	number: ['一','二','三','四','五','六','七','八','九'],
	base_pan: [7,2,3,0,4,8,5,6,1],
	mountain_direction: {
		'壬':7,'子':7,'癸':7,
		'丑':6,'艮':6,'寅':6,
		'甲':3,'卯':3,'乙':3,
		'辰':0,'巽':0,'巳':0,
		'丙':1,'午':1,'丁':1,
		'未':2,'坤':2,'申':2,
		'庚':5,'酉':5,'辛':5,
		'戌':8,'乾':8,'亥':8
		},
	direction_mountain: [['辰','巽','巳'],
						['丙','午','丁'],
						['未','坤','申'],
						['甲','卯','乙'],
						[],
						['庚','酉','辛'],
						['丑','艮','寅'],
						['壬','子','癸'],
						['戌','乾','亥']],

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

	getDragon: function(mountain) {
		if(this.tianyuanlong.indexOf(mountain) >= 0){
			return 'tian';
		}else if(this.diyuanlong.indexOf(mountain) >= 0){
			return 'di';
		}else if(this.renyuanlong.indexOf(mountain) >= 0){
			return 'ren';
		}
	},

	getMountainFromDirection: function(direction, dragon){
		var mountain = this.direction_mountain[direction];
		for (var index = 0 ; index < mountain.length; index++){
			if(this.getDragon(mountain[index]) == dragon){
				return mountain[index];
			}
		}
	},

	getShunNi: function(mountain, star) {
		var dragon = this.getDragon(mountain);
		var direction = this.base_pan[star - 1];
		var newMountain = this.getMountainFromDirection(direction, dragon);
		if(this.yang.indexOf(newMountain) >= 0){
			return true;
		}else{
			return false;
		}
	},

	getPan: function(yun, shun_ni) {
		var shift = yun - 5;
		var pan = this.base_pan.slice(0);
		if(!shun_ni){
			pan = pan.reverse();
		}
		if( shift == 0){
			return pan;
		}else if(shift < 0) {
			var firsthalf = pan.slice(0, Math.abs(shift));
			var secondhalf = pan.slice(Math.abs(shift), pan.length);
			return secondhalf.concat(firsthalf);
		}else {
			var firsthalf = pan.slice(0, pan.length - Math.abs(shift));
			var secondhalf = pan.slice(pan.length - Math.abs(shift), pan.length);
			return secondhalf.concat(firsthalf);
		}
	},

	drawFeiXing: function(div, yun, shan, xiang) {
		var pan = this.getPan(yun, true);

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
        this.drawPan(svgContainer, pan, false, 36, 150/2 - 18, 150/2 + 18/2, 'red');
        this.drawShan(svgContainer, shan, pan);
        this.drawXiang(svgContainer, xiang, pan);
	},

	drawPan: function(svgContainer, pan, useNumber, fontSize, xOffset, yOffset, color){
		for(var i=0; i<pan.length; i++){
        	var pos = pan[i];
        	var x = pos % 3;
        	var y = Math.floor(pos / 3);
        	var number = i+1;
        	if( !useNumber){
        		number = this.number[i];
        	}
        	svgContainer.append("text")
        				.text(number)
        				.attr('x', x * 150 + xOffset)
                        .attr('y', y * 150 + yOffset)
                        .attr('font-size', fontSize)
                        .attr('fill', color);
        }
	},

	drawShan: function(svgContainer, shan, pan) {
		var direction = this.mountain_direction[shan];
		var mountain_star = pan.indexOf(direction) + 1;
		var shunni = this.getShunNi(shan, mountain_star);
		var shan_pan = this.getPan(mountain_star, shunni);

		this.drawPan(svgContainer, shan_pan, true, 28, 150/4, 150/4, 'blue');
	},

	drawXiang: function(svgContainer, xiang, pan) {
		var direction = this.mountain_direction[xiang];
		var face_star = pan.indexOf(direction) + 1;
		var shunni = this.getShunNi(xiang, face_star);
		var xiang_pan = this.getPan(face_star, shunni);

		this.drawPan(svgContainer, xiang_pan, true, 28,150 *0.75 - 18/2, 150/4, 'green');
	}
};
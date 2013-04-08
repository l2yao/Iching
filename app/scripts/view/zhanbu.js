define(['jquery','underscore','backbone', 'handlebars','hbs!../../templates/zhanbu','iching'], 
	function ($, _, Backbone,Handlebars, templOne, iching) {
	'use strict';

	var zhanbuView = Backbone.View.extend({
		el: '#zhanbu',
		template: templOne,
		longitude: 0,
		events: {
			'change #up1' : 'changeUp1',
			'change #down1': 'changeDown1',
			'change #up2' : 'changeUp2',
			'change #down2': 'changeDown2',
			'change #up3' : 'changeUp3',
			'change #down3': 'changeDown3',
			'change #up4' : 'changeUp4',
			'change #down4': 'changeDown4',
			'change #up5' : 'changeUp5',
			'change #down5': 'changeDown5',
			'change #up6' : 'changeUp6',
			'change #down6': 'changeDown6',
			'click #zhanbu' : 'clickZhanbu'
		},
		render: function(){
			var self = this;
			var html = self.template();
			self.$el.html(html);

			if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function(position){
                    self.longitude =  position.coords.longitude;
                });
            }
		},
		clickZhanbu: function() {
			var now=new Date();
			var ob = new Object();
            curTZ = now.getTimezoneOffset()/60; //时区 -8为北京时
            curJD = now/86400000-10957.5 - curTZ/24; //J2000起算的儒略日数(当前本地时间)
            JD.setFromJD(curJD+J2000);

            var t = timeStr2hour(now.toString('HH:mm:ss'));
            var jd = JD.JD(year2Ayear(JD.Y), JD.M, JD.D + t/24);
            obb.mingLiBaZi(jd + curTZ/24-J2000, this.longitude/radd, ob );
            $(this.el).find('#sizhu').html('<h2>'+ob.bz_jn+'年 '+ob.bz_jy+'月 '+ob.bz_jr+'日 '+ob.bz_js+'时</h2>');

            var first_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up1').val()));
            var second_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up2').val()));
            var third_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up3').val()));
            var fourth_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up4').val()));
            var fifth_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up5').val()));
            var sixth_yao = iching.zheng2yinyang(parseInt($(this.el).find('#up6').val()));

            var up_trigram = iching.yinyang2trigram(fourth_yao,fifth_yao,sixth_yao);
			var up_index = iching.Trigram.indexOf(up_trigram);
            var up_symbol = iching.Trigram_symbol[up_index];
            var down_trigram = iching.yinyang2trigram(first_yao,second_yao,third_yao);
            var low_index = iching.Trigram.indexOf(down_trigram);
            var low_symbol = iching.Trigram_symbol[low_index];
            var hexagram_symbol = iching.Hexagram_name[up_index+low_index*8];
            var gong_name = iching.getGongName(iching.Hexagram[up_index+low_index*8]);
            var gong_index = iching.Trigram_name.indexOf(gong_name);
            $(this.el).find('#gua-name').html('<h2>'+up_symbol+low_symbol+hexagram_symbol+' '+gong_name+'宫 属'+iching.Trigram_wuxing[gong_index]+'</h2>');
            $(this.el).find('#gua-zhanbu').empty();
            iching.drawTrigrams('#gua-zhanbu', up_trigram, down_trigram, ob.bz_jr.substr(0,1));
		},
		changeUp1: function() {
			var value = $(this.el).find('#up1').val();
			$(this.el).find('#down1').val(3 - value);
			$(this.el).find('#value1').val(value+'正'+(3-value)+'反');
		},
		changeUp2: function() {
			var value = $(this.el).find('#up2').val();
			$(this.el).find('#down2').val(3 - value);
			$(this.el).find('#value2').val(value+'正'+(3-value)+'反');
		},
		changeUp3: function() {
			var value = $(this.el).find('#up3').val();
			$(this.el).find('#down3').val(3 - value);
			$(this.el).find('#value3').val(value+'正'+(3-value)+'反');
		},
		changeUp4: function() {
			var value = $(this.el).find('#up4').val();
			$(this.el).find('#down4').val(3 - value);
			$(this.el).find('#value4').val(value+'正'+(3-value)+'反');
		},
		changeUp5: function() {
			var value = $(this.el).find('#up5').val();
			$(this.el).find('#down5').val(3 - value);
			$(this.el).find('#value5').val(value+'正'+(3-value)+'反');
		},
		changeUp6: function() {
			var value = $(this.el).find('#up6').val();
			$(this.el).find('#down6').val(3 - value);
			$(this.el).find('#value6').val(value+'正'+(3-value)+'反');
		},
		changeDown1: function() {
			var value = $(this.el).find('#down1').val();
			$(this.el).find('#up1').val(3 - value);
			$(this.el).find('#value1').val((3-value)+'正'+value+'反');
		},
		changeDown2: function() {
			var value = $(this.el).find('#down2').val();
			$(this.el).find('#up2').val(3 - value);
			$(this.el).find('#value2').val((3-value)+'正'+value+'反');
		},
		changeDown3: function() {
			var value = $(this.el).find('#down3').val();
			$(this.el).find('#up3').val(3 - value);
			$(this.el).find('#value3').val((3-value)+'正'+value+'反');
		},
		changeDown4: function() {
			var value = $(this.el).find('#down4').val();
			$(this.el).find('#up4').val(3 - value);
			$(this.el).find('#value4').val((3-value)+'正'+value+'反');
		},
		changeDown5: function() {
			var value = $(this.el).find('#down5').val();
			$(this.el).find('#up5').val(3 - value);
			$(this.el).find('#value5').val((3-value)+'正'+value+'反');
		},
		changeDown6: function() {
			var value = $(this.el).find('#down6').val();
			$(this.el).find('#up6').val(3 - value);
			$(this.el).find('#value6').val((3-value)+'正'+value+'反');
		}
	});

	return zhanbuView;
});
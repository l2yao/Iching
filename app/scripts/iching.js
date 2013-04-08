define(['d3'], function () {
    'use strict';

    var iching = {
        Trigram: ['☰','☳','☵','☶','☷','☴','☲','☱'],
        Trigram_name:['乾','震','坎','艮','坤','巽','離','兌'],
        Trigram_symbol:['天','雷','水','山','地','风','火','泽'],
        Trigram_wuxing:['金','木','水','土','土','木','火','金'],
        xiantian_bagua : ['☰','☱','☲','☳','☴','☵','☶','☷'],
        houtian_bagua : ['☵','☷','☳','☴','☰','☱','☶','☲'],
        tiangan: ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
        tiangan_wuxing: ['木','木','火','火','土','土','金','金','水','水'],
        dizhi: ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
        dizhi_wuxing: ['水','土','木','木','土','火','火','土','金','金','土','水'],
        wuxing: ['土','金','水','木','火'],
        liushou: ['青龍','朱雀','勾陳','騰蛇','白虎','玄武'],
        Hexagram : ['䷀','䷡','䷄','䷙','䷊','䷈','䷍','䷪',
                    '䷘','䷲','䷂','䷚','䷗','䷩','䷔','䷐',
                    '䷅','䷧','䷜','䷃','䷆','䷺','䷿','䷮',
                    '䷠','䷽','䷦','䷳','䷎','䷴','䷷','䷞',
                    '䷋','䷏','䷇','䷖','䷁','䷓','䷢','䷬',
                    '䷫','䷟','䷯','䷑','䷭','䷸','䷱','䷛',
                    '䷌','䷶','䷾','䷕','䷣','䷤','䷝','䷰',
                    '䷉','䷵','䷻','䷨','䷒','䷼','䷥','䷹'],
        Hexagram_name : ['乾','大壯','需','大畜','泰','小畜','大有','夬',
                    '無妄','震','屯','頤','復','益','噬嗑','隨',
                    '訟','解','坎','蒙','師','渙','未濟','困',
                    '遯','小過','蹇','艮','謙','漸','旅','咸',
                    '否','豫','比','剝','坤','觀','晉','萃',
                    '姤','恆','井','蠱','升','巽','鼎','大過',
                    '同人','豐','既濟','賁','明夷','家人','離','革',
                    '履','歸妹','節','損','臨','中孚','睽','兌'],
        bagong_bagua :[{'gua': ['䷀','䷫','䷠','䷋','䷓','䷖','䷢','䷍'], 'gong': '䷀'},
                       {'gua': ['䷹','䷮','䷬','䷞','䷦','䷎','䷽','䷵'], 'gong': '䷹'},
                       {'gua': ['䷝','䷷','䷱','䷿','䷃','䷺','䷅','䷌'], 'gong': '䷝'},
                       {'gua': ['䷲','䷏','䷧','䷟','䷭','䷯','䷛','䷐'], 'gong': '䷲'},
                       {'gua': ['䷸','䷈','䷤','䷩','䷘','䷔','䷚','䷑'], 'gong': '䷸'},
                       {'gua': ['䷜','䷻','䷂','䷾','䷰','䷶','䷣','䷆'], 'gong': '䷜'},
                       {'gua': ['䷳','䷕','䷙','䷨','䷥','䷉','䷼','䷴'], 'gong': '䷳'},
                       {'gua': ['䷁','䷗','䷒','䷊','䷡','䷪','䷄','䷇'], 'gong': '䷁'}],
        getGongIndex : function(hexagram) {
            for(var i=0;i<this.bagong_bagua.length; i++) {
                var gong = this.bagong_bagua[i].gua;
                var gong_index = gong.indexOf(hexagram);
                if(gong_index != -1)    return gong_index;
            }
            return -1;
        },
        getGongName : function(hexagram) {
            for(var i=0;i<this.bagong_bagua.length; i++) {
                var gong = this.bagong_bagua[i].gua;
                var gong_index = gong.indexOf(hexagram);
                if(gong_index != -1){
                    return this.Hexagram_name[this.Hexagram.indexOf(gong[0])];
                }
            }
        },
        trigram2hexagram : function(upper_trigram, lower_trigram) {
            var upper_index = this.Trigram.indexOf(upper_trigram);
            var lower_index = this.Trigram.indexOf(lower_trigram);
            return this.Hexagram[lower_index * 8 + upper_index];
        },
        yinyang2trigram: function(first_yao, second_yao, third_yao) {
            if(first_yao === 'yang' && second_yao === 'yang' && third_yao === 'yang'){
                return '☰';
            }else if(first_yao === 'yang' && second_yao === 'yang' && third_yao ==='yin'){
                return '☱';
            }else if(first_yao === 'yang' && second_yao === 'yin' && third_yao==='yang'){
                return '☲';
            }else if(first_yao === 'yang' && second_yao === 'yin' && third_yao === 'yin'){
                return '☳';
            }else if(first_yao === 'yin' && second_yao === 'yang' && third_yao ==='yang'){
                return '☴';
            }else if(first_yao === 'yin' && second_yao === 'yang' && third_yao === 'yin'){
                return '☵';
            }else if(first_yao === 'yin' && second_yao === 'yin' && third_yao === 'yang'){
                return '☶';
            }else if(first_yao === 'yin' && second_yao === 'yin' && third_yao === 'yin'){
                return '☷';
            }
        },
        zheng2yinyang: function(zheng){
            switch(zheng){
                case 0:
                    return 'yin';
                case 1:
                    return 'yang';
                case 2:
                    return 'yin';
                case 3:
                    return 'yang';
            }
        },
        fan2yinyang: function(fan) {
            switch(fan){
                case 0:
                    return 'yang';
                case 1:
                    return 'yin';
                case 2:
                    return 'yang';
                case 3:
                    return 'yin';
            }
        },
        getLiuqin : function(dizhi, hexagram) {
            var dizhi_index = this.dizhi.indexOf(dizhi);
            var dizhi_wuxing = this.dizhi_wuxing[dizhi_index];
            var gongName = this.getGongName(hexagram);
            var hexagram_wuxing = this.Trigram_wuxing[this.Trigram_name.indexOf(gongName)];
            var dizhi_wuxing_index = this.wuxing.indexOf(dizhi_wuxing);
            var hexagram_wuxing_index = this.wuxing.indexOf(hexagram_wuxing);
            switch(dizhi_wuxing_index - hexagram_wuxing_index){
            case 0:
                return '兄弟';
            case -1:
                return '父母';
            case -2:
                return '官鬼';
            case 1:
                return '子孙';
            case 2:
                return '妻财';
            case -3:
                return '妻财';
            case -4:
                return '子孙';
            case 3:
                return '官鬼';
            case 4:
                return '父母';
            }
        },
        drawYangYao : function(svgContainer, xoffset, yoffset, width, height){
            var yao = svgContainer.append("rect")
                            .attr("x", xoffset)
                            .attr("y", yoffset)
                            .attr("width", width)
                            .attr("height", height);
        },
        drawYinYao : function(svgContainer, xoffset, yoffset, width, height){
            var yao1 = svgContainer.append("rect")
                            .attr("x", xoffset)
                            .attr("y", yoffset)
                            .attr("width", (width-height)/2)
                            .attr("height", height);
            var yao2 = svgContainer.append("rect")
                            .attr("x", xoffset+(width+height)/2)
                            .attr("y", yoffset)
                            .attr("width", (width-height)/2)
                            .attr("height", height);
        },
        drawBagua : function(svgContainer, trigram, x, y, interval, width, height) {
            switch(trigram){
            case '☰':
                this.drawYangYao(svgContainer, x, y, width, height);
                this.drawYangYao(svgContainer, x, y+interval, width, height);
                this.drawYangYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☱':
                this.drawYinYao(svgContainer, x, y, width, height);
                this.drawYangYao(svgContainer, x, y+interval, width, height);
                this.drawYangYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☲':
                this.drawYangYao(svgContainer, x, y, width, height);
                this.drawYinYao(svgContainer, x, y+interval, width, height);
                this.drawYangYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☳':
                this.drawYinYao(svgContainer, x, y, width, height);
                this.drawYinYao(svgContainer, x, y+interval, width, height);
                this.drawYangYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☴':
                this.drawYangYao(svgContainer, x, y, width, height);
                this.drawYangYao(svgContainer, x, y+interval, width, height);
                this.drawYinYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☵':
                this.drawYinYao(svgContainer, x, y, width, height);
                this.drawYangYao(svgContainer, x, y+interval, width, height);
                this.drawYinYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☶':
                this.drawYangYao(svgContainer, x, y, width, height);
                this.drawYinYao(svgContainer, x, y+interval, width, height);
                this.drawYinYao(svgContainer, x, y+interval*2, width, height);
                break;
            case '☷':
                this.drawYinYao(svgContainer, x, y, width, height);
                this.drawYinYao(svgContainer, x, y+interval, width, height);
                this.drawYinYao(svgContainer, x, y+interval*2, width, height);
                break;
            }
        },
        drawTrigram : function(div, trigram) {
            var svgContainer = d3.select(div).append("svg")
                                     .attr("width", 300)
                                     .attr("height", 210);
            this.drawBagua(svgContainer, trigram, 50, 50, 50, 200, 30);
        },
        drawHexagram: function(div, hexagram, ri_tiangan) {
            var svgContainer = d3.select(div).append("svg")
                                     .attr("width", 400)
                                     .attr("height", 420);
            var hexagram_index = this.Hexagram.indexOf(hexagram);
            var lower_index = Math.floor(hexagram_index / 8);
            var upper_index = hexagram_index % 8;
            this.drawBagua(svgContainer, this.Trigram[upper_index], 150, 50, 50, 200, 30);
            this.drawNaJia(svgContainer, this.Trigram[upper_index], 'upper', 100, 65, 50);
            this.drawBagua(svgContainer, this.Trigram[lower_index], 150, 200, 50, 200, 30);
            this.drawNaJia(svgContainer, this.Trigram[lower_index], 'lower', 100, 215, 50);
            this.drawShiYing(svgContainer, hexagram, 375, 65, 50);
            this.drawLiuQin(svgContainer, hexagram, 60, 65, 50);
            this.drawLiuShou(svgContainer, ri_tiangan, 20, 65, 50);
        },
        drawTrigrams : function(div, upper_trigram, lower_trigram, ri_tiangan) {
            var svgContainer = d3.select(div).append("svg")
                                     .attr("width", 400)
                                     .attr("height", 420);
            this.drawBagua(svgContainer, upper_trigram, 150, 50, 50, 200, 30);
            this.drawNaJia(svgContainer, upper_trigram, 'upper', 100, 65, 50);
            this.drawBagua(svgContainer, lower_trigram, 150, 200, 50, 200, 30);
            this.drawNaJia(svgContainer, lower_trigram, 'lower', 100, 215, 50);
            var hexagram = this.trigram2hexagram(upper_trigram, lower_trigram);
            this.drawShiYing(svgContainer, hexagram, 375, 65, 50);
            this.drawLiuQin(svgContainer, hexagram, 60, 65, 50);
            this.drawLiuShou(svgContainer, ri_tiangan, 20, 65, 50);
        },
        drawShiYing : function(svgContainer, hexagram, x, y, interval) {
            var gong_index = this.getGongIndex(hexagram);
            var shi = -1;
            var ying = -1;
            switch(gong_index){
            case -1:
                break;
            case 0:
                shi = 0;
                ying = 3;
                break;
            case 1:
                shi =5;
                ying = 2;
                break;
            case 2:
                shi = 4;
                ying = 1;
                break;
            case 3:
                shi = 3;
                ying = 0;
                break;
            case 4:
                shi = 2;
                ying = 5;
                break;
            case 5:
                shi = 1;
                ying = 4;
                break;
            case 6:
                shi = 2;
                ying = 5;
                break;
            case 7:
                shi = 3;
                ying = 0;
                break;
            }
            if( shi >= 0 && ying >= 0){
                var text = svgContainer.append('text')
                            .text('世')
                            .attr('x', x)
                            .attr('y', y + shi * interval)
                            .attr('font-size', 16);
                text = svgContainer.append('text')
                            .text('应')
                            .attr('x', x)
                            .attr('y', y + ying * interval)
                            .attr('font-size', 16);
            }
        },
        getNaJia: function(trigram, gua_pos) {
            var najia = [];
            switch(trigram){
            case '☰':
                if(gua_pos === 'lower'){
                    najia = ['辰','寅','子'];
                }else if(gua_pos === 'upper'){
                    najia = ['戌','申','午'];
                }
                break;
            case '☱':
                if(gua_pos === 'lower'){
                    najia = ['丑','卯','巳'];
                }else if(gua_pos === 'upper'){
                    najia = ['未','酉','亥'];
                }
                break;
            case '☲':
                if(gua_pos === 'lower'){
                    najia = ['亥','丑','卯'];
                }else if(gua_pos === 'upper'){
                    najia = ['巳','未','酉'];
                }
                break;
            case '☳':
                if(gua_pos === 'lower'){
                    najia = ['辰','寅','子'];
                }else if(gua_pos === 'upper'){
                    najia = ['戌','申','午'];
                }
                break;
            case '☴':
                if(gua_pos === 'lower'){
                    najia = ['酉','亥','丑'];
                }else if(gua_pos === 'upper'){
                    najia = ['卯','巳','未'];
                }
                break;
            case '☵':
                if(gua_pos === 'lower'){
                    najia = ['午','辰','寅'];
                }else if(gua_pos === 'upper'){
                    najia = ['子','戌','申'];
                }
                break;
            case '☶':
                if(gua_pos === 'lower'){
                    najia = ['申','午','辰'];
                }else if(gua_pos === 'upper'){
                    najia = ['寅','子','戌'];
                }
                break;
            case '☷':
                if(gua_pos === 'lower'){
                    najia = ['卯','巳','未'];
                }else if(gua_pos === 'upper'){
                    najia = ['酉','亥','丑'];
                }
                break;
            }
            return najia;
        },
        drawNaJia : function(svgContainer, trigram, gua_pos, x, y, interval) {
            var najia = this.getNaJia(trigram, gua_pos);
            for(var i =0 ; i <najia.length; i++){
                var dizhi_index = this.dizhi.indexOf(najia[i]);
                var text = svgContainer.append('text')
                            .text(najia[i]+ this.dizhi_wuxing[dizhi_index])
                            .attr('x', x)
                            .attr('y', y + i * interval)
                            .attr('font-size', 16);
            }
        },
        drawLiuQin : function(svgContainer, hexagram, x, y, interval) {
            var hexagram_index = this.Hexagram.indexOf(hexagram);
            var upper_trigram = this.Trigram[hexagram_index % 8];
            var lower_trigram = this.Trigram[Math.floor(hexagram_index / 8)];
            var upper_gua = this.getNaJia(upper_trigram, 'upper');
            var lower_gua = this.getNaJia(lower_trigram, 'lower');
            var gua = upper_gua.concat(lower_gua);
            
            for( var i=0;i<gua.length; i++) {
                var liuqin = this.getLiuqin(gua[i], hexagram);
                var text = svgContainer.append('text')
                            .text(liuqin)
                            .attr('x', x)
                            .attr('y', y + i * interval)
                            .attr('font-size', 16);
            }
        },
        drawLiuShou : function(svgContainer, tiangan, x, y, interval) {
            var tiangan_index = this.tiangan.indexOf(tiangan);
            var offset = 0;
            if(tiangan_index ===0 || tiangan_index ===1){
                offset =0;
            }else if(tiangan_index === 2 || tiangan_index ===3){
                offset =1;
            }else if(tiangan_index === 4){
                offset =2;
            }else if(tiangan_index === 5){
                offset =3;
            }else if(tiangan_index === 6 || tiangan_index === 7){
                offset =4;
            }else if(tiangan_index === 8 || tiangan_index === 9){
                offset =5;
            }
            
            for( var i=0; i<this.liushou.length; i++) {
                var pos = (i + offset) % 6;
                var text = svgContainer.append('text')
                            .text(this.liushou[pos])
                            .attr('x', x)
                            .attr('y', y + (this.liushou.length -1 - i) *interval)
                            .attr('font-size', 16);
            }
        }
    }
    return iching;

});
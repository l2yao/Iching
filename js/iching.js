var Iching = (function() {
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
        bagong_bagua :[['䷀','䷫','䷠','䷋','䷓','䷖','䷢','䷍'],
                       ['䷹','䷮','䷬','䷞','䷦','䷎','䷽','䷵'],
                       ['䷝','䷷','䷱','䷿','䷃','䷺','䷅','䷌'],
                       ['䷲','䷏','䷧','䷟','䷭','䷯','䷛','䷐'],
                       ['䷸','䷈','䷤','䷩','䷘','䷔','䷚','䷑'],
                       ['䷜','䷻','䷂','䷾','䷰','䷶','䷣','䷆'],
                       ['䷳','䷕','䷙','䷨','䷥','䷉','䷼','䷴'],
                       ['䷁','䷗','䷒','䷊','䷡','䷪','䷄','䷇']],
        getGongIndex : function(hexagram) {
            for(var i=0;i<Iching.bagong_bagua.length; i++) {
                var gong = Iching.bagong_bagua[i];
                var gong_index = gong.indexOf(hexagram);
                if(gong_index != -1)    return gong_index;
            }
            return -1;
        },
        getGongName : function(hexagram) {
            for(var i=0;i<Iching.bagong_bagua.length; i++) {
                var gong = Iching.bagong_bagua[i];
                var gong_index = gong.indexOf(hexagram);
                if(gong_index != -1){
                    return Iching.Hexagram_name[Iching.Hexagram.indexOf(gong[0])];
                }
            }
        },
        trigram2hexagram : function(upper_trigram, lower_trigram) {
            var upper_index = Iching.Trigram.indexOf(upper_trigram);
            var lower_index = Iching.Trigram.indexOf(lower_trigram);
            return Iching.Hexagram[lower_index * 8 + upper_index];
        },
        getLiuqin : function(dizhi, hexagram) {
            var dizhi_index = Iching.dizhi.indexOf(dizhi);
            var dizhi_wuxing = Iching.dizhi_wuxing[dizhi_index];
            var gongName = Iching.getGongName(hexagram);
            var hexagram_wuxing = Iching.Trigram_wuxing[Iching.Trigram_name.indexOf(gongName)];
            var dizhi_wuxing_index = Iching.wuxing.indexOf(dizhi_wuxing);
            var hexagram_wuxing_index = Iching.wuxing.indexOf(hexagram_wuxing);
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
        drawYangYao : function(paper, xoffset, yoffset, width, height){
            var yao = paper.rect(xoffset, yoffset, width, height);
            yao.attr('fill',yao.attr('stroke'));
        },
        drawYinYao : function(paper, xoffset, yoffset, width, height){
            var yao1 = paper.rect(xoffset, yoffset, (width-height)/2, height);
            var yao2 = paper.rect(xoffset+(width+height)/2, yoffset, (width-height)/2, height);
            yao1.attr('fill',yao1.attr('stroke'));
            yao2.attr('fill',yao2.attr('stroke'));
        },
        drawBagua : function(paper, trigram, x, y, interval, width, height) {
            switch(trigram){
            case '☰':
                Iching.drawYangYao(paper, x, y, width, height);
                Iching.drawYangYao(paper, x, y+interval, width, height);
                Iching.drawYangYao(paper, x, y+interval*2, width, height);
                break;
            case '☱':
                Iching.drawYinYao(paper, x, y, width, height);
                Iching.drawYangYao(paper, x, y+interval, width, height);
                Iching.drawYangYao(paper, x, y+interval*2, width, height);
                break;
            case '☲':
                Iching.drawYangYao(paper, x, y, width, height);
                Iching.drawYinYao(paper, x, y+interval, width, height);
                Iching.drawYangYao(paper, x, y+interval*2, width, height);
                break;
            case '☳':
                Iching.drawYinYao(paper, x, y, width, height);
                Iching.drawYinYao(paper, x, y+interval, width, height);
                Iching.drawYangYao(paper, x, y+interval*2, width, height);
                break;
            case '☴':
                Iching.drawYangYao(paper, x, y, width, height);
                Iching.drawYangYao(paper, x, y+interval, width, height);
                Iching.drawYinYao(paper, x, y+interval*2, width, height);
                break;
            case '☵':
                Iching.drawYinYao(paper, x, y, width, height);
                Iching.drawYangYao(paper, x, y+interval, width, height);
                Iching.drawYinYao(paper, x, y+interval*2, width, height);
                break;
            case '☶':
                Iching.drawYangYao(paper, x, y, width, height);
                Iching.drawYinYao(paper, x, y+interval, width, height);
                Iching.drawYinYao(paper, x, y+interval*2, width, height);
                break;
            case '☷':
                Iching.drawYinYao(paper, x, y, width, height);
                Iching.drawYinYao(paper, x, y+interval, width, height);
                Iching.drawYinYao(paper, x, y+interval*2, width, height);
                break;
            }
        },
        drawTrigram : function(div, trigram) {
            var paper = Raphael(div, 300, 210);
            Iching.drawBagua(paper, trigram, 50, 50, 50, 200, 30);
        },
        drawHexagram: function(div, hexagram) {
            var paper = Raphael(div, 350, 420);
            var hexagram_index = Iching.Hexagram.indexOf(hexagram);
            var lower_index = Math.floor(hexagram_index / 8);
            var upper_index = hexagram_index % 8;
            Iching.drawBagua(paper, Iching.Trigram[upper_index], 100, 50, 50, 200, 30);
            Iching.drawNaJia(paper, Iching.Trigram[upper_index], 'upper', 70, 65, 50);
            Iching.drawBagua(paper, Iching.Trigram[lower_index], 100, 200, 50, 200, 30);
            Iching.drawNaJia(paper, Iching.Trigram[lower_index], 'lower', 70, 215, 50);
            Iching.drawShiYing(paper, hexagram, 315, 65, 50);
            Iching.drawLiuQin(paper, hexagram, 40, 65, 50);
        },
        drawTrigrams : function(div, upper_trigram, lower_trigram) {
            var paper = Raphael(div, 350, 420);
            Iching.drawBagua(paper, upper_trigram, 100, 50, 50, 200, 30);
            Iching.drawNaJia(paper, upper_trigram, 'upper', 70, 65, 50);
            Iching.drawBagua(paper, lower_trigram, 100, 200, 50, 200, 30);
            Iching.drawNaJia(paper, lower_trigram, 'lower', 70, 215, 50);
            var hexagram = Iching.trigram2hexagram(upper_trigram, lower_trigram);
            Iching.drawShiYing(paper, hexagram, 315, 65, 50);
            Iching.drawLiuQin(paper, hexagram, 40, 65, 50);
        },
        drawShiYing : function(paper, hexagram, x, y, interval) {
            var gong_index = Iching.getGongIndex(hexagram);
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
                var text = paper.text(x, y + shi * interval, '世');
                text.attr({'font-size':16});
                text = paper.text(x, y + ying * interval,'应');
                text.attr({'font-size':16});
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
        drawNaJia : function(paper, trigram, gua_pos, x, y, interval) {
            var najia = Iching.getNaJia(trigram, gua_pos);
            for(var i =0 ; i <najia.length; i++){
                var dizhi_index = Iching.dizhi.indexOf(najia[i]);
                var text = paper.text(x, y + i*interval, najia[i]+ Iching.dizhi_wuxing[dizhi_index]);
                text.attr({'font-size':16});
            }
        },
        drawLiuQin : function(paper, hexagram, x, y, interval) {
            var hexagram_index = Iching.Hexagram.indexOf(hexagram);
            var upper_trigram = Iching.Trigram[hexagram_index % 8];
            var lower_trigram = Iching.Trigram[Math.floor(hexagram_index / 8)];
            var upper_gua = Iching.getNaJia(upper_trigram, 'upper');
            var lower_gua = Iching.getNaJia(lower_trigram, 'lower');
            var gua = upper_gua.concat(lower_gua);
            
            for( var i=0;i<gua.length; i++) {
                var liuqin = Iching.getLiuqin(gua[i], hexagram);
                var text = paper.text(x, y + i * interval, liuqin);
                text.attr({'font-size':16}); 
            }
        }
    }
    return iching;
}());
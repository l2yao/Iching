var Iching = (function() {
    var iching = {
        Trigram: ['☰','☳','☵','☶','☷','☴','☲','☱'],
        Trigram_name:['乾','震','坎','艮','坤','巽','離','兌'],
        Trigram_symbol:['天','雷','水','山','地','风','火','泽'],
        xiantian_bagua : ['☰','☱','☲','☳','☴','☵','☶','☷'],
        houtian_bagua : ['☵','☷','☳','☴','☰','☱','☶','☲'],
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
            var paper = Raphael(div, 300, 420);
            var hexagram_index = Iching.Hexagram.indexOf(hexagram);
            var lower_index = Math.floor(hexagram_index / 8);
            var upper_index = hexagram_index % 8;
            Iching.drawBagua(paper, Iching.Trigram[upper_index], 50, 50, 50, 200, 30);
            Iching.drawNaJia(paper, Iching.Trigram[upper_index], 'upper', 20, 65, 50);
            Iching.drawBagua(paper, Iching.Trigram[lower_index], 50, 210, 50, 200, 30);
            Iching.drawNaJia(paper, Iching.Trigram[lower_index], 'lower', 20, 225, 50);
        },
        drawTrigrams : function(div, upper_trigram, lower_trigram) {
            var paper = Raphael(div, 300, 420);
            Iching.drawBagua(paper, upper_trigram, 50, 50, 50, 200, 30);
            Iching.drawNaJia(paper, upper_trigram, 'upper', 20, 65, 50);
            Iching.drawBagua(paper, lower_trigram, 50, 210, 50, 200, 30);
            Iching.drawNaJia(paper, lower_trigram, 'lower', 20, 225, 50);
        },
        drawNaJia : function(paper, trigram, gua_pos, x, y, interval) {
            switch(trigram){
            case '☰':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '辰土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '寅木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '子水');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '戌土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '申金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '午火');
                    text.attr({'font-size':16});
                }
                break;
            case '☱':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '丑土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '卯木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '巳火');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '未土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '酉金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '亥水');
                    text.attr({'font-size':16});
                }
                break;
            case '☲':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '亥水');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '丑土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '卯木');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '巳火');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '未土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '酉金');
                    text.attr({'font-size':16});
                }
                break;
            case '☳':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '辰土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '寅木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '子水');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '戌土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '申金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '午火');
                    text.attr({'font-size':16});
                }
                break;
            case '☴':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '酉金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '亥水');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '丑土');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '卯木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '巳火');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '未土');
                    text.attr({'font-size':16});
                }
                break;
            case '☵':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '午火');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '辰土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '寅木');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '子水');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '戌土');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '申金');
                    text.attr({'font-size':16});
                }
                break;
            case '☶':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '申金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '午火');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '辰土');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '寅木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '子水');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '戌土');
                    text.attr({'font-size':16});
                }
                break;
            case '☷':
                if(gua_pos === 'lower'){
                    var text = paper.text(x, y, '卯木');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '巳火');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '未土');
                    text.attr({'font-size':16});
                }else if(gua_pos === 'upper'){
                    var text = paper.text(x, y, '酉金');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval, '亥水');
                    text.attr({'font-size':16});
                    text = paper.text(x, y+interval*2, '丑土');
                    text.attr({'font-size':16});
                }
                break;
            }

        }
    }
    return iching;
}());
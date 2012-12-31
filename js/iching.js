var Iching = (function() {
    var iching = {
        Trigram: ['☰','☳','☵','☶','☷','☴','☲','☱'],
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
            Iching.drawBagua(paper, Iching.Trigram[lower_index], 50, 210, 50, 200, 30);
        },
        drawTrigrams : function(div, upper_trigram, lower_trigram) {
            var paper = Raphael(div, 300, 420);
            Iching.drawBagua(paper, upper_trigram, 50, 50, 50, 200, 30);
            Iching.drawBagua(paper, lower_trigram, 50, 210, 50, 200, 30);
        }
    }
    return iching;
}());
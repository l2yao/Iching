var Iching = (function() {
    var iching = {
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
        drawTrigram : function(div, trigram) {
            var paper = Raphael(div, 300, 300);
            var circle = paper.circle(50, 40, 10);
        },
        drawHexagram: function(div, hexagram) {
            var paper = Raphael(div, 300, 300);
            var circle = paper.circle(50, 40, 10);
        }
    }
    return iching;
}());
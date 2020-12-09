// 選擇相對emoji放入陣列
var answers = [
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝',
    '🧣', '🎩', '🧢', '👒', '🎓', '⛑', '👑', '👝'
];
var times=0;
var first;
var second;


var firstEl;
var secondEl;

var lock = false;
for (var i = answers.length; i >= 0; i--) {
    var rand1 = Math.floor(Math.random()*16);
    var rand2 = Math.floor(Math.random()*16);
    var tmp = rand1;
    answers[rand1] = answers[rand2];
    answers[rand2] = answers[tmp];
}

$('button').click(function () {
    if (lock == false) {
        if(first == undefined){
        first = answers[$(this).data('index')];
        $(this).text(first);
        firstEl = $(this);
    }else if(second == undefined && lock == false){
        second = answers[$(this).data('index')];
        $(this).text(second);
        secondEl = $(this);
        if(first != second){
            lock = true;
            setTimeout(function() {
                firstEl.text("❓");
                secondEl.text("❓");
                lock = false;
            }, 1000);
        }
        first = undefined;
        second = undefined
        times++;
        $('h1').text('翻開'+times+"次");
    }
    }
    
});
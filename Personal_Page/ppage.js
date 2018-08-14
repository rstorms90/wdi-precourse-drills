$(document).ready(function(){

    let arr = ["https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
    "https://media.giphy.com/media/l0HFiOtai3t3xIoLK/giphy.gif",
    "https://media.giphy.com/media/FZuRP6WaW5qg/giphy.gif",
    "https://media.giphy.com/media/DYH297XiCS2Ck/giphy.gif",
    "https://media.giphy.com/media/4cUCFvwICarHq/giphy.gif",
    "https://media.giphy.com/media/AgVa4rSV8cTBpdLYjs/giphy.gif"
    ];
    let i = 0;

    $('#pics').hide();

    $('#button').click(function() {
        $('#pics').fadeOut(function() {
                $(this).attr('src', arr[i++]).fadeIn();
                i = i % arr.length;
        });
    });
});
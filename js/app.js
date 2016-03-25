$(document).ready(function () {

    $('.ryu-action').hide();
    $('.ryu-still').show();

    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });

    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });


    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '300px'
            },
            500,
            function () {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '-212px');
            }
        );
    });

    $('.ryu').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });

    $(document).keydown(function (key) {
        if (key.keycode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
            playCool()
        }
    });

    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-actionn').hide();
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });


});

var hadouken = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
}

var coolsound = false;

function playcool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}

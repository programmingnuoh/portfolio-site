$(function () {
    const NUM_OF_BUBBLE = 10;
    const INTERVAL = 500;
    loopWithInterval(NUM_OF_BUBBLE, INTERVAL, () => {
        createBubble();
    });
});

function createBubble() {
    const DIAMETER = getRandomInt(40) + 20;
    const LEFT = getRandomInt(100) - 10;
    const LEFT_KEYFRAME_MIDDLE = LEFT + (getRandomInt(10) - 5);
    const LEFT_KEYFRAME_END = LEFT + (getRandomInt(10) - 5);
    const DURATION_MSEC = getRandomInt(1000) + (100 * DIAMETER);
    const BUBBLE = '<div class="bubble" style="width:' + DIAMETER + 'px;height:' + DIAMETER + 'px;left:' + LEFT + '%;"></div>';
    $('#bubbles').append(BUBBLE);
    $('.bubble:last-child').animate({bottom: '40vh', left: LEFT_KEYFRAME_MIDDLE + '%'}, DURATION_MSEC, 'linear')
        .animate({bottom: '80vh', left: LEFT_KEYFRAME_END + '%'}, DURATION_MSEC, 'linear', function() {
            this.remove();
            createBubble();
        });;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function loopWithInterval(loopLimit, interval, callback) {
    for(let i = 0; i < loopLimit; i++) {
        setTimeout(callback, i * interval);
    }
};

$(window).on('load',function(){
    createBubble();
    getRandomInt(max);
    loopWithInterval(loopLimit, interval, callback);
});
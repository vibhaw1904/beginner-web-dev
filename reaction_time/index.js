window.onload = appear();

var start;
var clicked;

function disappear() {
    document.getElementById('box').style.display = 'none';
    clicked = Date.now();
    var reaction_time = (clicked - start) / 1000;
    document.getElementById('re').innerHTML = 'Time taken ' + reaction_time;
    var randomdelay = (Math.random() * 3) * 1000;
    setTimeout(appear, randomdelay)
}

function appear() {
    var randomtop = (Math.random() * 400);
    var randomleft = (Math.random() * 300);
    var randomHeight = (Math.random() * 200 + 10)
    var randomWidth = (Math.random() * 200 + 10)
    var randomCurve = (Math.random());
    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);



    if (randomCurve < 0.6) {
        document.getElementById('box').style.borderRadius = 25 + 'px';

    } else {
        document.getElementById('box').style.top = 0 + 'px';

    }
    document.getElementById('box').style.top = randomtop + 'px';
    document.getElementById('box').style.width = randomWidth + 'px';
    document.getElementById('box').style.height = randomHeight + 'px';

    document.getElementById('box').style.backgroundColor = randomColor;

    document.getElementById('box').style.left = randomleft + 'px';

    document.getElementById('box').style.display = 'block';

    start = Date.now();

}
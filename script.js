window.onload = function() {clock( );}

function clock() {
    var a = document.getElementById('clock'),
    d = new Date(), h, m, s;
    h = d.getHours(),
    m = set(d.getMinutes());
    s = set(d.getSeconds());

    day = getDayName(d.getDay());

    a.innerHTML = h + ':' + m + ':' + s;

    updateBackground(d.getHours());

    setTimeout('clock()', 1000);
}

function set(a) {
    a = a < 10 ? '0' + a : a;
    return a;
}

function showDay() {
    var dayElement = document.getElementById('day'),
    d = new Date(),
    day = getDayName(d.getDay());

    dayElement.innerHTML = day;
}

function getDayName(dayIndex) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
}

function updateBackground(hour) {
    var body = document.body;

    if (hour >= 18 || hour <6 ) {
        body.classList.add('night');
    } else {
        body.classList.remove('night');
    }
}

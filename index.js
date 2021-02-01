// setInterval(start, 1000)

// mili = document.getElementById("msec")
// sec = document.getElementById("sec")
// min = document.getElementById("min")
// var milisecincre;
// var secincre;
// var minincre;


// function start() {
//     milisecincre++
//     mili.innerHTML = milisecincre
//     if (milisecincre == 100) {
//         sec++
//         sec.innerHTML = sec
//     }
// }




var min = 0;
var sec = 0;
var msec = 0;
var interval;
var hide;

var displaymin = document.getElementById('min')
var displaysec = document.getElementById('sec')
var displaymsec = document.getElementById('msec')


function time() {
    msec++
    displaymsec.innerHTML = msec;
    if (msec == 100) {
        msec = 0;
        sec++
        displaysec.innerHTML = sec;
        if (sec == 60) {
            min++
            displaymin.innerHTML = min;
            sec = 0;
        }
    }
}


function start() {
    interval = setInterval(time, 10)
    hide = document.getElementById('start')
    hide.disabled = true;
}

function pause() {
    clearInterval(interval)
    hide.disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    displaymin.innerHTML = min
    displaysec.innerHTML = sec
    displaymsec.innerHTML = msec
    pause()
}
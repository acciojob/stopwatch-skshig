//your code here
let div_time = document.getElementById('time');
let div_start = document.getElementById('start');
let div_pause = document.getElementById('pause');
let total_seconds = 0;
let timerObj = null;
timeDisplay(total_seconds);

function displayNum(num) {
    if (num < 10) {
        return "0" + num.toString();
    }
    return num.toString();
}
function timeInString(passed_seconds){
    
    let in_seconds = Math.floor(passed_seconds % 60);
    let in_hours = Math.floor(passed_seconds / 3600);
    let total_minutes = Math.floor(passed_seconds / 60);
    let in_minutes = total_minutes % 60;
    let display_time= displayNum(in_hours) + ":" + displayNum(in_minutes) + ":" + displayNum(in_seconds) ;
    return display_time;
}

function timeDisplay(displaySecond){
    div_time.innerHTML =  timeInString(displaySecond)
}

function incrementAndDisplay(){
    total_seconds++;
    timeDisplay(total_seconds)
}


function start(){
    div_start.disabled = true;
    timerObj = setInterval(incrementAndDisplay,1000);
}


function pause(){
    clearInterval(timerObj);
    div_pause.innerHTML = "continue";
    div_pause.addEventListener('click',function(){
        start();
        div_pause.innerHTML = "pause";
    });
    // div_pause.innerHTML = "pause";

}
// function continueTimer(){
//     timerObj = setInterval(incrementAndDisplay,1000);
// }

function stop(){
    let div_stop = document.getElementById('stop');
    total_seconds=0;
    timeDisplay(0)
    pause();
    div_stop.disabled = true;
    div_pause.disabled = true;
    div_start.disabled = false;
    
}
timeInString();

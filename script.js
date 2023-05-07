//your code here
let div_time = document.getElementById('time');
let div_start = document.getElementById('start')
let total_seconds = 0;
let timerObj = null;
timeDisplay(total_seconds);

function timeInString(passed_seconds){
    
    let in_seconds = Math.floor(passed_seconds % 60);
    let in_hours = Math.floor(passed_seconds / 3600);
    let total_minutes = Math.floor(passed_seconds / 60);
    let in_minutes = total_minutes % 60;
    let display_time= in_hours + ":" + in_minutes + ":" + in_seconds ;
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
}

function stop(){
    total_seconds=0;
    timeDisplay(0)
    pause();
    
}
timeInString();
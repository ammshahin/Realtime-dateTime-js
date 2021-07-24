const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const  progress = document.getElementById('progress');
const datee = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
let format = document.getElementsByClassName('timeFormat');

function showCurrentTime(){
    let date = new Date();
    let hr  = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dat = date.getDate();
    let mth = date.getMonth() + 1; 
    let yr = date.getFullYear();
    let timeFormat = 'am';

    
    if(hr > 12){
        hr = hr - 12;
        timeFormat = 'pm';
    }
    
    hour.textContent = hr +' '+ timeFormat;
    minute.textContent = min;
    second.textContent = sec;
    datee.textContent = dat;
    month.textContent = mth;
    year.textContent = yr;

    progress.style.width = (sec / 60) * 100 + '%'
}

setInterval(showCurrentTime, 1000)
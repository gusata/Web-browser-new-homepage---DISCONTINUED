var audio1 = document.getElementById('myAudio1')
var audio2 = document.getElementById('myAudio2')
var audio3 = document.getElementById('myAudio3')
audio1.pause();
audio2.pause();
audio3.pause();
audio1.loop = true;
audio2.loop = true;
audio3.loop = true;

const btnplay = document.querySelector('#butplay');
const btnpause = document.querySelector('#butpause');
const fow = document.querySelector('#next');

fow.addEventListener('click', function(fow){
    audio1.pause();
    audio2.play()
})


btnplay.addEventListener('click', function(play){
    audio1.play();
    document.querySelector('.butpause')
    .classList.toggle('A')
    document.querySelector('.butplay')
    .classList.toggle('A')
})

btnpause.addEventListener('click', function(pause){
    audio1.pause();
    document.querySelector('.butpause')
    .classList.toggle('A')
    document.querySelector('.butplay')
    .classList.toggle('A')
})

const button = document.querySelector('#DigitalCLOCK');
button.addEventListener('click', function(move){
    document.querySelector('.clock',)
    .classList.toggle('move')})
    

button.addEventListener('click', function(size){
    document.querySelector('.clock',)
    .classList.toggle('size')})


button.addEventListener('click', function(event) {
document.querySelector('#nav',)
    .classList.toggle('fade');
})


button.addEventListener('click', function(move){
    document.querySelector('.clock',)
    .classList.toggle('shadow')})

const burg = document.querySelector('#container')


burg.addEventListener('click', function(burg){
    document.querySelector('.container')
    .classList.toggle('change')
})

burg.addEventListener('click', function(ap){
    document.querySelector('.play')
    .classList.toggle('ap')
})




function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "";
    
    if(h == 0){
        h = 0;
    }
    
    if(h > 24){
        h == 0;
        session = "";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();

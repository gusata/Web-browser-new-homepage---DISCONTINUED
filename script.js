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

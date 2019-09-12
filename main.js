
var clock = setInterval(function() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        

    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
  
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
  
    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (hours >= 12) {
        seconds = seconds + " pm";
        hours = hours - 12;
    } else {
        seconds = seconds + " am";

    }

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = date;

}, 1000);


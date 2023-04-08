let date;
let tt;
let day;
const options = { weekday: 'long', year : 'numeric', month : 'long' ,day : 'numberic'};

function timebatao(){

 date = new Date;
 tt = date.getHours() + "H : " + date.getMinutes() + "Mins : " + date.getSeconds() + "Seconds : " + date.getMilliseconds() +"MilliSec";
 day = date.toLocaleDateString();
document.getElementById('time').innerHTML = tt;
document.getElementById('day').innerHTML = day;
}

setInterval(timebatao,50);

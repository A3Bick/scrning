var today = new Date(); 
var dotw = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var moty = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var minutes = today.getMinutes()
var hours = today.getHours()
var day = today.getDay()
var month = today.getMonth()
var date = today.getDate()
var year = today.getFullYear()
var ampm = " AM"

hours--
if(minutes < 10){
    minutes = "0"+minutes
}
if(hours > 12){
    hours -=12
    ampm = " PM"
}
var time = hours+":"+minutes+ampm
document.getElementById("time").innerHTML = time
document.getElementById("time2").innerHTML = time

document.getElementById("date").innerHTML = dotw[day]+", "+moty[month]+" "+date+", "+year
today.setDate(date+1)
date = today.getDate()
if(date==1){
    today.setMonth(month+1)
}


document.getElementById("date2").innerHTML = dotw[day+1]+", "+moty[today.getMonth()]+" "+date+", "+year


// JavaScript Document
function dispTime(){
    var t = new Date().getTime();
    t = t - 12 * 3600 * 1000; 
    var dateObj = new Date(t);
    var D = dateObj.getDate()  < 10 ? '0'+dateObj.getDate():dateObj.getDate();
    var H = dateObj.getHours() < 10 ? '0'+dateObj.getHours():dateObj.getHours();
    var M = dateObj.getMinutes() < 10 ? '0'+dateObj.getMinutes():dateObj.getMinutes();
    var S = dateObj.getSeconds() < 10 ? '0'+dateObj.getSeconds():dateObj.getSeconds();
    var Y = dateObj.getFullYear();
    var Mh = dateObj.getMonth() + 1;
     var weekday = new Array(7);
        weekday[0] = "日";
        weekday[1] = "一";
        weekday[2] = "二";
        weekday[3] = "三";
        weekday[4] = "四";
        weekday[5] = "五";
        weekday[6] = "六";
    var today = weekday[dateObj.getDay()];

    if(Mh > 12) Mh = 01;
    if(Mh < 10) Mh = '0'+Mh;
    document.getElementById('time').innerHTML =Y +'/'+Mh+'/'+D+' '+'( '+today+' )'+' '+H+''+':'+''+M+''+':'+''+S;
}
var timerID = setInterval("dispTime()",1000);

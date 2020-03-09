function loadData(){
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        console.log(jsonData);
        var dataTotal = jsonData.records.location.length;
        var dataCount = 0;
        var data = jsonData.records;
        console.log(dataTotal);
        // 顯示縣市資料
        while(dataCount<dataTotal){
            $('.indexPlace').append('<option value="'+dataCount+'">'+data.location[dataCount].locationName+'</option>');
            $('.fieldInf').append('<option value="'+dataCount+'">'+data.location[dataCount].locationName+'</option>');
            dataCount++;
        }
        // day1 晴天 sunny
        // day2 陰天 cloudy
        // day3 雨天 rainy
        // day4 雷雨 stormy
        // day5 雪   snowy
        
        // 起始天氣是台北市 location[5]
        $('#indexPlace option[value=5]').attr('selected', 'selected');
        $('.fieldInf option[value=5]').attr('selected', 'selected');
        console.log('第一天氣象數字是'+data.location[5].weatherElement[0].time[0].parameter.parameterValue);
        console.log('第二天氣象數字是'+data.location[5].weatherElement[0].time[1].parameter.parameterValue);
        console.log('第三天氣象數字是'+data.location[5].weatherElement[0].time[2].parameter.parameterValue);

        if(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 4){
            console.log('目前應該是晴天');
            $('.status').append('<span class="index-day1"></span> ');
            $('.weatherNow').append('<span class="detailDay1"></span> ');
            $('.weather1').append('<span class="detailDay1"></span>');
        }
        else if((data.location[5].weatherElement[0].time[0].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            console.log('目前應該是陰天');
            $('.status').append('<span class="index-day2"></span> ');
            $('.weatherNow').append('<span class="detailDay2"></span> ');
            $('.weather1').append('<span class="detailDay2"></span>');
        }
        else if((data.location[5].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 14)){
            console.log('目前應該是雨天');
            $('.status').append('<span class="index-day3"></span> ');
            $('.weatherNow').append('<span class="detailDay3"></span> ');
            $('.weather1').append('<span class="detailDay3"></span>');
        }
        else if((data.location[5].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue < 23)){
            console.log('目前應該是雷雨天');
            $('.status').append('<span class="index-day4"></span> ');
            $('.weatherNow').append('<span class="detailDay4"></span>');
            $('.weather1').append('<span class="detailDay4"></span>');
        }

        // 第二天的天氣
        if(data.location[5].weatherElement[0].time[1].parameter.parameterValue <= 4){
            $('.weather2').append('<span class="detailDay1"></span>');
        }
        else if((data.location[5].weatherElement[0].time[1].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            $('.weather2').append('<span class="detailDay2"></span>');
        }
        else if((data.location[5].weatherElement[0].time[1].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[1].parameter.parameterValue <= 14)){
            $('.weather2').append('<span class="detailDay3"></span>');
        }
        else if((data.location[5].weatherElement[0].time[1].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[1].parameter.parameterValue < 23)){
            $('.weather2').append('<span class="detailDay4"></span>');
        }
        
        // 第三天的天氣
        if(data.location[5].weatherElement[0].time[2].parameter.parameterValue <= 4){
            console.log('第三天應該是晴天');
            $('.weather3').append('<span class="detailDay1"></span>');
        }
        else if((data.location[5].weatherElement[0].time[2].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue <= 8)){
            console.log('第三天應該是陰天，因為數字是'+data.location[5].weatherElement[0].time[2].parameter.parameterValue);
            console.log();
            $('.weather3').append('<span class="detailDay2"></span>');
        }
        else if((data.location[5].weatherElement[0].time[2].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue <= 14)){
            console.log('第三天應該是雨天');
            $('.weather3').append('<span class="detailDay3"></span>');
        }
        else if((data.location[5].weatherElement[0].time[2].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue < 23)){
            console.log('第三天應該是雷雨天');
            $('.weather3').append('<span class="detailDay4"></span>');
        }

        // 顯示三天的溫度
        $('.temperRange').append(
            '<span>'+data.location[5].weatherElement[4].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-up"></i>'+'</span>'+
            '<span>'+data.location[5].weatherElement[2].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-down"></i>'+'</span>');
        $('.temp1').append('<span>'+data.location[5].weatherElement[2].time[0].parameter.parameterName+'°C'+'</span>');
        $('.temp2').append('<span>'+data.location[5].weatherElement[2].time[1].parameter.parameterName+'°C'+'</span>');
        $('.temp3').append('<span>'+data.location[5].weatherElement[2].time[2].parameter.parameterName+'°C'+'</span>');
        
        // 顯示未來三天的降雨機率
        $('.chanceNow').append('<span>'+data.location[5].weatherElement[1].time[0].parameter.parameterName+'%'+'</span>');
        $('.chance1').append('<span>'+ data.location[5].weatherElement[1].time[0].parameter.parameterName +'%'+'</span>');
        $('.chance2').append('<span>'+ data.location[5].weatherElement[1].time[1].parameter.parameterName +'%'+'</span>');
        $('.chance3').append('<span>'+ data.location[5].weatherElement[1].time[2].parameter.parameterName +'%'+'</span>');

    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
function changeLocation(){
    // 確認選擇的縣市
    var choice = $('#indexPlace').val();
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        var data = jsonData.records;
        // 把原本的資料清空
        $('.status').html('');
        $('.weather1').html('');
        $('.weather2').html('');
        $('.weather3').html('');
        $('.temp1').html('');
        $('.temp2').html('');
        $('.temp3').html('');
        $('.chance1').html('');
        $('.chance2').html('');
        $('.chance3').html('');
        // 第一天的天氣
        console.log('天氣數字是'+data.location[choice].weatherElement[0].time[0].parameter.parameterValue);
        if(data.location[choice].weatherElement[0].time[0].parameter.parameterValue <= 4){
            console.log('目前應該是晴天');
            $('.status').append('<span class="index-day1"></span> ');
            $('.weather1').append('<span class="detailDay1"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue > 4)&&(data.location[choice].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            console.log('目前應該是陰天');
            $('.status').append('<span class="index-day2"></span> ');
            $('.weather1').append('<span class="detailDay2"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[choice].weatherElement[0].time[0].parameter.parameterValue <= 14)){
            console.log('目前應該是雨天');
            $('.status').append('<span class="index-day3"></span> ');
            $('.weather1').append('<span class="detailDay3"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[choice].weatherElement[0].time[0].parameter.parameterValue < 23)){
            console.log('目前應該是雷雨天');
            $('.status').append('<span class="index-day4"></span> ');
            $('.weather1').append('<span class="detailDay4"></span>');
        }

        // 第二天的天氣
        if(data.location[choice].weatherElement[0].time[0].parameter.parameterValue <= 4){
            $('.weather2').append('<span class="detailDay1"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[1].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[1].parameter.parameterValue <= 8)){ 
            $('.weather2').append('<span class="detailDay2"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[1].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[1].parameter.parameterValue <= 14)){
            $('.weather2').append('<span class="detailDay3"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[1].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[1].parameter.parameterValue < 23)){
            $('.weather2').append('<span class="detailDay4"></span>');
        }
        
        // 第三天的天氣
        if(data.location[choice].weatherElement[0].time[2].parameter.parameterValue <= 4){
            console.log('第三天應該是晴天');
            $('.weather3').append('<span class="detailDay1"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[2].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue <= 8)){
            console.log('第三天應該是陰天');
            $('.weather3').append('<span class="detailDay2"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[2].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue <= 14)){
            console.log('第三天應該是雨天');
            $('.weather3').append('<span class="detailDay3"></span>');
        }
        else if((data.location[choice].weatherElement[0].time[2].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[2].parameter.parameterValue < 23)){
            console.log('第三天應該是雷雨天');
            $('.weather3').append('<span class="detailDay4"></span>');
        }

        // 顯示未來三天的溫度
        $('.temp1').append('<span>'+data.location[choice].weatherElement[2].time[0].parameter.parameterName+'°C'+'</span>');
        $('.temp2').append('<span>'+data.location[choice].weatherElement[2].time[1].parameter.parameterName+'°C'+'</span>');
        $('.temp3').append('<span>'+data.location[choice].weatherElement[2].time[2].parameter.parameterName+'°C'+'</span>');
        
        // 顯示未來三天的降雨機率
        $('.chance1').append('<span>'+ data.location[choice].weatherElement[1].time[0].parameter.parameterName +'%'+'</span>');
        $('.chance2').append('<span>'+ data.location[choice].weatherElement[1].time[1].parameter.parameterName +'%'+'</span>');
        $('.chance3').append('<span>'+ data.location[choice].weatherElement[1].time[2].parameter.parameterName +'%'+'</span>');
        // $('.status').append('<p>'+data.location[choice].weatherElement[3].time[0].parameter.parameterName+'</p>');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}

function changePlace(){
    var choice = $('.fieldInf').val();
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        var data = jsonData.records;
        // 把原本的資料清空
        $('.weatherNow').html('');
        $('.temperRange').html('');
        $('.chanceNow').html('');
        
        // 當天天氣
        if(data.location[choice].weatherElement[0].time[0].parameter.parameterValue < 4){
            console.log('目前應該是晴天');
            $('.weatherNow').append('<span class="detailDay1"></span> ');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue >= 4)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            console.log('目前應該是陰天');
            $('.weatherNow').append('<span class="detailDay2"></span> ');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 14)){
            console.log('目前應該是雨天');
            $('.weatherNow').append('<span class="detailDay3"></span> ');
        }
        else if((data.location[choice].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue < 23)){
            console.log('目前應該是雷雨天');
            $('.weatherNow').append('<span class="detailDay4"></span> ');
        }

        // 顯示當天的高低溫
        $('.temperRange').append(
            '<span>'+data.location[choice].weatherElement[4].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-up"></i>'+'</span>'+
            '<span>'+data.location[choice].weatherElement[2].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-down"></i>'+'</span>');
        
        // 顯示降雨機率
        $('.chanceNow').append('<span class="hintTitle">降雨機率</span><span>'+data.location[choice].weatherElement[1].time[0].parameter.parameterName+'%'+'</span>');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}

// 顯示未來三天日期
function dispTime() {
    for (i = 0; i < 4; i++) {
        console.log(i);
        // 獲取今天日期
        function GetDateStr(i) {
            var dd = new Date();
            dd.setDate(dd.getDate() + i); //获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
            return y + "-" + m + "-" + d;
        }
        // 獲取今天是星期幾
        function GetDayStr(i) {
            var dd = new Date();
            dd.setDate(dd.getDate() + i); //获取AddDayCount天后的日期
            var weekday = new Array(7);
            weekday[0] = "日";
            weekday[1] = "一";
            weekday[2] = "二";
            weekday[3] = "三";
            weekday[4] = "四";
            weekday[5] = "五";
            weekday[6] = "六";
            var today = weekday[dd.getDay()];
            return today;
        }
        $('.time'+i).append('<span>星期' + GetDayStr(i-1) + '</span>');
    }
}
// var timerID = setInterval("dispTime()",1000);
dispTime();
// function change
loadData();
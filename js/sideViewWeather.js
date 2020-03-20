// var timerID = setInterval("dispTime()",1000);
dispTime();
// function change
loadData();


function loadData(){

    // 抓取用戶目前位置，以後用得到
    getLocation();
    function getLocation() {//取得 經緯度
        if (navigator.geolocation) {//
            navigator.geolocation.getCurrentPosition(showPosition);//有拿到位置就呼叫 showPosition 函式
        } else {
            alert("您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址")
        }
    }

    function showPosition(position) {
          console.log("緯度 (Latitude): " + position.coords.latitude +"經度 (Longitude):"+position.coords.longitude);
    }  

    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        console.log(jsonData);
        var dataTotal = jsonData.records.location.length;
        var loadPlace1 = 0;
        var data = jsonData.records;
        console.log(dataTotal);
        // 顯示縣市資料
        while(loadPlace1<dataTotal){
            $('.indexPlace').append('<option value="'+loadPlace1+'">'+data.location[loadPlace1].locationName+'</option>');
            $('.fieldInf').append('<option value="'+loadPlace1+'">'+data.location[loadPlace1].locationName+'</option>');
            loadPlace1++;
        }
        
            // 取得IP
            fetch('https://api.ipify.org/?format=json', {})
            .then((response) => {
                // 可以透過 blob(), json(), text() 轉成可用的資訊
                return response.json(); 
            }).then((placeData) => {
                var dataPlace = placeData.district;
                console.log('城市為:'+dataPlace);
                alert('城市為:'+dataPlace);
                if(dataPlace =='Chiayi County'){
                    var cityNumber = 0;   
                }else if(dataPlace =='New TaipeiCity'){
                    var cityNumber = 1;   
                }else if(dataPlace =='Chiayi City'){
                    var cityNumber = 2;   
                }else if(dataPlace =='Hsinchu County'){
                    var cityNumber = 3;   
                }else if(dataPlace =='Hsinchu City'){
                    var cityNumber = 4;   
                }else if(dataPlace =='Taipei City'){
                    var cityNumber = 5;   
                }else if(dataPlace =='Tainan City'){
                    var cityNumber = 6;   
                }else if(dataPlace =='Yilan County'){
                    var cityNumber = 7;   
                }else if(dataPlace =='Miaoli County'){
                    var cityNumber = 8;   
                }else if(dataPlace =='Yunlin County'){
                    var cityNumber = 9;   
                }else if(dataPlace =='Hualien County'){
                    var cityNumber = 10;   
                }else if(dataPlace =='Taichung City'){
                    var cityNumber = 11;   
                }else if(dataPlace =='Taitung County'){
                    var cityNumber = 12;   
                }else if(dataPlace =='Taoyuan City'){
                    var cityNumber = 13;   
                }else if(dataPlace =='Nantou County'){
                    var cityNumber = 14;   
                }else if(dataPlace =='Kaohsiung City'){
                    var cityNumber = 15;   
                }else if(dataPlace =='Kinmen County'){
                    var cityNumber = 16;   
                }else if(dataPlace =='Pingtung County'){
                    var cityNumber = 17;   
                }else if(dataPlace =='Keelung City '){
                    var cityNumber = 18;   
                }else if(dataPlace =='Penghu County'){
                    var cityNumber = 19;   
                }else if(dataPlace =='Changhua County'){
                    var cityNumber = 20;   
                }else if(dataPlace =='Lianjiang County'){
                    var cityNumber = 21;   
                }
                console.log('cityNumber是:'+cityNumber);
                if( cityNumber != 0 ){
                    $('#indexPlace option[value='+cityNumber+']').attr('selected', 'selected');
                    $('.fieldInf option[value='+cityNumber+']').attr('selected', 'selected');
                }
                else{
                    $('#indexPlace option[value='+5+']').attr('selected', 'selected');
                    $('.fieldInf option[value='+5+']').attr('selected', 'selected');
                }
                $('#indexPlace option[value='+cityNumber+']').attr('selected', 'selected');
                $('.fieldInf option[value='+cityNumber+']').attr('selected', 'selected');
                
                const uri1 = "https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json";
                fetch(uri1, {
                    method: 'GET'
                })
                .then(res => {
                    return res.json(); // 使用 text() 可以得到純文字 String
                })
                .then(airData => {
                    console.log(airData);
                    var dataTotal = airData.length;
                    var dataCount = 0;
                    var loadPlace1 = $('.fieldInf').val();
                    var loadPlace2 = $('.indexPlace').val();
                    console.log('目前是要抓第'+loadPlace1+'地區的資料');
                    alert('目前是要抓第'+loadPlace1+'地區的資料');
                    while(dataCount<dataTotal){
                        if(( loadPlace1 == 0)&&(airData[dataCount].SiteName=='朴子')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 1 )&&(airData[dataCount].SiteName=='板橋')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 2 )&&(airData[dataCount].SiteName=='嘉義')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 3 )&&(airData[dataCount].SiteName=='湖口')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 4 )&&(airData[dataCount].SiteName=='新竹')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 5 )&&(airData[dataCount].SiteName=='士林')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 6 )&&(airData[dataCount].SiteName=='臺南')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 7 )&&(airData[dataCount].SiteName=='宜蘭')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 8 )&&(airData[dataCount].SiteName=='苗栗')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 9 )&&(airData[dataCount].SiteName=='斗六')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 10 )&&(airData[dataCount].SiteName=='花蓮')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 11 )&&(airData[dataCount].SiteName=='沙鹿')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 12 )&&(airData[dataCount].SiteName=='關山')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 13 )&&(airData[dataCount].SiteName=='桃園')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                            console.log(airData[dataCount].County+'空氣品質是:'+airData[dataCount].Status);
                            // console.log('第'+loadPlace1+'資料在'+airData[loadPlace1].SiteName+'偵測到的數據是'+airData[loadPlace1].Status);
                        }else if(( loadPlace1 == 14 )&&(airData[dataCount].SiteName=='南投')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 15 )&&(airData[dataCount].SiteName=='左營')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 16 )&&(airData[dataCount].SiteName=='金門')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 17 )&&(airData[dataCount].SiteName=='屏東(琉球)')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 18 )&&(airData[dataCount].SiteName=='基隆')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 19 )&&(airData[dataCount].SiteName=='馬公')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 20 )&&(airData[dataCount].SiteName=='彰化(大城)')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }else if(( loadPlace1 == 21 )&&(airData[dataCount].SiteName=='馬祖')){
                            $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                        }
                        dataCount++;
                    }
                }).catch((err) => {
                    console.log('訊息:請重新嘗試連線', err);
                });



                // day1 晴天 sunny
                // day2 陰天 cloudy
                // day3 雨天 rainy
                // day4 雷雨 stormy
                // day5 雪   snowy

                if(data.location[cityNumber].weatherElement[0].time[0].parameter.parameterValue <= 4){
                    console.log('目前應該是晴天');
                    $('.status').append('<span class="index-day1"></span> ');
                    $('.weatherNow').append('<span class="day1"></span> ');
                    $('.weather1').append('<span class="detailDay1"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[0].parameter.parameterValue > 4)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 8)){
                    console.log('目前應該是陰天');
                    $('.status').append('<span class="index-day2"></span> ');
                    $('.weatherNow').append('<span class="day2"></span> ');
                    $('.weather1').append('<span class="detailDay2"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 14)){
                    console.log('目前應該是雨天');
                    $('.status').append('<span class="index-day3"></span> ');
                    $('.weatherNow').append('<span class="day3"></span> ');
                    $('.weather1').append('<span class="detailDay3"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue < 23)){
                    console.log('目前應該是雷雨天');
                    $('.status').append('<span class="index-day4"></span> ');
                    $('.weatherNow').append('<span class="day4"></span>');
                    $('.weather1').append('<span class="detailDay4"></span>');
                }

                // 第二天的天氣
                if(data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue <= 4){
                    $('.weather2').append('<span class="detailDay1"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue > 4)&&(data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue <= 8)){
                    $('.weather2').append('<span class="detailDay2"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue > 8)&&(data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue <= 14)){
                    $('.weather2').append('<span class="detailDay3"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue > 14)&&(data.location[cityNumber].weatherElement[0].time[1].parameter.parameterValue < 23)){
                    $('.weather2').append('<span class="detailDay4"></span>');
                }
                
                // 第三天的天氣
                if(data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue <= 4){
                    console.log('第三天應該是晴天');
                    $('.weather3').append('<span class="detailDay1"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue > 4)&&(data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue <= 8)){
                    console.log('第三天應該是陰天，因為數字是'+data.location[5].weatherElement[0].time[2].parameter.parameterValue);
                    $('.weather3').append('<span class="detailDay2"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue > 8)&&(data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue <= 14)){
                    console.log('第三天應該是雨天');
                    $('.weather3').append('<span class="detailDay3"></span>');
                }
                else if((data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue > 14)&&(data.location[cityNumber].weatherElement[0].time[2].parameter.parameterValue < 23)){
                    console.log('第三天應該是雷雨天');
                    $('.weather3').append('<span class="detailDay4"></span>');
                }

                // 顯示三天的溫度
                $('.temperRange').append(
                    '<span>'+data.location[cityNumber].weatherElement[4].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-up"></i>'+'</span>'+
                    '<span>'+data.location[cityNumber].weatherElement[2].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-down"></i>'+'</span>');
                $('.temp1').append('<span>'+data.location[cityNumber].weatherElement[2].time[0].parameter.parameterName+'°C'+'</span>');
                $('.temp2').append('<span>'+data.location[cityNumber].weatherElement[2].time[1].parameter.parameterName+'°C'+'</span>');
                $('.temp3').append('<span>'+data.location[cityNumber].weatherElement[2].time[2].parameter.parameterName+'°C'+'</span>');
                
                // 顯示未來三天的降雨機率
                $('.chanceNow').append('<span>'+data.location[cityNumber].weatherElement[1].time[0].parameter.parameterName+'%'+'</span>');
                $('.chance1').append('<span>'+ data.location[cityNumber].weatherElement[1].time[0].parameter.parameterName +'%'+'</span>');
                $('.chance2').append('<span>'+ data.location[cityNumber].weatherElement[1].time[1].parameter.parameterName +'%'+'</span>');
                $('.chance3').append('<span>'+ data.location[cityNumber].weatherElement[1].time[2].parameter.parameterName +'%'+'</span>');

        }).catch((err) => {
            console.log('錯誤:', err);
        });
        
       

    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
function changeSidepage(){
    // 確認選擇的縣市
    var loadPlace1 = $('#indexPlace').val();
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
        console.log('天氣數字是'+data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue);
        if(data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue <= 4){
            console.log('目前應該是晴天');
            $('.status').append('<span class="index-day1"></span> ');
            $('.weather1').append('<span class="detailDay1"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue > 4)&&(data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            console.log('目前應該是陰天');
            $('.status').append('<span class="index-day2"></span> ');
            $('.weather1').append('<span class="detailDay2"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue <= 14)){
            console.log('目前應該是雨天');
            $('.status').append('<span class="index-day3"></span> ');
            $('.weather1').append('<span class="detailDay3"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue < 23)){
            console.log('目前應該是雷雨天');
            $('.status').append('<span class="index-day4"></span> ');
            $('.weather1').append('<span class="detailDay4"></span>');
        }

        // 第二天的天氣
        if(data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue <= 4){
            $('.weather2').append('<span class="detailDay1"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue > 4)&&(data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue <= 8)){ 
            $('.weather2').append('<span class="detailDay2"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue > 8)&&(data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue <= 14)){
            $('.weather2').append('<span class="detailDay3"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue > 14)&&(data.location[loadPlace1].weatherElement[0].time[1].parameter.parameterValue < 23)){
            $('.weather2').append('<span class="detailDay4"></span>');
        }
        
        // 第三天的天氣
        if(data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue <= 4){
            console.log('第三天應該是晴天');
            $('.weather3').append('<span class="detailDay1"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue > 4)&&(data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue <= 8)){
            console.log('第三天應該是陰天');
            $('.weather3').append('<span class="detailDay2"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue > 8)&&(data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue <= 14)){
            console.log('第三天應該是雨天');
            $('.weather3').append('<span class="detailDay3"></span>');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue > 14)&&(data.location[loadPlace1].weatherElement[0].time[2].parameter.parameterValue < 23)){
            console.log('第三天應該是雷雨天');
            $('.weather3').append('<span class="detailDay4"></span>');
        }

        // 顯示未來三天的溫度
        $('.temp1').append('<span>'+data.location[loadPlace1].weatherElement[2].time[0].parameter.parameterName+'°C'+'</span>');
        $('.temp2').append('<span>'+data.location[loadPlace1].weatherElement[2].time[1].parameter.parameterName+'°C'+'</span>');
        $('.temp3').append('<span>'+data.location[loadPlace1].weatherElement[2].time[2].parameter.parameterName+'°C'+'</span>');
        
        // 顯示未來三天的降雨機率
        $('.chance1').append('<span>'+ data.location[loadPlace1].weatherElement[1].time[0].parameter.parameterName +'%'+'</span>');
        $('.chance2').append('<span>'+ data.location[loadPlace1].weatherElement[1].time[1].parameter.parameterName +'%'+'</span>');
        $('.chance3').append('<span>'+ data.location[loadPlace1].weatherElement[1].time[2].parameter.parameterName +'%'+'</span>');
        // $('.status').append('<p>'+data.location[loadPlace1].weatherElement[3].time[0].parameter.parameterName+'</p>');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}

function changePlaceweather(){
    var loadPlace1 = $('.fieldInf').val();
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
        if(data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue < 4){
            console.log('目前應該是晴天');
            $('.weatherNow').append('<span class="day1"></span> ');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue >= 4)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 8)){
            console.log('目前應該是陰天');
            $('.weatherNow').append('<span class="day2"></span> ');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue > 8)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue <= 14)){
            console.log('目前應該是雨天');
            $('.weatherNow').append('<span class="day3"></span> ');
        }
        else if((data.location[loadPlace1].weatherElement[0].time[0].parameter.parameterValue > 14)&&(data.location[5].weatherElement[0].time[0].parameter.parameterValue < 23)){
            console.log('目前應該是雷雨天');
            $('.weatherNow').append('<span class="day4"></span> ');
        }

        // 顯示當天的高低溫
        $('.temperRange').append(
            '<span>'+data.location[loadPlace1].weatherElement[4].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-up"></i>'+'</span>'+
            '<span>'+data.location[loadPlace1].weatherElement[2].time[0].parameter.parameterName+'°C'+'<i class="fas fa-long-arrow-alt-down"></i>'+'</span>');
        
        // 顯示降雨機率
        $('.chanceNow').append('<span class="hintTitle">降雨機率</span><span>'+data.location[loadPlace1].weatherElement[1].time[0].parameter.parameterName+'%'+'</span>');
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

// 切換資料來源
function changePlaceair(){
    // 切換縣市
    // 每個縣市取一個該縣市內的偵測站的資料
    // 每改一次就掃描一次

    var place = $('.fieldInf').find("option:selected").text();
    var choice = $('.fieldInf').val();
    console.log(place);
    fetch('https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((airData) => {  
        var dataTotal = airData.length;
        var dataCount = 0;
        // console.log('資料總筆數為'+dataTotal);
        // 把原本的資料清空
        $('.airInf').html('');
        while(dataCount<dataTotal){
            if(( choice == 0)&&(airData[dataCount].SiteName=='朴子')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 1 )&&(airData[dataCount].SiteName=='板橋')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 2 )&&(airData[dataCount].SiteName=='嘉義')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 3 )&&(airData[dataCount].SiteName=='湖口')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 4 )&&(airData[dataCount].SiteName=='新竹')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 5 )&&(airData[dataCount].SiteName=='士林')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 6 )&&(airData[dataCount].SiteName=='臺南')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 7 )&&(airData[dataCount].SiteName=='宜蘭')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 8 )&&(airData[dataCount].SiteName=='苗栗')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 9 )&&(airData[dataCount].SiteName=='斗六')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 10 )&&(airData[dataCount].SiteName=='花蓮')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 11 )&&(airData[dataCount].SiteName=='沙鹿')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 12 )&&(airData[dataCount].SiteName=='關山')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 13 )&&(airData[dataCount].SiteName=='桃園')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
                // console.log('第'+dataCount+'資料在'+airData[dataCount].SiteName+'偵測到的數據是'+airData[dataCount].Status);
            }else if(( choice == 14 )&&(airData[dataCount].SiteName=='南投')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 15 )&&(airData[dataCount].SiteName=='左營')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 16 )&&(airData[dataCount].SiteName=='金門')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 17 )&&(airData[dataCount].SiteName=='屏東(琉球)')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 18 )&&(airData[dataCount].SiteName=='基隆')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 19 )&&(airData[dataCount].SiteName=='馬公')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 20 )&&(airData[dataCount].SiteName=='彰化(大城)')){
                $('.airInf').append('<span>空氣品質:'+airData[dataCount].Status+'</span>');
            }else if(( choice == 21 )&&(airData[dataCount].SiteName=='馬祖')){
                $('.airInf').append('<span>空氣品質:'+airData[71].Status+'</span>');
            }
            dataCount++;
        }  
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
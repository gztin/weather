const uri1 = "https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json";
fetch(uri1, {
    method: 'GET'
})
.then(res => {
    return res.json(); // 使用 text() 可以得到純文字 String
})
.then(airData => {
    console.log(airData);
    console.log(airData[14].Status);
    $('.airInf').append('<span>空氣品質:'+airData[14].Status+'</span>');
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});

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
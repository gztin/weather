const uri1 = "http://opendata2.epa.gov.tw/AQI.json";
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
function changeField(){
    // 切換縣市
    var place = $('.fieldInf').find("option:selected").text();
    console.log(place);
    fetch('http://opendata2.epa.gov.tw/AQI.json', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((infData) => {
        // console.log('JSON資料中地名是'+infData[0].SiteName);
        // console.log('切換的地區是'+place);

        var dataCount = 0;
        // 把原本的資料清空
        $('.airInf').html('');
        
        // 每個縣市取一個該縣市內的偵測站的資料
        if((infData[0].County == place)&&(infData[0].SiteName=='基隆')){
            $('.airInf').append('<span>空氣品質:'+infData[0].Status+'</span>');
        }else if((infData[5].County == place)&&(infData[5].SiteName=='板橋')){
            $('.airInf').append('<span>空氣品質:'+infData[5].Status+'</span>');
        }else if((infData[39].County == place)&&(infData[39].SiteName=='朴子')){
            $('.airInf').append('<span>空氣品質:'+infData[39].Status+'</span>');
        }else if((infData[41].County == place)&&(infData[41].SiteName=='嘉義')){
            $('.airInf').append('<span>空氣品質:'+infData[41].Status+'</span>');
        }else if((infData[21].County == place)&&(infData[21].SiteName=='湖口')){
            $('.airInf').append('<span>空氣品質:'+infData[21].Status+'</span>');
        }else if((infData[23].County == place)&&(infData[23].SiteName=='新竹')){
            $('.airInf').append('<span>空氣品質:'+infData[23].Status+'</span>');
        }else if((infData[10].County == place)&&(infData[10].SiteName=='士林')){
            $('.airInf').append('<span>空氣品質:'+infData[10].Status+'</span>');
        }else if((infData[45].County == place)&&(infData[45].SiteName=='臺南')){
            $('.airInf').append('<span>空氣品質:'+infData[45].Status+'</span>');
        }else if((infData[63].County == place)&&(infData[63].SiteName=='宜蘭')){
            $('.airInf').append('<span>空氣品質:'+infData[63].Status+'</span>');
        }else if((infData[25].County == place)&&(infData[25].SiteName=='苗栗')){
            $('.airInf').append('<span>空氣品質:'+infData[25].Status+'</span>');
        }else if((infData[36].County == place)&&(infData[36].SiteName=='斗六')){
            $('.airInf').append('<span>空氣品質:'+infData[36].Status+'</span>');
        }else if((infData[61].County == place)&&(infData[61].SiteName=='花蓮')){
            $('.airInf').append('<span>空氣品質:'+infData[61].Status+'</span>');
        }else if((infData[28].County == place)&&(infData[28].SiteName=='沙鹿')){
            $('.airInf').append('<span>空氣品質:'+infData[28].Status+'</span>');
        }else if((infData[74].County == place)&&(infData[74].SiteName=='關山')){
            $('.airInf').append('<span>空氣品質:'+infData[74].Status+'</span>');
        }else if((infData[16].County == place)&&(infData[16].SiteName=='桃園')){
            $('.airInf').append('<span>空氣品質:'+infData[16].Status+'</span>');
        }else if((infData[35].County == place)&&(infData[35].SiteName=='南投')){
            $('.airInf').append('<span>空氣品質:'+infData[35].Status+'</span>');
        }else if((infData[53].County == place)&&(infData[53].SiteName=='左營')){
            $('.airInf').append('<span>空氣品質:'+infData[53].Status+'</span>');
        }else if((infData[72].County == place)&&(infData[72].SiteName=='金門')){
            $('.airInf').append('<span>空氣品質:'+infData[72].Status+'</span>');
        }else if((infData[80].County == place)&&(infData[80].SiteName=='屏東(琉球)')){
            $('.airInf').append('<span>空氣品質:'+infData[80].Status+'</span>');
        }else if((infData[73].County == place)&&(infData[73].SiteName=='馬公')){
            $('.airInf').append('<span>空氣品質:'+infData[73].Status+'</span>');
        }else if((infData[78].County == place)&&(infData[78].SiteName=='彰化(大城)')){
            $('.airInf').append('<span>空氣品質:'+infData[78].Status+'</span>');
        }else if((infData[71].County == place)&&(infData[71].SiteName=='馬祖')){
            $('.airInf').append('<span>空氣品質:'+infData[71].Status+'</span>');
        }
        

        
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
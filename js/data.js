// JavaScript Document
$(function(){
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON&locationName=')
    .then(res => {
        return res.json();
    }).then(result => {
        let city = result.cwbopendata.location[14].parameter[0].parameterValue;
        let temp = result.cwbopendata.location[14].weatherElement[3].elementValue.value;
        console.log(`${city}的氣溫為 ${temp} 度 C`); // 得到 高雄市的氣溫為 29.30 度 C
    });
});
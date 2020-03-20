const uri2 = "https://s5.aconvert.com/convert/p3r68-cdx67/ez14s-qiliq.json";
fetch(uri2, {
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
    fetch('https://s5.aconvert.com/convert/p3r68-cdx67/ez14s-qiliq.json', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((maskData) => {
        // console.log('JSON資料中地名是'+infData[0].SiteName);
        // console.log('切換的地區是'+place);
        console.log(maskData);
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
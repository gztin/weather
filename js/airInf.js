const uri1 = "http://opendata2.epa.gov.tw/AQI.json";
fetch(uri1, {
    method: 'GET'
})
.then(res => {
    return res.json(); // 使用 text() 可以得到純文字 String
})
.then(result => {
    console.log(result);
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});
// 讀取新聞資料
const uri = "https://spreadsheets.google.com/feeds/list/18Nq9zWep1AJsjn0t7cvwqHRpYV0ADs7jC3HhRQ0xjY8/1/public/values?alt=json";

fetch(uri, {
    method: 'GET'
})
.then(res => {
    return res.json(); // 使用 text() 可以得到純文字 String
})
.then(result => {
    // 抓取用戶目前位置，以後用得到
    // getLocation();
    // function getLocation() {//取得 經緯度
    //     if (navigator.geolocation) {//
    //         navigator.geolocation.getCurrentPosition(showPosition);//有拿到位置就呼叫 showPosition 函式
    //     } else {
    //         alert("您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址")
    //     }
    // }

    // function showPosition(position) {
    //       console.log("  緯度 (Latitude): " + position.coords.latitude +"經度 (Longitude):"+position.coords.longitude);
    // }  

    $('.loading').css('display', 'none');
    // $('.navbar').css('display', 'block');
	console.log(result);
    var newsData = result.feed.entry;
    var content = result.feed;
    var dataList = newsData.length;
	var imgSample = './img/sample.png';
	console.log('dataList總共有'+dataList+'筆');
	console.log('第一筆新聞的標題是'+newsData[0].gsx$articlestitle.$t);
    // 列印所有新聞
    for (var count = 0; count < dataList; count++) {
		var news = newsData[count];
        if(news.gsx$articlesurltoimage.$t==''){
          news.gsx$articlesurltoimage.$t = imgSample;
        }
        else{
          news.gsx$articlesurltoimage.$t = news.gsx$articlesurltoimage.$t;
        }
        var newsContent = '<div class="listPic">'+'<img src='+news.gsx$articlesurltoimage.$t+'>'+'</div>'+
            '<div class="listTitle">'+
                '<h2>'+news.gsx$articlestitle.$t+'</h2>'+
                '<p class="onTime"><span>'+news.gsx$articlespublishedat.$t+'</span></p>'+
                '<div style="display:none;">'+
                    '<img src='+news.gsx$articlesurltoimage.$t+'>'+
                    '<div class="newsContent">'+
                        '<div class="postTime">'+
                            news.gsx$articlespublishedat.$t+'<span class="changeSize">aA</span>'+
                            '<div class="textSize">'+
                                '<span class="font16">A</span>'+
                                '<span class="font18">A</span>'+
                                '<span class="font20">A</span>'+
                            '</div>'+
						'</div>'+news.gsx$articlesdescription.$t+
						'<div class="oriURL"><span class="orilink" style="display:none;">'+news.gsx$articlesurl.$t+'</span><a>查看原始連結></a></div></div>'+
                '</div>'+
            '</div>';
		
			
        if(content.title.$t=='business'){
            $('.swiper-wrapper > ul#newsGlobal').append(
              '<li class="newsContent newsGlobal">'+newsContent+'</li>'
			);
			
        }
        else if(content.title.$t=='entertainment'){
            $('.swiper-wrapper > ul#newsLive').append(
                '<li class="newsContent newsLive">'+newsContent+'</li>'
            );
        }
        else if(content.title.$t=='health'){
            $('.swiper-wrapper > ul#newsPolitics').append(
              '<li class="newsContent newsPolitics">'+newsContent+'</li>'
            );
        }
        else if(content.title.$t=='science'){
            $('.swiper-wrapper > ul#newsFashion').append(
                '<li class="newsContent newsFashion">'+newsContent+'</li>'
            );
        }
        else if(content.title.$t=='sports'){
            $('.swiper-wrapper > ul#newsEntertainment').append(
                '<li class="newsContent newsEntertainment">'+newsContent+'</li>'
            );
        }
        else if(content.title.$t=='technology'){
            $('.swiper-wrapper > ul#newsTravel').append(
                '<li class="newsContent newsTravel">'+newsContent+'</li>'
            );
        }      
    }
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});
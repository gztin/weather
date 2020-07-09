// 讀取新聞資料
const uri = "http://152.32.245.88:5900/search/article/";
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
    var dataList = result.length;
    var imgSample = './img/sample.png';
    
    // 列印所有新聞
    for (var count = 0; count < dataList; count++) {
        var news = result[count];
        if(news.img==''){
          news.img = imgSample;
        }
        else{
          news.img = news.img;
        }
        var newsContent = '<div class="listPic">'+'<img src='+news.img+'>'+'</div>'+
            '<div class="listTitle">'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+news.date+'</span></p>'+
                '<div style="display:none;">'+
                    '<img src='+news.img+'>'+
                    '<div class="newsContent">'+
                        '<div class="postTime">'+
                            news.date+'<span class="changeSize">aA</span>'+
                            '<div class="textSize">'+
                                '<span class="font16">A</span>'+
                                '<span class="font18">A</span>'+
                                '<span class="font20">A</span>'+
                            '</div>'+
                        '</div>'+news.content+'<div class="oriURL"><span class="orilink" style="display:none;">'+news.url+'</span><a>查看原始連結></a></div></div>'+
                '</div>'+
            '</div>';
        
        if(news.category=='國際'){
            $('.swiper-wrapper > ul#newsGlobal').append(
              '<li class="newsContent newsGlobal">'+newsContent+'</li>'
            );
        }
        else if(news.category=='生活'){
            $('.swiper-wrapper > ul#newsLive').append(
                '<li class="newsContent newsLive">'+newsContent+'</li>'
            );
        }
        else if(news.category=='政治'){
            $('.swiper-wrapper > ul#newsPolitics').append(
              '<li class="newsContent newsPolitics">'+newsContent+'</li>'
            );
        }
        else if(news.category=='流行時尚'){
            $('.swiper-wrapper > ul#newsFashion').append(
                '<li class="newsContent newsFashion">'+newsContent+'</li>'
            );
        }
        else if(news.category=='娛樂'){
            $('.swiper-wrapper > ul#newsEntertainment').append(
                '<li class="newsContent newsEntertainment">'+newsContent+'</li>'
            );
        }
        else if(news.category=='旅遊'){
            $('.swiper-wrapper > ul#newsTravel').append(
                '<li class="newsContent newsTravel">'+newsContent+'</li>'
            );
        }
        else if(news.category=='社會'){
            $('.swiper-wrapper > ul#newsSociety').append(
                '<li class="newsContent newsSociety">'+newsContent+'</li>'
            );
        }
        else if(news.category=='運動'){
            $('.swiper-wrapper > ul#newsSport').append(
                '<li class="newsContent newsSport" ">'+newsContent+'</li>'
            );
        }
        else if(news.category=='財經'){
            $('.swiper-wrapper > ul#newsFinance').append(
                '<li class="newsContent newsFinance" ">'+newsContent+'</li>'
            );
        }
             
    }
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});
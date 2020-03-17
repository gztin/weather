// 讀取新聞資料
const uri = "https://taiwan-train-api.herokuapp.com/search/article";
fetch(uri, {
    method: 'GET'
})
.then(res => {
    return res.json(); // 使用 text() 可以得到純文字 String
})
.then(result => {
    $('.loading').css('display', 'none');
    $('.navbar').css('display', 'block');
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
                        '</div>'+
                        news.content+'<a target="_blank" class="oirlink" href="'+news.url+'">查看原始文章 ></a>'+
                    '</div>'+
                '</div>'+
            '</div>';
        
        if(news.category=='國際'){
            $('.newsList > ul#newsGlobal').append(
              '<li class="newsContent newsGlobal">'+newsContent+'</li>'
            );
        }
        else if(news.category=='生活'){
            $('.newsList > ul#newsLive').append(
                '<li class="newsContent newsLive">'+newsContent+'</li>'
            );
        }
        else if(news.category=='政治'){
            $('.newsList > ul#newsPolitics').append(
              '<li class="newsContent newsPolitics">'+newsContent+'</li>'
            );
        }
        else if(news.category=='寵物'){
            $('.newsList > ul#newsPet').append(
                '<li class="newsContent news3C">'+newsContent+'</li>'
            );
        }
        else if(news.category=='娛樂'){
            $('.newsList > ul#newsEntertainment').append(
                '<li class="newsContent newsEntertainment">'+newsContent+'</li>'
            );
        }
        else if(news.category=='房產'){
            $('.newsList > ul#newsHouse').append(
                '<li class="newsContent newsHouse">'+newsContent+'</li>'
            );
        }
        else if(news.category=='社會'){
            $('.newsList > ul#newsSociety').append(
                '<li class="newsContent newsSociety">'+newsContent+'</li>'
            );
        }
        else if(news.category=='運動'){
            $('.newsList > ul#newsSport').append(
                '<li class="newsContent newsSport" ">'+newsContent+'</li>'
            );
        }
        else if(news.category=='財經'){
            $('.newsList > ul#newsFinance').append(
                '<li class="newsContent newsFinance" ">'+newsContent+'</li>'
            );
        }
             
    }
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});





// 讀取新聞資料
const uri = "https://taiwan-train-api.herokuapp.com/news/";
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
    // 如果有撈到資料
    // newsFocus 焦點新聞
    // newsPolitics 政治新聞
    // newsEntertainment 娛樂新聞
    // newsFinance 金融新聞
    // newsSociety 社會新聞
    // newsGlobal 國際新聞
    // newsSport 體育新聞
    // newsGossiping 八卦版

    var countColumn = 0;
    var countPolitics = 0;
    var countEntertainment = 0;
    var countPolitics = 0;
    var countFinance = 0;
    var countSociety = 0;
    var countGlobal = 0;
    var countSport = 0;
    var countGossiping = 0;

    // 列印所有新聞
    for (var count = 0; count < dataList; count++) {
        var news = result[count];
        if(news.lable=='column'){
            $('.newsList > ul').append(
                '<li class="newsContent newsFocus">'+
                    '<p><span class="classTitle">焦點</span></p>'+
                    '<div>'+news.title+'</div>'+
                    '<a id="linkURL" target="_parent" href="'+
                    news.url+
                    '">'+
                    // news.title+
                    '</a>'+
                    '<p><span class="onTime">'+
                    news.date+
                    '</span></p>'+
                '</li>'
            );
        }
       
        else if(news.lable=='politics'){
            $('.newsList > ul').append(
                '<li class="newsContent newsPolitics" style="display:none;">'+
                '<p><span class="classTitle">政治</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='entertainment'){
            $('.newsList > ul').append(
                '<li class="newsContent newsEntertainment" style="display:none;">'+
                '<p><span class="classTitle">娛樂</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='politics'){
            $('.newsList > ul').append(
                '<li class="newsContent newsPolitics" style="display:none;">'+
                '<p><span class="classTitle">政治</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='finance'){
            $('.newsList > ul').append(
                '<li class="newsContent newsFinance" style="display:none;">'+
                '<p><span class="classTitle">金融</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='society'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSociety" style="display:none;">'+
                '<p><span class="classTitle">社會</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='global'){
            $('.newsList > ul').append(
                '<li class="newsContent newsGlobal" style="display:none;">'+
                '<p><span class="classTitle">國際</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='sport'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSport" style="display:none;">'+
                '<p><span class="classTitle">體育</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        else if(news.lable=='gossiping'){
            $('.newsList > ul').append(
                '<li class="newsContent newsGossiping" style="display:none;">'+
                '<p><span class="classTitle">八卦</span></p>'+
                '<div>'+news.title+'</div>'+
                '<a id="linkURL" target="_parent" href="'+
                news.url+
                '">'+
                // news.title+
                '</a>'+
                '<p><span class="onTime">'+
                news.date+
                '</span></p>'+
                '</li>'
            );
        }
        
    }

    // 切換新聞類別
    $('.menu span').eq(0).addClass('cur');
    // 叫出側邊欄位
    $('.area-title > span').click(function(){
    $('.sideMenuBg').show();
    $('.sideMenu').css('left','0%');
    });
    // 隱藏側邊欄位
    $('.sideMenuBg').click(function(){
    $('.sideMenu').css('left','-70%');
    $('.sideMenuBg').hide();
    });

    // 切換類別
    $('.menu span').click(function(){
    var x =$(this).index();
    $('.menu span').eq(x).addClass('cur').siblings().removeClass('cur');
    $('.popView').hide();
    $('.newsList ul > li').css('display','flex');

    });

    // $('.all').click(function(){
    // $('.popView').hide();
    // $('.newsList ul > li').css('display','flex');
    // });

    $('.focus').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsFocus').css('display','flex');
    });

    $('.politics').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsPolitics').css('display','flex');
    });

    $('.gossiping').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGossiping').css('display','flex');
    });

    $('.entertainment').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsEntertainment').css('display','flex');
    });

    $('.gossiping').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGossiping').css('display','flex');
    });

    $('.global').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGlobal').css('display','flex');
    });

    $('.finance').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsFinance').css('display','flex');
    });

    $('.society').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsSociety').css('display','flex');
    });

    $('.sport').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsSport').css('display','flex');
    });

    $('.sport').click(function(){
    $('.popView').hide();
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsSport').css('display','flex');
    });

    // console.log('countColumn總共有'+countColumn+'個');
    // console.log('countPolitics總共有'+countPolitics+'個');
    // console.log('countSport總共有'+countSport+'個');
    // console.log('countSociety總共有'+countSociety+'個');
    // console.log('countGlobal總共有'+countGlobal+'個');
    // console.log('countGossiping總共有'+countGossiping+'個');
    // console.log('countEntertainment總共有'+countEntertainment+'個');
    // console.log('countFinance總共有'+countFinance+'個');
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});
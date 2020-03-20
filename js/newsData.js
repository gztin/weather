




// 讀取新聞資料
// const uri = "https://taiwan-train-api.herokuapp.com/news/";
const uri = "https://taiwan-train-api.herokuapp.com/search/article/2020-03-01";
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
    // newsFocus 國際新聞
    // newsPolitics 政治新聞
    // newsLive 政治新聞
    // newsEntertainment 娛樂新聞
    // newsHouse 金融新聞
    // newsSociety 社會新聞
    // newsGlobal 國際新聞
    // newsSport 體育新聞
    // newsGossiping 八卦版

    // var countColumn = 0;
    // var countPolitics = 0;
    // var countEntertainment = 0;
    // var countFinance = 0;
    // var countSociety = 0;
    // var countGlobal = 0;
    // var countSport = 0;
    // var countGossiping = 0;

    // 列印所有新聞
    for (var count = 0; count < dataList; count++) {
        var news = result[count];
        if(news.category=='政治'){
            $('.newsList > ul').append(
                '<li class="newsContent newsPolitics" style="display:none;">'+
                '<p><span class="classTitle">政治</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
                '</li>'
            );
        }
        else if(news.category=='娛樂'){
            $('.newsList > ul').append(
                '<li class="newsContent newsEntertainment" style="display:none;">'+
                '<p><span class="classTitle">娛樂</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
                '</li>'
            );
        }
        else if(news.category=='生活'){
            $('.newsList > ul').append(
                '<li class="newsContent newsLive" style="display:none;">'+
                '<p><span class="classTitle">生活</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
                '</li>'
            );
        }
        else if(news.category=='房產'){
            $('.newsList > ul').append(
                '<li class="newsContent newsHouse" style="display:none;">'+
                '<p><span class="classTitle">房產</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
                '</li>'
            );
        }
        else if(news.category=='社會'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSociety" style="display:none;">'+
                '<p><span class="classTitle">社會</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                news.content+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</li>'
            );
        }
        else if(news.category=='國際'){
            $('.newsList > ul').append(
                '<li class="newsContent newsGlobal">'+
                '<p><span class="classTitle">國際</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                news.content+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</li>'
            );
        }
        else if(news.category=='運動'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSport" style="display:none;">'+
                '<p><span class="classTitle">體育</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
                '</li>'
            );
        }
        else if(news.category=='地方'){
            $('.newsList > ul').append(
                '<li class="newsContent newsGossiping" style="display:none;">'+
                '<p><span class="classTitle">地方</span></p>'+
                '<h2>'+news.title+'</h2>'+
                '</a>'+
                '<p class="onTime"><span>'+
                news.date+
                '</span></p>'+
                '<div style="display:none;">'+
                '<img src='+news.img+'>'+
                '<div class="newsContent">'+
                '<p>'+news.date+'</p>'+
                news.content+'</div>'+
                '</div>'+
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

    // 切換類別
    $('.menu span').click(function(){
        var x =$(this).index();
        $('.menu span').eq(x).addClass('cur').siblings().removeClass('cur');
    });
  
  $('.focus').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsFocus').css('display','flex');
  });
  
  $('.politics').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsPolitics').css('display','flex');
  });
  
  $('.gossiping').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGossiping').css('display','flex');
  });
  
  $('.entertainment').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsEntertainment').css('display','flex');
  });
  
  $('.gossiping').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGossiping').css('display','flex');
  });
  
  $('.global').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsGlobal').css('display','flex');
  });
  
  $('.finance').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsHouse').css('display','flex');
  });
  
  $('.society').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsSociety').css('display','flex');
  });
  
  $('.live').click(function(){
    $('.popView').hide();
    $('.popView').html("");
    $('.newsList ul > li').hide();
    $('.newsList ul > li.newsLive').css('display','flex');
  });
  
  $('.sport').click(function(){
    $('.popView').hide();
    $('.popView').html("");
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
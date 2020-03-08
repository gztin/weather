// 讀取新聞資料
// const uri = "https://taiwan-train-api.herokuapp.com/news/";
const uri = "https://taiwan-train-api.herokuapp.com/search/article";
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
    $('.navbar').css('display', 'block');
    console.log(result);
    var dataList = result.length;
    var imgSample = './img/sample.png';
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

    // 列印所有新聞
    for (var count = 0; count < dataList; count++) {
        
        var news = result[count];
        if(news.img==''){
          news.img = imgSample;
        }
        else{
          news.img = news.img;
        }
        var htmlContent = '<div class="listPic">'+'<img src='+news.img+'>'+'</div>'+'<div class="listTitle">'+
          '<h2>'+news.title+'</h2>'+'<p class="onTime"><span>'+news.date+'</span></p>'+
          '<div style="display:none;">'+'<img src='+news.img+'>'+'<div class="newsContent">'+'<div class="postTime">'+
          news.date+'<span class="changeSize">aA</span>'+'<div class="textSize">'+
          '<span class="font16">A</span>'+'<span class="font20">A</span>'+'<span class="font25">A</span>'+
          '</div>'+'</div>'+news.content+'</div>'+'</div>'+'</div>';
        
        if(news.category=='政治'){
            $('.newsList > ul').append(
              '<li class="newsContent newsPolitics" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='娛樂'){
            $('.newsList > ul').append(
                '<li class="newsContent newsEntertainment" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='生活'){
            $('.newsList > ul').append(
                '<li class="newsContent newsLive" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='房產'){
            $('.newsList > ul').append(
                '<li class="newsContent newsHouse" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='社會'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSociety" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='國際'){
            $('.newsList > ul').append(
              '<li class="newsContent newsGlobal">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='運動'){
            $('.newsList > ul').append(
                '<li class="newsContent newsSport" style="display:none;">'+htmlContent+'</li>'
            );
        }
        else if(news.category=='地方'){
            $('.newsList > ul').append(
                '<li class="newsContent newsGossiping" style="display:none;">'+htmlContent+'</li>'
            );
        }
        
        
    }
    
    // 切換字體大小

    // 叫出選單
    $('.popView').on('click','.changeSize',function(){
        $('.textSize').slideToggle();
        $('.textSize').css('display','flex');
    });    
    // 字體16
    $('.popView').on('click','.font16',function(){
      $('.newsText p').css({'font-size':'16px','line-height':'18px','padding-top':'10px'});
    });
    // 字體20
    $('.popView').on('click','.font20',function(){
      $('.newsText p').css({'font-size':'20px','line-height':'22px','padding-top':'15px'});
    });
    
    // 字體25
    $('.popView').on('click','.font25',function(){
      $('.newsText p').css({'font-size':'25px','line-height':'26px','padding-top':'20px'});
    });


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
}).catch((err) => {
    console.log('訊息:請重新嘗試連線', err);
});
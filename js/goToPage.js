// 切換項目
let data = {
  index:0,
  title:'<h1>P<i class="far fa-dot-circle"></i>KEJ<i class="far fa-dot-circle"></i></h1>',
  slogan:'<h1 class="animated bounceIn">P<i class="far fa-dot-circle"></i>KEJ<i class="far fa-dot-circle"></i></h1><h1 class="animated bounceIn">帶您時事脈動一把抓</h1>',
  privacy:'/privacy.html',
  copyright:'copyright by POKEJO',
  newsCategory:[
      // {className:'all',title:'綜合'},
      {className:'global',title:'國際'},
      {className:'live',title:'生活'},
      {className:'politics',title:'政治'},
      {className:'gossiping',title:'地方'},
      {className:'entertainment',title:'娛樂'},
      {className:'finance',title:'房產'},
      {className:'society',title:'社會'},
      {className:'sport',title:'體育'}
  ], 
}

let loading = new Vue({
  el:'#loading',
  data:data
});

let vm = new Vue({
  el:'#news',
  data:data
});

// 跳頁
setTimeout(function(){$('.loadingPage').slideToggle();},2500);
$('#newsGroup').on('click','li',function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.textFooter').css('display','flex');
  // 點選第幾則新聞
  var y =$(this).index();
  // alert('這是第'+y+'則新聞');
  var getTitle = $('#newsGroup > li').eq(y).find('h2').text();
  var getPic = $('#newsGroup > li').eq(y).find('img').attr("src");
  var getTime = $('#newsGroup > li').eq(y).find('p[class="onTime"]').html();
  var getContent = $('#newsGroup > li').eq(y).find('div[class="newsContent"]').html();

  console.log(getTitle);
  console.log(getTime);
  console.log('圖片路徑為'+getPic);
  $('.popView').append(
    '<h1 class="newsTitle">'+getTitle+'</h1>'+
    '<div class="newsPic"></div>'+
    // '<img src='+getPic+'>'+
    '<div class="newsText">'+getContent+'</div>'+
    '<div class="textFooter"><p>copyright by @JOJO</p></div>'
  );
  $('.newsPic').css('background','url('+getPic+')');
  $('.popView').css('display','block');
  $('.newsList ul > li').hide();
  setTimeout(function(){$('.popView').css('display','block');},500);
});

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
$('.popView').on('click','.font18',function(){
  $('.newsText p').css({'font-size':'18px','line-height':'22px','padding-top':'15px'});
});

// 字體25
$('.popView').on('click','.font20',function(){
  $('.newsText p').css({'font-size':'20px','line-height':'26px','padding-top':'20px'});
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
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.textSize').css('display','none');
  var x =$(this).index();
  $('.menu span').eq(x).addClass('cur').siblings().removeClass('cur');
  $('.popView').hide();
  $('.newsList ul > li').css('display','flex');
    
});


$('.politics').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsPolitics').css('display','flex');
});

$('.gossiping').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsGossiping').css('display','flex');
});

$('.entertainment').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsEntertainment').css('display','flex');
});

$('.gossiping').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsGossiping').css('display','flex');
});

$('.global').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsGlobal').css('display','flex');
});

$('.finance').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsHouse').css('display','flex');
});

$('.society').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsSociety').css('display','flex');
});

$('.live').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsLive').css('display','flex');
});

$('.sport').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul > li').hide();
  $('.newsList ul > li.newsSport').css('display','flex');
});
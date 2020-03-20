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
      {className:'finance',title:'財經'},
      {className:'pet',title:'寵物'},
      {className:'entertainment',title:'娛樂'},
      {className:'finance',title:'房產'},
      {className:'society',title:'社會'},
      {className:'sport',title:'運動'}
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

$('.newsList').on('click','li',function(){
  $("html, body").animate({ scrollTop: 0 }, 100);
  $('.textFooter').css('display','flex');
  // 點選第幾則新聞
  var y =$(this).index();
  // alert('這是第'+y+'則新聞');
  var getTitle = $('ul.show > li').eq(y).find('h2').text();
  var getPic = $('ul.show > li').eq(y).find('img').attr("src");
  var getTime = $('ul.show > li').eq(y).find('p[class="onTime"]').html();
  var getContent = $('ul.show > li').eq(y).find('div[class="newsContent"]').html();

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
  $('.newsList ul').hide();
  setTimeout(function(){$('.popView').css('display','block');},500);
});

// 叫出原始新聞
$('.oriURL a').on('click',function(){
  var newsLink = $('.oriURL a').attr("href");
  console.log('連結是'+newsLink);
  $('.popView').html("");
  $('.popView').append('<iframe src="'+newsLink+'frameborder="0" scrolling="auto"></iframe>');
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
  $('.newsList ul').eq(x).addClass('show').siblings().removeClass('show');
  $('.popView').hide();
  $('.popView').html("");
  $('.newsList ul').eq(x).css('display','flex').siblings().css('display','none');
});
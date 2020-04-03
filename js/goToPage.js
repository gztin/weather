// 切換項目
let data = {
  index:0,
  title:'<h1>P<i class="far fa-dot-circle"></i>KEJ<i class="far fa-dot-circle"></i></h1>',
  slogan:'<h1 class="animated bounceIn">P<i class="far fa-dot-circle"></i>KEJ<i class="far fa-dot-circle"></i></h1><h1 class="animated bounceIn">帶您時事脈動一把抓</h1>',
  privacy:'/privacy.html',
  copyright:'copyright by POKEJO',
  newsCategory:[
      // {className:'all',title:'綜合'},
      {className:'global',idName:'btn1',title:'國際'},
      {className:'live',idName:'btn2',title:'生活'},
      {className:'politics',idName:'btn3',title:'政治'},
      {className:'finance',idName:'btn4',title:'財經'},
      {className:'travel',idName:'btn5',title:'旅遊'},
      {className:'entertainment',idName:'btn6',title:'娛樂'},
	  {className:'fashion',idName:'btn7',title:'時尚'},
      {className:'society',idName:'btn8',title:'社會'},
      {className:'sport',idName:'btn9',title:'運動'}
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
$('.swiper-wrapper').on('click','li',function(){
	// 點選第幾類中的第幾則新聞
	var ulIndex = $(this).parent().prevAll().length;
	// alert('目前是在第'+ulIndex+'類');
	var liIndex =$(this).index();
	// alert('這是第'+liIndex+'則新聞');
	
	$('.popView').html("");
  	$("html, body").animate({ scrollTop: 0 }, 100);
	var getTitle = $('.swiper-wrapper > ul').eq(ulIndex ).find("li").eq(liIndex).find('h2').text();
	var getPic = $('.swiper-wrapper > ul').eq(ulIndex).find("li").eq(liIndex).find('img').attr("src");
	var getTime = $('.swiper-wrapper > ul').eq(ulIndex).find("li").eq(liIndex).find('p[class="onTime"]').html();
	var getContent = $('.swiper-wrapper > ul').eq(ulIndex).find("li").eq(liIndex).find('div[class="newsContent"]').html();
	var getLink = $('.swiper-wrapper > ul').eq(ulIndex).find("li").eq(liIndex).find('span[class="orilink"]').text();

	$('.popView').append(
		'<div class="created">'+
		'<h1 class="newsTitle">'+getTitle+'</h1>'+
		'<div class="newsPic"></div>'+
		'<div class="newsText">'+
		getContent+
		'<div class="oriURL"><span class="orilink" style="display:none;">'+getLink+'</span><a>查看原始連結></a></div>'+
		'<div class="ad"><a href="https://track.abzcoupon.com/track/clicks/4862/ce2bc2b89c0227d6efcda67f8835ce13286e4ece70fbb9b20a64ba0365?subid_1=&subid_2=&subid_3=&subid_4=&subid_5="></a></div>'+
		'</div>'+
		'</div>'
	);
	$('.oriURL').eq(0).remove();
	$('.popView').append('<iframe class="resourcePage" style="display:none;" src="'+getLink+'" marginwidth="0" marginheight="0" frameborder="0"></iframe>');
	$('.newsPic').css('background','url('+getPic+')');
	$('.popView').css('display','block');
	$('.swiper-wrapper > ul').hide();
	setTimeout(function(){$('.popView').css('display','block');},500);
});



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

$('.sideBlock:nth-child(1)').click(function(){
	$('.hotLink').slideToggle();
	$('.hotLink').css('display','flex');
});

$('.sideBlock:nth-child(2)').click(function(){
	$('.trafficLink').slideToggle();
	$('.trafficLink').css('display','flex');
});

// 隱藏側邊欄位
$('.sideMenuBg').click(function(){
	$('.sideMenu').css('left','-70%');
	$('.sideMenuBg').hide();
});

// 叫出原始新聞頁面
$('.popView').on('click','.oriURL',function(){
	$('.popView').find('.textFooter').remove();
	$('.popView').css('margin-top','90px');
	$('.created').slideToggle();
	$('.resourcePage').slideToggle();
});
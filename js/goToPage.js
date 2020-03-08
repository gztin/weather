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
  // 測試資料，目前沒有用到，先註解
  // newsContent:[
  //   {contentTitle: '鑽石公主號包機晚間降落「19人直送醫院」 救護車、國軍化學車就位',
  //    className:'global', 
  //    content: '<p>記者陳以昇、柯沛辰／桃園報導</p><p>鑽石公主號包機預計21日晚間降落桃園機場，多輛救護車、國軍化學消毒車稍早已陸續在現場就位，協助檢疫工作。</p><p>中央流行疫情指揮中心表示，已將鑽石公主號列為一級感染區，機上19人下機後，將陸續送到衛福部台北醫院、衛福部桃園醫院住院篩檢，若採檢2次都呈陰性，須經專家及醫生判定，才能決定是否離開或到特定場所隔離。</p><p>飛行期間，所有乘客穿著隔離衣、配戴外科用口罩與護目鏡，為防止穿脫造成感染，機上不供餐、不供水，希望乘客少上廁所，為此也準備了紙尿褲。行李部分，旅客只能隨身攜帶貴重物品，其餘行李將表面消毒後托運，由家屬領回，14天內不打開。</p><p>根據原先規劃，旅客下機後一人一輛救護車，但指揮中心考量夫妻已同室多時，決定夫妻共同乘坐一輛，單身者維持一人一輛。</p><p>稍早19點30分，防疫單位救護車、國軍化學消毒車陸續進駐桃機，目前已到棚場就位，屆時相關人員將全副武裝、著防護衣進行檢疫工作。</p>', 
  //    src: 'http://cdn2.ettoday.net/images/4715/d4715947.jpg'},
  //   {contentTitle: '謝和弦爸爸擅自丟光keanna東西！　嗆：就是把妳掃地出門…她回家一看哭了',
  //    className:'global',
  //    content: '<p>記者陳以昇、柯沛辰／桃園報導</p><p>Keanna和謝和弦、直播主莉婭的感情風波鬧得沸沸揚揚，雙方目前正準備打官司，日前她回到南投家裡，卻發現衣服全都不翼而飛，早被謝和弦丟光光，讓她相當傻眼，還暗指自己的衣服被莉婭偷穿，對此，謝和弦也發文反嗆，大爆她的東西其實是謝爸爸動手清空的。</p><p>Keanna回到埔里的家，才發現不只鎖被謝和弦換掉，還說：「我的東西都被他們擅自清空丟光了…一件不留！」讓她差點哭出來，網友替她抱不平說：「搞不好那女的還穿過你的衣服。」她無言回應：「還真的有...」網友聽了一肚子火，「可以告她侵占了」、「太誇張了吧」。</p><p>對此，謝和弦則是在IG發文嗆聲：「瞎迷妹去看蕭敬騰，我們去看光明女神，東西是我爸清光的，意思就是掃地出門，爸寶掰掰，媽都不愛，裝荷蘭人。」莉婭也在限時動態回應：「本小姐不缺LV包，不缺Rick Owens鞋，請大家不要再發神經，有困難我可以捐二手衣。」似乎就是在反擊偷穿keanna衣服的指控。</p>', 
  //    src: 'https://cdn2.ettoday.net/images/4716/d4716313.jpg'},
  //   {contentTitle: '「嬰兒房搜出毒吸管」月嫂認了　媽心痛：孩抽搐驗出安毒！萬人轟該死',
  //    className:'society',
  //    content: '<p>記者陳以昇、柯沛辰／桃園報導</p><p>染毒毀人一生，更何況孩子是無辜的！一名媽媽痛訴，日前找來一位月嫂照顧寶寶，意外在房間裡看到一支斜切口吸管，上頭更沾有「半透明結晶物」，報警抓人後，月嫂坦承是她所有，而寶寶身體也出現異常。更可惡的是，受害者不只一人，原PO希望昭告天下，「希望不要再有任何嬰兒被這樣的月嫂戕害！」</p><p>「我家新生兒的頭髮竟然驗出安毒！」一名女網友在臉書《爆料公社二社》表示，去（2019）年產下寶貝孩子，並於11至12月請來一位汪姓月嫂到府坐月子，期間曾收到一封信，指名要給月嫂，提到「萬一精神不集中、安非他命當奶粉泡給寶寶喝、是會死人的，反正吸毒就不要做保母」，讓原PO夫妻倆一頭霧水。</p><p>豈料某日，老公在嬰兒房發現可疑物，「沾有半透明結晶物，而且有斜切口的吸管」，嚇得報警逮人後，由於證據確鑿，月嫂百口莫辯，才坦承「是我帶進嬰兒房的！」</p><p>事後，寶寶身體開始出現異狀，「時常眼睛上吊、拉肚子、抽蓄、皮膚變差」，結果抽驗出爐，原PO崩潰了，「我孩子的頭髮含有甲基安非他命（4928 pg/mg）及安非他命（208 pg／mg）！如果不是這位月嫂在我的嬰兒房、在我孩子旁吸安，怎麼可能會是這樣的檢驗結果？」</p><p>由於安非他命恐造成腦部受損、全身性傷害，原PO天天以淚洗面，「身為一位受害者的母親，辛苦懷胎10個月，孩子身上有安非他命殘留已經夠讓我擔心難過了，孩子的一個哭聲、一個眼球轉動、一個身體抖動，孩子的任何身體狀況，很可能都是吸入月嫂在嬰兒房裡的安毒所致！」</p>', 
  //    src: 'https://cdn2.ettoday.net/images/4715/d4715475.jpg'},
  //   {contentTitle: 'WHO揭穿「湖北確診驟減」真相！　坦承遏止疫情「機會之窗」正在縮小',
  //    className:'global',
  //    content: '<p>記者陳以昇、柯沛辰／桃園報導</p><p>世界衛生組織秘書長譚德塞今天表示，武漢肺炎疫情影響國家愈來愈多，他對無中國相關接觸史及伊朗病例快速增加現象感到非常擔憂，坦承遏止疫情的機會之窗正在縮小。</p><p>世衛組織（WHO）秘書長譚德塞（Tedros Adhanom Ghebreyesus）今天在日內瓦出席俗稱武漢肺炎的2019年冠狀病毒疾病（COVID-19）的例行記者會，針對疫情發展做出最新說明。</p><p>譚德塞表示，截至日內瓦今天上午6時，中國新增892例確診病例，病例大幅下降是因為中國再一次改變診斷方式，改回只報告疑似和經實驗室確認的病例。他認為這顯示武漢衛生部門檢測可疑病例能力已經恢復。</p><p>武漢肺炎爆發迄今目前全球確診突破7萬5000例，逾2000人死亡，在中國境外蔓延至26個國家共1152例病例，並有8例死亡。</p><p>他說雖然在中國境外地區目前感染人數相對少，但出現未有武漢或中國旅遊史及接觸史的案例增多感到憂心。</p><p>譚德塞特別提到伊朗過去2天案例快速增加，2天內出現18例新病例及4例死亡，這令人非常擔憂。這是自疫情爆發以來他罕見使用如此重話。</p><p>媒體詢問從目前情勢發展，疫情是否來到引爆的轉折點，譚德塞對此說遏止疫情的機會之窗依然存在，但正在縮小，疫情仍可能朝任何方向發展，呼籲國際社會需要在機會關閉前迅速採取行動。</p><p>但譚德塞2月19日才仍讚揚由於中國積極努力從源頭控制疫情，國際有機會防止發生更廣泛的全球危機。</p>', 
  //    src: 'https://cdn2.ettoday.net/images/4694/d4694828.jpg'}
  // ],
  
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
setTimeout(function(){$('.loadingPage').slideToggle();},2500)


$('#newsGroup').on('click','li',function(){
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

  $('.popView').append(
    '<h1 class="newsTitle">'+getTitle+'</h1>'+
    '<div class="newsPic">'+
    '<img src='+getPic+'>'+
    '</div>'+
    '<div class="newsText">'+getContent+'</div>'+
    '<div class="textFooter"><p>copyright by @JOJO</p></div>'
  );
  $('.popView').css('display','block');
  $('.newsList ul > li').hide();
  
  // 置換iframe 連結的網址
  // var geturl = $('#newsGroup > li').eq(y).find('a').attr("href");
  // console.log(geturl);
  // document.getElementById("popView").src = geturl;
  setTimeout(function(){$('.popView').css('display','block');},500);
});

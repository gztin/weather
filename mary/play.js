var totalBet = 23;
var runTime = 0;
var gameResult = 0;
var highLight = 0;
var move = 0;
var sec = 50;
var money = 0;
var count = 0;

$('.putMoney').click(function(){
	// 計算投錢次數，這邊預設一次投10元
	count = count+1;
	console.log("count的值是:"+count);
	money = 10 * count;
	$('.moneyInf').text(money);
});
$('.play').click(function(){
    // 按下去後就不能再按了
    $(this).attr("disable",true);
    // 控制小瑪莉跑到第幾格，至少讓小瑪莉跑個兩圈
	gameResult = Math.floor(Math.random()*24+48);
	console.log("gameResult的值是:"+gameResult);
    playGame();
});

function playGame(){
    // 前往下一個並亮燈
    highLight++;

    // 前進幾格
    move++;
	console.log('move的值是:'+move);
    // 如果走到第24個，從第一個開始
    if(highLight > totalBet){
        highLight = 1;
    }

	// 亮燈跑完
    if( move > gameResult){
		highLight = highLight - 1;
		console.log('gameResult的值是'+gameResult);
		console.log('highLight的值是'+highLight);

		// 跑分數判定
		if(highLight==1){money=money * 1.1;	}
		if(highLight==2){money=money * 1.1}
		if(highLight==3){money=money * 1.1}
		if(highLight==4){money=money * 1.1}
		if(highLight==5){money=money * 1.1}
		if(highLight==6){money=money * 1.1}
		if(highLight==7){money=money * 1.1}
		if(highLight==8){money=money * 1.1}
		if(highLight==9){money=money * 1.1}
		if(highLight==10){money=money * 1.1}
		if(highLight==11){money=money * 1.1}
		if(highLight==12){money=money * 1.1}
		if(highLight==13){money=money * 1.1}
		if(highLight==14){money=money * 1.1}
		if(highLight==15){money=money * 1.1}
		if(highLight==16){money=money * 1.1}
		if(highLight==17){money=money * 1.1}
		if(highLight==18){money=money * 1.1}
		if(highLight==19){money=money * 1.1}
		if(highLight==20){money=money * 1.1}
		if(highLight==21){money=money * 1.1}
		if(highLight==22){money=money * 1.1}
		if(highLight==23){money=money * 1.1}
		if(highLight==24){money=money * 1.1}
		console.log("money的值是:"+money);
		$('.moneyInf').text(money);
		alert("結束!");
		// 初始化
		initial();
	}
	
	// 快跑完的時候減速
    else if( move+10 > gameResult){
		$('.bet'+highLight).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
        setTimeout(playGame, sec=sec*1.4);
	}
	else {
		$('.bet'+highLight).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
		setTimeout(playGame, sec);
	}
}
function initial(){
	move = 0;
	sec = 50;
}

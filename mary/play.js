var totalBet = 24;
var runTime = 0;
var gameResult = 0;
var highLight = 1;
var move = 0;
var sec = 50;
var money = 0;
var bet = [0,0,0,0,0,0,0,0];
var credit = 0;
var betCredit = 0;
var betCount = 0;
var betTotal = 0;
initial();
// 投幣
$('.putMoney').click(function(){
	startGame();
	if(betCredit==0){
		// 尚未押注時的總金額
		money = money + 10;
		credit =  money ;
		$('.inf-credit').text(money);
		console.log("+10後，投幣金額( money )目前是:"+money+"元");
	}
	else{
		// 已經押注的時候又加錢
		betCredit = betCredit + 10;
		credit =  betCredit ;
		$('.inf-credit').text(credit);
		console.log("+10後，投幣金額( credit )目前是:"+credit+"元");
	}
});

// 下注
$('.bet-option').click(function(){
	if(parseInt($('.inf-credit').text()) <= 0){
		// 偵測餘額是否足夠下注
		alert("餘額不足，請先投幣");
	}else{
		// 取得目前選取的位置
		var x =$(this).index();
		
		// 計算前先清空下注總金額
		betTotal = 0;
		
		// 讀取目前已經下注的金額，並將值回傳至陣列中
		betCount = bet[x];
		betCount = betCount + 1;
		bet[x] = betCount;
		$(".sub-inf").eq(x).find("span.betInf").text(betCount);	
		
		for(var i=0;i<bet.length;i++){
			betTotal = betTotal + bet[i];
		}
		
		// 計算剩餘金額
		credit = credit-1;
		betCredit = credit;
		console.log("投幣金額( betCredit )剩下:"+betCredit+"元");
		$('.inf-credit').text(credit);
		console.log("下注總金額( betTotal )為:"+betTotal+"元");
	}
});


$('.play').click(function(){
	if(parseInt($('.inf-credit').text()) <= 0){
		// 偵測餘額是否足夠下注
		alert("餘額不足，請先投幣");
	}else if(parseInt($('.inf-bonus').text()) > 0){
		// 要繼續玩就先把贏得的錢轉過來
		betCredit = betCredit + money;
		credit = betCredit;
		money = 0;
		console.log("存入的金額，credit的值是:"+ credit);
		$('.inf-credit').text(credit);
		$('.inf-bonus').text(money);
	}
	else{

		// 按下去後就不能再按了
		$(this).attr("disable",true);
		// 控制小瑪莉跑到第幾格，至少讓小瑪莉跑個兩圈
		gameResult = Math.floor(Math.random()*24+48);
		console.log("gameResult的值是:"+gameResult);
		playGame();
	}
});

$('.cash').click(function(){
	alert("aaa");
	initial();
});

function playGame(){
    // 前往下一個並亮燈
    highLight++;

    // 前進幾格
    move++;
	
    // 如果走到第24個，從第一個開始
    if(highLight > totalBet){
        highLight = 0;
    }

	// 亮燈跑完
    if( move > gameResult){
		highLight = highLight - 1;
		console.log('gameResult的值是'+gameResult);
		console.log('highLight的值是'+highLight);

		// 跑分數判定
		if(highLight==1){money=money * 1.1;}
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
		console.log("這場贏了:"+money+"元");
		$('.inf-bonus').text(money);
		alert("結束!");
	}
	
	// 快跑完的時候減速
    else if( move+10 > gameResult){
		$('.bet'+highLight).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
        setTimeout(playGame, sec=sec*1.4);
	}
	else {
		$('.bet'+highLight).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
		console.log('highLight的值是:'+highLight);
		setTimeout(playGame, sec);
	}
}
function initial(){
	move = 0;
	sec = 50;
	bet = [0,0,0,0,0,0,0,0];
	$('.sub-inf').find("span.betInf").text(0);
	$('.inf-credit').text(0);
	$('.play:input').attr('disable',true);
	$('.play:input').css({'cursor':'not-allowed'});
}
function startGame(){
	$('.play:input').removeAttr('disable');
	$('.play:input').css({'cursor':'pointer'});
}
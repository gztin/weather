var totalBet = 23;
var runTime = 0;
var gameResult = 0;
var highLight = 0;
var move = 0;
var sec = 50;
var money = 0;
var count = 0;
var bet = [0,0,0,0,0,0,0,0];
var credit = 0;
var betCredit = 0;
var betCount = 0;
var betTotal = 0;
$('.putMoney').click(function(){
	// 計算投錢次數，這邊預設一次投10元
	count = count+1;
	// console.log("count的值是:"+count);
	money = 10 * count;
	credit =  money
	$('.inf-credit').text(money);
});
$('.bet-option').click(function(){
	if(parseInt($('.inf-credit').text()) <= 0){
		// 偵測有沒有投錢
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

		// 重置為投幣金額
		betCredit = credit;

		// 將各個項目下注的數量顯示在面板上
		$(".sub-inf").eq(x).find("span.betInf").text(betCount);	
		
		for(var i =0 ;i< bet.length;i++){
			betTotal = betTotal + bet[i];
		}
		// 計算剩餘金額
		betCredit = betCredit - betTotal;
		console.log("投幣金額剩下:"+betCredit+"元");
		$('.inf-credit').text(betCredit);
		console.log("下注總金額為:"+betTotal+"元");
	}
});
$('.play').click(function(){
	// 重置投錢次數
	count = 0;
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
		console.log("這場贏了:"+money+"元");
		$('.inf-bonus').text(money);
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
	bet = [0,0,0,0,0,0,0,0];
}

var totalBet = 24;
var runTime = 0;
var gameResult = 0;
var highLight = 0;
var move = 0;
var sec = 50;
var money = 0;
var bet = [0,0,0,0,0,0,0,0];
var credit = 0;
var count = 0;
var ending = false;
var betCredit = 0;
var betCount = 0;
var betTotal = 0;
var betMoney = 0;
initial();
// 投幣
$('.putMoney').click(function(){
	count = 1;
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
		betCredit = credit - betTotal;
		console.log("投幣金額( betCredit )剩下:"+betCredit+"元");
		$('.inf-credit').text(betCredit);
		console.log("下注總金額( betTotal )為:"+betTotal+"元");
	}
});


$('.play').click(function(){
	if((parseInt($('.inf-credit').text())==0) && (betTotal == 0)){
		// 偵測餘額是否足夠下注
		alert("餘額不足，請先投幣");
	}
	else if(betTotal==0){
		alert("請先下注");
	}
	else if(parseInt($('.inf-bonus').text()) > 0){
		// 要繼續玩就先把贏得的錢轉過來
		betCredit = betCredit + betMoney;
		credit = betCredit;
		
		console.log("轉移後，目前credit的值是:"+ credit);
		$('.inf-credit').text(credit);
		$('.inf-bonus').text(0);

		// 重新押注
		$('.sub-inf').find("span.betInf").text(0);
		$('.sub-inf').css({'animation-iteration-count':'0'});
	}
	else{
		// 扣除押注的金額
		credit = credit - betTotal;
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
	$('.light').css({'animation-iteration-count':'infinite'});
});


$('.win').click(function(){
	if(ending == true){
		// 將本金轉移到押注的金額
		if(credit >= 0){
			betMoney = betMoney + 1;
			credit = credit - 1;
			console.log("credit的值是:"+credit);
			console.log("betMoney的值是:"+betMoney);
		}
		else{
			credit = 0;
			console.log("credit的值是已經是:"+credit+"，無法繼續");
		}
	}else{
		console.log("遊戲尚未開始");
	}
	
});
$('.credit').click(function(){
	if( ending == true){
		// 將押注的金額轉移到本金
		if(betMoney >= 0){
			betMoney = betMoney -1;
			credit = credit + 1;
			console.log("credit的值是:"+credit);
			console.log("betMoney的值是:"+betMoney);
		}
		else{
			betMoney = 0;
		}
	}else{
		console.log("遊戲尚未開始");
	}
});

function betMoney(){
	
}

function playGame(){
	// 前往下一個並亮燈
    highLight++;
	
    // 前進幾格
    move++;
	
    // 如果走到第24個，從第一個開始
    if(highLight + 1 > totalBet){
        highLight = 0;
    }

	// 亮燈跑完
    if( move > gameResult){
		move = move-1;
		highLight = highLight -1;
		
		// 跑分數判定
		if((highLight==1)||(highLight==10)||(highLight==22)){
			// 跑到橘子，x1
			console.log("小瑪莉結果是橘子!獎金1倍");
			betMoney = bet[6];
			betMoney = Math.floor(betMoney*1);
			$('.sub-inf').eq(6).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==2)||(highLight==13)||(highLight==21)){
			// 跑到鈴鐺，x2
			console.log("小瑪莉結果是鈴鐺!獎金2倍");
			betMoney = bet[4];
			betMoney = Math.floor(betMoney*2);
			$('.sub-inf').eq(4).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==3)||(highLight==4)||(highLight==5)){
			// 跑到BAR，x3
			console.log("小瑪莉結果是Bar!獎金1倍");
			betMoney = bet[0];
			betMoney = Math.floor(betMoney*1);
			$('.sub-inf').eq(0).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==6)||(highLight==9)||(highLight==12)||(highLight==14)){
			// 跑到蘋果，x5
			console.log("小瑪莉結果是蘋果!獎金5倍");
			betMoney = bet[7];
			betMoney = Math.floor(betMoney*5);
			$('.sub-inf').eq(7).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==7)||(highLight==18)||(highLight==19)){
			// 跑到檸檬，x1
			console.log("小瑪莉結果是檸檬!獎金1倍");
			betMoney = bet[5];
			betMoney = Math.floor(betMoney*1);
			$('.sub-inf').eq(5).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==8)||(highLight==24)){
			// 跑到西瓜，x1
			console.log("小瑪莉結果是西瓜!獎金1倍");
			betMoney = bet[3];
			betMoney = Math.floor(betMoney*1);
			$('.sub-inf').eq(3).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==11)||(highLight==20)){
			// 跑到777，x7
			console.log("小瑪莉結果是777!獎金7倍");
			betMoney = bet[1];
			betMoney = Math.floor(betMoney*7);
			$('.sub-inf').eq(1).css({'animation-iteration-count':'infinite'});
		}
		if((highLight==15)||(highLight=23)){
			// 跑到Lucky，再玩一次，功能開發中
			// move = 0;
			// sec = 50;
			// playGame();
			// console.log("小瑪莉結果是Lucky!");
			// betMoney = bet[3];
			// betMoney = Math.floor(betMoney*1);
		}
		if((highLight==16)||(highLight==17)){
			// 跑到星星，x10
			console.log("小瑪莉結果是星星!獎金10倍");
			betMoney = bet[2];
			betMoney = Math.floor(betMoney*10);
			$('.sub-inf').eq(2).css({'animation-iteration-count':'infinite'});
		}
		console.log("這場贏了:"+betMoney+"元");
		$('.inf-bonus').text(betMoney);
		endGame();
		alert("結束!");
	}
	
	// 快跑完的時候減速
    else if( move+10 > gameResult){
		$('.bet'+highLight).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
        setTimeout(playGame, sec=sec*1.4);
	}
	else {
		$('.bet'+highLight).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
		setTimeout(playGame, sec);
	}
}
function endGame(){
	move = 0;
	sec = 50;
	ending = true;
	bet = [0,0,0,0,0,0,0,0];
}
function initial(){
	move = 0;
	sec = 50;
	bet = [0,0,0,0,0,0,0,0];
	ending = false;
	$('.sub-inf').find("span.betInf").text(0);
	$('.inf-credit').text(0);
	$('.play:input').attr('disable',true);
	$('.play:input').css({'cursor':'not-allowed'});
}
function startGame(){
	$('.play:input').removeAttr('disable');
	$('.play:input').css({'cursor':'pointer'});
	$('.light').css({'animation-iteration-count':'1'});
	$('.sub-inf').css({'animation-iteration-count':'1'});
}
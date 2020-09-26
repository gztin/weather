var totalBet = 23;
var runTime = 0;
var gameResult = 0;
var highLight = 0;
var move = 1;
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
	startGame();
	betCredit = betCredit + 10;
	console.log("+10後，賭金目前是:"+betCredit+"元");
	$('.inf-credit').text(betCredit);
});

// 下注
$('.bet-option').click(function(){
	if(parseInt($('.inf-credit').text()) == 0){
		// 偵測餘額是否足夠下注
		alert("餘額不足，請先投幣");
	}else{
		betCredit = betCredit - 1;
		betTotal = betTotal + 1;
		$('.inf-credit').text(betCredit);
		// 取得目前選取的位置
		var x =$(this).index();
		// 讀取目前已經下注的金額，並將值回傳至陣列中
		betCount = bet[x];
		betCount = betCount + 1;
		bet[x] = betCount;
		$(".sub-inf").eq(x).find("span.betInf").text(betCount);
		console.log("bet陣列:"+bet);
	}
});


$('.play').click(function(){
	if(ending == false){
		console.log("遊戲之前，ending的值是:"+ending);
		// 開始遊戲
		if(betTotal==0){
			alert("請先下注");
		}
		else{
			$(this).attr("disable",false);
			// 控制小瑪莉跑到第幾格，至少讓小瑪莉跑個兩圈
			gameResult = Math.floor(Math.random()*24+48);
			console.log("gameResult的值是:"+gameResult);
			playGame();
		}
	}
	else{
		console.log("偵測盈餘之前，ending的值是:"+ending);
		// 結束遊戲後，如果沒有要進行比大小
		// 偵測是否有盈餘，有的話先把錢轉過來
		betCredit = betCredit + betMoney;
		$('.inf-credit').text(betCredit);
		$('.inf-bonus').text(0);
		console.log("轉移後，目前credit的值是:"+ credit);
		// 重置遊戲
		endGame();
		ending = false;
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
		if(betCredit >= 0){
			betMoney = betMoney + 1;
			betCredit = betCredit - 1;
			$('.inf-bonus').text(betMoney);
			$('.inf-credit').text(betCredit);
			
			console.log("credit的值是:"+betCredit);
			console.log("betMoney的值是:"+betMoney);
		}
		else{
			credit = 0;
			console.log("betCredit的值是已經是:"+betCredit+"，無法繼續");
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
			betCredit = betCredit + 1;
			$('.inf-bonus').text(betMoney);
			$('.inf-credit').text(betCredit);
			console.log("betCredit的值是:"+betCredit);
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
	move = move + 1;
	if(highLight > totalBet){
		// 檢查是否跑到第24個
		highLight = 0;
	}
	if( move > gameResult){
		move = move - 1;
		highLight = highLight -1;
	}
	else{
		if( move+12 > gameResult){
			$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
			setTimeout(playGame, sec=sec*1.4);
			highLight = highLight + 1;
			console.log("highLight :"+highLight);
		}
		else {
			$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
			setTimeout(playGame, sec);
			highLight = highLight + 1;
			console.log("highLight :"+highLight);
		}
	}	
}
function aa(){
	move = 0;
	sec = 50;
	betCount = 0;
	betTotal = 0;
	
	bet = [0,0,0,0,0,0,0,0];
	$('.sub-inf').find("span.betInf").text(0);
}
function endGame(){
	move = 0;
	sec = 50;
	betTotal = 0;
	money = betCredit;
	bet = [0,0,0,0,0,0,0,0];
	$('.sub-inf').find("span.betInf").text(0);
	$('.sub-inf').css({'animation-iteration-count':'0'});
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
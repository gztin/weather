var totalBet = 24;
var runTime = 0;
var gameResult = 0;
var highLight = 1;
var move = 1;
var sec = 45;
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
	if(ending==true){
		console.log("目前無法下注");
	}else{
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
			// console.log("bet陣列:"+bet);
		}
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
	if((betCredit==0)&&(betMoney==0)){
		console.log("目前無任何餘額");
	}else{
		// 進入結束模式
		ending = true;
		
		// 將本金轉移到押注的金額
		if(betCredit > 0){
			betMoney = betMoney + 1;
			betCredit = betCredit - 1;
			$('.inf-bonus').text(betMoney);
			$('.inf-credit').text(betCredit);
			
			console.log("betCredit的值是:"+betCredit);
			console.log("betMoney的值是:"+betMoney);
		}
		else{
			betCredit = 0;
			console.log("betCredit的值是已經是:"+betCredit+"，無法繼續");
		}
	}
	
	
});
$('.credit').click(function(){
	if((betCredit==0)&&(betMoney==0)){
		console.log("目前無任何餘額");
	}else{
		// 進入結束模式
		ending = true;

		// 將押注的金額轉移到本金
		if(betMoney > 0){
			betMoney = betMoney -1;
			betCredit = betCredit + 1;
			$('.inf-bonus').text(betMoney);
			$('.inf-credit').text(betCredit);
			console.log("betCredit的值是:"+betCredit);
			console.log("betMoney的值是:"+betMoney);
		}
		else{
			betMoney = 0;
			console.log("betMoney的值是已經是:"+betMoney+"，無法繼續");
		}
	}
});

function betMoney(){
	
}

function playGame(){
	// console.log("highLight目前的值是:"+highLight);
	if( move+1 > gameResult){
		// 因為move會先+1，所以要預防它超過gameREsult
		// 遊戲結束
		move = move - 1;
		highLight = highLight - 1;
		// 跑分數判定
		if((highLight===1)||(highLight===10)||(highLight===22)){
			// 跑到橘子，x1
			console.log("小瑪莉結果是橘子!獎金1倍");
			betMoney = bet[6];
			betMoney = Math.floor(betMoney*1);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(6).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===2)||(highLight===13)||(highLight===21)){
			// 跑到鈴鐺，x2
			console.log("小瑪莉結果是鈴鐺!獎金2倍");
			betMoney = bet[4];
			betMoney = Math.floor(betMoney*2);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(4).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===3)||(highLight===4)||(highLight===5)){
			// 跑到BAR，x3
			console.log("小瑪莉結果是Bar!獎金1倍");
			betMoney = bet[0];
			betMoney = Math.floor(betMoney*1);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(0).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===6)||(highLight===9)||(highLight===12)||(highLight===14)){
			// 跑到蘋果，x5
			console.log("小瑪莉結果是蘋果!獎金5倍");
			betMoney = bet[7];
			betMoney = Math.floor(betMoney*5);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(7).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===7)||(highLight===18)||(highLight===19)){
			// 跑到檸檬，x1
			console.log("小瑪莉結果是檸檬!獎金1倍");
			betMoney = bet[5];
			betMoney = Math.floor(betMoney*1);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(5).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===0)||(highLight===8)||(highLight===24)){
			// 跑到西瓜，x1
			console.log("小瑪莉結果是西瓜!獎金1倍");
			betMoney = bet[3];
			betMoney = Math.floor(betMoney*1);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(3).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===11)||(highLight===20)){
			// 跑到777，x7
			console.log("小瑪莉結果是777!獎金7倍");
			betMoney = bet[1];
			betMoney = Math.floor(betMoney*7);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(1).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else if((highLight===15)||(highLight===23)){
			// 跑到Lucky，再玩一次，功能開發中
			// move = 0;
			// sec = 50;
			// playGame();
			// console.log("小瑪莉結果是Lucky!");
			// betMoney = bet[3];
			// betMoney = Math.floor(betMoney*1);
		}
		else if((highLight===16)||(highLight===17)){
			// 跑到星星，x10
			console.log("小瑪莉結果是星星!獎金10倍");
			betMoney = bet[2];
			betMoney = Math.floor(betMoney*10);
			$('.inf-bonus').text(betMoney);
			$('.sub-inf').eq(2).css({'animation-iteration-count':'infinite'});
			ending = true;
			console.log("遊戲結束!");
		}
		else{
			// 如果都不是，就是沒中獎
			$('.inf-bonus').text(betMoney);
			console.log("沒中獎");
			ending = true;
			console.log("遊戲結束!");
		}
		
	}
	else{
		if( move+12 > gameResult){
			$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
			// console.log("highLight目前跑燈的位置是:"+highLight);
			setTimeout(playGame, sec=sec*1.4);
			highLight = highLight + 1;
		}
		else {
			$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
			// console.log("highLight目前跑燈的位置是:"+highLight);
			setTimeout(playGame, sec);
			highLight = highLight + 1;
			// console.log("highLight :"+highLight);
		}
		move = move + 1;
	}
	if(highLight > totalBet){
		// 檢查是否跑到第24個
		highLight = 1;
	}
}

function endGame(){
	move = highLight;
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

	// 下注區禁止操作
	$('.win:input').attr('disable',true);
	$('.win:input').css({'cursor':'not-allowed'});
	$('.credit:input').attr('disable',true);
	$('.credit:input').css({'cursor':'not-allowed'});
}
function startGame(){
	$('.play:input').removeAttr('disable');
	$('.play:input').css({'cursor':'pointer'});

	$('.win:input').removeAttr('disable');
	$('.win:input').css({'cursor':'pointer'});

	$('.credit:input').removeAttr('disable');
	$('.credit:input').css({'cursor':'pointer'});

	$('.light').css({'animation-iteration-count':'1'});
	$('.sub-inf').css({'animation-iteration-count':'1'});
}
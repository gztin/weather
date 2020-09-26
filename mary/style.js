// 前往下一個並亮燈
    // 前進幾格
	move++;
	highLight++;
	console.log("目前highLight的值是:"+highLight);

    // 如果走到第24個，從第一個開始
    if(highLight > totalBet){
		highLight = 0;
	}
	
	// 亮燈跑完
    if( move > gameResult){
		move = move-1;
		if((highLight-1 )==0){
			highLight = 24;
		}else if((highLight-1 ) < 0){
			highLight = 1;
		}
		else{
			highLight = highLight -1;
		}
		console.log("最後highLight的值是:"+highLight);

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
		alert("結束!");
		ending = true;
	}
	
	// 快跑完的時候減速
    else if( move+12 > gameResult){
		$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
		setTimeout(playGame, sec=sec*1.4);
	}
	else {
		$('.bet'+(highLight)).find('span.light').addClass('active').parent().siblings().find('span.light').removeClass('active');
		setTimeout(playGame, sec);
	}
	
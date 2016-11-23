/*var len=$('.lun').children().size();
	var wid=$(window).width();
	
	var i=0;
	$('.lun').swipeLeft(function(){
		i++;
		if(i>len-1){i=len-1}
		
		move1();
	}).swipeRight(function(){
		i--;
		if(i<0){i=0}
		move1();
	})
	function move1(){
		var x=-i*wid+'px';
		$('.lun').css({'-webkit-transform':'translateX('+x+')',
			"-webkit-transition":"all 1s"})
	}*/
	$('.yi').on('click',function(){
		$('.box').css({'display':"block"});
		$('.box').css({'display':"-webkit-flex"});
		$('.box_a').css({'display':"none"})
	})
	$('.er').on('click',function(){
		$('.box_a').css({'display':"block"});
		$('.box').css({'display':"none"})
	})

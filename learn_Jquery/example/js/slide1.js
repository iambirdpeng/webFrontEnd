$(document).ready(function() {
	//我这个傻逼又在选择元素前忘写点了。猪脑子
	var $pics = $('.slide_pics li');
	var len = $pics.length;
	var $spots = $('.points');
	var nowPic = 0;
	var nextPic = 0;
	var timer = null;
	$pics.not(':first').css({left:760});

	$pics.each(function(index) {
		//搞不懂这个add_spot为什么在外边定义不行，外边定义不是全局变量吗？
		//明白了，下边这个意思是创建一个li，至于放哪还不知道。如果写在外边只创建1个。写在循环里才是创建4个。
		var add_spot = $('<li></li>');
		if(index==0){
			add_spot.addClass('active');
		};
		$spots.append(add_spot);
	});

	$('.points li').click(function(event) {
		nextPic=$(this).index();
		if (nextPic==nowPic) {return;}
		move();
	});

	$('.prev').click(function(event) {

		nextPic--;
		move();
		
	});


	$('.next').click(function(event) {
		nextPic++;
		move();
	});



	function move(){
		if (nextPic<0) {
			nextPic=len-1;
			$pics.eq(nextPic).css({left:-760});
			//stop()停止的是动画并不是动作。即遇到stop()前边所有动画立即停止并到达位置。
			$pics.eq(nowPic).stop().animate({left:760});
			$pics.eq(nextPic).stop().animate({left:0});
			$('.points li').eq(nextPic).addClass('active').siblings().removeClass('active');
			nowPic=nextPic;
			return;
		}

		if (nextPic>len-1) {
			nextPic=0;
			$pics.eq(nextPic).css({left:760});
			//stop()停止的是动画并不是动作。即遇到stop()前边所有动画立即停止并到达位置。
			$pics.eq(nowPic).stop().animate({left:-760});
			$pics.eq(nextPic).stop().animate({left:0});
			$('.points li').eq(nextPic).addClass('active').siblings().removeClass('active');
			nowPic=nextPic;
			return;
		}

		if(nextPic>nowPic){
			$pics.eq(nextPic).css({left:760});
			$pics.eq(nowPic).stop().animate({left:-760});
			$pics.eq(nextPic).stop().animate({left:0});
			$('.points li').eq(nextPic).addClass('active').siblings().removeClass('active');
			nowPic = nextPic;
		}
		else{
			$pics.eq(nextPic).css({left:-760});
			$pics.eq(nowPic).stop().animate({left:760});
			$pics.eq(nextPic).stop().animate({left:0});
			$('.points li').eq(nextPic).addClass('active').siblings().removeClass('active');
			nowPic=nextPic;
		}
	}


	timer = setInterval(function() {
		nextPic++;
		move();
	}, 2000);

	$('.slide').mouseenter(function(event) {
		clearInterval(timer);
	});
	$('.slide').mouseleave(function(event) {
		timer = setInterval(function(args) {
			nextPic++;
			move();
		}, 2000);
	});

});
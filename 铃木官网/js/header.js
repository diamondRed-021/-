$(function(){
	/* 轮播图点击滑动样式设置 */
	var num = $('.ban>ul').position().left
	$('.zuo').click(function(){
		$('.ban>ul').delay(100).animate({
			left:num +100+'px',
		},100,function(){
			num = $('.ban>ul').position().left
		})
	})
	$('.you').click(function(){
		$('.ban>ul').delay(100).animate({
			left:num -100+'px',
		},100,function(){
			num = $('.ban>ul').position().left
		})
	})
	setInterval(function(){
		if(num <= -400){
			$('.you').css('display','none')
		}else{
			$('.you').css('display','block')
		}
		if(num >= 0){
			$('.zuo').css('display','none')
		}else{
			$('.zuo').css('display','block')
		}
	})
	/* 导航栏中摩托车以及船外机hover样式显示影藏设置 */
		$('.box>ul>li:eq(1)').mouseenter(function(){
			$('.ship').slideToggle()
		})
		$('.box>ul>li:eq(1)').mouseleave(function(){
			$('.ship').slideToggle()
		})

	$('.box>ul>li:eq(2)').mouseenter(function(){
		$('.car').slideToggle()
	})
	$('.box>ul>li:eq(2)').mouseleave(function(){
		$('.car').slideToggle()
	})
})

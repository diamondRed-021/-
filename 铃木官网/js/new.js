$(function(){
	$('.header').hover(function(){
		$(this).css('height','473.6px')
	},function(){
		$(this).css('height','73.6px')
	})
	/* 点击改变选择的字体颜色 */
	$('.hot>ul>li:eq(1)').click(function(){
		$('.hot>ul>li:eq(1),.hot>ul>li:eq(2),.hot>ul>li:eq(3),.hot>ul>li:eq(4),.hot>ul>li:eq(5)').css('color','#9d9d9d')
		$(this).css('color','#000')
		$('.area>ul').children().css('display','block')
		$('.area>ul>div').css('display','none')
	})
	
	
	$('.hot>ul>li:eq(2)').click(function(){
		$('.hot>ul>li:eq(1),.hot>ul>li:eq(2),.hot>ul>li:eq(3),.hot>ul>li:eq(4),.hot>ul>li:eq(5)').css('color','#9d9d9d')
		$(this).css('color','#000')
		$('.area>ul>li').css('display','none')
		$(this).parent().parent().next().find($('ul>#new')).css('display','block')
		$('.area>ul>.morenew').css('display','none')
	})
	
	
	$('.hot>ul>li:eq(3)').click(function(){
		$('.hot>ul>li:eq(1),.hot>ul>li:eq(2),.hot>ul>li:eq(3),.hot>ul>li:eq(4),.hot>ul>li:eq(5)').css('color','#9d9d9d')
		$(this).css('color','#000')
		$('.area>ul>li').css('display','none')
		$(this).parent().parent().next().find($('ul>#com')).css('display','block')
		$('.area>ul>.morenew').css('display','none')
		$('.area>ul>.morecom').css('display','none')
	})
	
	
	$('.hot>ul>li:eq(4)').click(function(){
		$('.hot>ul>li:eq(1),.hot>ul>li:eq(2),.hot>ul>li:eq(3),.hot>ul>li:eq(4),.hot>ul>li:eq(5)').css('color','#9d9d9d')
		$(this).css('color','#000')
		$('.area>ul>li').css('display','none')
		$(this).parent().parent().next().find($('ul>#car')).css('display','block')
	})
	
	/* 点击加载更多 */
	$('.area>ul>.morenew').nextAll().css('display','none')
	$('.box>.mid>.area>ul>.morenew').click(function(){
		$('.area>ul>.morenew').nextUntil('#car').css('display','block')
		$('.area>ul>.morenew').css('display','none')
	})
	$('.box>.mid>.area>ul>.morecom').click(function(){
		$('.area>ul>.morecom').nextAll().css('display','block')
		$('.area>ul>.morecom').css('display','none')
	})
})
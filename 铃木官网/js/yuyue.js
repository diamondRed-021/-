$(function(){
	/* 设置header改变搞得的效果 */
	$('.header').hover(function(){
		/* 鼠标移入改变高度 */
		$(this).css('height','473.6px')
	},function(){
		$(this).css('height','73.6px')
		/* 鼠标移出附院 */
	})
	setInterval(function(){
		if($('.mess>li>input').val()!=''){
			$('.mes>li:eq(7)>div').css('display','none')
		}
	})
	$('.per>ul>li:eq(7)').click(function(){
		console.log(1)
		if($('.mess>li>input').val()==''){
			$('.mess>li>input').css('border','2px solid red')
		}
	})
	$('.mess>li>input').focus(function(){
		$(this).css('border-color','rgba(200,200,200)')
	})
	$('.mess>li>input').blur(function(){
		if($(this).val()==''){
			$(this).css('border-color','red')
		}
	})
	$('.mess>li:eq(4)>p').click(function(){
		$('.mess>li:eq(4)>p').html(Math.floor(Math.random()*10000))
	})
})
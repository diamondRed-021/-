$(function(){
	/* 设置改变header高度 */
	$('.header').hover(function(){
		$(this).css('height','473.6px')
	},function(){
		$(this).css('height','73.6px')
	})
	
	/* 摩托样式 */
	$('.yang>ul>li').hover(function(){
		console.log(this)
			/* 设置背景图片放大的效果 */
		$(this).find('.imgbg').animate({
			backgroundSize:'110%'
		},500)
			/* 设置背景黑色透明部分影藏 */
		$(this).find('.hei').animate({
			opacity:'0',
		},500)
			/* 设置摩托的移动 */
		$(this).find('.car').animate({
			marginRight:'20px'
		},500)
	},function(){
		/* 背景图片缩小效果 */
		$(this).find('.imgbg').animate({
			backgroundSize:'100%'
		},100)
		 /* 设置背景黑色透明部分显示 */ 
		$(this).find('.hei').animate({
			opacity:'1',
		},100)
		/* 设置摩托车回到原位 */
		$(this).find('.car').animate({
			marginRight:'63px'
		},100)
	})
	/* 设置street内效果 */
	$('.big').hover(function(){
		/* 黑色透明背景的隐藏 */
		$(this).find('.bigimgh').animate({
			opacity:'0'
		},500)
		// 摩托车的滑动
		$(this).find('.moto').animate({
			right:'0'
		})
	},function(){
		/* 黑色透明背景的显示 */
		$(this).find('.bigimgh').animate({
			opacity:'1'
		},500)
		$(this).find('.moto').animate({
			right:'50px'
		},500)
	})
	
	/* 顶部轮播图效果 */
	var res = 0;
	var num = 0;
	var flag = true;
	$('.ban>.rig').click(function(){
		console.log(1)
			res++;
			console.log(res);
			if(res>=3){
				$('.bann>ul').append($('.bann>ul>li').first());
				$('.bann>ul').css('left','-100vw')
				res = 2;
			}
			$('.bann>ul').animate({left:res * -100+'vw'},1000,function(){
				flag = true
			})
			
			num++
				if(num==1){
				$('.ban>.asd>ul>li:eq(1)').css('background','white')
				$('.ban>.asd>ul>li:eq(0),.ban>.asd>ul>li:eq(2)').css('background','blue')
			}else if(num==2){
				$('.ban>.asd>ul>li:eq(2)').css('background','white')
				$('.ban>.asd>ul>li:eq(1),.ban>.asd>ul>li:eq(0)').css('background','blue')
			}else{
				$('.ban>.asd>ul>li:eq(0)').css('background','white')
				$('.ban>.asd>ul>li:eq(1),.ban>.asd>ul>li:eq(2)').css('background','blue')
				num=0
			}		
		})
})
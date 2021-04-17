$(function(){
/* 设置顶部引入样式 */
	$('.header').hover(function(){
		$(this).css('height','473.6px')
	},function(){
		$(this).css('height','73.6px')
	})
	/* 顶部轮播图样式 */
	var res = 0;
	var num = 0;
	var flag = true;
$('.ban>.rig').click(function(){
	console.log(1)
		res++;
		console.log(res);
		if(res>=3){
			$('.Ban>ul').append($('.Ban>ul>li').first());
			$('.Ban>ul').css('left','-100vw')
			res = 2;
		}
		$('.Ban>ul').animate({left:res * -100+'vw'},1000,function(){
			flag = true
		})
		
		num++
			if(num==1){
			$('.ban>.sdf>ul>li:eq(1)').css('background','white')
			$('.ban>.sdf>ul>li:eq(0),.ban>.sdf>ul>li:eq(2)').css('background','blue')
		}else if(num==2){
			$('.ban>.sdf>ul>li:eq(2)').css('background','white')
			$('.ban>.sdf>ul>li:eq(1),.ban>.sdf>ul>li:eq(0)').css('background','blue')
		}else{
			$('.ban>.sdf>ul>li:eq(0)').css('background','white')
			$('.ban>.sdf>ul>li:eq(1),.ban>.sdf>ul>li:eq(2)').css('background','blue')
			num=0
		}		
	})
	
	
	
	
	/* 设置中间图片hover样式 */
	$('.OUTBOARDS>.inner>ul>li:eq(0)').hover(function(){
		$('.OUTBOARDS>.inner>ul>li:eq(0)>div').css('display','block')
	},function(){
		$('.OUTBOARDS>.inner>ul>li:eq(0)>div').css('display','none')
	})
	$('.OUTBOARDS>.inner>ul>li:eq(1)').hover(function(){
		$('.OUTBOARDS>.inner>ul>li:eq(1)>div').css('display','block')
	},function(){
		$('.OUTBOARDS>.inner>ul>li:eq(1)>div').css('display','none')
	})
	$('.MOTORCYCLE>.inner>ul>li:eq(0)').hover(function(){
		$('.MOTORCYCLE>.inner>ul>li:eq(0)>div').css('display','block')
	},function(){
		$('.MOTORCYCLE>.inner>ul>li:eq(0)>div').css('display','none')
	})
	
	/* 设置底部赛事新闻轮播样式 */
	var num = $('.bann').scrollLeft()
	$('.inner>.lef').click(function(){
		num = $('.bann').scrollLeft()
		$('.bann').animate({scrollLeft:num-370.645},200)
		num = $('.bann').scrollLeft()
	})
	$('.inner>.rig').click(function(){
		num = $('.bann').scrollLeft()
		$('.bann').animate({scrollLeft:num+370.645},200)
		num = $('.bann').scrollLeft()
	})

	/* 设置点击切换 */
	$('.inner>.act>.acta>span:eq(0)').click(function(){
		$('.lkl').css('display','block')
		$('.opo').css('display','none')
		$('.inner>.act>.acta>span:eq(1)').css('background-color','white')
		$('.inner>.act>.acta>span:eq(1)').css('color','black')
		$('.inner>.act>.acta>span:eq(0)').css('background-color','#C3D5E3')
		$('.inner>.act>.acta>span:eq(0)').css('color','white')
	})
	var res = 1;
	$('.inner>.act>.acta>span:eq(1)').click(function(){
		res++;
		$('.lkl').css('display','none')
		$('.opo').css('display','block')
		$('.inner>.act>.acta>span:eq(0)').css('background-color','white')
		$('.inner>.act>.acta>span:eq(0)').css('color','black')
		$('.inner>.act>.acta>span:eq(1)').css('background-color','#C3D5E3')
		$('.inner>.act>.acta>span:eq(1)').css('color','white')
	})
	
	/* 新闻赛事hover样式__________新闻活动 */
	$('.lkl>ul>li:eq(0)').hover(function(){
		$('.lkl>ul>li:eq(0)>.back').css('display','block')
		$('.lkl>ul>li:eq(0)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(0)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(0)>.back').css('display','none')
		$('.lkl>ul>li:eq(0)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(0)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(0)>.als>span>p').css('color','#6e7077')
	})
	
	$('.lkl>ul>li:eq(1)').hover(function(){
		$('.lkl>ul>li:eq(1)>.back').css('display','block')
		$('.lkl>ul>li:eq(1)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(1)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(1)>.back').css('display','none')
		$('.lkl>ul>li:eq(1)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(1)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(1)>.als>span>p').css('color','#6e7077')
	})
	
	$('.lkl>ul>li:eq(2)').hover(function(){
		$('.lkl>ul>li:eq(2)>.back').css('display','block')
		$('.lkl>ul>li:eq(2)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(2)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(2)>.back').css('display','none')
		$('.lkl>ul>li:eq(2)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(2)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(0)>.als>span>p').css('color','#6e7077')
	})
	
	$('.lkl>ul>li:eq(3)').hover(function(){
		$('.lkl>ul>li:eq(3)>.back').css('display','block')
		$('.lkl>ul>li:eq(3)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(3)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(3)>.back').css('display','none')
		$('.lkl>ul>li:eq(3)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(3)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(3)>.als>span>p').css('color','#6e7077')
	})
	
	$('.lkl>ul>li:eq(4)').hover(function(){
		$('.lkl>ul>li:eq(4)>.back').css('display','block')
		$('.lkl>ul>li:eq(4)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(4)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(4)>.back').css('display','none')
		$('.lkl>ul>li:eq(4)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(4)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(4)>.als>span>p').css('color','#6e7077')
	})
	
	$('.lkl>ul>li:eq(5)').hover(function(){
		$('.lkl>ul>li:eq(5)>.back').css('display','block')
		$('.lkl>ul>li:eq(5)>.als>span').css('color','white')
		$('.lkl>ul>li:eq(5)>.als>span>p').css('color','white')
	},function(){
		$('.lkl>ul>li:eq(5)>.back').css('display','none')
		$('.lkl>ul>li:eq(5)>.als>span:eq(1)').css('color','#000')
		$('.lkl>ul>li:eq(5)>.als>span:eq(2)').css('color','#6e7077')
		$('.lkl>ul>li:eq(5)>.als>span>p').css('color','#6e7077')
	})
	
	/* 新闻赛事hover样式__________比赛信息 */
	
	$('.opo>ul>li:eq(0)').hover(function(){
		$('.opo>ul>li:eq(0)>.back').css('display','block')
		$('.opo>ul>li:eq(0)>.als>span').css('color','white')
		$('.opo>ul>li:eq(0)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(0)>.back').css('display','none')
		$('.opo>ul>li:eq(0)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(0)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(0)>.als>span>p').css('color','#6e7077')
	})
	
	$('.opo>ul>li:eq(1)').hover(function(){
		$('.opo>ul>li:eq(1)>.back').css('display','block')
		$('.opo>ul>li:eq(1)>.als>span').css('color','white')
		$('.opo>ul>li:eq(1)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(1)>.back').css('display','none')
		$('.opo>ul>li:eq(1)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(1)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(1)>.als>span>p').css('color','#6e7077')
	})
	
	$('.opo>ul>li:eq(2)').hover(function(){
		$('.opo>ul>li:eq(2)>.back').css('display','block')
		$('.opo>ul>li:eq(2)>.als>span').css('color','white')
		$('.opo>ul>li:eq(2)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(2)>.back').css('display','none')
		$('.opo>ul>li:eq(2)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(2)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(2)>.als>span>p').css('color','#6e7077')
	})
	
	$('.opo>ul>li:eq(3)').hover(function(){
		$('.opo>ul>li:eq(3)>.back').css('display','block')
		$('.opo>ul>li:eq(3)>.als>span').css('color','white')
		$('.opo>ul>li:eq(3)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(3)>.back').css('display','none')
		$('.opo>ul>li:eq(3)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(3)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(3)>.als>span>p').css('color','#6e7077')
	})
	
	$('.opo>ul>li:eq(4)').hover(function(){
		$('.opo>ul>li:eq(4)>.back').css('display','block')
		$('.opo>ul>li:eq(4)>.als>span').css('color','white')
		$('.opo>ul>li:eq(4)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(4)>.back').css('display','none')
		$('.opo>ul>li:eq(4)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(4)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(4)>.als>span>p').css('color','#6e7077')
	})
	
	$('.opo>ul>li:eq(5)').hover(function(){
		$('.opo>ul>li:eq(5)>.back').css('display','block')
		$('.opo>ul>li:eq(5)>.als>span').css('color','white')
		$('.opo>ul>li:eq(5)>.als>span>p').css('color','white')
	},function(){
		$('.opo>ul>li:eq(5)>.back').css('display','none')
		$('.opo>ul>li:eq(5)>.als>span:eq(1)').css('color','#000')
		$('.opo>ul>li:eq(5)>.als>span:eq(2)').css('color','#6e7077')
		$('.opo>ul>li:eq(5)>.als>span>p').css('color','#6e7077')
	})
	
/*   底部视屏轮播图    */
	var res = 0;
	var flag = true
	console.log($('.vban>ul').position().left)
	$('.vban>.lef').click(function(){
		console.log(1)
		res--;
		if(res<0){
			$('.vban>ul').append($('.vban>ul>li').last());
			$('.vban>ul').css('left','-362px')
			res = 0;
		}
		$('.vban>ul').animate({left:res * -362+'px'},1000,function(){
			flag = true
		})
		setTimeout(function(){
			$('.vban>.play').css('display','none')
		},1)
		setTimeout(function(){
			$('.vban>.play').css('display','block')
		},1000)
	})
	var num = 0;
	$('.vban>.rig').click(function(){
		res++;
		num++;
		if(res>=4){
			$('.vban>ul').append($('.vban>ul>li').first());
			$('.vban>ul').css('left','-724px')
			console.log(res)
			res = 3;
		}
		$('.vban>.cir>ul>li:eq(num)').css('background-color','blude')
		$('.vban>ul').animate({left:res * -362+'px'},1000,function(){
			flag = true
		})
		setTimeout(function(){
			$('.vban>.play').css('display','none')
		},1)
		setTimeout(function(){
			$('.vban>.play').css('display','block')
		},1000)	
	})
	$('.MOTORCYCLE>.inner>ul>li:eq(0)').click(function(){
		console.log(1)
		$(location).attr('href','shop.html')
	})
	$('.OUTBOARDS>.inner>ul>li').click(function(){
		console.log(1)
		$(location).attr('href','ship.html')
	})
	
	
	// 控制视屏播放
	$('.vedio>.close').click(function(){
		$('.vedio').css('display','none')
		$('.vedio>video').trigger('pause')
		$('.vedio>video').css('display','none')
	})
	$('.MOTORCYCLE>.inner>ul>li:eq(1)').click(function(){
		console.log(1)
		$('.vedio').css('display','block')
		$('.vedio>#first').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(0)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#second').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(1)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#third').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(2)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#fourth').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(3)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#five').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(4)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#six').css('display','block')
	})
	$('.vid>.vban>ul>li:eq(5)').click(function(){
		$('.vedio').css('display','block')
		$('.vedio>#seven').css('display','block')
	})
})
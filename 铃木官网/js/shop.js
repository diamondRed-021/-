$(function(){
	/* 设置header改变搞得的效果 */
	$('.header').hover(function(){
		/* 鼠标移入改变高度 */
		$(this).css('height','473.6px')
	},function(){
		$(this).css('height','73.6px')
		/* 鼠标移出附院 */
	})
	/* 设置点击事件通过点击对应颜色切换背景颜色 */
	$('.car1>.style>.smlca>ul>li:eq(0)').click(function(){
		// 显示需要的颜色
		$('.moto1').css('display','block')
		// 讲其他的全部隐藏
		$('.moto2,.moto3').css('display','none')
		// 将颜色图片上的白塞色透明影藏
		$(this).find('.whi').css('display','none')
		// 显示对应效果
		$('.car1>.style>.smlca>ul>li:eq(1),.car1>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
		
	})
	$('.car1>.style>.smlca>ul>li:eq(1)').click(function(){
		console.log(1)
		$('.moto2').css('display','block')
		$('.moto1,.moto3').css('display','none')
		$(this).find('.whi').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(0),.car1>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	$('.car1>.style>.smlca>ul>li:eq(2)').click(function(){
		$('.moto3').css('display','block')
		$('.moto1,.moto2').css('display','none')
		$(this).find('.whi').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(0),.car1>.style>.smlca>ul>li:eq(1)').find('.whi').css('display','block')
	})
	
	$('.car1>.style>.color>ul>li:eq(0)').click(function(){
		$('.moto3').css('display','block')
		$('.moto1,.moto2').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(2)>.whi').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(0),.car1>.style>.smlca>ul>li:eq(1)').find('.whi').css('display','block')
	})
	$('.car1>.style>.color>ul>li:eq(1)').click(function(){
		$('.moto2').css('display','block')
		$('.moto1,.moto3').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(1)>.whi').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(0),.car1>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	$('.car1>.style>.color>ul>li:eq(2)').click(function(){
		$('.moto1').css('display','block')
		$('.moto3,.moto2').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(0)>.whi').css('display','none')
		$('.car1>.style>.smlca>ul>li:eq(1),.car1>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	
	
	$('.car2>.style>.smlca>ul>li:eq(0)').click(function(){
		$('.moto4').css('display','block')
		$('.moto5,.moto6').css('display','none')
		$(this).find('.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(1),.car2>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
		
	})
	$('.car2>.style>.smlca>ul>li:eq(1)').click(function(){
		console.log(1)
		$('.moto5').css('display','block')
		$('.moto4,.moto6').css('display','none')
		$(this).find('.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(0),.car2>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	$('.car2>.style>.smlca>ul>li:eq(2)').click(function(){
		$('.moto6').css('display','block')
		$('.moto4,.moto5').css('display','none')
		$(this).find('.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(0),.car2>.style>.smlca>ul>li:eq(1)').find('.whi').css('display','block')
	})
	$('.car2>.style>.color>ul>li:eq(0)').click(function(){
		$('.moto6').css('display','block')
		$('.moto4,.moto5').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(2)>.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(0),.car2>.style>.smlca>ul>li:eq(1)').find('.whi').css('display','block')
	})
	$('.car2>.style>.color>ul>li:eq(1)').click(function(){
		$('.moto5').css('display','block')
		$('.moto4,.moto6').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(1)>.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(0),.car2>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	$('.car2>.style>.color>ul>li:eq(2)').click(function(){
		$('.moto4').css('display','block')
		$('.moto6,.moto5').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(0)>.whi').css('display','none')
		$('.car2>.style>.smlca>ul>li:eq(1),.car2>.style>.smlca>ul>li:eq(2)').find('.whi').css('display','block')
	})
	
	/* 通过点击切换两种不同车型 */
	$('.but>p:eq(0)').click(function(){
		$(this).css('borderWidth','3px')
		$('.but>p:eq(1)').css('borderWidth','0px')
		$('.car1').css('display','block')
		$('.car2').css('display','none')
	})
	$('.but>p:eq(1)').click(function(){
		$(this).css('borderWidth','3px')
		$('.but>p:eq(0)').css('borderWidth','0px')
		$('.car2').css('display','block')
		$('.car1').css('display','none')
	})
	// 设置放大镜
	// 获取鼠标移入事件
	$('.moto1').mouseover(function(){
		// 固定small的初始位置
		$('.moto1>.small').css('left',event.offsetX-150+'px')
		$('.moto1>.small').css('top',event.offsetY-100+'px')
		console.log($('.moto1>.small').position().left)
		// 显示放大的内容
		$('.moto1>.small').css('display','block')
	})
	$('.moto1>.small').mousemove(function(event){
		console.log(1)
		// 通过鼠标移动的位置控制放大的内容位置
		$('.moto1>.small').css('left',$('.moto1>.small').position().left+(event.offsetX-150)+'px')
		$('.moto1>.small').css('top',$('.moto1>.small').position().top+(event.offsetY-100)+'px')
		if(($('.moto1>.small').position().left)<=0){
			$('.moto1>.small').css('left','0')
		}
		if(($('.moto1>.small').position().left)>=900){
			$('.moto1>.small').css('left','900px')
		}
		if(($('.moto1>.small').position().top)<=0){
			$('.moto1>.small').css('top','0')
		}
		if(($('.moto1>.small').position().top)>=350){
			$('.moto1>.small').css('top','350px')
		}
		// 固定放大内容的位置
		$('.moto1>.small').css('backgroundPosition','-'+$('.moto1>.small').position().left+'px'+' '+'-'+$('.moto1>.small').position().top+'px')
	})
	// 鼠标移出时隐藏放大内容部分
	$('.moto1').mouseleave(function(){
		$('.moto1>.small').css('display','none')
	})
	$('.moto2').mouseleave(function(){
		$('.moto2>.small').css('display','none')
	})
	$('.moto3').mouseleave(function(){
		$('.moto3>.small').css('display','none')
	})
	$('.moto4').mouseleave(function(){
		$('.moto4>.small').css('display','none')
	})
	$('.moto5').mouseleave(function(){
		$('.moto5>.small').css('display','none')
	})
	$('.moto6').mouseleave(function(){
		$('.moto6>.small').css('display','none')
	})
	
	
		$('.moto2').mouseover(function(){
			$('.moto2>.small').css('left',event.offsetX-150+'px')
			$('.moto2>.small').css('top',event.offsetY-100+'px')
			$('.moto2>.small').css('display','block')
		})
		$('.moto2').mousemove(function(event){
			$('.moto2>.small').css('left',event.offsetX-150+$('.moto2>.small').position().left+'px')
			$('.moto2>.small').css('top',event.offsetY-100+$('.moto2>.small').position().top+'px')
			var numx = $('.moto2>.small').position().left + 'px'
			var numy = $('.moto2>.small').position().top + 'px'
			if(($('.moto2>.small').position().left)<0){
				$('.moto2>.small').css('left','0')
			}
			if(($('.moto2>.small').position().left)>900){
				$('.moto2>.small').css('left','900px')
			}
			if(($('.moto2>.small').position().top)<0){
				$('.moto2>.small').css('top','0')
			}
			if(($('.moto2>.small').position().top)>350){
				$('.moto2>.small').css('top','350px')
			}
			$('.moto2>.small').css('backgroundPosition','-'+$('.moto2>.small').position().left+'px'+' '+'-'+$('.moto2>.small').position().top+'px')
		})
		
		
		$('.moto3').mouseover(function(){
			$('.moto3>.small').css('left',event.offsetX-150+'px')
			$('.moto3>.small').css('top',event.offsetY-100+'px')
			$('.moto3>.small').css('display','block')
		})
		$('.moto3').mousemove(function(event){
			$('.moto3>.small').css('left',event.offsetX-150+$('.moto3>.small').position().left+'px')
			$('.moto3>.small').css('top',event.offsetY-100+$('.moto3>.small').position().top+'px')
			var numx = $('.moto3>.small').position().left + 'px'
			var numy = $('.moto3>.small').position().top + 'px'
			if(($('.moto3>.small').position().left)<0){
				$('.moto3>.small').css('left','0')
			}
			if(($('.moto3>.small').position().left)>900){
				$('.moto3>.small').css('left','900px')
			}
			if(($('.moto3>.small').position().top)<0){
				$('.moto3>.small').css('top','0')
			}
			if(($('.moto3>.small').position().top)>350){
				$('.moto3>.small').css('top','350px')
			}
			$('.moto3>.small').css('backgroundPosition','-'+$('.moto3>.small').position().left+'px'+' '+'-'+$('.moto3>.small').position().top+'px')
		})
	$('.moto4').mouseover(function(){
		$('.moto4>.small').css('left',event.offsetX-150+'px')
		$('.moto4>.small').css('top',event.offsetY-100+'px')
		$('.moto4>.small').css('display','block')
	})
	$('.moto4').mousemove(function(event){
		$('.moto4>.small').css('left',event.offsetX-150+$('.moto4>.small').position().left+'px')
		$('.moto4>.small').css('top',event.offsetY-100+$('.moto4>.small').position().top+'px')
		var numx = $('.moto4>.small').position().left + 'px'
		var numy = $('.moto4>.small').position().top + 'px'
		if(($('.moto4>.small').position().left)<0){
			$('.moto4>.small').css('left','0')
		}
		if(($('.moto4>.small').position().left)>900){
			$('.moto4>.small').css('left','900px')
		}
		if(($('.moto4>.small').position().top)<0){
			$('.moto4>.small').css('top','0')
		}
		if(($('.moto4>.small').position().top)>350){
			$('.moto4>.small').css('top','350px')
		}
		$('.moto4>.small').css('backgroundPosition','-'+$('.moto4>.small').position().left+'px'+' '+'-'+$('.moto4>.small').position().top+'px')
	})
	$('.moto5').mouseover(function(){
		$('.moto5>.small').css('left',event.offsetX-150+'px')
		$('.moto5>.small').css('top',event.offsetY-100+'px')
		$('.moto5>.small').css('display','block')
	})
	$('.moto5').mousemove(function(event){
		$('.moto5>.small').css('left',event.offsetX-150+$('.moto5>.small').position().left+'px')
		$('.moto5>.small').css('top',event.offsetY-100+$('.moto5>.small').position().top+'px')
		var numx = $('.moto5>.small').position().left + 'px'
		var numy = $('.moto5>.small').position().top + 'px'
		if(($('.moto5>.small').position().left)<0){
			$('.moto5>.small').css('left','0')
		}
		if(($('.moto5>.small').position().left)>900){
			$('.moto5>.small').css('left','900px')
		}
		if(($('.moto5>.small').position().top)<0){
			$('.moto5>.small').css('top','0')
		}
		if(($('.moto5>.small').position().top)>350){
			$('.moto5>.small').css('top','350px')
		}
		$('.moto5>.small').css('backgroundPosition','-'+$('.moto5>.small').position().left+'px'+' '+'-'+$('.moto5>.small').position().top+'px')
	})
	$('.moto6').mouseover(function(){
		$('.moto6>.small').css('left',event.offsetX-150+'px')
		$('.moto6>.small').css('top',event.offsetY-100+'px')
		$('.moto6>.small').css('display','block')
	})
	$('.moto6').mousemove(function(event){
		$('.moto6>.small').css('left',event.offsetX-150+$('.moto6>.small').position().left+'px')
		$('.moto6>.small').css('top',event.offsetY-100+$('.moto6>.small').position().top+'px')
		var numx = $('.moto6>.small').position().left + 'px'
		var numy = $('.moto6>.small').position().top + 'px'
		if(($('.moto6>.small').position().left)<0){
			$('.moto6>.small').css('left','0')
		}
		if(($('.moto6>.small').position().left)>900){
			$('.moto6>.small').css('left','900px')
		}
		if(($('.moto6>.small').position().top)<0){
			$('.moto6>.small').css('top','0')
		}
		if(($('.moto6>.small').position().top)>350){
			$('.moto6>.small').css('top','350px')
		}
		$('.moto6>.small').css('backgroundPosition','-'+$('.moto6>.small').position().left+'px'+' '+'-'+$('.moto6>.small').position().top+'px')
	})
	
	// 试驾
	$('.test').css('height',$(window).height())
	$('.jiage>span').click(function(){
		$('.test').css('display','block')
	})
	$('.close').click(function(){
		$('.test').css('display','none')
	})
	$('.color>li:eq(0)').click(function(){
		$('#xian').attr('src', '../img/dl1050-y.jpg');
	})
	$('.color>li:eq(1)').click(function(){
		$('#xian').attr('src', '../img/dl1050-r.jpg');
	})
	$('.color>li:eq(2)').click(function(){
		$('#xian').attr('src', '../img/dl1050-b.jpg');
	})
	$('.colorcho>li:eq(0)').click(function(){
		$('#xian').attr('src', '../img/dl1050-y.jpg');
	})
	$('.colorcho>li:eq(1)').click(function(){
		$('#xian').attr('src', '../img/dl1050-r.jpg');
	})
	$('.colorcho>li:eq(2)').click(function(){
		$('#xian').attr('src', '../img/dl1050-b.jpg');
	})
})
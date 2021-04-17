$(function(){
	/* 顶部标签hover样式 */
	$('.header').hover(function(){
		/* 鼠标移入时改变标签高度 */
		$(this).css('height','473.6px')
	},function(){
		/* 鼠标移出时改变白浅高度 */
		$(this).css('height','73.6px')
	})
	/* 手风琴效果 */
	var res = 0;
	$('.edc>li>.ele').click(function(){
		res++;
		// 判断点击次数
		if(res%2==0){
			/* 显示内容 */
			$(this).find('~div').css('display','none');
			/* 改变图片 */
			$(this).find('>.fdf').css('background','url(../img/sum.png) no-repeat center /100%')
			res==0;
		}else{
			/* 使内容消失 */
			$(this).find('~div').slideDown();
			/* 改变图片 */
			$(this).find('>.fdf').css('background','url(../img/jian.png) no-repeat center /100%')
			res==0;
		}
		
	})
	/* 中间选择日期部分点击事件 */
	$('.his>.thg>.tim>ul>li:eq(0)').click(function(){
		/* 先将所有的内容影藏 */
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		/* 显示对应内容 */
		$('.juha').css('display','block')
		/* 将所有底部边框设置为0 */
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		/* 将对应的底部边框设置一个固定值 */
		$('.his>.thg>.tim>ul>li:eq(0)').css('border-bottom','3px solid #ED1C24')
		
	})
	$('.his>.thg>.tim>ul>li:eq(1)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhb').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(1)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(2)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhc').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(2)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(3)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhd').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(3)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(4)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhe').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(4)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(5)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhf').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(5)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(6)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhg').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(6)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(7)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhh').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(7)').css('border-bottom','3px solid #ED1C24')
	})
	$('.his>.thg>.tim>ul>li:eq(8)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(8)').css('border-bottom','3px solid #ED1C24')
		$('.juhi').css('display','block')
	})
	$('.his>.thg>.tim>ul>li:eq(9)').click(function(){
		$('.juha,.juhb,.juhc,.juhd,.juhe,.juhf,.juhg,.juhh,.juhi,.juhj').css('display','none')
		$('.juhj').css('display','block')
		$('.his>.thg>.tim>ul>li').css('border-bottom','0px solid #ED1C24')
		$('.his>.thg>.tim>ul>li:eq(9)').css('border-bottom','3px solid #ED1C24')
	})
	/* 底部hover样式，显示影藏图片上的黑色透明背景 */
	$('.bj>ul>li').hover(function(){
		$(this).find('p').css('display','none')
		$(this).find('div').css('display','block')
	},function(){
		$(this).find('p').css('display','block')
		$(this).find('div').css('display','none')
	})
	

})
$(function() {
	window.onload = function() {
		setInterval(function() {
			$('.firPage').height(window.innerHeight)
			$('.secPage').height(window.innerHeight)
			$('.thrPage').height(window.innerHeight)
			$('.forPage').height(window.innerHeight)
			$('.fivPage').height(window.innerHeight)
			$('.sixPage').height(window.innerHeight)
			$('.sevPage').height(window.innerHeight)
			$('.eigPage').height(window.innerHeight)
			$('.tenPage').height(window.innerHeight)
			$('.footer').height(window.innerHeight)
			$('.eigPage .cen .pic').width(window.innerWidth / 2)
			$('.bac').height(window.innerHeight)

		})
		$('.bac').animate({
			opacity: 0
		}, 1000)
		// $('.bac').css('display','none')
	}
	console.log($('#ban'))
	var res = $(window).innerHeight();
	var num = 0;
	var flag = true;
	$('.top').click(function() {
		$('.box').animate({
			top: 0
		}, 1000)
		$('#ban ul li').eq(0).animate({
			width: '30px',
			marginLeft: '20px'
		}).animate({
			width: '5px',
			marginLeft: '40px'
		}, 1000)
		$('#ban ul li').find('span').hide()
		$('#ban ul li').eq(0).css('background', '#E60012').find('span').show().parent().siblings().css('background',
			'white')
		num = 0;
	})
	$(window).mousewheel(function(event) {
		$('.bac').css('display', 'block')
		console.log($('.box').offset().top)
		if ($('.box').offset().top <= -1444) {
			// alert(1)
			$('.forPage>p').css('color', 'white')
		} else {
			$('.forPage>p').css('color', 'transparent')
		}
		if ($('.box').offset().top <= -3610) {
			// alert(1)
			$('.sevPage>p').css('color', 'black')
		} else {
			$('.sevPage>p').css('color', 'transparent')
		}
		if ($('.box').offset().top <= -2888) {
			// alert(1)
			$('.sixPage>p').css('color', 'black')
		} else {
			$('.sixPage>p').css('color', 'transparent')
		}
		if ($('.box').offset().top <= -2166) {
			$('.fivPage>p').css('color', 'black')
		} else {
			$('.fivPage>p').css('color', 'transparent')
		}
		if ($('.box').offset().top <= -722) {
			// alert(1)
			$('.thrPage>p').css('color', 'black')
		} else {
			$('.thrPage>p').css('color', 'transparent')
		}
		// if($('.box').offset().top)
		if (flag) {
			flag = false;
			if (event.deltaY < 0) {
				if (num == -8) {
					num = -7;
				}
				num--;
				$('.bac').animate({
					opacity: 1
				}, 500)
				$('.box').animate({
					top: res * num
				}, 1000)
				$('#ban ul li').eq(Math.abs(num)).animate({
					width: '30px',
					marginLeft: '20px'
				}).animate({
					width: '5px',
					marginLeft: '40px'
				}, 1000, function() {
					$('.bac').animate({
						opacity: 0
					}, 500)
					$('.bac').css('display', 'none')
					flag = true;
				})
				$('#ban ul li').find('span').hide()
				$('#ban ul li').eq(Math.abs(num)).css('background', '#E60012').find('span').show().parent().siblings().css(
					'background', 'white')
			}
			if (event.deltaY > 0) {
				if (num == 0) {
					num = -1;
				}
				$('.bac').animate({
					opacity: 1
				}, 500)
				num++;
				$('.box').animate({
					top: res * num
				}, 1000)
				$('#ban ul li').find('span').hide()
				$('#ban ul li').eq(Math.abs(num)).animate({
					width: '30px',
					marginLeft: '20px'
				}).animate({
					width: '5px',
					marginLeft: '40px'
				}, 1000, function() {
					$('.bac').animate({
						opacity: 0
					}, 500)
					$('.bac').css('display', 'none')
					flag = true
				})
				$('#ban ul li').eq(Math.abs(num)).css('background', '#E60012').find('span').show().parent().siblings().css(
					'background', 'white')
			}

		}

	})
	$('.secPage>.ban>ul').width(window.innerWidth * 0.6 * 6)
	$('.secPage>.ban>ul>li').width(window.innerWidth * 0.6)
	var nnm = 0;
	$('.ban .rig').click(function() {
		nnm++;
		console.log(nnm)
		if (nnm >= 3) {
			console.log(1)
			$('.secPage .ban ul li:eq(0)').appendTo($('.secPage .ban ul'))
			$('.secPage .ban ul').css('left', -1536 + 'px')
			nnm = 2
		}
		if (nnm == 1) {
			$('.secPage .ban ul').animate({
				left: -1536
			})
		} else {
			$('.secPage .ban ul').animate({
				left: -921.6 * nnm - 614.4 + 'px'
			})
		}
	})
	$('.ban .lef').click(function() {
		nnm--;
		console.log(nnm)
		if (nnm <= 0) {
			console.log(1)
			$('.secPage .ban ul li:eq(5)').prependTo($('.secPage .ban ul'))
			$('.secPage .ban ul').css('left', -1536 + 'px')
			nnm = 0
		}
		$('.secPage .ban ul').animate({
			left: -921.6 * nnm - 614.4 + 'px'
		})
	})
	var cnm = 0;
	$('.eigPage>.rig').click(function() {
		console.log(cnm)
		if (cnm == 2) {
			cnm = 1
		}
		cnm++;
		$('.eigPage .cen').animate({
			left: -window.innerWidth * cnm
		})

	})
	$('.eigPage>.lef').click(function() {
		console.log(cnm)
		if (cnm == 0) {
			cnm = 1
		}
		cnm--;
		$('.eigPage .cen').animate({
			left: -window.innerWidth * cnm
		})

	})

	$('.header').mouseenter(function() {
		$(this).css('height', '280px')
	})
})

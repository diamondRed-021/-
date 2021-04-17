$(function() {

	window.onload = function() {
		$('.firstPage').height(window.innerHeight)
		$('.secPage').height(window.innerHeight)
		$('.thrPage').height(window.innerHeight)
		$('.forPage').height(window.innerHeight)
		$('.fivPage').height(window.innerHeight)
		$('.sixPage').height(window.innerHeight)
		// $('.sevPage').height(window.innerHeight)
		$('.firstPage .blc').animate({
			opacity: 0
		}, 3000)
		$('.deta').find('.kw').find('span').html(145 + 'Kw').siblings('.lens').animate({
			width: '90%'
		}).parent().parent().find('.nm').find('span').html(320 + 'N · m').siblings('.lens').animate({
			width: '95%'
		}).parent().parent().find('.s').find('span').html('8s').siblings('.lens').animate({
			width: '85%'
		})
	}
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
		console.log(1)
		if (flag) {

			flag = false;
			if (num == -2) {
				$('.forPage .mes').animate({
					top: '200px'
				}, 2000)
			}
			if (num == 0 || num == -2) {
				$('.firstPage .blc').animate({
					opacity: 1
				}, 1500)
				$('.type').animate({
					opacity: 1,
					left: '150px'
				}, 1000)
			} else {
				$('.firstPage .blc').animate({
					opacity: 0
				}, 1500)
				$('.type').animate({
					opacity: 0,
					left: '0px'
				}, 1000)
			}
			if (num == -1 || num == -3) {
				$('.thrPage p').slideDown(1000)
			} else {
				$('.thrPage p').slideUp(1000)
			}

			if (event.deltaY < 0) {
				if (num == -6) {
					num = -5;
				}
				num--;

				$('.box').animate({
					top: res * num
				}, 1000)
				$('#ban ul li').eq(Math.abs(num)).animate({
					width: '30px',
					marginLeft: '20px'
				}).animate({
					width: '7px',
					marginLeft: '40px'
				}, 1000, function() {
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
				num++;
				$('.box').animate({
					top: res * num
				}, 1000)
				$('#ban ul li').find('span').hide()
				$('#ban ul li').eq(Math.abs(num)).animate({
					width: '30px',
					marginLeft: '20px'
				}).animate({
					width: '7px',
					marginLeft: '40px'
				}, 1000, function() {
					flag = true
				})
				$('#ban ul li').eq(Math.abs(num)).css('background', '#E60012').find('span').show().parent().siblings().css(
					'background', 'white')
			}
		}

	})


	$('.type li').click(function() {
		$(this).animate({
			fontSize: '38px',
			fontWeight: '600'
		}).siblings().animate({
			fontSize: '20px',
			fontWeight: '400'
		})
		$(this).css({
			color: 'black'
		}).siblings().css({
			color: '#666'
		})
		$('.big span').html($(this).html())
		var res = $(this).index()
		$('#car img').eq(res).show(500).siblings().hide(500)

	})

	$('.type li').eq(0).click(function() {
		$('.deta').find('.kw').find('span').html(145 + 'Kw').siblings('p').html('最大功率').siblings('.lens').animate({
			width: '90%'
		}).parent().parent().find('.nm').find('span').html(320 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '95%'
		}).parent().parent().find('.s').find('span').html('8s').siblings('p').html('百公里加速').siblings('.lens').animate({
			width: '85%'
		})
	})
	$('.type li').eq(1).click(function() {
		$('.deta').find('.kw').find('span').html(170 + 'Kw').siblings('.lens').siblings('p').html('最大功率').animate({
			width: '95%'
		}).parent().parent().find('.nm').find('span').html(300 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '97%'
		}).parent().parent().find('.s').find('span').html('2970mm').siblings('p').html('轴距').siblings('.lens').animate({
			width: '99%'
		})
	})
	$('.type li').eq(2).click(function() {
		$('.deta').find('.kw').find('span').html(170 + 'Kw').siblings('p').html('最大功率').siblings('.lens').animate({
			width: '93%'
		}).parent().parent().find('.nm').find('span').html(300 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '94%'
		}).parent().parent().find('.s').find('span').html('7s').siblings('p').html('百公里加速').siblings('.lens').animate({
			width: '80%'
		})
	})
	$('.type li').eq(3).click(function() {
		$('.deta').find('.kw').find('span').html('84 / 99  kwh').siblings('p').html('动力电池容量').siblings('.lens').animate({
			width: '80%'
		}).parent().parent().find('.nm').find('span').html('≥ 460/≥ 510  km').siblings('p').html('续航里程').siblings(
			'.lens').animate({
			width: '94%'
		}).parent().parent().find('.s').find('span').html('160+ 160/ 160+ 245 kw').siblings('p').html('电机功率').siblings(
			'.lens').animate({
			width: '80%'
		})
	})
	$('.type li').eq(4).click(function() {
		$('.deta').find('.kw').find('span').html(228 + 'Kw').siblings('.lens').siblings('p').html('最大功率').animate({
			width: '90%'
		}).parent().parent().find('.nm').find('span').html(680 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '95%'
		}).parent().parent().find('.s').find('span').html('6s').siblings('p').html('百公里加速').siblings('.lens').animate({
			width: '80%'
		})
	})

	$('.type li').eq(5).click(function() {
		$('.deta').find('.kw').find('span').html(165 + 'Kw').siblings('.lens').siblings('p').html('最大功率').animate({
			width: '90%'
		}).parent().parent().find('.nm').find('span').html(340 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '97%'
		}).parent().parent().find('.s').find('span').html('9s').siblings('p').html('百公里加速').siblings('.lens').animate({
			width: '97%'
		})
	})
	$('.type li').eq(6).click(function() {
		$('.deta').find('.kw').find('span').html(228 + 'Kw').siblings('.lens').siblings('p').html('最大功率').animate({
			width: '93%'
		}).parent().parent().find('.nm').find('span').html(445 + 'N · m').siblings('p').html('最大扭矩').siblings('.lens').animate({
			width: '60%'
		}).parent().parent().find('.s').find('span').html('8s').siblings('p').html('百公里加速').siblings('.lens').animate({
			width: '80%'
		})
	})

	$('.sixPage .area>ul>li').mouseenter(function() {
		$(this).find('.ban').slideUp()
		flag = false
	})


	$('.sixPage .area>ul>li').mouseleave(function() {
		$(this).find('.ban').slideDown()
		flag = false
	})

	$('.header').mouseenter(function() {
		// $(this).css('height','280px')
	})
})

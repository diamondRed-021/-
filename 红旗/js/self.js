$(function() {
	$('.self ul li').click(function() {
		$(this).css({
			background: '#333',
			color: 'white'
		}).find($('.iconfont')).css('color', 'white').parent().siblings().css({
			background: 'white',
			color: '#333'
		}).find($('.iconfont')).css('color', '#333')
	})
	$('.self ul li:eq(0)').click(function() {
		$('.area').css('display', 'block')
		$('.car').css('display', 'none')
	})
	$('.self ul li:eq(2)').click(function() {
		$('.area').css('display', 'none')
		$('.car').css('display', 'block')
	})

	var mes = window.localStorage.getItem('name')
	// console.log(Boolean(mes))
	if (Boolean(mes) == false) {
		console.log(1)
	} else {
		console.log(2)
		var yue = $('<div>')
		yue.attr('class', 'yue')
		$('.car').append(yue)
		var yi = $('<div>')
		yi.attr('class', 'yi')
		$('.yue').append(yi)
		var er = $('<div>')
		er.attr('class', 'er')
		$('.yue').append(er)
		var nam = $('<span>')
		nam.attr('class', 'nam')
		$('.yi').append(nam)
		var pho = $('<span>')
		pho.attr('class', 'pho')
		$('.yi').append(pho)
		var cars = $('<span>')
		cars.attr('class', 'cars')
		$('.er').append(cars)
		var yuyue = $('<span>')
		yuyue.attr('class', 'yuyue')
		yuyue.html('预约中')
		$('.er').append(yuyue)
		$('.car h1').css('display', 'none')
		$('.er span:eq(1)').mouseenter(function() {
			console.log(1)
			$(this).html('取消预约')
		})
		$('.er span:eq(1)').mouseleave(function() {
			console.log(1)
			$(this).html('预约中')
		})
		$('.er span:eq(1)').click(function() {
			$('.car>div').remove('div');
			if ($('.car>div').index() < 0) {
				$('.car h1').css('display', 'block')
			} else {
				$('.car h1').css('display', 'none')
			}
		})
	}

	$('.self p').html('用户' + window.localStorage.getItem('name'))
	$('.car .yue .yi span:eq(0)').html(window.localStorage.getItem('name'))
	$('.car .yue .yi span:eq(1)').html(window.localStorage.getItem('phone'))
	$('.car .yue .er span:eq(0)').html(window.localStorage.getItem('car'))
	$('.car .yue .er span:eq(1)').click(function() {
		window.localStorage.clear()
	})
	$('.car #goyu').click(function() {
		window.location.href = '../html/yue.html'
	})

})

$(function() {
	$('.nav').click(function() {
		$('#bac').slideDown()
	})
	$('.off').click(function() {
		$('#bac').slideUp()
	})
	$('#mes li').eq(5).mouseover(function() {
		$('#mes li').eq(5).find('span').html('&#xe74c;')
		$(this).find('.mor1').show()
	})
	$('#mes li').eq(5).mouseout(function() {
		$('#mes li').eq(5).find('span').html('&#xe74b;')
		$(this).find('.mor1').hide()
	})
	$('#mes li').eq(6).mouseover(function() {
		$('#mes li').eq(6).find('span').html('&#xe74c;')
		$(this).find('.mor2').show()
	})
	$('#mes li').eq(6).mouseout(function() {
		$('#mes li').eq(6).find('span').html('&#xe74b;')
		$(this).find('.mor2').hide()
	})
	$('#mes li').eq(7).mouseover(function() {
		$('#mes li').eq(7).find('span').html('&#xe74c;')
		$(this).find('.mor3').show()
	})
	$('#mes li').eq(7).mouseout(function() {
		$('#mes li').eq(7).find('span').html('&#xe74b;')
		$(this).find('.mor3').hide()
	})
})

$(function() {
	$('.newArea li').slice(9, ).css('display', 'none')
	var num = 6;
	$('.morLoad').click(function() {
		num += 3;
		console.log(num)
		if (num <= 18) {
			$('.newArea li').slice(num, num + 3).css('display', 'block')
		}
		if (num == 15) {
			$('.box>.morLoad').remove('.morLoad')
		}

	})
})

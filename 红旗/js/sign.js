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
	$('.box').height(window.innerHeight)

	$('#phone').blur(function() {
		// if(!(/^1[3456789]\d{9}$/.test($('#phone').val()))){ 
		//       alert("手机号码有误，请重填");  
		//       return false
		// }
	})
	var verifyCode = new GVerify("v_container");

	document.getElementById("my_button").onclick = function() {

		if ($('#phone').val() == '') {
			$('.att').css('display', 'block').find('span').html('请输入手机号')
		} else if (!(/^1[3456789]\d{9}$/.test($('#phone').val()))) {
			$('.att').css('display', 'block').find('span').html('手机号码格式错误')
			return false
		} else if ($('#code_input').val() == '') {
			$('.att').css('display', 'block').find('span').html('请输入图形验证码')
		} else {
			var res = verifyCode.validate(document.getElementById("code_input").value);
			if (res) {
				window.location.href = '../html/self.html'
			} else {
				$('.att').css('display', 'block').find('span').html('验证码错误')
			}
		}

	}

	$('input').click(function() {
		$('.att').css('display', 'none')
	})
	// $('.att').css('display','none')



	// 判断验证码


})

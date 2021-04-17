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

	// 正则





	$('#my_button').click(function() {
		if (!(/^[\u4e00-\u9fa5]+$/.test($('#named').val()))) {
			$('.att').css('display', 'block').find('span').html('请正确输入姓名')
		} else if (!(/^1[3456789]\d{9}$/.test($('#pho').val()))) {
			$('.att').css('display', 'block').find('span').html('手机号码格式错误')
		} else if ($('named').val() == '' || $('#pho').val() == '') {
			$('.att').css('display', 'block').find('span').html('请正确填写信息')
		} else if ($('#chec').prop('checked') == false) {
			$('.att').css('display', 'block').find('span').html('请勾选我已了解并同意《服务协议》和《隐私政策》')
		} else {
			window.localStorage.setItem("car", $('#car option:selected').text())
			window.localStorage.setItem("name", $('#named').val())
			window.localStorage.setItem("phone", $('#pho').val())
			window.location.href = '../html/self.html'
		}
		console.log($('#chec').prop('checked'))

	})
	$('input').click(function() {
		$('.att').css('display', 'none')
	})


	$('#car').change(function() {
		console.log($('#car option:selected').val())
		$('.imgs img').eq($('#car option:selected').val()).css('display', 'block').siblings().css('display', 'none')
	})

	var citys = [
		['朝阳区', '海定区', '昌平区', '大兴区'],
		['东莞市', '广州市', '深圳', '佛山', '汕头'],
		['南岸区', '万州', '合川', '涪陵', '渝中', '江北', '渝北']
	]
	var province = document.getElementById('province');
	var city = document.getElementById('city');

	province.onchange = function() {
		// console.log(this.value)
		// console.log(citys[this.value])

		// 获取到的城市
		var arr = citys[this.value]
		console.log(arr)

		// 清除当前select中的option
		city.length = 0;
		// 创建标签
		for (var i = 0; i < arr.length; i++) {
			// var option = document.createElement('option')
			// option.innerHTML = arr[i];
			// option.value = i;

			var option = new Option(arr[i], i)
			console.log(option)
			city.appendChild(option)
		}

	}
})

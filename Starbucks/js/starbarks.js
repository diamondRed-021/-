$(function(){
	console.log($(window).innerWidth())
	setInterval(function(){
		if($(window).innerWidth()<640){
			$('.item:eq(0)').find('img').attr( 'src','./img/main_7fc4f760-6926-4eeb-9304-06581dd9a737.jpg')
			$('.item:eq(1)').find('img').attr('src','./img/main_ea43e1be-47ef-4ab1-9d56-250c1eb45b01.jpg')
		}else{
			$('.item:eq(0)').find('img').attr('src','./img/main_61babe13-d569-476b-8bd6-e75068943318.jpg')
			$('.item:eq(1)').find('img').attr('src','./img/main_07cfaab4-6991-4801-8613-084a68a802d6.jpg')
		}
	})
	
})
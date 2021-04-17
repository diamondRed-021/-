$(function(){
	setInterval(function(){
		if($(window).innerWidth()<640){
			for(var n = -1;n<=4;n++){
				var m = n+1;
				$('.Car').find('img').eq(n).attr( 'src','../img/'+m+'-m.jpg')
			}
			
		}else{
			for(var n = -1;n<=4;n++){
				var m = n+1;
				$('.Car').find('img').eq(n).attr( 'src','../img/'+m+'.jpg')
			}
			
		}
	})
	
})
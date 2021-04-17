$(function(){
	$('.form-group>input').focus(function(){
		$(this).next().animate({top:'-25px',fontSize:'16px'},100)
		$(this).attr('placeholder',' ')
	})
	$('.form-group>input').blur(function(){
		$(this).next().animate({top:'7px',fontSize:'18px'},100)
		$(this).attr('placeholder',$(this).next().text())
	})
})
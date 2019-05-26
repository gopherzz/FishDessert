$(document).ready(function(){
	
	$(".content").hide()
	$("#li1").hide()
	$("#li2").hide()
	$("#li3").hide()
	$("#li4").hide()
	$("#li5").hide()
	$("#li6").hide()

	$("#li1").fadeIn(200)
	$("#li2").fadeIn(400)
	$("#li3").fadeIn(600)
	$("#li4").fadeIn(800)
	$("#li5").fadeIn(1000)
	$("#li6").fadeIn(1200)
	$(".content").fadeIn(2000)
	
	$(".ad-left").css("filter", "blur(5px)")
	$(".ad-right").css("filter", "blur(5px)")
	$(".all").css("filter", "blur(5px)")
	$(".js-massage-over").fadeIn()

	$(document).mouseup(function(){
		$(".ad-left").css("filter", "none")
		$(".ad-right").css("filter", "none")
		$(".all").css("filter", "none")
		$(".js-massage-over").fadeOut()
	})	
})
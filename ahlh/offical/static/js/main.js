$(function(){
	
	myLoad();
	$(window).resize(function() {
		myLoad();
    });
	function myLoad(){
		var wh = $(window).height();
		ww = $(window).width();
		$(".device .swiper-container").css("height",$(".device .swiper-container img").height());
	}
	
	$(".m-nav-botton").click(function(){
		var data = $(this).attr("data");
		if(data == "close"){
			$('.m-nav').addClass("nav-active");
			$(".nav-mask").addClass('active');
			$('.m-nav li').addClass('move');
		}else{
			
		}
	});
	$(".nav-mask").click(function(){
		$('.m-nav').removeClass("nav-active");
		$(".nav-mask").removeClass('active');
		$('.m-nav li').removeClass('move');
	});
	
	
	
	$(".pic-shadow1").click(function(){
		$(this).css("display","none");	
	});	
	
});
	

$(function(){
	
	myLoad();
	$(window).resize(function() {
		myLoad();
    });
	function myLoad(){
		var wh = $(window).height();
		ww = $(window).width();
		console.log(ww,wh);
		$(".device .swiper-container").css("height",$(".device .swiper-container img").height());
	}
	
	//mobail menu show
	/*$(".m-nav-botton").click(function(){
		mobileSile($(this),100,$(this).attr("data"));
	});
	
	function mobileSile(obj,speed,data){
		var _obj = obj;
		var _speed = speed;
		var data = data;
		var _body = $("body");
		var _nav = $(".m-nav");
		var _arr = $(".m-nav").find("li");
		
		if(data == "close"){
			data = _obj.attr("data","open");
			$("body").addClass("body");
			$(".m-nav").addClass("m-nav-move");
			for(var i=0;i<_arr.length;i++){
				_arr.eq(i).addClass("move");
			}
		}else{
			for(var i=0;i<_arr.length;i++){
				_arr.eq(i).removeClass("move");
			}
			data = _obj.attr("data","close");
			$(".m-nav").removeClass("m-nav-move");
			$("body").removeClass("body");
		}
	}*/
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
	

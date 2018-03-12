$(function(){
	myLoad();
	$(window).resize(function() {
		myLoad();
    });
	function myLoad(){
		var wh = $(window).height();
		ww = $(window).width();
		//console.log(ww,wh);
		$(".device .swiper-container").css("height",$(".device .swiper-container img").height());
	}
	
	//mobail menu show
	$(".m-nav-botton").click(function(){
		mobileSile($(this),100,$(this).attr("data"));
	});
	
	function mobileSile(obj,speed,data){
		var _obj = obj;
		var _speed = speed;
		var data = data;
		var _body = $("body");
		var _nav = $(".m-nav");
		var _arr = $(".m-nav").find("li");
		/*if(_body.is(":animated")){_body.stop(true,true);}
		if(_nav.is(":animated")){_nav.stop(true,true);}*/
		
		if(data == "close"){
			/*$(".m-nav").css("display","block");
			$(".m-nav").animate({left:'100%'});
			$("body").animate({left:'-50%'});*/
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
			/*$(".m-nav").animate({left:'100%'},600);
			$("body").animate({left:'0px'},600);
			$(".m-nav").css("display","none");*/
			data = _obj.attr("data","close");
			$(".m-nav").removeClass("m-nav-move");
			$("body").removeClass("body");
		}
	}
	
	// scroll img
	/*var num = 0;
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -750) {
            num = 0;
        }
        num -= 1;
        $(".scroll").css({
            left: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 30);
    //设置鼠标经过时滚动停止
    $(".box").hover(function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval(goLeft, 30);
    })*/
});
	

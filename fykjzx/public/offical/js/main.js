$(function(){myLoad();$(window).resize(function(){myLoad()});function myLoad(){var a=$(window).height();ww=$(window).width()}$(".m-nav-botton").click(function(){var a=$(this).attr("data");if(a=="close"){$('.m-nav').addClass("nav-active");$(".nav-mask").addClass('active');for(var i=0;i<$('.m-nav li').length;i++){$('.m-nav li').eq(i).addClass('move')}}});$(".nav-mask").click(function(){$('.m-nav').removeClass("nav-active");$(".nav-mask").removeClass('active');$('.m-nav li').removeClass('move')});var b=new Swiper('.gallery-top',{spaceBetween:10,loop:true,loopedSlides:3,});var c=new Swiper('.gallery-thumbs',{spaceBetween:10,slidesPerView:4,touchRatio:0.2,loop:true,loopedSlides:3,});b.params.control=c;c.params.control=b;$('.g-n').click(function(){event.stopPropagation();b.slideNext()});$('.g-p').click(function(){event.stopPropagation();b.slidePrev()});$(".campus >div,.thumb").click(function(){$('.mask').css('visibility','visible')});$(".gallery-thumbs .swiper-slide").click(function(){event.stopPropagation();var a=$(this).index();b.slideTo(a,1000,false)});$('.mask').click(function(){$('.mask').css('visibility','hidden')})});
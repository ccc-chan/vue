$(function () {
    var lunboImg = '<div class="swiper-slide"><div><img /></div></div>';
    var hList = [];
    //banner query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/banner?token=nngmzyjs&code=29bba53d88f45fb95ea3c9a54a31f6ac',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            for ( var i = 0;i<data.length;i++){
               $(".lunbo .pagination .index").append('<span></span>');
               $(".lunbo .swiper-wrapper").append(lunboImg);
               $(".lunbo .swiper-slide").eq(i).find('img').attr('src',data[i].pic);
                hList.push(data[i].title);
            }
            var swiper = new Swiper('.lunbo', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop:'true',
                lazyLoading : true,
                autoplay : 6000,
                onTouchEnd: function(swiper){
                    active(swiper.realIndex);
                },
                onSlideChangeEnd: function(swiper){
                    active(swiper.realIndex);
                }
            });
        }
    });
    var teacherImg = '<div class="swiper-slide"><div><img /><p class="text-center"><span></span><span></span></p></div></div>';
    var teacherList = [];
    //teacher query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/teacher?token=nngmzyjs&code=29bba53d88f45fb95ea3c9a54a31f6ac',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            var a=b=c=0;
            for (var i = 0; i < data.length; i++){
                if(data[i].type == '27'){
                    if(a < 3){
                        a++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '28') {
                    if (b < 3) {
                        b++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '29') {
                    if (c < 3) {
                        c++;
                        teacherList.push(data[i]);
                    }
                }
            }
            for ( var i=0;i <teacherList.length;i++){
                $(".shizi .swiper-wrapper").append(teacherImg);
                $(".shizi .swiper-wrapper .swiper-slide").eq(i).find('img').attr('src',teacherList[i].headimg);
                $(".shizi .swiper-wrapper .swiper-slide").eq(i).find('span').eq(0).text(teacherList[i].name+' |');
                $(".shizi .swiper-wrapper .swiper-slide").eq(i).find('span').eq(1).text( teacherList[i].professor);

            }
            var swiper1 = new Swiper('.shizi', {
                effect: 'slide',
                loop: 'true',
                speed: 600,
                autoplay: 5000,
                nextButton: '.t-n',
                prevButton: '.t-p',

            });
        }
    });

    //article query
   var templet = '<div class="list-item"><a><p></p><span></span></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=nngmzyjs&code=29bba53d88f45fb95ea3c9a54a31f6ac',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [];
            for (var i =0;i<data.length;i++){
                if(data[i].type == '58'){
                    if(dynList.length < 5 ){
                        $(".dyn").append(templet);
                        $(".dyn .list-item").eq(dynList.length).find('a').attr({'href':"/page1?id="+data[i].id,"target":"_blank"});
                        $(".dyn .list-item").eq(dynList.length).find('p').text(data[i].title);
                        $(".dyn .list-item").eq(dynList.length).find('span').text(data[i].add_time);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '60'){
                    if(scList.length < 5 ){
                        $(".sc").append(templet);
                        $(".sc .list-item").eq(scList.length).find('a').attr({'href':"/page3?id="+data[i].id,"target":"_blank"});
                        $(".sc .list-item").eq(scList.length).find('p').text(data[i].title);
                        $(".sc .list-item").eq(scList.length).find('span').text(data[i].add_time);
                        scList.push(data[i]);
                    }
                }else if(data[i].type == '59'){
                    if(coList.length < 5 ){
                        $(".co").append(templet);
                        $(".co .list-item").eq(coList.length).find('a').attr({'href':"/page2?id="+data[i].id,"target":"_blank"});
                        $(".co .list-item").eq(coList.length).find('p').text(data[i].title);
                        $(".co .list-item").eq(coList.length).find('span').text(data[i].add_time);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '61'){
                    if(shixiList.length < 5 ){
                        $(".shixi").append(templet);
                        $(".shixi .list-item").eq(shixiList.length).find('a').attr({'href':"/page4?id="+data[i].id,"target":"_blank"});
                        $(".shixi .list-item").eq(shixiList.length).find('p').text(data[i].title);
                        $(".shixi .list-item").eq(shixiList.length).find('span').text(data[i].add_time);
                        shixiList.push(data[i]);
                    }
                }
            }
        }
    });


    function active(n){
        $(".index").find("span").removeClass("active");
        $(".index").find("span").eq(n).addClass("active");
        $(".pagination h5").text(hList[n]);
    }
    $(".lunbo-next,.lunbo-prev").click(function(){
        active(swiper.realIndex);
    });
    $(".pagination span").click(function(){
        $(".index").find("span").removeClass("active");
        var num = $(this).index();
        swiper.slideTo(num+1, 1000, false);
        active(num);
    });
});
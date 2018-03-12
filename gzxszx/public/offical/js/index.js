$(function () {
    var lunboImg = '<div class="swiper-slide"><div><img /></div></div>';
    var hList = [];
    //banner query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/banner?token=xszy&code=fefb70fa72b81bef535b515fae46fde8',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            for ( var i = 0;i<data.length;i++){
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
    var teacherImg = '<div><img class="img-responsive"/>\n' +
        '  <p><span> </span><i> </i></p><span class="pc-bg"> </span>\n' +
        '</div>';
    var teacherList = [];
    //teacher query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/teacher?token=xszy&code=fefb70fa72b81bef535b515fae46fde8',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            for ( var i = 0;i<4;i++){
                $(".tea-box").append(teacherImg);
                $(".tea-box >div").eq(i).find('img').attr('src',data[i].headimg);
                $(".tea-box >div").eq(i).find('p').find('span').eq(0).text(data[i].name);
                $(".tea-box >div").eq(i).find('p').find('i').text(data[i].professor);
                $(".tea-box >div").eq(i).find('span').eq(1).text(data[i].teachexp);
            }
            $(".tea-box >div >span").dotdotdot();
        }
    });

    //article query
    var templet = '<div class="list-item"><a><i class="iconfont icon-triangle-copy-copy-copy"></i><p></p><span></span></a></div>';
    var co = '<div><a>\n' +
        '  <div class="col-md-3 col-sm-3 col-xs-4 dyn-img"><img  class="img-responsive theme-img"/></div>\n' +
        '  <div class="col-sm-9 col-xs-8 news-dialog">\n' +
        '    <div class="tl-title"><span class="h4"></span></div>\n' +
        '    <p class=""></p>\n' +
        '  </div>\n' +
        '</a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=xszy&code=fefb70fa72b81bef535b515fae46fde8',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [];
            for (var i =0;i<data.length;i++){
                if(data[i].type == '122'){
                    if(dynList.length < 7 ){
                        $(".dyn").append(templet);
                        var dateTime =data[i].add_time;
                        dateTime =dateTime.split("-");
                        data[i].day = dateTime[2];
                        data[i].month = dateTime[1];
                        $(".dyn .list-item").eq(dynList.length).find('a').attr('href',"/news_page1?id="+data[i].id);
                        $(".dyn .list-item").eq(dynList.length).find('p').text(data[i].title);
                        $(".dyn .list-item").eq(dynList.length).find('span').text(data[i].month+"-"+data[i].day);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '124'){
                    if(scList.length < 7 ){
                        $(".sc").append(templet);
                        $(".sc .list-item").eq(scList.length).find('a').attr('href',"/news_page3?id="+data[i].id);
                        $(".sc .list-item").eq(scList.length).find('p').text(data[i].title);
                        $(".sc .list-item").eq(scList.length).find('span').text(data[i].add_time);
                        scList.push(data[i]);
                    }
                }else if(data[i].type == '123'){
                    if(coList.length < 4 ){
                        $(".co").append(co);
                        $(".co >div").eq(coList.length).find('a').attr('href',"/news_page2?id="+data[i].id);
                        $(".co >div").eq(coList.length).find('img').attr('src',data[i].pic_thumb);
                        $(".co >div").eq(coList.length).find('p').eq(0).text(data[i].title);
                        $(".co >div").eq(coList.length).find('span').text(data[i].synopsis);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '125'){
                    if(shixiList.length < 6 ){
                        $(".shixi").append(templet);
                        $(".shixi .list-item").eq(shixiList.length).find('a').attr('href',"/news_page4?id="+data[i].id);
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
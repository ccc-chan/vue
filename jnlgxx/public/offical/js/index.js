$(function () {
    var dyn = '<div><a>\n' +
        '  <div class="col-md-3 col-sm-3 col-xs-4 dyn-img"><img  class="img-responsive"/></div>\n' +
        '  <div class="col-sm-9 col-xs-8 news-dialog">\n' +
        '    <div class="tl-title"><span class="h4"></span></div>\n' +
        '    <p class="pc-bg"></p>\n' +
        '  </div>\n' +
        '</a></div>';
    var lunbo = '<div class="swiper-slide"><a href="#"><img class="img-responsive"/></a></div>';
    var hList = [];
    var sc = '<div class="date-box"><a>\n' +
        '  <div class="date">\n' +
        '    <h3 class="text-center"> </h3><span class="text-center"> </span>\n' +
        '  </div>\n' +
        '  <div class="dyn-content">\n' +
        '    <p> </p><span class="pc-bg"> </span>\n' +
        '  </div>\n' +
        '</a></div>';
    var co = '<div><a>\n' +
        '  <label class="h4"> </label><img class="img-responsive"/><span> </span>\n' +
        '</a></div>';
    //article query
   var templet = '<div class="list-item"><a><i class="iconfont icon-dayin_zhizhangshezhi"></i><p></p></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=jnlgjg&code=6f4e1d3398ce113a4810398a61ebb4e4',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [],a=b=c=0;
            for (var i =0;i<data.length;i++){
                if(data[i].type == '178'){
                    if(dynList.length < 4 ){
                        $(".dyn-list").append(dyn);
                        $(".dyn-list >div").eq(dynList.length).find('a').attr({'href':"/page1?id="+data[i].id,"target":"_blank"});
                        $(".dyn-list >div").eq(dynList.length).find('img').attr('src',data[i].pic_thumb);
                        $(".dyn-list >div").eq(dynList.length).find('p').eq(0).text(data[i].title);
                        $(".dyn-list >div").eq(dynList.length).find('span').text(data[i].synopsis);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '179'){
                    if(scList.length < 3 ) {
                        $(".dang").append(co);
                        $(".dang >div").eq(scList.length).find('a').attr({'href':"/page2?id="+data[i].id,"target":"_blank"});
                        $(".dang >div").eq(scList.length).find('img').text(data[i].pic_thumb);
                        $(".dang >div").eq(scList.length).find('label').text(data[i].title);
                        $(".dang >div").eq(scList.length).find('span').text(data[i].synopsis);
                        scList.push(data[i]);

                    }
                }else if(data[i].type == '180'){
                    if(coList.length < 4 ){
                        $(".sc").append(sc);
                        var dateTime = data[i].add_time;
                        dateTime =dateTime.split("-");
                        data[i].day = dateTime[2];
                        data[i].month = dateTime[1];
                        data[i].year = dateTime[0];
                        $(".sc .date").find('h3').text(data[i].day);
                        $(".sc .date").find('span').text(data[i].year+"-"+data[i].month);
                        $(".sc .dyn-content").find('a').attr({'href':"/page3?id="+data[i].id,"target":"_blank"});
                        $(".sc .dyn-content").find('p').text(data[i].title);
                        $(".sc .dyn-content").find('span').text(data[i].synopsis);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '181'){
                    if(shixiList.length < 4 ) {
                        $(".shixi").append(lunbo);
                        $(".lunbo .swiper-slide").eq(shixiList.length).find('img').attr('src',data[i].pic);
                        hList.push(data[i].title);
                        $(".shixi .list-item").eq(shixiList.length).find('a').attr({'href':"/page4?id="+data[i].id,"target":"_blank"});
                        $(".shixi .list-item").eq(shixiList.length).find('p').text(data[i].title);
                        shixiList.push(data[i]);
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
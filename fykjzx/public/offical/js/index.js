$(function () {
    document.title="阜阳科技职业学院——互联网学院";
    var lunboImg = '<div class="swiper-slide"><div><img class="img-responsive pc-bg" /><img class="img-responsive m-bg" /></div></div>';
    var hList = [];
    //banner query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/banner?token=fykj&code=c5e6e0dfc38ca58a45dc1c0b770188a6',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
           for ( var i = 0;i<data.length;i++){
               $(".lunbo .pagination .index").append('<span></span>');
               $(".lunbo .swiper-wrapper").append(lunboImg);
               $(".lunbo .swiper-slide").eq(i).find('img').eq(0).attr('src',data[i].pic);
               $(".lunbo .swiper-slide").eq(i).find('img').eq(1).attr('src',data[i].pic1);
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
        url: 'http://api.7171.la/api/teacher?token=fykj&code=c5e6e0dfc38ca58a45dc1c0b770188a6',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            var a=b=c=0;
            for (var i = 0; i < data.length; i++){
                if(data[i].type == '24'){
                    if(a < 3){
                        a++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '25') {
                    if (b < 3) {
                        b++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '26') {
                    if (c < 3) {
                        c++;
                        teacherList.push(data[i]);
                    }
                }
            }
            for ( var i=0;i <teacherList.length;i++){
                $(".shizi .swiper-wrapper").append(teacherImg);
                $(".shizi .swiper-wrapper .swiper-slide").eq(i).find('img').attr('src',teacherList[i].headimgtwo);
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
    var dyn = '<div><a>\n' +
       '  <div class="pic-thumb"><img/></div>\n' +
       '  <div class="dyn-content">\n' +
       '    <p> </p><span> </span>\n' +
       '  </div>\n' +
       '</a></div>';
    var sc = '<div><a>\n' +
        '    <div class="date"><span class="text-center"> </span>\n' +
        '      <h4 class="text-center"></h4>\n' +
        '    </div>\n' +
        '    <div class="sc-content">\n' +
        '      <p> </p><span> </span>\n' +
        '    </div></a></div>';
    var templet = '<div class="list"><a>\n' +
        '    <p> </p><span> </span></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=fykj&code=c5e6e0dfc38ca58a45dc1c0b770188a6',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [];
            for (var i =0;i<data.length;i++){
                if(data[i].type == '74'){
                    if(dynList.length < 3 ){
                        $(".dyn").append(dyn);
                        $(".dyn >div").eq(dynList.length).find('img').attr('src',data[i].pic_thumb);
                        $(".dyn >div").eq(dynList.length).find('a').attr({'href':"/page1?id="+data[i].id,"target":"_blank"});
                        $(".dyn >div").eq(dynList.length).find('p').text(data[i].title);
                        $(".dyn >div").eq(dynList.length).find('span').text(data[i].add_time);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '76'){
                    if(scList.length < 4 ){
                        $(".sc").append(sc);
                        var dateTime =data[i].add_time;
                        dateTime =dateTime.split("-");
                        data[i].day = dateTime[2];
                        data[i].mouth = dateTime[1];
                        var mouth = yue(data[i].mouth);
                        $(".sc >div").eq(scList.length).find('div').eq(0).find('span').text(mouth);
                        $(".sc >div").eq(scList.length).find('h4').text(data[i].day);
                        $(".sc >div").eq(scList.length).find('a').attr({'href':"/page3?id="+data[i].id,"target":"_blank"});
                        $(".sc >div").eq(scList.length).find('p').text(data[i].title);
                        $(".sc >div").eq(scList.length).find('div').eq(1).find('span').text(data[i].synopsis);
                        scList.push(data[i]);
                    }
                }else if(data[i].type == '75'){
                    if(coList.length < 3 ){
                        $(".co").append(templet);
                        $(".co >div").eq(scList.length).find('a').attr({'href':"/page12id="+data[i].id,"target":"_blank"});
                        $(".co >div").eq(coList.length).find('p').text(data[i].title);
                        $(".co >div").eq(coList.length).find('span').text(data[i].add_time);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '77'){
                    if(shixiList.length < 3 ){
                        $(".shixi").append(templet);
                        $(".shixi >div").eq(scList.length).find('a').attr({'href':"/page4?id="+data[i].id,"target":"_blank"});
                        $(".shixi >div").eq(shixiList.length).find('p').text(data[i].title);
                        $(".shixi >div").eq(shixiList.length).find('span').text(data[i].add_time);
                        shixiList.push(data[i]);
                    }
                }
            }
        }
    });

    function yue(n) {
        if(n == '01'){
            return '一月';
        }else if(n =='02'){
            return '二月';
        }else if(n == '03'){
            return '三月';
        }else if( n == '04'){
            return '四月';
        }else if( n == '05'){
            return '五月';
        }else if ( n == '06'){
            return '六月';
        }else if( n == '07'){
            return '七月';
        }else if(n == '08'){
            return '八月';
        }else if( n == '09'){
            return '九月';
        }else if ( n == '10'){
            return '十月';
        }else if( n == '11'){
            return '十一月';
        }else if( n == '12'){
            return '十二月';
        }
    }
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
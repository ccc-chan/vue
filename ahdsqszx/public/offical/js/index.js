$(function () {
    var dyn = '<div class="date-box"><a>\n' +
        '  <div class="date">\n' +
        '    <h3 class="text-center"> </h3><span class="text-center"> </span>\n' +
        '  </div>\n' +
        '  <div class="dyn-content">\n' +
        '    <p> </p><span class="pc-bg"> </span>\n' +
        '  </div>\n' +
        '</a></div>';
    //article query
   var templet = '<div class="list-item"><a><i class="iconfont icon-zhengfangxing"></i><p></p></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=dsqs&code=7eeb23e92ad80d4b62a73d92fd2fa2b75',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [],a=b=c=0;
            for (var i =0;i<data.length;i++){
                if(data[i].type == '195'){
                    if(dynList.length < 3 ){
                        $(".dyn").append(dyn);
                        var dateTime = data[i].add_time;
                        dateTime =dateTime.split("-");
                        data[i].day = dateTime[2];
                        data[i].month = dateTime[1];
                        data[i].year = dateTime[0];
                        $(".dyn >div").eq(dynList.length).find('a').attr('href',"/page1?id="+data[i].id);
                        $(".dyn >div").eq(dynList.length).find('h3').attr('src',data[i].day);
                        $(".dyn >div").eq(dynList.length).find('span').eq(0).text(data[i].year+'/'+data[i].month);
                        $(".dyn >div").eq(dynList.length).find('p').text(data[i].title);
                        $(".dyn >div").eq(dynList.length).find('span').eq(1).text(data[i].synopsis);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '196'){
                    if(scList.length < 5 ) {
                        $(".dang").append(templet);
                        $(".dang >div").eq(scList.length).find('a').attr('href',"/page2?id="+data[i].id);
                        $(".dang >div").eq(scList.length).find('p').text(data[i].title);
                        $(".dang >div").eq(scList.length).find('span').text(data[i].add_time);
                        scList.push(data[i]);

                    }
                }else if(data[i].type == '197'){
                    if(coList.length < 7 ){
                        $(".sc").append(templet);
                        $(".sc >div").find('a').attr('href',"/page3?id="+data[i].id);
                        $(".sc >div").find('p').text(data[i].title);
                        $(".sc >div").find('span').text(data[i].add_time);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '198'){
                    if(shixiList.length < 4 ) {
                        $(".shixi").append(templet);
                        $(".shixi >div").find('a').attr('href',"/page4?id="+data[i].id);
                        $(".shixi >div").find('p').text(data[i].title);
                        $(".shixi >div").find('span').text(data[i].add_time);

                    }

                }
            }
        }
    });

    var teacherImg = '<div class="swiper-slide"><div><img /><p class="text-center"><span></span><span></span></p></div></div>';
    var teacherList = [];
    //teacher query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/teacher?token=dsqs&code=7eeb23e92ad80d4b62a73d92fd2fa2b7',
        dataType: 'json',
        success: function (data) {
            if(data.length == 0)
                return false;
            var a=b=c=0;
            for (var i = 0; i < data.length; i++){
                if(data[i].type == '33'){
                    if(a < 3){
                        a++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '34') {
                    if (b < 3) {
                        b++;
                        teacherList.push(data[i]);
                    }
                }else if(data[i].type == '35') {
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
});
$(function () {
    document.title="颍上旅游职业学校特色专业网";
    var teacherImg = '<div class="swiper-slide"><div><img /><p class="text-center"><span></span><span></span></p></div></div>';
    var teacherList = [];
    //teacher query
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/teacher?token=ysly&code=f84827d29bb58aa85c599b4dc86283b0',
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
    var dyn = '<div><a>\n' +
        '  <div class="pic-thumb"><img src="src"/></div>\n' +
        '  <div class="dyn-content">\n' +
        '    <p> </p><span></span>\n' +
        '  </div>\n' +
        '</a></div>';
    var sc = '<div><a>\n' +
        '  <div class="date">\n' +
        '    <h3 class="text-center"> </h3><span class="text-center"> </span>\n' +
        '  </div>\n' +
        '  <div class="sc-content">\n' +
        '    <p> </p><span> </span>\n' +
        '  </div>\n' +
        '</a></div>';
    var templet = '<div class="list-item index-item"><a>\n' +
        '    <p> </p><span> </span></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=ysly&code=f84827d29bb58aa85c599b4dc86283b0',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [];
            for (var i =0;i<data.length;i++){
                if(data[i].type == '82'){
                    if(dynList.length < 4 ){
                        $(".dyn").append(dyn);
                        $(".dyn >div").eq(dynList.length).find('img').attr('src',data[i].pic_thumb);
                        $(".dyn >div").eq(dynList.length).find('a').attr('href',"/page1?id="+data[i].id);
                        $(".dyn >div").eq(dynList.length).find('p').text(data[i].title);
                        $(".dyn >div").eq(dynList.length).find('span').text(data[i].synopsis);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '84'){
                    if(scList.length < 3 ){
                        $(".sc").append(sc);
                        var dateTime =data[i].add_time;
                        dateTime =dateTime.split("-");
                        data[i].day = dateTime[2];
                        data[i].mouth = dateTime[1];
                        $(".sc >div").eq(scList.length).find('div').eq(0).find('span').text(data[i].mouth+"月");
                        $(".sc >div").eq(scList.length).find('h4').text(data[i].day);
                        $(".sc >div").eq(scList.length).find('a').attr('href',"/page3?id="+data[i].id);
                        $(".sc >div").eq(scList.length).find('p').text(data[i].title);
                        $(".sc >div").eq(scList.length).find('div').eq(1).find('span').text(data[i].synopsis);
                        scList.push(data[i]);
                    }
                }else if(data[i].type == '83'){
                    if(coList.length < 5 ){
                        $(".co").append(templet);
                        $(".co >div").eq(scList.length).find('a').attr('href',"/page2?id="+data[i].id);
                        $(".co >div").eq(coList.length).find('p').text(data[i].title);
                        $(".co >div").eq(coList.length).find('span').text(data[i].add_time);
                        coList.push(data[i]);
                    }
                }else if(data[i].type == '85'){
                    if(shixiList.length < 4 ){
                        $(".shixi").append(templet);
                        $(".shixi >div").eq(scList.length).find('a').attr('href',"/page4?id="+data[i].id);
                        $(".shixi >div").eq(shixiList.length).find('p').text(data[i].title);
                        $(".shixi >div").eq(shixiList.length).find('span').text(data[i].add_time);
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
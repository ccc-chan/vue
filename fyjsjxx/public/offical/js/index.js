$(function () {
    var dyn = '<div><a>' +
        '<div class="pic-thumb"><img /></div>' +
        '<div class="dyn-content"><div><p></p><span>MORE</span></div><p></p></div>' +
        '</a></div>';
    var firstNews = '<div class="first-news"><a><p></p><span></span></a></div>';
    //article query
   var templet = '<div class="list-item"><a><i class="iconfont icon-dayin_zhizhangshezhi"></i><p></p></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=fyjsj&code=ce93f903de06aac3cd813f16c1fe4049',
        dataType: 'json',
        success: function (data) {
            var dynList = [],scList = [],coList = [],shixiList = [],a=b=c=0;
            for (var i =0;i<data.length;i++){
                if(data[i].type == '130'){
                    if(dynList.length < 4 ){
                        $(".dyn").append(dyn);
                        $(".dyn >div").eq(dynList.length).find('a').attr({'href':"/page1?id="+data[i].id,"target":"_blank"});
                        $(".dyn >div").eq(dynList.length).find('img').attr('src',data[i].pic_thumb);
                        $(".dyn >div").eq(dynList.length).find('p').eq(0).text(data[i].title);
                        $(".dyn >div").eq(dynList.length).find('p').eq(1).text(data[i].synopsis);
                        dynList.push(data[i]);
                    }
                }else if(data[i].type == '131'){
                    if(scList.length < 4 ) {
                        b++;
                        if (b == 1) {
                            $(".dang").append(firstNews);
                            $(".dang .first-news").find('a').attr({'href':"/page2?id="+data[i].id,"target":"_blank"});
                            $(".dang .first-news").find('p').text(data[i].title);
                            $(".dang .first-news").find('span').text(data[i].synopsis);
                            scList.push(data[i]);
                        } else {
                            $(".dang").append(templet);
                            $(".dang .list-item").eq(coList.length).find('a').attr({'href':"/page2?id="+data[i].id,"target":"_blank"});
                            $(".dang .list-item").eq(coList.length).find('p').text(data[i].title);
                            scList.push(data[i]);
                        }
                    }
                }else if(data[i].type == '132'){
                    if(coList.length < 4 ){
                        a++;
                        if(a == 1){
                            $(".co").append(firstNews);
                            $(".co .first-news").find('a').attr({'href':"/page3?id="+data[i].id,"target":"_blank"});
                            $(".co .first-news").find('p').text(data[i].title);
                            $(".co .first-news").find('span').text(data[i].synopsis);
                            coList.push(data[i]);
                        }else{
                            $(".co").append(templet);
                            $(".co .list-item").eq(coList.length).find('a').attr({'href':"/page3?id="+data[i].id,"target":"_blank"});
                            $(".co .list-item").eq(coList.length).find('p').text(data[i].title);
                            coList.push(data[i]);
                        }
                    }
                }else if(data[i].type == '133'){
                    if(shixiList.length < 4 ) {
                        c++;
                        if (c == 1) {
                            $(".shixi").append(firstNews);
                            $(".shixi .first-news").find('a').attr({'href':"/page4?id="+data[i].id,"target":"_blank"});
                            $(".shixi .first-news").find('p').text(data[i].title);
                            $(".shixi .first-news").find('span').text(data[i].synopsis);
                            shixiList.push(data[i]);
                        } else {
                            $(".shixi").append(templet);
                            $(".shixi .list-item").eq(coList.length).find('a').attr({'href':"/page4?id="+data[i].id,"target":"_blank"});
                            $(".shixi .list-item").eq(coList.length).find('p').text(data[i].title);
                            shixiList.push(data[i]);
                        }
                    }
                }
            }
        }
    });
});
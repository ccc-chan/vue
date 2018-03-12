$.extend({
    news:function(url,y){
        $.ajax({
            type: "get",
            url:url,
            dataType: 'json',
            success: function (data) {
                var templet = '<div class="list-item"><a><p></p><span></span></a></div>';
                var total,
                    totalPage,//页数
                    show =8, //每页显示show条
                    totalPageList = [],
                    curPage = 0; //当前页
                total = data.length;
                totalPage = total/show;

                for (var i = 0; i < totalPage; i++) {
                    totalPageList.push(i + 1);
                }
                for (var i = 0; i < totalPageList.length-1; i++) {
                    var str = $(".p-page").find('li').eq(1)[0].outerHTML;
                    $(".p-page").find('li').eq(1+i).after(str);
                    $(".p-page").find('li').eq(2+i).find('a').text(i+2);
                }
                if (data.length == 0){
                    $("#none").css('display',"block");
                    $(".m-page,.p-page,.action-news-list >div").css('display',"none");
                }else if(totalPage <= 1 ) {
                    $(".m-page,.p-page").css('display',"none");
                    next(0);
                }else{
                    next(0);
                }


                $(".next").click(function () {
                    if (curPage <= totalPage)
                        next(curPage);
                });

                $(".prev").click(function () {
                    if (curPage >=2 )
                        prev(curPage);
                });

                $(".jump").click(function () {
                    var n = $(this).text();
                    jump(n);
                })

                function jump(n) {
                    curPage = n;
                    $(".p-page").find('li').removeClass("active");
                    $(".p-page").find('li').eq(n).addClass('active');
                    $(".action-news-list").empty();
                    for (var i = 0; i < show; i++) {
                        if ((n-1) * show + i >= data.length) {
                            return false;
                        } else {
                            $(".action-news-list").append(templet);
                            $(".action-news-list>div").eq(i).find('a').attr('href',"/zszt/page"+y+"?id="+data[(n-1) * show + i].id);
                            $(".action-news-list>div").eq(i).find('a').attr('target','_blank');
                            $(".action-news-list>div").eq(i).find('span').eq(0).text(data[(n-1) * show + i].add_time);
                            $(".action-news-list>div").eq(i).find('p').text(data[(n-1) * show + i].title);
                        }
                    }
                }

                function prev(ind) {
                    curPage--;
                    if(curPage == 0){
                        return false;
                    }else{
                        $(".p-page").find('li').removeClass("active");
                        $(".p-page").find('li').eq(ind - 1).addClass('active');

                        $(".action-news-list").empty();
                        for (var i = 0; i < show; i++) {
                            if ((curPage - 1) * show + i < 0) {
                                console.log('break1');
                                return false;
                            } else {
                                $(".action-news-list").append(templet);
                                $(".action-news-list>div").eq(i).find('a').attr('href',"/zszt/page"+y+"?id="+data[(curPage - 1) * show + i].id);
                                $(".action-news-list>div").eq(i).find('a').attr('target','_blank');
                                $(".action-news-list>div").eq(i).find('span').eq(0).text(data[(curPage - 1) * show + i].add_time);
                                $(".action-news-list>div").eq(i).find('p').text(data[(curPage - 1) * show + i].title);
                            }
                        }
                    }
                }

                function next(ind) {
                    $(".p-page").find('li').removeClass("active");
                    $(".p-page").find('li').eq(ind + 1).addClass('active');
                    curPage++;
                    if (curPage > totalPage+1)
                        return false;
                    else{
                        $(".action-news-list").empty();
                        for (var i = 0; i < show; i++) {
                            if (ind * show + i >= data.length) {
                                return false;
                            } else {
                                $(".action-news-list").append(templet);
                                $(".action-news-list>div").eq(i).find('a').attr('href',"/page"+y+"?id="+data[ind * show + i].id);
                                $(".action-news-list>div").eq(i).find('a').attr('target','_blank');
                                $(".action-news-list>div").eq(i).find('span').eq(0).text(data[ind * show + i].add_time);
                                $(".action-news-list>div").eq(i).find('p').text(data[ind * show + i].title);
                            }
                        }
                    }
                }
            }
        });
    }

});
$(function () {
    document.title="学校动态_淮南女子职业学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=hnnz&code=4aea91ea6d780ff8286ffd2e5e838a7e&type=186',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            var templet = '<div><a>\n' +
                '  <div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 imgThumb"><img/></div>\n' +
                '  <div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 news-dialog">\n' +
                '    <a>\n' +
                '    <div class="tl-title"><span class="h4"></span><span class="text-right"></span></div>\n' +
                '    <p class="pc-bg"></p></a>\n' +
                '  </div>\n' +
                '</a></div>';
            var total,
                totalPage,//页数
                show = 8, //每页显示show条
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
                $(".m-page,.p-page,.theme-list >div").css('display',"none");
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
                $(".theme-list").empty();
                for (var i = 0; i < show; i++) {
                    if ((n-1) * show + i >= data.length) {
                        return false;
                    } else {
                        $(".theme-list").append(templet);
                        $(".theme-list>div").eq(i).find('a').attr('href',"/page1?id="+data[(n-1) * show + i].id);
                        $(".theme-list>div").eq(i).find('a').attr('target','_blank');
                        $(".theme-list>div").eq(i).find('img').attr('src',data[(n-1) * show + i].pic_thumb)
                        $(".theme-list>div").eq(i).find('span').eq(0).text(data[(n-1) * show + i].title);
                        $(".theme-list>div").eq(i).find('span').eq(1).text(data[(n-1) * show + i].add_time);
                        $(".theme-list>div").eq(i).find('p').text(data[(n-1) * show + i].synopsis);
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

                    $(".theme-list").empty();
                    for (var i = 0; i < show; i++) {
                        if ((curPage - 1) * show + i < 0) {
                            console.log('break1');
                            return false;
                        } else {
                            $(".theme-list").append(templet);
                            $(".theme-list>div").eq(i).find('a').attr('href',"/page1?id="+data[(curPage - 1) * show + i].id);
                            $(".theme-list>div").eq(i).find('a').attr('target','_blank');
                            $(".theme-list>div").eq(i).find('img').attr('src',data[(curPage - 1) * show + i].pic_thumb)
                            $(".theme-list>div").eq(i).find('span').eq(0).text(data[(curPage - 1) * show + i].title);
                            $(".theme-list>div").eq(i).find('p').text(data[(curPage - 1) * show + i].synopsis);
                            $(".theme-list>div").eq(i).find('span').eq(1).text(data[(curPage - 1) * show + i].add_time);
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
                    $(".theme-list").empty();
                    for (var i = 0; i < show; i++) {
                        if (ind * show + i >= data.length) {
                            return false;
                        } else {
                            $(".theme-list").append(templet);
                            $(".theme-list>div").eq(i).find('a').attr('href',"/page1?id="+data[ind * show + i].id);
                            $(".theme-list>div").eq(i).find('a').attr('target','_blank');
                            $(".theme-list>div").eq(i).find('img').attr('src',data[ind * show + i].pic_thumb)
                            $(".theme-list>div").eq(i).find('span').eq(0).text(data[ind * show + i].title);
                            $(".theme-list>div").eq(i).find('p').text(data[ind * show + i].synopsis);
                            $(".theme-list>div").eq(i).find('span').eq(1).text(data[ind * show + i].add_time);
                        }
                    }
                }
            }
        }
    });
});
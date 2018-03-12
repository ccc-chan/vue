$(function () {
    var templet = '<div class="list-item"><a><i class="iconfont icon-yuanquanicon"></i><p></p><span></span></a></div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/article?token=xszy&code=fefb70fa72b81bef535b515fae46fde8',
        dataType: 'json',
        success: function (data) {
            var enrollmentList = [],polickList = [];
            for (var i =0;i<data.length;i++){
                if(data[i].type == '126'){
                    if(enrollmentList.length < 4 ){
                        $(".enrollmentList").append(templet);
                        $(".enrollmentList .list-item").eq(enrollmentList.length).find('a').attr('href',"/news_page1?id="+data[i].id);
                        $(".enrollmentList .list-item").eq(enrollmentList.length).find('p').text(data[i].title);
                        $(".enrollmentList .list-item").eq(enrollmentList.length).find('span').text(data[i].add_time);
                        enrollmentList.push(data[i]);
                    }
                }else if(data[i].type == '127'){
                    if(polickList.length < 4 ){
                        $(".polickList").append(templet);
                        $(".polickList .list-item").eq(polickList.length).find('a').attr('href',"/news_page2?id="+data[i].id);
                        $(".polickList .list-item").eq(polickList.length).find('p').text(data[i].title);
                        $(".polickList .list-item").eq(polickList.length).find('span').text(data[i].add_time);
                        polickList.push(data[i]);
                    }
                }
            }
        }
    });

    function validate(str){
        var reg= /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(reg.test(str) === false) {
            $('#identity').css('display','block');
            $(".btn").attr('disabled','disabled');
        }else{
            $('#identity').css('display','none');
            $("#btn").removeAttr("disabled");
        }
    }

    $(".btn").click(function () {
        event.preventDefault();
        var identity = $(".identity").val();
        validate(identity);
    });
});
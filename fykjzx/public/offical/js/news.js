$(function () {
    var id = GetQueryString('id');

    //获取url参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/artdetail?token=fykj&code=c5e6e0dfc38ca58a45dc1c0b770188a6&id='+id,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            document.title = data.title+"_阜阳科技职业学院互联网学院";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
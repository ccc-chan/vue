$(function () {
    var id = GetQueryString('id');
    console.log(id)

    //获取url参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/artdetail?token=dsqs&code=7eeb23e92ad80d4b62a73d92fd2fa2b7&id='+id,
        dataType: 'json',
        success: function (data) {
            document.title = data.title+"_六盘水市钟山区职业技术学校互联网学院招生网";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
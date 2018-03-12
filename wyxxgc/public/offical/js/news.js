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
        url: 'http://api.7171.la/api/artdetail?token=wyxx&code=2d7644fcb84da3e711b11823ab3ed385&id='+id,
        dataType: 'json',
        success: function (data) {
            document.title = data.title+"_涡阳信息工程学校招生专题网";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
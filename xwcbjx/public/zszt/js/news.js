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
        url: 'http://api.7171.la/api/artdetail?token=xwcb&code=b3ebb144a7125704b9a9c0a7ae007039&id='+id,
        dataType: 'json',
        success: function (data) {
            document.title = data.title+"_广西新闻出版技工学校招生专题网";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
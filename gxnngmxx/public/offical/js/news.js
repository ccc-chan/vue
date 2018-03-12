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
        url: 'http://api.7171.la/api/artdetail?token=nngmzyjs&code=29bba53d88f45fb95ea3c9a54a31f6ac&id='+id,
        dataType: 'json',
        success: function (data) {
            document.title = data.title+"_南宁市工贸职业技术学校特色专业网";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
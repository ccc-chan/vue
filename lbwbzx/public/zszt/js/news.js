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
        url: 'http://api.7171.la/api/artdetail?token=lbwb&code=55969e8be9fa1ceeceff449e7119d982&id='+id,
        dataType: 'json',
        success: function (data) {
            document.title = data.title+"_灵璧文博职业学校招生专题网";
            $(".news .h3").text(data.title);
            $(".news-info span").text(data.add_time);
            $(".page").html(data.content);
        }
    });
});
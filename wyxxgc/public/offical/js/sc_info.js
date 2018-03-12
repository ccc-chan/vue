$(function(){
    document.title="学院概况_涡阳信息工程学校招生专题网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=wyxx&code=2d7644fcb84da3e711b11823ab3ed385',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});
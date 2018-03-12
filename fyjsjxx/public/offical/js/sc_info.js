$(function(){
    document.title="学校概况_阜阳计算机学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=fyjsj&code=ce93f903de06aac3cd813f16c1fe4049',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});
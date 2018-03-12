$(function(){
    document.title="学校概况_习水县中等职业学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=xszy&code=fefb70fa72b81bef535b515fae46fde8',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});